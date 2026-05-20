# Personal Portfolio Website

A modern, performant portfolio website built with React 18, TypeScript, Vite, Tailwind CSS, Framer Motion, and lucide-react.

## Features

✨ **Modern Design**
- Dark theme with chrome/silver gradient headings
- Purple-magenta-orange gradient accent buttons
- Smooth animations powered by Framer Motion
- Fully responsive (mobile, tablet, desktop)

🎯 **Core Sections**
- **Hero**: Full-viewport hero with animated avatar and social links
- **About**: Bio with key statistics
- **Experience**: Timeline of professional experience with highlights
- **Services**: Core expertise areas (Backend, AI/LLM, Frontend, Cloud)
- **Projects**: Sticky project cards with images, stack, and live links
- **Testimonials**: CSS-only animated marquee carousel
- **Contact**: Footer with navigation, email copy, phone, and social links

⚡ **Performance**
- Lazy-loaded images with fallbacks
- Smooth scroll behavior with reduced-motion support
- Optimized animations with Framer Motion
- Tree-shaken bundle with Vite

🎨 **Customization**
- All content sourced from `src/data/portfolio.json`
- Typed TypeScript interfaces for data validation
- Easy to update profile, projects, skills, and testimonials

## Quick Start

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server runs at `http://localhost:5173` by default.

## Project Structure

```
portfolio/
├── src/
│   ├── components/           # React components
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── SocialLinks.tsx
│   │   └── Footer.tsx
│   ├── hooks/
│   │   └── usePortfolio.ts   # Custom hook to load portfolio data
│   ├── types/
│   │   └── portfolio.ts       # TypeScript type definitions
│   ├── data/
│   │   └── portfolio.json     # All content data
│   ├── App.tsx                # Main app component
│   ├── main.tsx               # React entry point
│   ├── index.css              # Global styles + Tailwind
│   └── vite-env.d.ts          # Vite type declarations
├── index.html                 # HTML entry point
├── vite.config.ts             # Vite configuration
├── tsconfig.json              # TypeScript config
├── tailwind.config.ts         # Tailwind CSS config
├── postcss.config.js          # PostCSS config
├── package.json               # Dependencies
└── README.md                  # This file
```

## Editing Content

All portfolio content is stored in `src/data/portfolio.json`. Simply edit this file to update:

### Profile Section
```json
{
  "profile": {
    "name": "Your Name",
    "shortName": "Short Name",
    "tagline": "Your professional tagline",
    "role": "Your job title",
    "specialization": "Your specialty",
    "location": "Your location",
    "yearsOfExperience": 10,
    "bio": "Your bio paragraph",
    "avatarSvg": "<svg>...</svg>",
    "social": {
      "github": "https://github.com/...",
      "linkedin": "https://linkedin.com/...",
      "email": "your.email@example.com",
      "phone": "+1 (555) 123-4567",
      "website": "https://example.com"
    }
  }
}
```

### Skills
```json
{
  "skills": {
    "categories": [
      {
        "name": "Backend",
        "items": ["Node.js", "Python", "Go", ...]
      },
      ...
    ]
  }
}
```

### Experience
```json
{
  "experience": [
    {
      "company": "Company Name",
      "role": "Your Role",
      "period": "2022 - Present",
      "location": "City, State",
      "summary": "Brief summary of role",
      "highlights": [
        "Achievement 1",
        "Achievement 2",
        "Achievement 3"
      ]
    },
    ...
  ]
}
```

### Projects
```json
{
  "projects": [
    {
      "id": "1",
      "title": "Project Title",
      "subtitle": "Short subtitle",
      "description": "Detailed description",
      "stack": ["React", "Node.js", ...],
      "role": "Your role",
      "year": 2024,
      "link": "https://github.com/...",
      "image": "https://image-url.com/image.jpg",
      "highlight": true
    },
    ...
  ]
}
```

Note: Leave `link` empty (`""`) to hide the LIVE PROJECT button. Provide `image` URL or leave empty for dark placeholder.

### Testimonials
```json
{
  "testimonials": [
    {
      "id": "1",
      "quote": "Testimonial text",
      "name": "Person Name",
      "role": "Their role/title",
      "avatarColor": "from-pink-400 to-rose-600"
    },
    ...
  ]
}
```

### Education
```json
{
  "education": [
    {
      "school": "University Name",
      "degree": "BS/MS",
      "field": "Computer Science",
      "year": 2020,
      "details": "Any additional details"
    },
    ...
  ]
}
```

## Customization Guide

### Colors
Edit `tailwind.config.ts` to change the color scheme:

```typescript
theme: {
  extend: {
    backgroundColor: {
      dark: '#0C0C0C',  // Background
    },
    colors: {
      chrome: '#BBCCD7',  // Headline gradient (light)
      silver: '#646973',  // Headline gradient (dark)
    },
  },
}
```

To change the button gradient, edit `src/index.css`:
```css
.gradient-accent {
  background: linear-gradient(135deg, #A78BFA, #EC4899, #F97316);
}
```

### Fonts
The portfolio uses the **Kanit** font family from Google Fonts. To change:

1. Edit `index.html` link tag
2. Update `tailwind.config.ts` fontFamily

### Animations
All animations use **Framer Motion**. Adjust animation properties in component files (e.g., `transition={{ duration: 0.8 }}`).

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build locally
```

## Browser Support

- Chrome/Chromium (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## Performance

- ✅ Fully responsive design
- ✅ Optimized images with lazy loading
- ✅ Smooth animations (60fps)
- ✅ Respects `prefers-reduced-motion`
- ✅ No broken links for empty social/project URLs
- ✅ Semantic HTML for accessibility

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **lucide-react** - Icons

## Tips

- Reorder projects by setting `highlight: true` on featured projects (they appear first)
- Hide social links by omitting them from the profile object
- Use professional images for projects (1200x800px recommended)
- Keep bios and descriptions concise
- Test responsive design by resizing your browser

## License

MIT

---

**Built with ❤️ using modern web technologies**
