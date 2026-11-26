# MN STERLING website prototype

A static HTML, CSS and JavaScript multi-page-style website prototype.

## Run locally
1. Extract the ZIP (if using the ZIP).
2. Open `index.html` in a modern browser.
3. Internet access is needed for the remote Unsplash images, Google Fonts and sample video footage.

## Pages
- Home
- About
- Our Services overview
- Eight individual service detail pages
- Selected Work
- Properties
- Contact

Navigation uses hash routes, so this can be previewed without a build step or server.

## Replace later
- The contact email `hello@yourdomain.com` is a placeholder.
- Property gallery images are temporary Unsplash images. Replace the three gallery image URLs in `index.html` with your own property photography.
- Service and portfolio imagery can be replaced by changing image URLs in `script.js` and `index.html`.
- The contact form currently prepares an email using `mailto:`. Connect Formspree, Resend, a custom API or another form handler before production launch.
- Video files are hosted remotely as demo footage. Replace the `<source>` URLs with licensed studio footage before launch.

## Notes
This is a visual prototype, not yet a React application. It has responsive navigation, page transitions, scroll reveal animations, image hover motion, individual service routes and a preselected contact interest from the “Let's collaborate” links.
