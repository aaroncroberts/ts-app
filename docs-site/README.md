# @aaron/ts-library Documentation Site

A modern, interactive documentation website built with Next.js, TypeScript, and Tailwind CSS.

## ✨ Features

- **🎨 Modern Dark Theme**: Tech-savvy design with gradients and animations  
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile
- **⚡ Fast Performance**: Built with Next.js and optimized for speed
- **🔍 Interactive Examples**: Copy-paste ready code samples
- **🎯 Type-Safe**: Full TypeScript integration throughout
- **🚀 Vercel Deployment**: Automatic deployment and preview builds

## 🛠️ Local Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start development server**

   ```bash
   npm run dev
   ```

3. **Open in browser**

   ```
   http://localhost:3001
   ```

### Available Scripts

- `npm run dev` - Start development server on port 3001
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
docs-site/
├── components/           # Reusable React components
│   └── Layout.tsx       # Main layout with navigation
├── pages/               # Next.js pages
│   ├── index.tsx        # Landing page
│   ├── getting-started.tsx  # Installation guide
│   ├── api.tsx          # API reference
│   └── examples.tsx     # Usage examples
├── styles/              # Global styles
│   └── globals.css      # Tailwind CSS + custom styles
├── public/              # Static assets
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── vercel.json          # Vercel deployment config
```

## 🎨 Design System

### Color Palette

- **Primary**: Blue gradient (`#0ea5e9` to `#0284c7`)
- **Accent**: Purple-pink gradient (`#d946ef` to `#c026d3`)
- **Dark**: Slate shades for backgrounds (`#0f172a` to `#1e293b`)

### Components

- **Buttons**: Gradient backgrounds with hover animations
- **Cards**: Semi-transparent with backdrop blur
- **Code blocks**: Syntax highlighted with copy functionality
- **Animations**: Framer Motion for smooth interactions

## 🚀 Deployment

### Automatic Deployment

Documentation automatically deploys to Vercel when:

- Changes are pushed to `main` branch
- Files in `docs-site/` directory are modified

### Manual Deployment

1. **Build the site**

   ```bash
   npm run build
   ```

2. **Deploy to Vercel**

   ```bash
   vercel --prod
   ```

## 🔧 Configuration

### Environment Variables

Create `.env.local` for local development:

```bash
# Optional: Analytics tracking
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### Vercel Configuration

The site uses these Vercel settings in `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "out", 
  "installCommand": "npm install",
  "framework": "nextjs"
}
```

## 📝 Content Management

### Adding New Pages

1. Create new file in `pages/` directory
2. Use the `Layout` component for consistent styling
3. Follow existing patterns for animations and styling

### Updating API Documentation

The API reference in `pages/api.tsx` is manually maintained. Update it when:

- New functions are added to the library
- Function signatures change  
- New interfaces/types are introduced

### Code Examples

Examples are stored in `pages/examples.tsx`. Each example includes:

- TypeScript code sample
- Expected output
- Copy-to-clipboard functionality
- Syntax highlighting

## 🎭 Animations & Interactions

Built with Framer Motion for smooth animations:

- **Page transitions**: Fade in with stagger
- **Scroll animations**: Triggered when elements come into view
- **Hover effects**: Scale and glow transitions
- **Loading states**: Skeleton placeholders

## 📱 Mobile Optimization

- **Responsive navigation**: Collapsible menu on mobile
- **Touch-friendly**: Large tap targets and gestures
- **Performance**: Optimized images and lazy loading
- **Typography**: Readable font sizes across devices

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes in `docs-site/`
4. Test locally with `npm run dev`
5. Submit a pull request

## 📄 License

This documentation site is part of the @aaron/ts-library project and uses the same ISC license.
