# Creevo Landing Page

Landing page for Creevo - a game development tool that quickly prototypes features with disposable code.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

This creates a `dist/` folder with the production build.

## Deployment

The landing page is served via Express on port 8010 and managed by PM2.

### Build and Deploy

```bash
npm run build
npm run start
```

### PM2 Management

```bash
# Start with PM2
npm run pm2:start

# Restart
npm run pm2:restart

# View logs
pm2 logs creevo-landing

# View status
pm2 list
```

The server runs on port 8010 and is accessible via `creevo.app` through Nginx reverse proxy.

