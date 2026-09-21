# SEO Técnico: Astro SEO Website

![MultiLaunch Template Preview](https://www.datocms-assets.com/150921/1743700109-multi-launch.png)

A high-performance Astro monorepo for technical SEO, SEO audits, web positioning, and local SEO in Colombia.

## Demo
[Live Demo](https://astro-dato-multilaunch.vercel.app/en/)

## Tech Stack
- Astro
- Sanity
- Cloudflare Workers
- Tailwind CSS 4

## Features
- ✅ Multi-Brand Architecture – One main site, multiple brand landing pages
- ✅ Rapid Deployment – Add a new brand in minutes, not weeks
- ✅ Monorepo Setup – All brands in one repository for easy management
- ✅ AI-Powered Translation – Multi-language support with AI-assisted translations
- ✅ Geo-Redirects – Serve region-specific content automatically
- ✅ Brand-Specific Customization – Each brand gets its own colors and assets
- ✅ Dark & Light Mode

## Quick Start
1. Create a Sanity project and configure its project ID and dataset.
2. Set the Cloudflare Workers project root to `/` (the repository root).
3. Use `bun run deploy:cloudflare` as the deploy command. This command changes into `apps/core` before running Wrangler.

## Local Setup

### Prerequisites
- Node.js
- Bun

### Project Structure
```
multilaunch/
├── apps/
│   ├── core/       # Main retail company page
│   └── brands/     # Brand landing pages
└── packages/
    └── ui/         # Shared UI components
```

### Getting Started
```bash
# Install dependencies
bun install

# Set up environment variables
cp .env.example .env
```

### Environment Variables
1. Set `SANITY_PROJECT_ID` and `SANITY_DATASET` in `apps/core/.env` for local development.
2. Configure `SANITY_API_TOKEN` only when private Sanity content is required.
3. Store production secrets with `wrangler secret put`, not in `wrangler.jsonc`.

## Available Scripts
```bash
# Run development server
bun dev

# Build for production
bun run build

# Preview production build
bun run preview

# Deploy the core site to Cloudflare Workers from the repository root
bun run deploy:cloudflare
```

## Contributing
Contributions are welcome!
