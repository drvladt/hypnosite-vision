<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Patient documents upload one file per request to /api/public/upload-document, which streams them into the linked Google Drive (per-Patient-ID folder) and never stores them — keeps medical files out of this app.
- Patient documents go site route /api/public/upload-document -> own Cloud Function uploadDocument -> Google Drive (no Lovable gateway), so uploads keep working independent of Lovable.
