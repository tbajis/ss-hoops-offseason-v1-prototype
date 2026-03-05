# SS Hoops — Off-Season Prototype (v1)

Clickable prototype of the SS Hoops off-season experience for stakeholder feedback.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Static output goes to `dist/`.

## Deploy to Vercel

### One-time setup

1. Go to [vercel.com](https://vercel.com) and sign up with your GitHub account
2. Click **"Add New Project"**
3. Import this repository (`ss-hoops-offseason-v1-prototype`)
4. Vercel auto-detects Vite — leave all defaults
5. Click **"Deploy"**
6. Your prototype will be live at the URL Vercel gives you (e.g., `ss-hoops-offseason-v1-prototype.vercel.app`)

### Updating

Just push to `main`. Vercel auto-redeploys within ~30 seconds.

### Tearing down

1. Go to Vercel dashboard > project settings > **Delete Project**
2. Delete the GitHub repo

## Screens

- **Home** — Tournament countdown, 2024 champions, dynasty tracker, throwback
- **Champions Wall** — Year-by-year history, all-time records, hall of fame
- **Teams** — Filterable team list (All / Boys / Girls)
- **Team Detail** — Individual team view

Toggle dark/light mode with the button above the phone frame.
