# Copilot Instructions for AI Agents

## Project Overview
- This is a Next.js backend project using the `/src/app` directory structure and TypeScript.
- The backend exposes API routes (see `src/app/movies/route.ts`) and uses file-based routing.
- The main entry for global styles and layout is in `src/app/globals.css` and `src/app/layout.tsx`.

## Key Patterns & Architecture
- **API Routes:** Place API logic in `src/app/[route]/route.ts`. Example: `src/app/movies/route.ts` handles movie-related endpoints.
- **Database/Mock Data:** Data for endpoints is often imported from local files (see `src/app/movies/db.ts`).
- **App Directory:** All pages and API routes live under `src/app`. Use subfolders for feature separation.
- **TypeScript:** All logic and components use TypeScript. Prefer type safety and explicit types for API responses.
- **Global Styles:** Use `globals.css` for shared styles across the app.

## Developer Workflows
- **Start Dev Server:** Use `npm run dev` (or `yarn dev`, `pnpm dev`, `bun dev`).
- **Hot Reload:** Changes in `src/app` auto-update the running app.
- **Edit Main Page:** Modify `src/app/page.tsx` for the root page.
- **API Testing:** Test endpoints by running the dev server and using tools like Postman or browser fetch to `/api/[route]`.

## Conventions & Practices
- **File-based Routing:** Route names and folder structure define API/page endpoints.
- **No Custom Build/Test Scripts:** Use standard Next.js commands unless otherwise specified.
- **No External DB:** Data is currently local (see `db.ts`).
- **Minimal Custom Config:** See `next.config.ts` and `eslint.config.mjs` for project-specific tweaks.
- **TypeScript Strictness:** Use explicit types for function signatures and API responses.

## Integration Points
- **Next.js:** Core framework for routing, API, and rendering.
- **No external services** are integrated by default; add them in new folders under `src/app` as needed.

## Examples
- To add a new API route for books:
  - Create `src/app/books/route.ts` and `src/app/books/db.ts`.
  - Export handler functions from `route.ts` using Next.js API conventions.

## References
- Main API route example: `src/app/movies/route.ts`
- Data source example: `src/app/movies/db.ts`
- Main page: `src/app/page.tsx`
- Global styles: `src/app/globals.css`
- Project config: `next.config.ts`, `eslint.config.mjs`

---

If any conventions or workflows are unclear, please ask for clarification or provide feedback to improve these instructions.