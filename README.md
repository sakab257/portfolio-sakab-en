# Portfolio - Salim Akab

A modern, responsive portfolio website showcasing my projects, experiences, and skills. Built with Next.js 15, React 19, and Tailwind CSS 4.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Modern UI**: Clean and modern interface with gradient effects and smooth animations
- **Project Showcase**: Categorized projects (Web, Mobile, Software, AI/ML) with interactive tabs
- **Custom Components**: Reusable UI components with consistent styling
- **Animated Navigation**: Custom navbar with animated indicator
- **Performance Optimized**: Built with Next.js 15 and Turbopack for optimal performance
- **Type-Safe**: Written in TypeScript for enhanced code quality

## Tech Stack

### Core
- **Next.js 15.5.4** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS 4** - Utility-first CSS framework

### UI Components
- **Radix UI** - Headless UI components for tabs and slots
- **Lucide React** - Beautiful icon library
- **class-variance-authority** - Component variant management
- **clsx** & **tailwind-merge** - Conditional className utilities

### Development Tools
- **Turbopack** - Next-gen bundler for faster builds
- **ESLint** - Code linting and quality assurance
- **tw-animate-css** - Tailwind animation utilities

## Project Structure

```
portfolio-sakab-en/
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── experiences/         # Experiences page
│   ├── projects/            # Projects page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/
│   ├── about/               # About page components
│   ├── contact/             # Contact page components
│   ├── experiences/         # Experiences page components
│   ├── navigation/          # Navigation components
│   │   └── navbar.tsx       # Animated navbar with indicator
│   ├── projects/            # Project components
│   │   ├── project-card.tsx # Individual project card
│   │   ├── project-list.tsx # Project tabs container
│   │   ├── web.tsx          # Web projects
│   │   ├── mobile.tsx       # Mobile projects
│   │   ├── software.tsx     # Software projects
│   │   └── ai.tsx           # AI/ML projects
│   └── ui/                  # Reusable UI components
│       ├── button.tsx       # Button component
│       ├── footer.tsx       # Footer component
│       ├── language.tsx     # Language selector
│       └── tabs.tsx         # Custom tabs with animated indicator
├── public/                  # Static assets
│   ├── projets/
│   │   ├── images/         # Project images
│   │   └── technos/        # Technology logos
│   └── vfx/                # Visual effects assets
└── lib/
    └── utils.ts            # Utility functions
```

## Getting Started

### Prerequisites

- Node.js 18.18 or later
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-sakab-en.git
cd portfolio-sakab-en
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Run the development server:
```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production with Turbopack
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Key Components

### Custom Tabs Component

The tabs component features an animated indicator that smoothly transitions between active tabs, similar to the navbar design. It uses Radix UI primitives with custom styling.

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

<Tabs defaultValue="web">
  <TabsList>
    <TabsTrigger value="web">Web</TabsTrigger>
    <TabsTrigger value="mobile">Mobile</TabsTrigger>
  </TabsList>
  <TabsContent value="web">...</TabsContent>
</Tabs>
```

### Animated Navbar

The navbar includes an animated white dot indicator that moves to the active page with smooth transitions.

### Project Card

Reusable card component for displaying projects with:
- Project image
- Title and description
- Live demo link
- Technology stack badges
- Gradient borders and backgrounds

## Design System

### Color Palette
- Background: `#06091F` to `#161A31` (gradient)
- Accent: `#CBACF9` to `#D4B7FF` (purple gradient)
- Border: `#6971A2` to `#272A3C` (subtle gradient)
- Text: `#C1C2D3` (muted), `#FFFFFF` (active/hover)

### Typography
- Responsive font sizes using Tailwind breakpoints
- `capitalize` class for consistent text formatting

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the project on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build

Alternatively, build and deploy manually:

```bash
pnpm build
pnpm start
```

## Performance Features

- **Turbopack**: Ultra-fast development and production builds
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Static Generation**: Pre-rendered pages for optimal performance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary.

## Contact

Salim Akab
- Website: [Your Portfolio URL]
- GitHub: [@sakab257](https://github.com/sakab257)
- LinkedIn: [Your LinkedIn]

---

Built with Next.js, React, and Tailwind CSS
