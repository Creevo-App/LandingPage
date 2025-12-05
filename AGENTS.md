# AGENTS.md - Creevo Landing Page

## Commands
- `npm run dev` - Start Vite dev server
- `npm run build` - TypeScript check + Vite build (outputs to `dist/`)
- `npm run start` - Run Express production server on port 8010
- `npx tsc --noEmit` - Type check only

## Architecture
React 18 + TypeScript + Vite landing page, served by Express in production via PM2.
- `src/pages/landing/` - Main landing page component and styles
- `src/theme/` - Color palette and theme tokens (dark navy, olive green, terracotta)
- `server.js` - Express server (ES modules, port 8010)
- `ecosystem.config.cjs` - PM2 config (must be `.cjs` due to `"type": "module"`)

## Code Style
- ES modules (`"type": "module"` in package.json)
- Strict TypeScript (`strict: true`, `noUnusedLocals`, `noUnusedParameters`)
- CSS custom properties for theming; no CSS-in-JS
- Imports: React/libs first, then local modules (no file extensions in imports)
- Components: Functional components with hooks (useState for local state)
- Mobile-first responsive design (breakpoint at 768px)

## Deployment (GCP VM via PM2)
- **Domain**: creevo.app (Nginx reverse proxy → port 8010)
- **VM**: `game-development-websocket-server` in `creevodevelopment` project (us-central1-a)
- **SSH**: `gcloud compute ssh game-development-websocket-server --zone=us-central1-a --project=creevodevelopment`
- **Deploy**: `git pull origin main && npm install && npm run build && pm2 restart creevo-landing`
