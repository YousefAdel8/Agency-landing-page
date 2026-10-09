# Frontend Mentor — Sunnyside Agency Landing Page

This is my solution to the [Sunnyside Agency Landing Page challenge](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef) on Frontend Mentor.

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle the mobile navigation menu open and closed

### Screenshot

> Add a screenshot of your finished project here. You can use a tool like [FireShot](https://getfireshot.com/) or just take a browser screenshot and drop it in.

### Links

- **Live site:** _Add your deployed URL here_
- **Challenge page:** https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef

---

## Built with

- Semantic HTML5
- CSS Modules (scoped, component-level styles)
- [Bootstrap 5](https://getbootstrap.com/) — used for the responsive navbar and utility classes
- [React 19](https://react.dev/) with JSX
- [Vite](https://vite.dev/) — development and build tooling
- Mobile-first responsive design
- Flexbox and Bootstrap grid for layout

---

## Project structure

The page is split into focused React components, each with its own CSS Module:

| Component | What it renders |
|---|---|
| `HeroSection` | Full-viewport hero with navbar, headline, and arrow |
| `EggSection` | "Transform your brand" text + image split |
| `StandoutSection` | "Stand out to the right audience" text + image split |
| `GraphicSection` | Graphic design and photography full-bleed image cards |
| `TestimonialsSection` | Three client testimonials with avatars |
| `FourPicturesSection` | 2×2 image gallery grid |
| `FooterSection` | Logo, nav links, and social icons |

---

## What I learned

### Responsive image sections with Bootstrap grid

Using Bootstrap's `order-md-*` utilities to flip the order of image and text columns between mobile and desktop saved me from writing custom media queries for that specific layout pattern. I found it cleaner than relying on `flex-direction: row-reverse` inside a media query.

### CSS Modules keep styles predictable

Scoping styles to each component meant I never had to worry about class names clashing between sections. It also made it easier to understand which styles belonged to which part of the page when debugging.

### Text overlaid on background images

The `GraphicSection` and `HeroSection` both needed text positioned over a background image. I used `background-image` on the container with `display: flex` and `align-items: flex-end` to push the text toward the bottom of the image — something I want to practice more with different image sizes.

### Mobile navigation toggle

Bootstrap's `navbar-toggler` and `collapse` classes handled the show/hide behaviour without needing custom JavaScript. Understanding when a CSS/Bootstrap solution is enough versus when you need JS was a useful distinction to practise here.

---

## Continued development

- **Accessibility:** I want to revisit the navbar and confirm it's fully keyboard-navigable and that the toggle button has a clear visible focus state.
- **CSS custom properties:** Most colours are repeated across modules. Moving them into a single `:root` block in a global stylesheet would make theme changes easier.
- **Responsive images:** The desktop and mobile image assets from the design kit are different files. I'd like to add `<picture>` elements or CSS media queries on the `background-image` to serve the right size at the right breakpoint.
- **Hover states:** I completed the layout but want to go back and add all the hover effects specified in the active-states design file.

---

## Useful resources

- [Bootstrap Navbar docs](https://getbootstrap.com/docs/5.3/components/navbar/) — helped me understand the toggler and collapse behaviour
- [MDN — CSS background-image](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image) — reference for the image section technique
- [CSS-Tricks — A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) — quick reference I kept open while working through the layouts

---

## Author

- Frontend Mentor — [@your-username](https://www.frontendmentor.io/profile/your-username)
