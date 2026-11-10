# Higgsfield (AI video creator) — promo site

Promo site for the Higgsfield AI video creator for iPhone, operated by Felix Lindner (brand used under authorization). React 18 + TypeScript + Vite 6 + React Router 7, plain CSS in `src/styles/index.css`.

## Run

```bash
pnpm install
pnpm dev      # local preview
pnpm build    # production build into dist/
```

## Deploy

Push to `main` → GitHub Actions (`.github/workflows/deploy.yml`) builds and publishes to GitHub Pages.
In the repo: Settings → Pages → Source: **GitHub Actions** (must be set before the first run succeeds).

### `base` and custom domain — read before touching

- Custom domain (now): `higgsfield.rest` — `base: "/"` in `vite.config.ts` **and** `public/CNAME` with the bare domain.
- Without a domain: `base: "/higg2-rf/"` and no `public/CNAME` (site at `https://norin-web.github.io/higg2-rf/`). Change both in the same commit, or every asset 404s and the page is blank.

All image paths go through `img()` (`src/app/utils/img.ts`) so they follow `base`.

## Content

- `src/app/content/site.ts` — every brand / app fact (brand, operator, email, App Store ID, features, FAQ, specs). `PLACEHOLDER` values are marked.
- Source documents for legal texts: `../File/legal/*.docx`.
- `src/app/content/legal.ts` — Privacy and Terms. Paste the owner's text **verbatim**; only markup changes (`## ` headings, `- ` lists).

## Motion rule

Reveals use CSS transitions driven by `useReveal` (`src/app/utils/useReveal.ts`). Content must never depend on an animation finishing: fallbacks are gated on real geometry. No smooth-scroll library; the header never hides.
