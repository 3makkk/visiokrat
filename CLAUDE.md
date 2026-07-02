# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Visiokrat is a static web page. Plain HTML, CSS, and JavaScript with **no build step and no dependencies** — files are served exactly as written.

## Structure

- `index.html` — the page markup and the single entry point.
- `styles.css` — all styling. Colors, spacing, and the content width live in the `:root` CSS custom properties at the top; change those first before adding new rules.
- `script.js` — vanilla JS, loaded at the end of `<body>`, so the DOM is ready without a `DOMContentLoaded` wrapper.

There is no framework, bundler, or transpiler. Keep it that way unless the task explicitly calls for tooling — adding a build step changes how the project is developed and served.

## Preview

No build. Open `index.html` directly in a browser, or serve the folder to make relative paths and `fetch` behave:

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

## Conventions

- Reference assets with root-relative or relative paths — there is no dev server rewriting URLs.
- Nav links point to in-page section anchors (`#about`, `#contact`); new sections need a matching `id` and a nav link.
