# CLAUDE.md — Lloyd Vheremu Portfolio

Single source of truth for Claude Code on this project. Read before touching any file.

---

## Project Overview

**What:** Personal portfolio website for Lloyd B. Vheremu — Software Developer (Python / Odoo / full stack).
**Goal:** Land a remote software developer job. The site is a silent recruiter: professional, fast, memorable, easy to scan.
**Audience:** Remote-first tech recruiters and hiring managers.
**Source of truth for content:** the CV at `~/Documents/Files/Career/LloydVheremuResume.docx` / `.pdf`.
Never add claims (metrics, versions, tools, achievements) that are not in the CV or stated by Lloyd.
Earlier site versions had invented numbers (e.g. "50+ deployments", "100% compliance", latency gains) that were
removed for this reason. The CV says **5+ concurrent client environments**.

---

## Owner Info

| Field    | Value                                    |
|----------|------------------------------------------|
| Name     | Lloyd B. Vheremu                         |
| Title    | Software Developer (Odoo / Python)       |
| Email    | lloydblessin@outlook.com                 |
| Location | Zimbabwe (open to remote globally) — town and phone deliberately not published |
| GitHub   | https://github.com/lloydvheremu          |
| LinkedIn | https://www.linkedin.com/in/lloydvheremu |
| Chess    | knightking_zw (Chess.com)                |

---

## Tech Stack (actual)

The site is **plain static HTML/CSS/JS** — not Next.js.

| Layer      | Choice                                                                  |
|------------|-------------------------------------------------------------------------|
| Pages      | Hand-written HTML at repo root (`index`, `about`, `experience`, `projects`, `github`, `contact`) |
| Styling    | `css/global.css`, `css/components.css`, `css/effects.css` (CSS variables) |
| Scripts    | Vanilla JS in `js/` (nav, effects, GitHub/Chess API helpers)             |
| Build tool | Vite + React/Tailwind deps exist in `package.json` (AI Studio leftover) but are **not needed to deploy** |
| Analytics  | Vercel Web Analytics (`@vercel/analytics`)                               |
| Hosting    | GitHub Pages — `.github/workflows/static.yml` uploads the repo root (`path: '.'`) on push to `main` |

Pages use absolute asset paths (`/css/global.css`, `/assets/...`), so preview from the repo root with a static server,
not via `file://`.

---

## Design Direction

**Theme:** Light, warm "flat-lay photographic desk" — cream paper background, terracotta accent, serif headings,
photographic desk objects (chess knight, fountain pen, book, vintage MP3 player) from `assets/` and `public/assets/`.
Hand-drawn underline/circle marginalia accents.

Tokens live in `css/global.css` (`--bg-page #FAF7F2`, `--accent #B85324`, `--font-serif`, `--font-sans`, …).
Use the variables; don't hard-code colours.

Retained effects (see `js/effects/`): custom cursor / cursor trail, keypress ripple, glitch text, matrix rain.
Check which are actually wired into the pages before assuming they are active.

**Do not:** reintroduce the old dark/matrix-green theme, purple gradients, or generic template-looking cards.

---

## Site Structure

```
index.html        Home — hero, Odoo/full-stack spotlight, toolkit, selected projects, personal section
about.html        Bio, education, interests, "At a glance" card
experience.html   Timeline (see below)
projects.html     Personal / open-source projects (Chess Wrapped, AI FPL Assistant)
github.html       Live GitHub data (js/github-api.js)
contact.html      Contact details + form
css/ js/ assets/ public/   Styles, scripts, images
head-template.html         Shared <head> reference (meta/keywords)
metadata.json, manifest.json, sitemap.xml, robots.txt
```

Nav (every page): Home, About, Experience, Projects, GitHub, Contact + "Get in Touch" CTA.
Nav, footer and head markup are duplicated per page — change them in **all** pages.

---

## Content (matches CV, updated Nov 2026)

**Pitch:** Full-stack developer, 2+ years commercial experience in Python, JavaScript and PostgreSQL; REST API
design/integration; multi-client environments; Odoo ERP specialist.

**Experience timeline:**
1. **Urbana — Software Developer** | Nov 2026 – Present — remote, Australian business, Odoo ERP; custom modules
   (Python/JS/XML/PostgreSQL), third-party REST integrations. Odoo v15–v19; familiar with the OCA ecosystem.
2. **Freelance — Python Developer** | Mar 2026 – Present — Odoo client projects, OCA contributions, agentic coding
   (Codex, Claude Code, Antigravity, OpenCode).
3. **MJ Consultants — Odoo Developer** | Dec 2024 – Mar 2026 — full stack features across 5+ concurrent client
   environments; ZIMRA & ZRA REST fiscal integrations; Git branching/submodules.
4. **WireSpeed Systems — Graduate Trainee** | Oct 2024 – Dec 2024 — software testing against acceptance criteria;
   Next.js 14 frontend.
5. **MJ Consultants — Intern (Industrial Attachment)** | Nov 2023 – Jul 2024 — REST API integrations, server/DB setup.
6. **NUST Zimbabwe — BSc Computer Science (Hons) 2.1** | Graduated 2024.

**Skills:** Languages — Python, JavaScript, SQL, XML, Dart, Java, C/C++. Backend — Python, REST APIs, PostgreSQL,
SQLite. Frontend — JavaScript, templating engines, Bootstrap, CSS, Next.js. Infra — Linux (Ubuntu), Docker, Nginx,
SSH, Git/GitHub. Workflow — Neovim, agentic coding tools.

**Interests:** Chess, Reading, Sudoku, Gaming, Soccer.

**Projects:** ZIMRA and ZRA fiscal integrations (client work, no source, described generically on the home page);
Chess Wrapped (Lichess API); AI Fantasy Premier League Assistant. Add more only when Lloyd provides them.

---

## Conventions

- Keep pages static and dependency-free; no framework migration unless asked.
- Reuse existing classes in `css/components.css` (`card`, `tag`, `timeline-*`, `metric-item`, `proof-card`).
- Update `<title>`, meta description and `og:*` tags when page content changes; keep `metadata.json` in sync.
- Dates, roles and wording on experience/about must match the CV.

---

## Commands

```bash
# Preview (from repo root; absolute asset paths need a server)
python3 -m http.server 4173      # then open http://localhost:4173/

# Optional Vite dev/build (requires `npm install` first; not used for deploy)
npm install && npm run dev
npm run build

# Deploy: push to main; GitHub Pages workflow publishes the repo root
git push origin main
```

---

## Out of Scope (unless asked)

Blog, CMS, authentication, i18n, analytics beyond Vercel Web Analytics.

---

## Git Commit Convention

`type(scope): short description` — types: `feat`, `fix`, `style`, `refactor`, `chore`, `docs`.
Examples: `feat(experience): add Urbana and freelance roles`, `docs: update CLAUDE.md for static site`.

---

*Last updated: November 2026 — synced with updated CV.*
