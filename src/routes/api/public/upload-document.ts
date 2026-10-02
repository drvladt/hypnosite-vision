import { createFileRoute } from "@tanstack/react-router";

/**
 * Forwards ONE patient document to the doctor's own Google Cloud Function (uploadDocument),
 * which stores it in Google Drive. No Lovable gateway is involved; files are not kept here.
 */
const DEFAULT_UPLOAD_URL =
  "https://europe-west1-dr-vlad-website-production.cloudfunctions.net/uploadDocument";
const MAX_BYTES = 30 * 1024 * 1024;
const PATIENT_ID = /^DV\d{6,}$/;
const ALLOWED_EXT = /\.(pdf|jpe?g|png|heic|heif)$/i;
const ALLOWED_TYPES = new Set([
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/heic",
  "image/heif",
]);

/** Magic-byte check so a renamed file cannot pass as a safe type. */
const looksValid = (data: Uint8Array, ext: string): boolean => {
  const head = Array.from(data.slice(0, 12));
  const startsWith = (bytes: number[]) => bytes.every((b, i) => head[i] === b);
  if (ext === "pdf") return startsWith([0x25, 0x50, 0x44, 0x46]); // %PDF
  if (ext === "jpg" || ext === "jpeg") return startsWith([0xff, 0xd8, 0xff]);
  if (ext === "png") return startsWith([0x89, 0x50, 0x4e, 0x47]);
  if (ext === "heic" || ext === "heif")
    return head[4] === 0x66 && head[5] === 0x74 && head[6] === 0x79 && head[7] === 0x70; // ftyp
  return false;
};

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
