# Portfolio Landing Page

Landing page built with React and Vite, styled with Tailwind CSS, with project data loaded from Firestore (or local fallback data).

## Requirements

- Node.js 20 (`.nvmrc` included)
- npm

## Setup

1. Install/use the expected Node version:
   ```bash
   nvm install
   nvm use
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Optional: configure Firestore access:
   ```bash
   cp .env.example .env
   ```
4. Start local development:
   ```bash
   npm run dev
   ```

## Scripts

- `npm run dev`: start Vite dev server
- `npm run build`: create production build in `dist/`
- `npm run preview`: preview production build locally
- `npm run lint`: run ESLint on source files

## Stack

- React 18
- Vite 5
- Tailwind CSS + PostCSS
- Framer Motion + Lucide React
- Firestore REST API (with static fallback in `src/data/projects.js`)

## Environment Variables

See `.env.example`:

- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_DATABASE_ID`
- `VITE_FIRESTORE_PROJECTS_COLLECTION`

If `VITE_FIREBASE_PROJECT_ID` is not set, the app automatically uses static fallback project data.

## Project Structure

```text
.
├── public/
│   └── projects/
├── src/
│   ├── components/
│   ├── data/
│   ├── hooks/
│   ├── services/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── eslint.config.js
```
