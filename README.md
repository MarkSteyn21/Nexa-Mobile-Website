# Nexa Mobile — Marketing Website

Standalone static marketing website for **Nexa Mobile**, a prepaid mobile service provider. This project is **not** connected to Vision Project, Enigy, Supabase, or any other monorepo infrastructure.

## What this is

A single-page marketing site with sections matching the Nexa Mobile design:

- Hero with HUGE App download CTAs
- Why choose Nexa
- Smart App features
- Best rates
- Bundles (Data, Voice, SMS, WhatsApp tabs)
- Prepaid plans
- Build your own plan (interactive price calculator)
- How it works
- Footer with links

## Tech stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4
- Lucide React (icons)

## Run locally

1. Open a terminal in this folder (`C:\nexa-mobile-web`).
2. Install dependencies (first time only):

   ```powershell
   pnpm install
   ```

3. Start the dev server:

   ```powershell
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### If `pnpm dev` fails with build-script or lockfile errors

This project includes a `pnpm-workspace.yaml` that allows required package builds and avoids pnpm security blocks on brand-new Next.js releases. If you still see errors, run:

```powershell
pnpm install
pnpm dev
```

Or as a fallback:

```powershell
npx next dev
```

## Build for production

```powershell
pnpm build
pnpm start
```

## Deploy to Vercel

1. Push this folder to its **own** GitHub repository (not Vision-Project).
2. In [Vercel](https://vercel.com), click **Add New Project**.
3. Import the `nexa-mobile-web` repo.
4. Leave build settings as default (Next.js auto-detected).
5. Click **Deploy**.

No environment variables are required for the static marketing site.

## Customise content

| What to change | File |
|----------------|------|
| Plans, bundles, rates | `src/lib/data.ts` |
| HUGE App download link | `HUGE_APP_URL` in `src/lib/data.ts` |
| Colours / theme | `src/app/globals.css` |
| Page sections | `src/components/` |

## Next steps (optional)

- Replace phone mockup placeholders with real app screenshots
- Add real HUGE App store links (Apple / Google Play)
- Add a contact form (e.g. Resend or Formspree)
- Connect your domain in Vercel project settings

## Project location

```
C:\nexa-mobile-web
```

Completely separate from `C:\Vision-Project`.
