# CLAUDE.md — Lloyd Vheremu Portfolio

This file is the single source of truth for Claude Code when working on this project.
Read this before touching any file.

---

## Project Overview

**What:** Personal portfolio website for Lloyd B. Vheremu — Software Developer.
**Goal:** Land a remote general software developer job. The site must function as a
silent recruiter — professional, fast, visually memorable, and easy to scan.
**Audience:** Remote-first tech recruiters and hiring managers.

---

## Owner / Developer Info

| Field        | Value                                      |
|--------------|--------------------------------------------|
| Name         | Lloyd B. Vheremu                           |
| Title        | Software Developer                         |
| Email        | lloydblessin@outlook.com                   |
| Phone        | +263 77 195 1098 / +263 78 282 4022        |
| Location     | Ruwa, Zimbabwe (open to remote globally)   |
| GitHub       | https://github.com/lloydvheremu           |
| LinkedIn     | https://www.linkedin.com/in/lloydvheremu   |

### One-line pitch
"Full-Stack Developer with 2+ years building production systems in Python and JavaScript"

---

## Tech Stack

| Layer        | Choice                              |
|--------------|-------------------------------------|
| Framework    | Next.js 16 (App Router)             |
| Language     | TypeScript                          |
| Styling      | Tailwind CSS v4                     |
| Animations   | Framer Motion                       |
| Effects      | tsparticles (matrix rain bg)        |
| GitHub Data  | GitHub REST API v3 (public, no auth)|
| Hosting      | Vercel                              |
| Package Mgr  | npm                                 |

---

## Design Direction

**Theme:** Dark / Matrix / Gamer
**Palette:**
- Background: `#0a0a0a` (near black)
- Primary accent: `#00ff41` (matrix green)
- Secondary accent: `#00b4d8` (cyan/electric blue)
- Surface: `#111111`
- Border: `#1a1a1a`
- Text primary: `#e0e0e0`
- Text muted: `#666666`

**Typography:**
- Display / Headings: `Share Tech Mono` or `JetBrains Mono` (Google Fonts)
- Body: `Fira Code` or `IBM Plex Mono`
- All fonts should feel terminal/code-native — no Inter, Roboto, or sans-serif generics

**Effects (required):**
- Matrix rain canvas animation on hero background (tsparticles or custom canvas)
- Custom cursor — crosshair or glowing dot that reacts to hover
- Mouse-parallax effect on hero section
- Hover glow effects on cards and buttons (green/cyan box-shadow)
- Smooth scroll between sections
- Framer Motion entrance animations (staggered fade-in on scroll)
- Keyboard key press visual effect (subtle ripple on keydown anywhere on page)
- Scanline overlay texture on hero (CSS)
- Glitch text effect on name in hero

**DO NOT use:**
- Purple gradients
- White backgrounds
- Inter / Roboto / Arial fonts
- Generic card layouts with no visual character
- Cookie-cutter "developer portfolio" templates

---

## Site Structure — Multi-Page (App Router)

```
app/
├── page.tsx              → Home (Hero + About preview + CTA)
├── about/
│   └── page.tsx          → Full About — bio, values, what I'm looking for
├── projects/
│   └── page.tsx          → Projects grid — personal + professional work
├── experience/
│   └── page.tsx          → Timeline of work history + education
├── github/
│   └── page.tsx          → Live GitHub activity — commits, repos, contributions
├── contact/
│   └── page.tsx          → Contact form + links
├── layout.tsx            → Root layout with nav + footer
└── globals.css           → Global styles, CSS variables, scrollbar, cursor
```

---

## Navigation

Persistent top navbar on all pages. Items:
- Home
- About
- Projects
- Experience
- GitHub
- Contact

Nav should feel like a terminal/HUD — monospace font, green active indicator,
subtle backdrop blur, no white background.

---

## Pages — Content Spec

### `/` — Home
- Full-viewport hero
- Matrix rain canvas background
- Glitch effect on name: **Lloyd Vheremu**
- Subtitle: `Software Developer`
- One-liner: `"Full-Stack Developer with 2+ years building production systems in Python and JavaScript"`
- Two CTAs: `[View My Work]` → /projects | `[Contact Me]` → /contact
- Animated scroll indicator at bottom
- Below hero: short About preview (2–3 sentences) + Skills marquee strip

### `/about`
- Profile photo placeholder (use initials avatar if no photo)
- Bio (2–3 paragraphs):
  - Who I am — CS graduate from NUST Zimbabwe, 2+ years commercial experience
  - What I do — Python, JavaScript, REST APIs, ERP systems, full-stack dev
  - What I'm looking for — remote software developer roles
- Skills section — grouped by category:
  - **Backend:** Python, Django, PostgreSQL, REST APIs, Docker
  - **Frontend:** JavaScript, Next.js, React, Tailwind CSS, Bootstrap
  - **ERP/Specialist:** Odoo (v15–v19), QWeb, OWL framework
  - **Tools:** Git, GitHub, Linux, SSH, Nginx
  - **Other:** Flutter, Dart, Java, C/C++
- Interests strip: Chess, Gaming, Reading, Soccer, Sudoku

### `/projects`
Projects to feature (add more as Lloyd provides them):

1. **FPL Fixture Difficulty Planner**
   - Stack: Python, Django, REST API (Fantasy Premier League API)
   - Description: Web app that pulls live FPL data and visualises fixture
     difficulty ratings to help players plan transfers and captain picks
   - Links: GitHub repo (if public)

