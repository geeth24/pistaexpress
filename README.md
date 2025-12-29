# Pista Express

Authentic Hyderabadi Indian cuisine delivered fast and fresh.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **CMS**: Sanity.io
- **Package Manager**: Bun

## Getting Started

1. Install dependencies:
```bash
bun install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
```

Required variables:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `SANITY_API_TOKEN`

3. Run the development server:
```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Sanity Studio

Access the Sanity Studio at [http://localhost:3000/studio](http://localhost:3000/studio) to manage menu items and content.

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # Reusable React components
├── sanity/          # Sanity configuration & schemas
│   ├── lib/         # Sanity client & utilities
│   └── schemaTypes/ # Content schemas
└── lib/             # Utility functions
```

## Deployment

Deploy on Vercel:

```bash
vercel
```

Make sure to set the environment variables in your Vercel project settings.
