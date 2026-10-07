# dbwiz-site

The landing page for [DBWiz](https://github.com/Ibnu-Afdel/dbWiz), live at
<https://dbwiz.ibnuafdel.com>.

Astro 7 (static output) · Tailwind CSS v4 · Geist · Phosphor icons, deployed to
Cloudflare Workers as static assets.

## Develop

```bash
pnpm install
pnpm dev          # http://localhost:4321
pnpm build        # static site in dist/
pnpm preview      # serve dist/ locally
```

## Edit the copy

Every section of the page is a Markdown file in `src/content/sections/`, with its
text in the frontmatter. The schema in `src/content.config.ts` checks each one,
so a typo fails the build instead of rendering a blank block. Wrap commands in
backticks to show them as code.

House style: no em or en dashes in page text, one accent colour, hero subtitle
under 20 words.

## Screenshots

`src/assets/shots/*.png` are real DBWiz screens, captured from a terminal with
demo data (a SQLite shop database and a stand-in `docker ps`, so no real
container names appear) and rendered with [freeze](https://github.com/charmbracelet/freeze).
Astro turns them into responsive AVIF/WebP at build time. `public/og.png` is the
1200×630 link preview.

## Deploy

`wrangler.jsonc` serves `dist/` from the `dbwiz-site` Worker on the
`dbwiz.ibnuafdel.com` custom domain.

```bash
pnpm deploy       # build + wrangler deploy (needs `wrangler login`)
```

Pushes to `main` deploy automatically once the repo is connected in Cloudflare
(Workers & Pages → dbwiz-site → Settings → Builds), with build command
`pnpm build` and deploy command `npx wrangler deploy`.
