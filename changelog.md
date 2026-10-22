# Changelog

## [Unreleased]

### Added
- TypeScript configuration (`tsconfig.json`) for type-safe development
- Vite configuration with React plugin (`vite.config.ts`)
- Package.json with TypeScript, React, and Vite dependencies
- Build scripts: `dev`, `build`, `preview`, `type-check`
- Source directory structure (`src/`)
- CSS styling file (`src/index.css`)
- HTML entry point (`index.html`)
- npm package manager (switched from Yarn Berry due to Windows compatibility)
- Package lockfile (`package-lock.json`) for dependency management
- ESLint configuration (`eslint.config.js`) for code quality
- Jest configuration (`jest.config.ts`) for testing
- Test scripts with Jest runner
- CSS module type declarations (`src/index.css.d.ts`)
- React 19 upgrade with latest features and improvements

### Changed
- Converted project to TypeScript from JavaScript
- Added type definitions for React and React DOM
- Configured Vite bundler with TypeScript support
- Switched from Yarn Berry 4.18.1 to npm@10.9.2 for Windows compatibility
- Added `\"type\": \"module\"` to package.json for ESM support
- Upgraded React from v18 to v19.3.0
- Added ESLint and Jest development dependencies

### Technical Details
- **TypeScript**: ^5.8.2
- **React**: ^19.3.0
- **Vite**: ^8.3.4
- **@vitejs/plugin-react**: ^6.1.2
- **npm**: ^10.9.2
- **ESLint**: ^9.34.0
- **Jest**: ^30.5.2