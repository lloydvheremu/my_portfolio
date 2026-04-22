# Lloyd Vheremu - Portfolio Website

Personal portfolio website showcasing my work as a Software Developer.

## Overview

This is a static website built with pure HTML, CSS, and vanilla JavaScript. No frameworks or build tools required.

**Live Site:** http://localhost:8000 (development)

## Features

- **Matrix/Gamer Theme:** Dark background with neon green (#00ff41) and cyan (#00b4d8) accents
- **Visual Effects:**
  - Matrix rain canvas animation
  - Custom cursor with glow effect
  - Glitch text on hero name
  - Keypress ripple animations
  - Scanline overlay
  - Smooth scroll animations

- **Pages:**
  - **Home (index.html):** Hero section with matrix rain, about preview, skills marquee
  - **About:** Bio, technical skills grouped by category, interests
  - **Projects:** Project cards with stack tags and links
  - **Experience:** Timeline of work history and education
  - **GitHub:** Live data from GitHub API - repos, contribution graph, recent activity
  - **Contact:** Terminal-style contact form and social links

## Tech Stack

- HTML5
- CSS3 (with CSS variables for theming)
- Vanilla JavaScript (ES6+)
- GitHub REST API (for live data)
- Google Fonts (JetBrains Mono, Fira Code)

## Project Structure

```
/
├── index.html              # Home page
├── about.html              # About page
├── projects.html           # Projects page
├── experience.html         # Experience timeline
├── github.html             # GitHub activity
├── contact.html            # Contact form
├── css/
│   ├── global.css          # CSS variables, base styles, animations
│   ├── components.css      # Reusable UI components
│   └── effects.css         # Visual effects styling
├── js/
│   ├── effects/
│   │   ├── matrix-rain.js
│   │   ├── custom-cursor.js
│   │   ├── glitch-text.js
│   │   └── keypress-ripple.js
│   ├── components/
│   │   └── nav.js
│   └── github-api.js       # GitHub API integration
└── assets/                 # Images, fonts (if needed)
```

## Development

### Running Locally

Start a simple HTTP server:

```bash
# Python 3
python3 -m http.server 8000

# Or using Node.js
npx http-server -p 8000
```

Then visit `http://localhost:8000` in your browser.

### No Build Step Required

This is a static site - just open any HTML file in a browser or serve the directory with any HTTP server.

## Design Principles

Following CLAUDE.md specification:
- **Colors:** Dark theme (#0a0a0a bg, #00ff41 matrix green, #00b4d8 cyan)
- **Typography:** Monospace fonts only (JetBrains Mono, Fira Code)
- **Effects:** Terminal/HUD aesthetic with glow effects and animations
- **No generic templates:** Custom design with unique character

## Contact

- **Email:** lloydblessin@outlook.com
- **GitHub:** https://github.com/lloydvheremu
- **LinkedIn:** https://www.linkedin.com/in/lloydvheremu
- **Phone:** +263 77 195 1098 / +263 78 282 4022

## License

© 2026 Lloyd Vheremu. All rights reserved.
