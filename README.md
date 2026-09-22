# HypnoSite Vision

Проанализируй, пожалуйста, все документы, которые я тебе отправил. Это документы, которые я составлял до этого для создания своего сайта, для привлечения клиентов, для гипнотерапии, для моей практики. Смотри, я в принципе уже подготовил. Проанализируй все документы. Я хочу создать сайт современный, с богатым визуалом, чтобы были современные анимации, но в то же время чтобы они не были излишними, чтобы сайт не превращался в развлекательный сайт. Поэтому проанализируй, подумай, как мы можем это сделать. Там есть документ «Воронка.ru». Первая, главная страница сайта будет иметь структуру как в этой воронке. Воронка будет являться главной страницей сайта. Потом уже будут подразделения про биографию, обо мне, про исследования и так далее. Там всё есть в документах. Проанализируй, посмотри, скажи мне, пожалуйста, что нам ещё не хватает для начала работы. Как-то так.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/dcfd7479-94d5-4826-83e4-fac84618803d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Production environment

- `VITE_CASE_API_URL` — deployed case-code API endpoint.
- `VITE_SITE_URL=https://drvladt.com` is committed in `.env.production` because the official
  public domain is not a secret. It fixes canonical URLs, Open Graph, `robots.txt`, and
  `sitemap.xml` to the production site even when a preview domain serves the build.
- `SITE_URL` may override the committed origin at runtime when the hosting platform provides it.
- Configure `https://www.drvladt.com/*` to permanently redirect to the matching path on
  `https://drvladt.com/*` when the custom domain is connected.
