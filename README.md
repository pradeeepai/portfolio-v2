# portfolio-v2

Personal portfolio of Pradeep, Senior DevOps Engineer. The site is a static [Astro](https://astro.build) page. GitHub Actions builds it and deploys it to GitHub Pages on each push to `main`.

## Edit the content

All text, links, and certifications are in `src/data/profile.ts`. The components in `src/components/` only render that data.

- Contact links: set `email`, `upwork`, or `linkedin` in `contact`. Empty values are not shown.
- Certifications: set `verifyUrl` to show a "Verify on Credly" link.

## Run locally

Requirements: Node.js 22.12 or later.

```sh
npm ci
npm run dev       # development server at http://localhost:4321/portfolio-v2/
npm run build     # static output in dist/
npm run preview   # serve dist/ locally
```

## Deploy

The workflow `.github/workflows/deploy.yml` runs on each push to `main`:

1. Install dependencies with `npm ci`.
2. Build the site. `actions/configure-pages` supplies the site URL and base path.
3. Upload `dist/` and deploy it to GitHub Pages.

One-time setup: open **Settings → Pages** in the repository and set **Source** to **GitHub Actions**.

The default URL is `https://pradeeepai.github.io/portfolio-v2/`. For a custom domain, add it in **Settings → Pages**. The workflow reads the new base path automatically.

## Structure

```
src/
  data/profile.ts      site content
  layouts/Base.astro   HTML head, fonts, global styles
  components/          one component per page section
  styles/global.css    color and type tokens, section layout
public/favicon.svg
```
