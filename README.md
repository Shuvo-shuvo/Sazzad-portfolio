# Sazzad-portfolio

This repository contains a responsive personal portfolio website built with plain HTML, CSS and JavaScript.

The site uses dynamic section loading (fetching partial HTML files from `sections/`) and supports a light/dark theme toggle.

Live demo: https://shuvo-shuvo.github.io/sazzad-portfolio/

## Features

- Responsive layout (desktop → mobile)
- Theme toggle (dark / light) with preference saved to localStorage
- Sections loaded dynamically from `sections/*.html`
- Clean, modern styling and accessible structure

## Tech

- HTML5, CSS3, JavaScript (vanilla)
- Font Awesome & Ionicons for icons

## Project structure

```
Sazzad-portfolio/
├── Index.html         # Main entry (note: capitalized 'Index.html')
├── style.css          # Site styling (CSS variables for themes)
├── script.js          # Loads sections and handles theme toggle
├── sections/          # Partial HTML files for each section (about, education, projects, ...)
├── assets/            # Documents (e.g. CV.pdf)
├── img/               # Images
└── README.md          # This file
```

## Open locally (fast)

Option 1 — Open directly in browser

1. Double-click `Index.html` to open it in your browser. (Works for most modern browsers.)

Option 2 — Use a simple static server (recommended)

If you have Python 3 installed (recommended):

```bash
cd 'C:/Users/user/Downloads/Sazzad-portfolio'
python -m http.server 5501
# Open http://127.0.0.1:5501 in your browser
```

Or use Node's http-server (requires Node.js):

```bash
npx http-server -p 5501
```

Or use VS Code Live Server extension: right-click `Index.html` → Open with Live Server.

## Publish to GitHub (quick)

1. Create a new repository on GitHub (or use `gh repo create`).
2. From your project folder (after installing Git):

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<USERNAME>/<REPO>.git
git push -u origin main
```

3. Enable GitHub Pages in the repository Settings → Pages → Source: `main` branch (root). Wait a few minutes for the site to publish.

## Notes & gotchas

- The site dynamically fetches `sections/<id>.html` (for example `sections/projects.html`). Make sure filenames match the IDs used in `Index.html` and `script.js`.
- The CV link points to `assets/CV.pdf`. If you move or rename that file update the href in `Index.html`.

## Remove editor workspace settings

This repo intentionally does not rely on any editor-specific workspace settings. If you previously had a `.vscode/` folder, it has been removed and is ignored.

## Contributing

Small fixes and improvements are welcome. Open an issue or submit a PR.

## License

Use this project freely for learning and personal portfolios. Add a license file if you want to specify reuse terms.

---

If you want, I can also:
- Add a `.gitignore` (recommended) that excludes `.vscode/` and other local files
- Create a short deployment script for GitHub Pages
- Add a `CNAME` file if you have a custom domain

Tell me which one you'd like next and I'll add it.
# Sazzad-portfolio
