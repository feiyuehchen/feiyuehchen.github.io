# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a personal academic portfolio website for Fei-Yueh Chen (陳飛岳), deployed as a GitHub Pages static site at `feiyuehchen.github.io`. There is no build system — all files are served directly.

## Development

```bash
npm run dev      # dev server at http://localhost:4321 (hot reload)
npm run build    # build to dist/
npm run preview  # serve dist/ locally to verify before deploy
```

**Node requirement**: use `~/.nvm/versions/node/v25.3.0/bin/npm` — the system `npm` (from anaconda at v3.10.10) is too old. Either run with the full path or activate nvm first.

Deployment is automatic via GitHub Actions (`.github/workflows/deploy.yml`) on every push to `master`. In GitHub repo settings, Pages source must be set to **GitHub Actions** (not "Deploy from a branch").

## Architecture

**Framework**: Astro 4 + Tailwind CSS 3. Outputs pure static HTML to `dist/`.

### Pages (`src/pages/`)
- `index.astro` — Hero with ASCII name art, terminal bio, NodeGraph SVG
- `cv.astro` — Full structured CV (inline HTML, not markdown)
- `research.astro` — Publications from content collection, grouped by topic
- `project.astro` — Vertical tab animation showcase (full-screen, no shell nav)
- `arts.astro` — Tab toggle: Photography (masonry grid + lightbox) | Music (link cards)
- `contact.astro` — Terminal-style contact info + haiku

### Layouts (`src/layouts/`)
- `BaseLayout.astro` — `<html>`, `<head>`, GSAP CDN (loaded sync via `is:inline`), GA tag
- `PageLayout.astro` — Wraps BaseLayout + `SiteNav.astro`

### Components (`src/components/`)
- `layout/SiteNav.astro` — Fixed top nav bar, bilingual links
- `home/HeroAscii.astro`, `TerminalBio.astro` — Home page hero elements
- `project/VerticalTabSection.astro` — Awwwards-style expand animation; takes `TabItem[]` prop
- `research/PublicationCard.astro` — Single paper card with venue badge + award chip
- `arts/PhotoGrid.astro` — CSS columns masonry grid with JS lightbox
- `ui/DotGrid.astro`, `ScanLine.astro`, `NodeGraph.astro` — Decorative background elements

### Content Collections (`src/content/`)
- `research/*.md` — One file per paper; schema in `config.ts`
- `projects/*.md` — One file per project tab entry

### Styles (`src/styles/`)
- `global.css` — `@font-face`, CSS custom properties (jade/amber/obsidian palette), nav/terminal/badge utilities
- `vertical-tabs.css` — Viewport-scaled rem system (`font-size: calc(100vw/1920*10)`) for `.tab-app`; do NOT mix with Tailwind rem outside `.tab-app`

### Assets (`public/`)
- `fonts/` — Self-hosted: GenYoMin2TW-R, TaipeiSansTC (3 weights), YakuHanJP-Regular, Redhat Medium
- `img/bg/`, `img/projects/`, `img/photos/` — Organized images
- `cv/cv_latest.pdf` — Always-current CV PDF (replace file to update all links)

### Key design details
- GSAP must be in `<head>` via `is:inline` before component `<script>` blocks run; declare `declare const gsap: any` in TypeScript components that use it
- `VerticalTabSection.astro` scopes its viewport-scaled rem to `.tab-app` to avoid colliding with Tailwind's `1rem = 16px`
- To update CV: replace `public/cv/cv_latest.pdf` — no link changes needed
- To add a paper: create `src/content/research/<slug>.md` matching the schema in `src/content/config.ts`
- To add a project tab: create `src/content/projects/<slug>.md` with `order` field controlling tab position
