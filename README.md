# blank-next-app

A minimal Next.js app router template.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [DaisyUI v5](https://daisyui.com)
- [@trenaryja/ui](https://github.com/trenaryja/ui) (ThemeProvider)
- [Prettier](https://prettier.io) + [@fullstacksjs/eslint-config](https://github.com/fullstacksjs/eslint-config)

## Usage

### Standalone

Use the GitHub template button, or via CLI:

```sh
gh repo create my-app --template trenaryja/blank-next-app --clone
cd my-app
bun install
bun dev
```

### Inside a Turborepo

```sh
# 1. Copy the template into your apps/ folder (no git history)
bunx degit trenaryja/blank-next-app apps/my-app

# 2. Update the name in apps/my-app/package.json
#    "name": "@repo/my-app"

# 3. Install from the monorepo root
bun install
```

The app is auto-discovered via `apps/*` in your workspace config and inherits the root `turbo.json` pipeline.
