# TypeScript Library Monorepo

[![CI](https://github.com/your-username/ts-app/workflows/CI/badge.svg)](https://github.com/your-username/ts-app/actions)
[![Documentation](https://img.shields.io/badge/docs-vercel-blue)](https://ts-library-docs.vercel.app/)
[![npm version](https://img.shields.io/github/package-json/v/your-username/ts-app?filename=packages%2Fts-library%2Fpackage.json)](https://github.com/your-username/ts-app/packages)
[![License](https://img.shields.io/github/license/your-username/ts-app)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.4-blue)](https://www.typescriptlang.org/)
[![pnpm](https://img.shields.io/badge/pnpm-9+-orange)](https://pnpm.io/)
[![Next.js](https://img.shields.io/badge/Next.js-14.2.33-black)](https://nextjs.org/)
[![Vercel](https://img.shields.io/badge/Docs-Vercel-000000)](https://ts-library-docs.vercel.app/)

A professional TypeScript monorepo with pnpm workspaces, featuring a library,
example application, and modern documentation site deployed to Vercel with
comprehensive VS Code integration.

## 📦 Packages

- **@aaron/ts-library**: Core TypeScript library with dual ESM/CJS builds
- **example-app**: Console application demonstrating library usage
- **docs-site**: Modern Next.js documentation website with dark theme

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Build the library
pnpm build

# Run the example app
pnpm start

# Run tests
pnpm test

# Lint code
pnpm lint

# Type check
pnpm typecheck
```

## 🛠️ Development

### Prerequisites

- Node.js 20.12.0+ (use `nvm use` if you have nvm)
- pnpm 9+ (install via `npm install -g pnpm` or `brew install pnpm`)

### Commands

| Command | Description |
|---------|-------------|
| `pnpm build` | Build the @aaron/ts-library package |
| `pnpm clean` | Clean all build artifacts |
| `pnpm lint` | Lint TypeScript and Markdown files |
| `pnpm start` | Run the example console application |
| `pnpm test` | Run all tests with coverage |
| `pnpm typecheck` | Type check the entire workspace |
| `pnpm package` | Build and create package tarball for distribution |
| `pnpm docs:dev` | Serve modern documentation site locally |
| `pnpm docs:build` | Build documentation site for production |

### VS Code Integration

This project includes comprehensive VS Code tasks and launch configurations:

#### Available Tasks (`Ctrl+Shift+P` → "Tasks: Run Task")

- **Docs: Dev Server** - Start documentation development server
- **Docs: Build Production** - Build optimized documentation site  
- **Docs: Start Production** - Start production documentation server
- **Build Library** - Build the TypeScript library
- **Test All** - Run all workspace tests with coverage
- **Lint All** - Lint TypeScript and Markdown files
- **Type Check All** - TypeScript type checking across workspace
- **Clean All** - Clean all build artifacts
- **Package Library** - Create distribution package

#### Launch Configurations (`F5` or Run and Debug panel)

- **Debug Docs Server** - Start docs development server with debugging
- **Launch Docs in Browser** - Auto-opens browser when server is ready

#### Enhanced Settings

- ESLint working directories for all packages
- Proper file associations and formatters  
- Search exclusions for build artifacts
- Emmet support for React development

## 📁 Project Structure

```text
├── .github/workflows/       # GitHub Actions CI/CD
├── .vscode/                 # VS Code tasks, launch configs, settings
├── docs-site/               # Modern Next.js documentation website
│   ├── src/
│   │   ├── app/             # Next.js App Router pages
│   │   ├── components/      # React components  
│   │   └── lib/            # Utilities and configurations
│   ├── public/             # Static assets
│   ├── out/                # Static export build output
│   └── package.json        # Independent npm package
├── packages/
│   ├── ts-library/          # Core library (@aaron/ts-library)
│   │   ├── src/
│   │   ├── dist/            # Built output (ESM + CJS)
│   │   └── package.json
│   └── example-app/         # Example application
│       ├── src/
│       └── package.json
├── pnpm-workspace.yaml      # pnpm workspace configuration
├── pnpm-lock.yaml          # Dependency lock file
├── CHANGELOG.md            # Change tracking
├── DOCUMENTATION_GUIDE.md  # Documentation best practices
├── PACKAGING.md            # GitHub Package Registry guide
└── package.json           # Workspace root
```

## 🧪 Testing

Tests are configured with Jest and include:

- Unit tests for library functions
- Coverage reporting
- TypeScript support via ts-jest

## 📚 Documentation

The library includes comprehensive modern documentation:

### 🌐 Live Documentation Site

**[View Live Docs →](https://ts-library-docs.vercel.app/)**

Built with Next.js 14 and deployed to Vercel with features:

- 🎨 **Modern dark theme** with gradients and animations
- 📱 **Mobile-responsive** design with Tailwind CSS
- ⚡ **Fast performance** with static site generation
- 🔍 **Interactive examples** with copy-to-clipboard functionality
- 🧭 **Clean navigation** with sidebar and breadcrumbs
- 🚀 **Auto-deployment** on every commit to main branch

### 📖 Documentation Structure

- **Getting Started** - Installation and basic usage
- **API Reference** - Complete function documentation
- **Examples** - Real-world usage patterns and recipes
- **Migration Guides** - Version upgrade instructions

### 🛠️ Local Development

```bash
# Start documentation development server (http://localhost:3001)
pnpm docs:dev

# Build documentation site for production
pnpm docs:build

# Start production server locally
pnpm docs:start
```

### 📝 Documentation Standards

- **TSDoc comments** in source code for IntelliSense
- **Interactive examples** in all documentation pages
- **Code snippets** with syntax highlighting
- **Copy-to-clipboard** functionality for all code blocks
- **Responsive design** optimized for all devices

## 📦 Publishing

This project is configured to publish to GitHub Package Registry.
See [PACKAGING.md](./PACKAGING.md) for detailed instructions.

### Quick Publish (GitHub Actions)

1. Go to **Actions** tab in GitHub
2. Select **Manual Package Release** workflow
3. Choose version bump type and add release notes
4. Click **Run workflow**

The workflow will automatically:

- Run quality checks (tests, linting, type checking)
- Build the library
- Publish to GitHub Package Registry
- Create a GitHub release
- Update CHANGELOG.md

## 🛠️ Development Workflow

### Adding Dependencies

```bash
# Add to root (dev dependencies)
pnpm add -D package-name

# Add to specific package
pnpm --filter=@aaron/ts-library add package-name
pnpm --filter=example-app add package-name
```

### Package-Specific Commands

```bash
# Build only the library
pnpm --filter=@aaron/ts-library build

# Test only the library
pnpm --filter=@aaron/ts-library test

# Run commands in all packages
pnpm --recursive build
```

## 🔧 CI/CD

The project includes comprehensive GitHub Actions workflows:

- **CI Pipeline**: Runs on every push/PR with multi-node testing
- **Security Scanning**: CodeQL analysis and dependency auditing  
- **Quality Gates**: PR validation with coverage reporting
- **Manual Publishing**: One-click releases to GitHub Package Registry

## �📋 License

ISC License
