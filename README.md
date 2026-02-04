# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

# Blog Router Demo

This demo app implements a small blog with routing, lazy loading, error boundaries, and a 404 page.

Features:

- Home page with a list of blog posts (title + excerpt)
- Detail page for each post showing full content
- Back navigation (previous page) using the browser history
- 404 fallback page when visiting a non-existent route
- React.lazy + Suspense for lazy loading pages
- React Error Boundary for runtime errors
- A small TanStack Router demo detection page (see `/tan`)

To run locally:

1. Install dependencies: `npm install` (this project uses `react-router-dom` and `@tanstack/react-router`)
2. Start the dev server: `npm run dev`

If network installation for packages fails, ensure you have network/proxy settings set up and re-run `npm install`.
# blog-router
