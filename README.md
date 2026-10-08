# noelsasikanth

Personal portfolio for Noel Sasikanth, Product Engineer. It covers products, experience, skills, and a journal of past work.

**Live:** https://noelsasi.github.io/noelsasikanth/

## Tech stack

- [React 18](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite 5](https://vitejs.dev) for dev server and builds
- [Tailwind CSS 3](https://tailwindcss.com) for styling
- [Framer Motion](https://www.framer.com/motion/) for animation
- [React Router 6](https://reactrouter.com) (`HashRouter`, so routes work on GitHub Pages without server rewrites)
- [Phosphor Icons](https://phosphoricons.com)
- [gh-pages](https://github.com/tschaub/gh-pages) for deployment

## Getting started

Requires Node.js 18+ (developed on Node 20).

```bash
git clone git@github.com:noelsasi/noelsasikanth.git
cd noelsasikanth
npm install
npm run dev
```

The dev server runs at http://localhost:5173/noelsasikanth/.

## Scripts

| Command           | What it does                                              |
| ----------------- | --------------------------------------------------------- |
| `npm run dev`     | Start the Vite dev server with hot reload                 |
| `npm run build`   | Type-check (`tsc -b`) and build to `dist/`                |
| `npm run preview` | Serve the production build locally                        |
| `npm run lint`    | Run ESLint                                                |
| `npm run deploy`  | Build and publish `dist/` to the `gh-pages` branch        |

## Project structure

```
├── public/                  # Static files copied as-is (resume PDF)
├── src/
│   ├── assets/              # Images imported by components
│   ├── components/          # Page sections (Hero, Products, Experience, Skills, Contact, Nav, ...)
│   │   └── ui/              # Shared UI primitives
│   ├── context/             # ThemeContext (light/dark mode)
│   ├── data/portfolio.ts    # All site content lives here
│   ├── pages/               # Route-level pages (Home, Journal list, Journal entry)
│   ├── App.tsx              # Routes
│   └── main.tsx             # Entry point
├── index.html               # HTML shell, meta tags, fonts
├── tailwind.config.js
└── vite.config.ts           # Sets base path for GitHub Pages
```

### Routes

| Path                 | Page                    |
| -------------------- | ----------------------- |
| `#/`                 | Home                    |
| `#/journal`          | Journal index           |
| `#/journal/:slug`    | Single journal entry    |

## Updating content

Most content is plain data in [`src/data/portfolio.ts`](src/data/portfolio.ts), so you rarely need to touch components:

- `products`: product cards (name, description, stack, optional URL)
- `journalEntries`: journal posts. The `slug` becomes the URL (`#/journal/<slug>`), so keep it unique
- `skillGroups`: grouped skill lists
- `experience`: work history
- `education`: education history

To update the resume, replace `public/Noel_Sasikanth_Resume_Frontend.pdf`. If you rename the file, update the links in `src/components/Hero.tsx` and `src/components/Contact.tsx`.

Page title, description, and Open Graph tags are in [`index.html`](index.html).

## Deploying to GitHub Pages

The site is served from the `gh-pages` branch. Vite builds with `base: '/noelsasikanth/'` ([`vite.config.ts`](vite.config.ts)) so asset paths resolve under `https://noelsasi.github.io/noelsasikanth/`.

### One-time setup

You only need to do this once per repository.

1. Push the repo to GitHub at `noelsasi/noelsasikanth`.
2. Run the first deploy (below) so the `gh-pages` branch exists.
3. On GitHub, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
5. Select branch **`gh-pages`** and folder **`/ (root)`**, then click **Save**.

### Deploy

From `master`, with your changes committed:

```bash
npm install          # if dependencies changed
npm run deploy
```

This runs `npm run build` (type-check and Vite build into `dist/`) and then `gh-pages -d dist`, which pushes the contents of `dist/` to the `gh-pages` branch. GitHub Pages picks up the new commit and the site usually updates within a minute or two.

Before deploying, you can check the production build locally:

```bash
npm run build
npm run preview      # http://localhost:4173/noelsasikanth/
```

Also push your source changes so `master` matches what's live:

```bash
git push origin master
```

### Troubleshooting

- **Blank page or 404s for JS/CSS:** the `base` in `vite.config.ts` must match the repository name. If you rename the repo, update `base` to `'/<new-repo-name>/'`. If you deploy to a custom domain or a `<user>.github.io` repo, set it to `'/'`. The resume links in `Hero.tsx` and `Contact.tsx` hardcode `/noelsasikanth/` too, so update them as well.
- **Old version still showing:** hard-refresh the page (Cmd+Shift+R). You can see the deploy status under the repo's **Actions** tab (the "pages build and deployment" workflow).
- **`gh-pages` push fails with auth errors:** make sure your SSH key or credentials can push to `origin`. The `gh-pages` package uses the same git remote.
- **Stale deploy cache:** if a deploy seems to publish old files, clear the cache with `rm -rf node_modules/.cache/gh-pages` and deploy again.
- **Deep links:** the app uses `HashRouter`, so URLs look like `/noelsasikanth/#/journal/...`. This is intentional: GitHub Pages can't rewrite unknown paths to `index.html`, so switching to `BrowserRouter` would break page refreshes on sub-routes.
