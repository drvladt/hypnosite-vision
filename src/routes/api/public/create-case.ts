import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const requestSchema = z
  .object({
    locale: z.enum(["ru", "en", "fr"]),
    consent_version: z.literal("1.0"),
    privacy_policy_version: z.literal("1.0"),
    terms_version: z.literal("1.0"),
    consents: z
      .object({
        privacy_policy_reviewed: z.literal(true),
        health_data_processing: z.literal(true),
        format_boundaries: z.literal(true),
      })
      .strict(),
  })
  .strict();

const CASE_API_URL =
  "https://europe-west1-dr-vlad-website-production.cloudfunctions.net/createCase";

export const Route = createFileRoute("/api/public/create-case")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let rawBody: unknown;
        try {
          rawBody = await request.json();
        } catch {
          return Response.json({ error: "invalid_request" }, { status: 400 });
        }

        const parsed = requestSchema.safeParse(rawBody);
        if (!parsed.success) {
          return Response.json({ error: "invalid_request" }, { status: 400 });
        }

        try {
          const upstream = await fetch(CASE_API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify(parsed.data),
          });
          const responseBody = await upstream.text();

          return new Response(responseBody, {
            status: upstream.status,
            headers: {
              "Content-Type": upstream.headers.get("content-type") ?? "application/json",
              "Cache-Control": "no-store",
              "X-Content-Type-Options": "nosniff",
            },
          });
        } catch {
          return Response.json(
            { error: "case_service_unavailable" },
            { status: 502, headers: { "Cache-Control": "no-store" } },
          );
        }
      },
    },
  },
});