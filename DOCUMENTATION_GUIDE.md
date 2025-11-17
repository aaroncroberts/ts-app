# Modern Documentation Guide

## � Vercel Documentation Architecture

This project uses a modern Next.js documentation site deployed to Vercel,
replacing traditional static site generators with a faster, more maintainable
approach.

### 📁 Documentation Site Structure

```text
docs-site/
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── page.tsx           # Landing page
│   │   ├── getting-started/   # Installation & setup
│   │   ├── api/              # API reference
│   │   ├── examples/         # Usage examples
│   │   └── layout.tsx        # Site layout & navigation
│   ├── components/           # Reusable React components
│   │   ├── ui/               # UI primitives (Button, Card, etc.)
│   │   ├── CodeBlock.tsx     # Syntax highlighting
│   │   ├── Navigation.tsx    # Sidebar navigation
│   │   └── Header.tsx        # Site header
│   └── lib/                  # Utilities & configurations
│       ├── constants.ts      # Site configuration
│       └── utils.ts          # Helper functions
├── public/                   # Static assets
│   ├── favicon.ico
│   └── images/
├── out/                      # Static export (production)
├── tailwind.config.js        # Tailwind CSS configuration
├── next.config.js           # Next.js configuration
└── package.json             # Independent npm dependencies
```

### 🎯 Key Features

- **Next.js 14** with App Router for modern React patterns
- **Tailwind CSS** for consistent, responsive design
- **Framer Motion** for smooth animations and transitions
- **Lucide Icons** for consistent iconography
- **Static Export** for optimal Vercel deployment
- **Dark Theme** with gradient accents and modern styling

## 🛠️ Local Development Workflow

### Quick Start

```bash
# Start documentation development server
pnpm docs:dev

# Or use VS Code Task: Ctrl+Shift+P → "Tasks: Run Task" → "Docs: Dev Server"
```

### Development Commands

| Command | Description |
|---------|-------------|
| `pnpm docs:dev` | Start dev server on `http://localhost:3001` |
| `pnpm docs:build` | Build production site to `out/` directory |
| `pnpm docs:start` | Serve production build locally |
| `cd docs-site && npm install` | Install docs-specific dependencies |
| `cd docs-site && npm run lint` | Lint documentation code |

### File Organization

- **Pages**: Add new pages in `src/app/[page-name]/page.tsx`
- **Components**: Reusable components in `src/components/`
- **Styling**: Tailwind classes with custom CSS in globals.css
- **Static Assets**: Images and files in `public/`
- **Configuration**: Site settings in `src/lib/constants.ts`

### Deployment Process

1. **Development**: Make changes locally using `pnpm docs:dev`
2. **Testing**: Build production version with `pnpm docs:build`
3. **Commit**: Push changes to GitHub repository
4. **Auto-Deploy**: Vercel automatically deploys to production
5. **Preview**: Pull requests get their own preview URLs

## 🎯 Documentation Pages Structure

### 1. **Landing Page** (`src/app/page.tsx`)

- Hero section with animated gradients
- Feature highlights with icons
- Quick start code example
- Navigation to detailed sections
- Call-to-action buttons

### 2. **Getting Started** (`src/app/getting-started/page.tsx`)

- Installation instructions with copy buttons
- Basic configuration examples
- First working example
- Common usage patterns
- Troubleshooting section

### 3. **API Reference** (`src/app/api/page.tsx`)

- Function documentation with TSDoc integration
- Interactive code examples
- Parameter descriptions
- Return type information
- Usage examples for each method

### 4. **Examples** (`src/app/examples/page.tsx`)

- Real-world usage scenarios
- Copy-to-clipboard code blocks
- Integration patterns
- Best practices
- Advanced recipes

### 5. **Migration Guides** (Future)

- Version upgrade instructions
- Breaking changes documentation
- Deprecation notices
- Migration scripts and tools

## 📝 Content Best Practices

### TSDoc Comments

```typescript
/**
 * Generates a personalized greeting message with customizable options.
 * 
 * @example
 * ```typescript
 * // Basic usage
 * const message = greetAdvanced("Alice");
 * console.log(message); // "Hello, Alice!"
 * 
 * // With options
 * const formalMessage = greetAdvanced("Dr. Smith", {
 *   greeting: "Good morning",
 *   punctuation: "."
 * });
 * console.log(formalMessage); // "Good morning, Dr. Smith."
 * ```
 * 
 * @param name - The name of the person to greet
 * @param options - Configuration options for the greeting
 * @returns A formatted greeting message
 * 
 * @since 1.0.0
 * @category Core Functions
 */
```

### README Structure

```markdown
# Library Name

Brief description and value proposition.

## 🚀 Quick Start

\`\`\`bash
npm install @aaron/ts-library
\`\`\`

\`\`\`typescript
import { greet } from '@aaron/ts-library';
console.log(greet('World')); // Hello, World!
\`\`\`

## 📚 Documentation

- [API Reference](https://your-username.github.io/ts-app/)
- [Getting Started Guide](./docs/getting-started.md)
- [Examples](./docs/examples/)

## 🛠️ Development

Installation, building, testing instructions.

## 📄 License

License information.
```

## 🎨 Modern Design System

### Tailwind CSS Configuration

The documentation site uses a custom Tailwind configuration with:

```javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',      // Blue
        secondary: '#8b5cf6',     // Purple  
        accent: '#06b6d4',        // Cyan
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      }
    }
  }
}
```

### Component Design Patterns

```typescript
// Consistent button styling
const Button = ({ children, variant = 'primary' }) => (
  <button className={`
    px-4 py-2 rounded-lg font-medium transition-all
    ${variant === 'primary' 
      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
      : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
    }
  `}>
    {children}
  </button>
);

// Code block with copy functionality
const CodeBlock = ({ code, language }) => (
  <div className="relative">
    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
      <code className={`language-${language}`}>{code}</code>
    </pre>
    <CopyButton code={code} />
  </div>
);
```

## 🔗 Development Workflow Integration

### VS Code Development Setup

The documentation site integrates seamlessly with VS Code:

```json
// .vscode/tasks.json - Available Tasks
{
  "label": "Docs: Dev Server",
  "command": "pnpm docs:dev",
  "isBackground": true,
  "detail": "Start documentation development server on http://localhost:3001"
}
```

#### VS Code Tasks Available

- **Docs: Dev Server** - Start development server with hot reload
- **Docs: Build Production** - Build optimized static site
- **Docs: Start Production** - Serve production build locally
- **Docs: Install Dependencies** - Install docs-site npm packages
- **Docs: Lint** - Lint documentation code with ESLint

#### Launch Configurations

- **Debug Docs Server** - Start server with debugging capabilities  
- **Launch Docs in Browser** - Auto-opens browser when server is ready

### GitHub Integration

```markdown
<!-- README badges for modern docs -->
[![Documentation](https://img.shields.io/badge/docs-vercel-blue)](https://ts-library-docs.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-14.2.33-black)](https://nextjs.org/)
[![Vercel](https://img.shields.io/badge/Docs-Vercel-000000)](https://ts-library-docs.vercel.app/)
```

### Deployment Automation

- **Vercel Auto-Deploy** - Deploys on every main branch commit
- **Preview Deployments** - Generated for all pull requests
- **Branch Deployments** - Each branch gets its own preview URL
- **Build Optimization** - Automatic static export and optimization

### Cross-Platform Linking

- npm package.json homepage points to live docs
- GitHub repository description links to documentation
- Internal navigation between all documentation sections
- API examples link directly to relevant functions
- Getting started guide references specific API methods
