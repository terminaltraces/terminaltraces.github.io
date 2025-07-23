# Deployment Guide

This Astro site is configured for automatic deployment to GitHub Pages.

## Automatic Deployment

The site automatically deploys to GitHub Pages whenever changes are pushed to the `main` branch.

### How it works:

1. **GitHub Actions Workflow**: The `.github/workflows/deploy.yml` file contains the automation workflow
2. **Build Process**: Uses the official Astro GitHub Action to build the site
3. **Deployment**: Deploys the built site to the `gh-pages` branch
4. **Live Site**: Available at https://terminaltraces.github.io

### Deployment Steps:

1. Push changes to the `main` branch
2. GitHub Actions automatically triggers the build and deployment workflow
3. The site is built using Node.js 18 and npm
4. The built static files are deployed to GitHub Pages
5. Changes are live within a few minutes

## Manual Deployment

If you need to deploy manually:

1. Build the site locally:
   ```bash
   npm run build
   ```

2. The built files will be in the `dist/` directory

3. You can preview the build locally:
   ```bash
   npm run preview
   ```

## Development

For local development:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Configuration

The site is configured in `astro.config.mjs` with:
- Site URL: `https://terminaltraces.github.io`
- Base path: `/`
- Output: `static` (for GitHub Pages)
- Trailing slash handling: `ignore`

## GitHub Pages Settings

Ensure your repository has GitHub Pages configured to:
- Source: GitHub Actions
- Custom domain (if applicable): Set in repository settings

The workflow has the necessary permissions to deploy to GitHub Pages automatically.