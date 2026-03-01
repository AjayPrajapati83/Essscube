# ESSSqube Events Website

Modern, responsive event management website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern UI with Framer Motion animations
- 📱 Fully responsive design
- 🚀 Next.js 14 with App Router
- 💾 Supabase backend integration
- 🎯 SEO optimized
- ✨ Glassmorphism and grain texture effects

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

3. Set up Supabase database using `supabase-schema.sql`

4. Run development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                  # Next.js app directory
├── components/           # React components
├── lib/                  # Utility functions
├── public/              # Static assets
└── supabase-schema.sql  # Database schema
```

## Deployment

Build for production:
```bash
npm run build
npm start
```

## License

© 2024 ESSSqube Events. All rights reserved.
