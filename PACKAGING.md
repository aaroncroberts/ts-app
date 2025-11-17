# GitHub Package Registry Setup

This document explains how to publish and consume packages from GitHub Package Registry.

## Publishing a Package (Manual Process)

### Option 1: GitHub Actions (Recommended)

1. Go to your repository on GitHub
2. Click **Actions** tab
3. Select **Manual Package Release** workflow
4. Click **Run workflow**
5. Choose your version bump type or provide a custom version
6. Add release notes
7. Click **Run workflow**

This will:

- ✅ Run all quality checks (tests, linting, type checking)
- ✅ Bump the version appropriately
- ✅ Build and publish to GitHub Package Registry
- ✅ Update CHANGELOG.md
- ✅ Create a GitHub release with the package attached
- ✅ Commit version changes back to the repository

### Option 2: Local Publishing

```bash
# 1. Ensure you're authenticated
export NODE_AUTH_TOKEN=your_github_personal_access_token

# 2. Build and test
npm run build
npm test

# 3. Version bump (choose one)
cd packages/ts-library
npm version patch  # or minor, major
# OR set version manually:
# npm version 1.2.3

# 4. Publish
npm publish --registry=https://npm.pkg.github.com
```

## Installing the Package

### 1. Create .npmrc in your project root

```bash
echo "@aaron:registry=https://npm.pkg.github.com" > .npmrc
```

### 2. Authenticate with GitHub

Create a Personal Access Token with `packages:read` permission:

1. GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token with `read:packages` scope
3. Add to .npmrc:

```bash
echo "//npm.pkg.github.com/:_authToken=YOUR_TOKEN_HERE" >> .npmrc
```

### 3. Install the package

```bash
npm install @aaron/ts-library
```

### 4. Use in your code

```typescript
import { greet } from '@aaron/ts-library';

const message = greet('World');
console.log(message);
```

## Package Versions

Available versions can be found at:

- GitHub Packages: `https://github.com/aaron/ts-app/packages`
- Releases: `https://github.com/aaron/ts-app/releases`

## Troubleshooting

### Authentication Issues

- Ensure your GitHub token has `packages:read` permission
- Check that your .npmrc is correctly configured
- Verify the scope matches: `@aaron:registry=...`

### Installation Issues

- Make sure you're using the correct package name: `@aaron/ts-library`
- Check that the version exists in the registry
- Try clearing npm cache: `npm cache clean --force`

### Publishing Issues

- Ensure you have `packages:write` permission
- Verify you're authenticated with the correct account
- Check that the package name doesn't conflict with existing packages
