# AGENTS.md

## Cursor Cloud specific instructions

### Project overview

ShopFarm is a static one-page marketing website (HTML + CSS + SVG). There is no build step, no bundler, no JavaScript framework, no backend, and no database.

### Development server

Run `python3 -m http.server 8080` from the workspace root to serve the site locally at `http://localhost:8080/`.

### Lint / Test / Build

- **Lint**: No linter is configured. HTML and CSS can be validated manually or with external tools like `npx htmlhint index.html` if installed.
- **Tests**: No automated test framework. Verify by opening the site in a browser and checking all sections render correctly.
- **Build**: None required — the site is plain HTML/CSS served as-is.

### Key files

| File | Purpose |
|------|---------|
| `index.html` | Single-page site structure |
| `styles.css` | All styling (CSS custom properties, responsive grid) |
| `assets/folk-art-chicken.svg` | Decorative SVG graphic |

### Gotchas

- External resources (Google Fonts, Unsplash images) require internet access. The site renders without them but will lack the custom font and images.
- The contact form has no backend `action`; it submits as a GET with query params to the same page (presentational only).
