import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

// Server-side duplicate of the browser Meta Pixel PageView (Conversions API).
// Never accepts or forwards medical data: only a public page path + event id.
const PIXEL_ID = "1774467930473821";
const SENSITIVE = /^\/(ru|en|fr)\/(konsultatsiya|consultation|anketa|intake|questionnaire|dokumenty|documents)(\/|$)/;
const ALLOWED_HOSTS = new Set(["drvladt.com", "www.drvladt.com", "hypnosis-funnel-visuals.lovable.app"]);

const Body = z.object({
  eventId: z.string().regex(/^[a-zA-Z0-9-]{8,64}$/),
  path: z.string().max(200).regex(/^\/[a-zA-Z0-9\-/_]*$/),
  fbp: z.string().max(200).optional(),
  fbc: z.string().max(300).optional(),
});

export const Route = createFileRoute("/api/public/meta-event")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const token = process.env["META_CAPI_ACCESS_TOKEN"];
          if (!token) return new Response(null, { status: 204 });
          const origin = request.headers.get("origin");
          if (!origin || !ALLOWED_HOSTS.has(new URL(origin).hostname)) {
            return new Response(null, { status: 403 });
          }
          const parsed = Body.safeParse(await request.json());
          if (!parsed.success || SENSITIVE.test(parsed.data.path)) {
            return new Response(null, { status: 204 });
          }
          const { eventId, path, fbp, fbc } = parsed.data;
          const ip = request.headers.get("cf-connecting-ip") ?? undefined;
          const ua = request.headers.get("user-agent") ?? undefined;
          const res = await fetch(
            `https://graph.facebook.com/v21.0/${PIXEL_ID}/events?access_token=${encodeURIComponent(token)}`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                data: [
                  {
                    event_name: "PageView",
                    event_time: Math.floor(Date.now() / 1000),
                    event_id: eventId,
                    action_source: "website",
                    event_source_url: `https://drvladt.com${path}`,
                    user_data: {
                      client_ip_address: ip,
                      client_user_agent: ua,
                      ...(fbp ? { fbp } : {}),
                      ...(fbc ? { fbc } : {}),
                    },
                  },
                ],
              }),
            },
          );
          if (!res.ok) console.error("Meta CAPI status", res.status);
        } catch (e) {
          console.error("Meta CAPI failed", e instanceof Error ? e.message : "unknown");
        }
        return new Response(null, { status: 204 });
      },
    },
  },
});
