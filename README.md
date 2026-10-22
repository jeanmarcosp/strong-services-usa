# Strong Services USA — Website

Modern marketing site for Strong Services USA, a family-owned air conditioning and
refrigeration contractor in Miami, FL (30+ years, license CAC1817892). Sister site to the
Unlimited Construction Group redesign, sharing the same stack and structure with its own
navy-and-green identity.

**Phase 1 scope:** a responsive visual redesign — Home, Services (Residential / Commercial),
About, and Contact — built from all of the content on the original strongservicesusa.com,
with an English/Spanish toggle. The contact form is a styled UI placeholder (not yet wired
to a backend).

## Tech Stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) (JavaScript)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [lucide-react](https://lucide.dev/) icons

## Getting Started

```bash
npm install      # install dependencies
npm run dev      # start dev server with hot reload at http://localhost:5173
npm run build    # production build to dist/
npm run preview  # preview the production build locally
```

## Project Structure

```
src/
├── data/content.js     # Single source of truth: business info + all copy (EN/ES)
├── i18n/               # Language context + useLang() hook
├── components/         # Reusable UI (Navbar, UtilityBar, Hero, SpecialtiesGrid, ...)
└── pages/              # Home, Services, About, Contact
public/images/          # Logo, favicon, and job photos from the original site
```

## Editing Content

Business details and all page copy live in `src/data/content.js` — update phone, email,
address, services, and marketing copy there (in both `en` and `es`) without touching
components.

## Deploying

`netlify.toml` and `vercel.json` are included so client-side routes (e.g. `/services`)
work on direct loads.
