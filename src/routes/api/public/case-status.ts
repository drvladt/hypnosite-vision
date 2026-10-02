import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const schema = z.object({ case_id: z.string().regex(/^DV\d{6,}$/) }).strict();

const STATUS_URL =
  "https://europe-west1-dr-vlad-website-production.cloudfunctions.net/getCaseStatus";

export const Route = createFileRoute("/api/public/case-status")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const headers = { "Cache-Control": "no-store" };
        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return Response.json({ error: "invalid_request" }, { status: 400, headers });
        }
        const parsed = schema.safeParse(body);
        if (!parsed.success) return Response.json({ error: "invalid_request" }, { status: 400, headers });
        try {
          const upstream = await fetch(STATUS_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(parsed.data),
          });
          if (!upstream.ok) return Response.json({ status: "unavailable" }, { headers });
          const data = (await upstream.json()) as { status?: string };
          const status = ["pending", "submitted", "not_found"].includes(data.status ?? "")
            ? data.status
            : "pending";
          return Response.json({ status }, { headers });
        } catch {
          return Response.json({ status: "unavailable" }, { headers });
        }
      },
    },
  },
});
