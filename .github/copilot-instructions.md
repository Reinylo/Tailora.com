# Copilot Instructions for AI Agents

## Project Overview
This is a static website project consisting of multiple HTML pages, a shared CSS stylesheet (`style.css`), a JavaScript file (`script.js`), and an `images/` directory containing assets. There is no build system, backend, or package management—changes are reflected immediately in the browser.

## Key Files & Structure
- `index.html`: Main landing page. Entry point for navigation.
- Other HTML files: Each represents a distinct section (e.g., `contact.html`, `Team.html`, `premium.html`).
- `style.css`: Global styles for all pages. Patterns: class-based styling, some inline styles in HTML.
- `script.js`: Handles all client-side interactivity. No frameworks detected; vanilla JS only.
- `images/`: Contains all static assets, including subfolders for app-specific images.

## Development Workflow
- **Edit HTML/CSS/JS directly**; changes are live when reloaded in the browser.
- **No build or test commands**; manual browser refresh is the main workflow.
- **Debugging**: Use browser DevTools (F12) for inspecting elements, console logs, and network activity.
- **No external dependencies**: All code is local; no npm, pip, or package manager.

## Project-Specific Patterns
- **Navigation**: Each HTML file is self-contained; navigation is via `<a>` tags or buttons linking to other pages.
- **Asset Usage**: Reference images using relative paths (e.g., `images/logo.png`).
- **Styling**: Prefer updating `style.css` for global changes. Inline styles are used sparingly.
- **JavaScript**: All scripts are in `script.js`. No modules or imports; use global functions and variables.
- **Responsiveness**: Check for media queries in `style.css` for mobile support.

## Integration Points
- **No API calls or backend integration** detected.
- **No third-party libraries** (e.g., jQuery, Bootstrap) in use.

## Conventions
- **File Naming**: Use PascalCase for HTML files (e.g., `Team.html`), lowercase for assets and scripts.
- **Images**: Store all images in `images/` or its subfolders. Use descriptive names.
- **No automated tests**: Manual verification only.

## Example Patterns
- To add a new page: Duplicate an existing HTML file, update content, and link it from `index.html`.
- To add a new image: Place it in `images/`, then reference it in HTML using `<img src="images/yourimage.png">`.
- To add interactivity: Write functions in `script.js` and call them from HTML event handlers.

## Key Directories
- `/images/`: All static assets
- `/app/` (inside images): App-specific images

---

**If you need to automate workflows, add a README or instructions file to document new conventions.**
