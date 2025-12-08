# Team Website

A modern React application built with Vite, TypeScript, Tailwind CSS, and shadcn/ui.

## Tech Stack

- **Vite** - Fast build tool and development server
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - Re-usable component library

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

## Adding shadcn/ui Components

To add new components from shadcn/ui:

```bash
npx shadcn@latest add [component-name]
```

Example:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
```

## Project Structure

```
team-website/
├── src/
│   ├── components/
│   │   └── ui/          # shadcn/ui components
│   ├── lib/
│   │   └── utils.ts     # Utility functions
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── public/
├── vite.config.ts       # Vite configuration
└── tsconfig.json        # TypeScript configuration
```

## Features

- Hot Module Replacement (HMR)
- TypeScript support
- Path aliases (@/* -> src/*)
- Tailwind CSS v4 with custom theme
- shadcn/ui components with dark mode support
- ESLint configuration
