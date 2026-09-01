# Alae Laita Portfolio

A bilingual portfolio site built with React and Vite.

## Stack

- React
- Vite
- React Router
- Framer Motion
- Plain CSS with custom properties

The site uses no CSS framework, UI library, or i18n library.

## Features

- Complete English and French translations with the selected language persisted locally
- Light and dark themes with persistence and an inline startup script that prevents a theme flash
- Real client-side routes instead of anchor-based page scrolling
- Responsive layouts tested down to 375px
- A pointer-following ambient effect with reduced-motion and coarse-pointer guards
- An accessible image lightbox for project and experience media

## Project structure

```text
src/
├── components/  # Shared layout, navigation, media, and content components
├── context/     # Language and theme state providers
├── pages/       # Route-level page components
├── i18n/        # English and French translation trees
├── data/        # Project routing and metadata
└── styles/      # Design tokens and global CSS
```

## Local development

```bash
npm install
npm run dev
```

The development server uses the `/portfolio_v2/` base path. Open [http://localhost:5173/portfolio_v2/](http://localhost:5173/portfolio_v2/) rather than the server root.

## Build and deploy

Create a production build with:

```bash
npm run build
```

The output is written to `dist/`. Pushing to `main` triggers the GitHub Actions workflow in `.github/workflows/deploy.yml`, which builds the project and deploys `dist/` to GitHub Pages.

## Content

All site copy lives in `src/i18n/en.js` and `src/i18n/fr.js`. The two files must keep identical key trees. Project routing and metadata live in `src/data/projects.js`.

Place images in `public/images/` and reference them in application code through `import.meta.env.BASE_URL` so they resolve correctly under the repository base path.

The CV download in `src/pages/About.jsx` is gated by the `CV_AVAILABLE` constant. It remains hidden until the PDF is added to `public/cv/` and the constant is enabled.