2. **ZRA SmartInvoice Integration** *(Professional — describe generically)*
   - Stack: Python, Odoo, REST APIs, PostgreSQL
   - Description: Custom Odoo module integrating with Zambia Revenue Authority's
     SmartInvoice API for real-time fiscal compliance — handles invoice
     submission, credit notes, and signature verification
   - Note: Client work, no source link

3. **ZIMRA Fiscalisation Module** *(Professional — describe generically)*
   - Stack: Python, JavaScript, Odoo OWL, PostgreSQL
   - Description: End-to-end fiscalisation integration for Zimbabwe Revenue
     Authority — POS and invoice flows with cryptographic device communication
   - Note: Client work, no source link

4. **Online Learning Platform** *(WireSpeed — describe generically)*
   - Stack: Next.js 14, JavaScript
   - Description: Contributed front-end development to an e-learning platform
     built during internship at WireSpeed Systems
   - Note: Company project, no source link

5. **GRC Platform Configuration** *(WireSpeed)*
   - Stack: Corporater BMP, Katalon, JMeter
   - Description: QA testing and module configuration for a Governance, Risk &
     Compliance software platform for enterprise clients

Each project card should show: title, stack tags, description, and links (GitHub / Live / N/A).

### `/experience`
Vertical timeline. Entries:

1. **M&J Consultants — Software Developer** | Dec 2024 – Mar 2026
   - ZRA SmartInvoice integration, custom Odoo modules, Python/JS/REST APIs

2. **WireSpeed Systems — Graduate Trainee** | Oct 2024 – Dec 2024
   - Next.js 14 front-end dev, GRC platform QA (Katalon, JMeter)

3. **M&J Consultants — Industrial Attachment** | Nov 2023 – Jul 2024
   - Odoo custom modules, QWeb reports, REST API integrations, Docker/Nginx

4. **NUST Zimbabwe — BSc Computer Science (Hons) 2.1** | Graduated 2024
   - Relevant modules: AI, Software Engineering, DB Systems, Web Dev,
     Mobile Dev, Networking

### `/github`
Live data from GitHub REST API. Sections:
- **Contribution graph** — fetch from `https://github.com/lloydvheremu`
  (use third-party SVG API: `https://ghchart.rshah.org/00ff41/lloydvheremu`)
- **Public repos** — fetch from `https://api.github.com/users/lloydvheremu/repos`
  Display: repo name, description, language, stars, forks, last updated
- **Recent commit activity** — fetch from repo events API
  `https://api.github.com/users/lloydvheremu/events/public`

### `/contact`
- Email: lloydblessin@outlook.com
- LinkedIn: https://www.linkedin.com/in/lloydvheremu
- GitHub: https://github.com/lloydvheremu
- Simple contact form (name, email, message) — use Formspree or mailto fallback
- Terminal-style UI: form fields styled as CLI prompts (`> `)

---

## Folder & File Conventions

```
src/
├── app/                  → All Next.js pages (App Router)
├── components/
│   ├── ui/               → Reusable primitives (Button, Card, Tag, Badge)
│   ├── layout/           → Navbar, Footer, PageWrapper
│   ├── sections/         → Page-specific sections (Hero, ProjectCard, Timeline)
│   └── effects/          → MatrixRain, CustomCursor, GlitchText, ParticlesBg
├── lib/
│   └── github.ts         → GitHub API fetch helpers
├── types/
│   └── index.ts          → Shared TypeScript types
└── styles/
    └── globals.css       → CSS variables, scrollbar, global resets
```

---

## Key Conventions

- **TypeScript strict mode** — all components typed, no `any`
- **Server Components by default** — use `"use client"` only when needed
  (animations, interactive effects, event listeners)
- **GitHub API calls** — use Next.js `fetch` with `revalidate: 3600` (1hr cache)
  in Server Components, not client-side fetching
- **No inline styles** — Tailwind classes or CSS variables only
- **Component naming** — PascalCase for components, kebab-case for files
- **All effects** (MatrixRain, CustomCursor, GlitchText) must be isolated in
  `components/effects/` and lazy-loaded with `dynamic()` to avoid SSR issues
- **proxy.ts** instead of `middleware.ts` (Next.js 16 convention)

---

## Commands

```bash
# Install
npm install

# Dev server
npm run dev

# Build
npm run build

# Type check
npx tsc --noEmit

# Deploy (auto via Vercel GitHub integration)
git push origin main
```

---

## Scaffold Command

```bash
npx create-next-app@latest lloyd-portfolio \
  --typescript \
  --tailwind \
  --app \
  --src-dir \
  --import-alias "@/*"
```

Then install:
```bash
npm install framer-motion @tsparticles/react @tsparticles/slim
```

---

## Out of Scope (Do Not Add Unless Asked)

- Blog / articles section
- CMS integration
- Authentication
- Dark/light mode toggle (always dark)
- i18n / multi-language
- Analytics (add later)

---

## Git Commit Convention

Format: `type(scope): short description`

Types: `feat`, `fix`, `style`, `refactor`, `chore`, `docs`

Examples:
```
feat(hero): add matrix rain canvas background
feat(github): integrate GitHub REST API for repo feed
fix(cursor): prevent custom cursor flicker on page load
style(nav): add active route green indicator
chore: scaffold Next.js 16 project with TypeScript and Tailwind
```

---

*Last updated: April 2026 — generated from CV + conversation context*
