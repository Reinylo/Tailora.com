# Tailora Website - AI Coding Instructions

## Project Overview
Tailora is a custom clothing design app that connects tailors, suppliers, and customers. This is the marketing website built with vanilla HTML, CSS, and JavaScript featuring scroll-triggered animations and responsive design.

## Architecture & Key Files

### Core Structure
- **`index.html`** - Main landing page with full-featured animations and content sections
- **`style.css`** - Single comprehensive stylesheet handling all styling and animations
- **`script.js`** - Vanilla JavaScript for scroll animations, interactive elements, and UI state
- **`images/`** - All visual assets including GIFs, SVGs, PNGs for features and branding

### Page States
Most secondary pages (`contact.html`, `premium.html`, `tailoraFinder.html`, etc.) are placeholder stubs with minimal content - the main implementation is in `index.html`.

## Development Patterns

### Scroll-Based Animation System
The site uses scroll event listeners to trigger animations at specific scroll positions:
```javascript
window.addEventListener("scroll", () => {
    if (window.scrollY >= 200) {
        // Trigger animations and style changes
    }
});
```
- Different scroll thresholds for desktop (`>= 913px`) vs mobile
- Feature images animate with `left` position changes
- CSS classes toggle between `hidden`, `animate`, and `normal` states

### Responsive Design Approach
- Single mobile breakpoint at `913px` using `@media (max-width: 913px)`
- Desktop-first design with mobile overrides
- Zoom-based scaling: `zoom: 89%` on body, various zoom values for sections
- Flexbox layouts with percentage-based gaps and positioning

### CSS Animation Conventions
- **Wave SVGs**: Complex animated paths using `@keyframes pathAnim-*` with percentage-based transformations
- **Floating elements**: `floating` animation for 2.5s infinite ease-in-out
- **Text reveals**: `textFadeIn` with `translateX` transforms and opacity changes
- **Scrolling reviews**: `scrollLeft` animation with `translateX` for horizontal scrolling

### Interactive Elements
- FAQ accordion with `display: none/flex` toggle on click
- Logo hover states switching between static and animated GIF versions
- Review carousel with play/pause toggle using CSS class switching
- Gradient backgrounds using CSS `linear-gradient()` extensively

## Asset Organization
- **Logos**: Multiple formats - `logo.svg`, `logoWhite.svg`, `LogoAnimated.gif`, `logoIcon.png`
- **Feature demos**: `map.gif`, `AR.gif`, `Create.gif` for app feature visualization
- **Social icons**: `insta.svg`, `linkedin.svg` with hover states

## Styling Philosophy
- Heavy use of CSS custom properties through inline gradients and shadows
- Color scheme: Primary greens (`#466e5a`, `#46636e`), accent purples (`#c461a8`, `#743c7c`)
- Typography: Montserrat and Poppins fonts via Google Fonts
- Extensive use of `backdrop-filter`, `box-shadow`, and `filter` effects

## Mobile Considerations
- Aggressive zoom scaling for different screen sizes
- Different scroll trigger points for mobile vs desktop
- Simplified layouts with `flex-direction: column` on mobile
- Hidden decorative elements (`#PhoneFloat`) on small screens

When editing this codebase, maintain the established scroll-animation patterns, respect the responsive breakpoints, and preserve the visual design language of gradients and smooth transitions.
