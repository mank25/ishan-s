# Eventiify

The Eventiify marketing site — built with Next.js and a Sanity Studio CMS embedded
at `/studio` for managing blog posts, testimonials, the photo gallery, services, and
site settings.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Until Sanity is connected (see
below), every CMS-backed section — services, testimonials, gallery, journal — renders
sensible placeholder content instead of breaking, so the site always looks finished.

## Connecting the CMS (Sanity)

The Studio code is already built (`sanity.config.ts`, schemas in
`src/sanity/schemaTypes/`). You just need a free Sanity project:

1. **Create a Sanity account and project.** In the terminal:
   ```bash
   npx sanity login
   npx sanity init --env
   ```
   Choose "Create new project," name it "Eventiify," and pick the `production`
   dataset. When it asks to output config, let it write `.env.local` for you (or
   copy `.env.local.example` to `.env.local` and fill in the values it prints).

2. **Restart the dev server** (`npm run dev`) so the new env vars load.

3. **Open the Studio** at [http://localhost:3000/studio](http://localhost:3000/studio)
   and sign in with the same Sanity account. You'll see five content types:
   - **Blog Post** — title, cover image, category, body (rich text + images)
   - **Testimonial** — client name, quote, event type, rating, "featured" toggle
     for which ones show on the homepage
   - **Gallery Image** — photo, category (Weddings / Corporate / Catering & Décor /
     Birthdays & Socials), display order
   - **Service** — the four service cards on the homepage
   - **Site Settings** — phone, email, address, social links

4. **Deploy the Studio** so it's reachable without running the dev server locally:
   ```bash
   npx sanity deploy
   ```
   This gives you a hosted editor at `https://eventiify.sanity.studio` in addition
   to the one embedded in the site at `/studio` — use whichever is more convenient.

Content added in the Studio appears on the live site automatically (pages revalidate
every 60 seconds) — no redeploy needed for content changes.

## Deploying the site

Push this repo to GitHub and import it on [Vercel](https://vercel.com/new). Add the
same three env vars from `.env.local` in the Vercel project settings
(`NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`,
`NEXT_PUBLIC_SANITY_API_VERSION`), then deploy.

## Brand

- **Colors**: deep ledger green (`--color-ink`), gold leaf (`--color-gold`), warm
  parchment (`--color-parchment`), ember rust (`--color-rust`) — all defined in
  `src/app/globals.css`.
- **Type**: Fraunces (display), Inter (body), Space Grotesk (labels/eyebrows) —
  loaded in `src/app/layout.tsx`.
- **Logo**: `public/brand/eventiify-logo.jpeg`. The circular "seal" mark used in the
  hero, footer, and contact page is a hand-built SVG component
  (`src/components/Seal.tsx`), not an image, so it stays crisp at any size.
