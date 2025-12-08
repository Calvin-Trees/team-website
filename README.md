# Calvin Trees - University Project Website

A production-ready marketing and documentation website for the Calvin Trees Progressive Web Application - an interactive campus arboretum featuring haptic feedback and tree identification.

## About Calvin Trees

Calvin Trees is an innovative PWA that transforms how students, faculty, and visitors experience Calvin University's campus flora. The application provides real-time tree identification with unique haptic feedback when users approach specific species.

## Tech Stack

- **React 18** + **TypeScript** - Type-safe UI development
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **Tailwind CSS v4** - Utility-first CSS with custom Calvin branding
- **shadcn/ui** - Accessible component library
- **Netlify** - Deployment platform with SPA routing

## Brand Colors

- **Calvin Maroon**: `#8B2233` - Primary buttons, headers, active states
- **Calvin Gold**: `#F6CD19` - Accent highlights, badges, CTAs

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

Build for production:

```bash
npm run build
```

### Preview

Preview the production build:

```bash
npm run preview
```

## Site Structure

- **Home** (`/`) - Hero section and project vision statement
- **Team** (`/team`) - Student developers and faculty advisor
- **Code** (`/code`) - GitHub repository and tech stack
- **Reports** (`/reports`) - Project documentation and presentations
- **External Link** - Calvin University CS Department

## Project Structure

```
team-website/
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   └── Navbar.tsx       # Responsive navigation
│   ├── pages/
│   │   ├── Home.tsx         # Landing page with vision
│   │   ├── Team.tsx         # Team member cards
│   │   ├── Code.tsx         # GitHub & tech stack
│   │   └── Reports.tsx      # Documentation
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   ├── App.tsx              # Router configuration
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles with Calvin colors
├── public/
│   └── docs/                # Project documents
├── netlify.toml             # Netlify deployment config
└── vite.config.ts           # Vite configuration
```

## Features

- ✅ Responsive navigation with mobile hamburger menu
- ✅ Multi-page routing with React Router
- ✅ Calvin University brand colors and styling
- ✅ Accessible shadcn/ui components
- ✅ Netlify SPA routing configuration
- ✅ SEO-optimized meta tags
- ✅ TypeScript type safety
- ✅ Hot Module Replacement (HMR)

## Team

**Student Developers:**
- Alim Darmenov - Lead Developer
- Peter Brink - Frontend Developer
- Sam Visser - Backend Developer

**Faculty Advisor:**
- Professor Victor Norman

## Deployment

This site is configured for deployment on Netlify with automatic SPA routing fallback. The `netlify.toml` file ensures all routes are handled correctly.

### Deploy to Netlify

1. Push to your Git repository
2. Connect repository to Netlify
3. Netlify will automatically detect build settings from `netlify.toml`
4. Deploy!

## Main Project Repository

The Calvin Trees PWA source code: [Calvin-Trees/calvin-trees-main](https://github.com/Calvin-Trees/calvin-trees-main)

## License

Built for Calvin University Computer Science Department
