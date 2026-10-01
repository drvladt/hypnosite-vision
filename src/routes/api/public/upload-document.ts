import { createFileRoute } from "@tanstack/react-router";

/**
 * Forwards ONE patient document to the doctor's own Google Cloud Function (uploadDocument),
 * which stores it in Google Drive. No Lovable gateway is involved; files are not kept here.
 */
const DEFAULT_UPLOAD_URL =
  "https://europe-west1-dr-vlad-website-production.cloudfunctions.net/uploadDocument";
const MAX_BYTES = 30 * 1024 * 1024;
const PATIENT_ID = /^DV\d{6,}$/;

export const Route = createFileRoute("/api/public/upload-document")({
  server: {
    handlers: {
      PUT: async ({ request }) => {
        const target = process.env["UPLOAD_API_URL"] || DEFAULT_UPLOAD_URL;
        const code = (request.headers.get("x-case-code") ?? "").trim().toUpperCase();
        const name = request.headers.get("x-file-name") ?? "";
        const type = (request.headers.get("content-type") ?? "application/octet-stream").slice(0, 120);
        const length = Number(request.headers.get("content-length") ?? "0");

        if (!PATIENT_ID.test(code)) return Response.json({ error: "bad_code" }, { status: 400 });
        if (!name) return Response.json({ error: "bad_type" }, { status: 415 });
        if (length > MAX_BYTES) return Response.json({ error: "too_large" }, { status: 413 });

        const data = await request.arrayBuffer();
        if (data.byteLength === 0) return Response.json({ error: "empty" }, { status: 400 });
        if (data.byteLength > MAX_BYTES) return Response.json({ error: "too_large" }, { status: 413 });

        try {
          const upstream = await fetch(target, {
            method: "PUT",
            headers: { "Content-Type": type, "x-case-code": code, "x-file-name": name },
            body: data,
          });
          const body = await upstream.text();
          if (!upstream.ok) console.error(`uploadDocument failed [${upstream.status}]: ${body.slice(0, 300)}`);
          return new Response(body, {
            status: upstream.status,
            headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
          });
        } catch {
          return Response.json({ error: "upload_failed" }, { status: 502 });
        }
      },
    },
  },
});
