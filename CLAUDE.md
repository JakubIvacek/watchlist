# WatchList

A Vue 3 web app for tracking movies and TV shows — save to a watchlist, move to stash when watched, rate and review.

## Stack

- **Vue 3** — Composition API with `<script setup lang="ts">`
- **TypeScript**
- **Pinia** — state management (`src/stores/`)
- **Vue Router 5** — client-side routing (`src/router/index.ts`)
- **Bootstrap 5** — grid and flex utilities only (layout, not design)
- **Vite** — build tool

## Dev commands

```bash
npm run dev      # start dev server (http://localhost:5173)
npm run build    # type-check + production build
npm run lint     # oxlint + eslint with auto-fix
```

## Design system

All custom styles live in `src/assets/main.css`. Bootstrap is only used for grid (`col-*`, `row`, `container`) and flex utilities (`d-flex`, `gap-*`).

**Colors** (CSS vars defined in `:root`):
- `--bg` `#0d0d0d` — page background
- `--bg-card` `#161616` — card / footer background
- `--bg-raised` `#1e1e1e` — inputs, nav search, raised elements
- `--border` `#2a2a2a` — borders throughout
- `--accent` `#f5c518` — yellow accent (buttons, stars, dots, hovers)
- `--text-1` `#fff` — primary text
- `--text-2` `#9a9a9a` — secondary / muted text

**Fonts** (loaded via Google Fonts CDN in `index.html`):
- `Oswald` — headings, page titles, card titles, nav logo
- `Inter` — body text, inputs, buttons

**Icons** — Font Awesome 6 CDN (`fas` / `fab` prefix classes)

**Key CSS classes:**
- `.btn-accent` / `.btn-ghost` — the two button styles (do not use Bootstrap `.btn-warning`)
- `.input-dark` / `select.input-dark` — form inputs and selects
- `.section-card` — filter panel background card
- `.movie-card` — vertical card (200px, used in WatchView)
- `.movie-card-h` — horizontal card (full-width flex, used in StashView)
- `.page-title` — large Oswald heading with `.dot` span for yellow period
- `.feature-card` — home page feature card with background image overlay

## Project structure

```
src/
  assets/
    main.css          # all custom styles + design system
    base.css          # unused (kept as CSS var reference)
  components/
    AppNav.vue        # sticky nav: logo + links + search + lang + user icon
    AppFooter.vue     # footer with contact modal
    MovieCard.vue     # :horizontal prop → horizontal (stash) vs vertical (watchlist)
  views/
    HomeView.vue      # landing: hero title + poster strip + feature cards
    StashView.vue     # watched movies grid (horizontal MovieCards, filter panel)
    WatchView.vue     # watchlist management (vertical MovieCards)
    CloseupView.vue   # movie detail page
    LoginView.vue     # auth form
    SignupView.vue    # auth form
    AboutView.vue     # about page
    AdminView.vue     # admin panel
  stores/
    movies.ts         # Movie + Watchlist types, mock data, stash/watchlist state
    auth.ts           # minimal auth (mock, no real backend)
    counter.ts        # unused Vue template leftover
  router/index.ts     # route definitions
```

## MovieCard usage

```vue
<!-- Horizontal (stash layout) -->
<MovieCard :movie="m" :horizontal="true" :showDetails="true" />

<!-- Vertical (watchlist layout) -->
<MovieCard :movie="m" :showAddToStash="true" :showRemove="true"
  @addToStash="..." @remove="..." />
```

## Page title pattern

```html
<h1 class="page-title">Stash<span style="color:var(--accent)">.</span></h1>
```

## Feature card backgrounds (HomeView)

- Watchlists card: `/img/header.jpg` (placeholder — replace with cinema image)
- Stash card: `/img/about-us.jpg` (movie poster mosaic — works well permanently)

## Auth

`stores/auth.ts` is a mock — `login(email)` just sets `isLoggedIn = true`. No real backend or token handling.
