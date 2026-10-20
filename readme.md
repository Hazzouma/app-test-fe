# app-test-fe

A React + Vite project built with TypeScript.

## Prerequisites

- Node.js 24 or higher
- npm 10.9.2 or higher

## Installation

### Step 1: Install Dependencies

```bash
npm install
```

This will install all dependencies listed in `package.json` and create a `node_modules` folder.

### Step 2: Verify Installation

Run the type-check to ensure everything is set up correctly:

```bash
npm run type-check
```

## Available Scripts

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
├── index.html              # HTML entry point
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
├── src/
│   ├── App.tsx             # Main React component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
└── package-lock.json       # Dependency lockfile
```

## Development

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Build

Create a production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

## License

MIT
