import { createFileRoute } from "@tanstack/react-router";

/**
 * Receives ONE patient document (raw body) and stores it in the doctor's Google Drive,
 * inside a per-case folder named after the Patient ID. Files are not kept by this app.
 */
const GATEWAY = "https://connector-gateway.lovable.dev/google_drive";
const ROOT_FOLDER = "Dr Vlad — Patient documents";
const MAX_BYTES = 50 * 1024 * 1024;
const PATIENT_ID = /^DV\d{6,}$/;
const ALLOWED = /\.(pdf|jpe?g|png|heic|heif|webp|docx?|txt|rtf)$/i;
const FOLDER_MIME = "application/vnd.google-apps.folder";

function headers(extra: Record<string, string> = {}) {
  return {
    Authorization: `Bearer ${process.env["LOVABLE_API_KEY"]}`,
    "X-Connection-Api-Key": process.env["GOOGLE_DRIVE_API_KEY"]!,
    ...extra,
  };
}

async function drive(path: string, init: RequestInit = {}) {
  const res = await fetch(`${GATEWAY}${path}`, init);
  if (!res.ok) {
    const body = await res.text();
    console.error(`Drive request failed [${res.status}]: ${body}`);
    throw new Error(`Drive ${res.status}`);
  }
  return res.json() as Promise<{ id: string; files?: { id: string }[] }>;
}

async function ensureFolder(name: string, parent?: string) {
  const q = [
    `name='${name.replace(/'/g, "\\'")}'`,
    `mimeType='${FOLDER_MIME}'`,
    "trashed=false",
    parent ? `'${parent}' in parents` : "'root' in parents",
  ].join(" and ");
  const found = await drive(`/drive/v3/files?fields=files(id)&q=${encodeURIComponent(q)}`, {
    headers: headers(),
  });
  if (found.files?.[0]) return found.files[0].id;
  const created = await drive(`/drive/v3/files?fields=id`, {
    method: "POST",
    headers: headers({ "Content-Type": "application/json" }),
    body: JSON.stringify({ name, mimeType: FOLDER_MIME, ...(parent ? { parents: [parent] } : {}) }),
  });
  return created.id;
}

export const Route = createFileRoute("/api/public/upload-document")({
  server: {
    handlers: {
      PUT: async ({ request }) => {
        if (!process.env["LOVABLE_API_KEY"] || !process.env["GOOGLE_DRIVE_API_KEY"]) {
          return Response.json({ error: "not_configured" }, { status: 503 });
        }
        const code = (request.headers.get("x-case-code") ?? "").trim().toUpperCase();
        let name = "";
        try {
          name = decodeURIComponent(request.headers.get("x-file-name") ?? "").slice(0, 200);
        } catch {
          name = "";
        }
        const type = (request.headers.get("content-type") ?? "application/octet-stream").slice(0, 120);
        const length = Number(request.headers.get("content-length") ?? "0");

        if (!PATIENT_ID.test(code)) return Response.json({ error: "bad_code" }, { status: 400 });
        if (!name || !ALLOWED.test(name)) return Response.json({ error: "bad_type" }, { status: 415 });
        if (length > MAX_BYTES) return Response.json({ error: "too_large" }, { status: 413 });

        const data = new Uint8Array(await request.arrayBuffer());
        if (data.byteLength === 0) return Response.json({ error: "empty" }, { status: 400 });
        if (data.byteLength > MAX_BYTES) return Response.json({ error: "too_large" }, { status: 413 });

        try {
          const root = await ensureFolder(ROOT_FOLDER);
          const folder = await ensureFolder(code, root);

          const boundary = `dv${crypto.randomUUID()}`;
          const enc = new TextEncoder();
          const head = enc.encode(
            `--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n` +
              JSON.stringify({ name, parents: [folder] }) +
              `\r\n--${boundary}\r\nContent-Type: ${type}\r\n\r\n`,
          );
          const tail = enc.encode(`\r\n--${boundary}--`);
          const body = new Uint8Array(head.length + data.length + tail.length);
          body.set(head, 0);
          body.set(data, head.length);
          body.set(tail, head.length + data.length);

          await drive(`/upload/drive/v3/files?uploadType=multipart&fields=id`, {
            method: "POST",
            headers: headers({ "Content-Type": `multipart/related; boundary=${boundary}` }),
            body,
          });
          return Response.json({ ok: true });
        } catch {
          return Response.json({ error: "upload_failed" }, { status: 502 });
        }
      },
    },
  },
});
