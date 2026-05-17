# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Vite dev server with HMR
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the built `dist/`
- `npm run lint` — ESLint over the repo (flat config in `eslint.config.js`)

There is no test setup in this project.

## Stack

React 19 + Vite 8, Tailwind CSS v4 via `@tailwindcss/vite` (no `tailwind.config.js` — configure inside CSS), React Router 7, Framer Motion. JS/JSX only (no TypeScript). Deployed on Vercel; `vercel.json` rewrites all paths to `/index.html` for SPA routing.

## Architecture

Single-page marketing site for GyanMai EdTech. Entry: [src/main.jsx](src/main.jsx) → [src/App.jsx](src/App.jsx).

`App.jsx` is the single source of truth for routing and wraps everything in `ThemeProvider` + `BrowserRouter`. The frame (`Navbar`, `ContextualSidebar`, `Footer`, `CustomCursor`, `ScrollToTop`) lives in `App.jsx` and persists across routes — page components render between `Navbar` and `Footer` only. `ScrollToTop` handles hash-anchor scroll with an 80ms delay so target elements have time to mount.

### Page taxonomy (three parallel families)

All three families share visual language but have distinct templates:

1. **Products** — `/products/<slug>` in [src/pages/products/](src/pages/products/), one per product (GyanBank, GyanScan, GyanAnalytx, GyanGuru, GyanTest). Built on [src/components/shared/ProductTemplate.jsx](src/components/shared/ProductTemplate.jsx).
2. **Stakeholders** — `/<role>` (students, teachers, parents, school-management, policy-makers) in [src/pages/stakeholders/](src/pages/stakeholders/). Built on [src/components/shared/StakeholderTemplate.jsx](src/components/shared/StakeholderTemplate.jsx).
3. **Top-level** — Home, Platform, About, Contact, Testimonials in [src/pages/](src/pages/).

When adding a product or stakeholder page: add the route in `App.jsx`, create the page file using the corresponding template, and (if applicable) add the entry to the matching data file under [src/data/](src/data/).

### Data layer

Content lives as plain JS modules in [src/data/](src/data/) — `products.js`, `stakeholders.js`, `schools.js`, `stats.js`, `acatFramework.js`. The **ACAT cycle** (Assess → Comprehend → Act → Transform) is the central conceptual framework tying the five products together; `acatFramework.js` and the shared `AcatChain` / `AcatFlow` components encode it. Edit data files rather than hardcoding copy into components.

### Components

- `components/home/` — sections used only on the Home page
- `components/layout/` — `Navbar`, `Footer`, `ContextualSidebar` (persistent chrome)
- `components/shared/` — reusable across pages (`ProductTemplate`, `StakeholderTemplate`, `AcatChain`, `ExpandableFeature`)
- `components/ui/` — generic primitives (`CustomCursor`, `VideoBackground`)
- `context/ThemeContext.jsx` — global theme. Note: `index.html` force-sets `data-theme="light"` on `<html>` before React mounts, overriding OS dark mode.

### Assets

Static assets in [public/](public/) (served at root) and bundled assets in [src/assets/](src/assets/) (`images/`, `logos/`, `videos/`). Import from `src/assets/` when you need Vite hashing; use `public/` for files referenced by stable URL.
