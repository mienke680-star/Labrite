# Labrite

Corporate website for Labrite CC — Coal Laboratory, Equipment & Instruments, Chemicals,
Repairs & Maintenance, and Agencies & Distribution, presented under one master Labrite
identity.

Static site. No framework, no bundler, no runtime dependencies — plain HTML, CSS and
vanilla JS, generated from a small set of reusable page/data modules by a zero-dependency
Node build script. Built against the supplied Labrite Brand Identity & Website Style Guide.

## Build & preview

Requires Node 18+ (no `npm install` needed — the build has zero dependencies).

```bash
npm run build   # generates the static site (index.html, about.html, equipment/, ...)
npm start       # serves the generated site at http://localhost:8080 for local preview
```

Run `npm run build` again after editing anything under `src/` or `assets/` — the generated
`.html` files at the repo root are build output, not hand-edited directly.

## Project structure

```
src/
  data/
    nav.mjs          Navigation, footer business-area links, equipment ranges, the
                      LinkedIn URL — single source of truth, imported everywhere.
    products.mjs      The 12-product equipment catalogue (see below).
  partials/
    render.mjs         renderHeader / renderFooter / renderLogo / renderLinkedInLink /
                        mediaPlaceholder / renderPage — every page is assembled from these,
                        so header, footer, nav and the LinkedIn link are defined exactly once.
  pages/               One module per hand-authored page (Home, About, Coal Laboratory,
                        Chemicals, Repairs & Maintenance, Agencies, Contact, Accreditation,
                        legal pages, the Equipment & Instruments index).
  templates/           Data-driven templates: one renders each equipment category page,
                        the other renders each of the 12 product detail pages.
scripts/
  build.mjs            Renders every page module to a static .html file at its final URL.
  serve.mjs            Minimal static file server for local preview only.
assets/
  css/styles.css       The whole design system (palette, type scale, components).
  js/main.js           Mobile nav toggle, scroll reveal, equipment filter, contact form.
  images/              Real photography goes here (see "Adding real photographs" below).
```

## Brand system

Implements the supplied Labrite Brand Identity & Website Style Guide:

- **Colour** — Labrite Red `#FF0000` (tick/accents only, never large areas), Accessible Red
  `#C70000` (primary buttons/links on white text), Black `#000000`, Technical Charcoal
  `#30373F`, White, Light Neutral `#F5F6F7`, Border Grey `#D9DDE1`.
- **Type** — Inter (loaded from Google Fonts, falls back to Arial/Helvetica) at the
  guide's specified weights and size ranges for H1/H2/H3/body/nav.
- **One master identity** — a single coded wordmark (`renderLogo` in
  `src/partials/render.mjs`) is used everywhere; the Coal Laboratory business-unit
  lock-up (word + "Coal Laboratory" + the approved tagline) is only used on Coal
  Laboratory content, never permanently fused to the master logo.
- **Supporting "L" device** — a restrained red/charcoal corner accent (`.l-frame` in
  `styles.css`) used sparingly to frame media, never as a logo substitute.

### The logo is a placeholder — replace before launch

No vector master artwork was supplied. `renderLogo()` renders a coded text+tick lockup
that follows the guide's construction rules (wordmark + tick, correct clear space and
colour behaviour, reverse variant for dark backgrounds) as a stand-in. **Before launch,
replace it with the approved SVG/EPS master** — swap the implementation in
`src/partials/render.mjs` (`renderLogo`) rather than screenshotting the artwork in.
The favicon (`assets/images/site/favicon.svg`) is a plain "L" monogram for the same
reason — deliberately not a redrawn tick — and should also be replaced with the approved
favicon once supplied.

## The product catalogue

`src/data/products.mjs` lists the 12 distinct pieces of equipment identified from the
photographs supplied in this project, organised into five ranges (Weighing & Calibration,
Moisture & Drying, Sample Preparation & Sieving, Testing & Analysis, Laboratory Support).
Multiple photos of the same item were treated as one product with a gallery, not separate
listings. Where a product's exact model or specifications weren't confirmed (e.g. the
U-Therm analyzer), it's deliberately listed under a general, safe title rather than a
guessed one.

**Technical specifications are intentionally omitted, not guessed.** Every product page
has a clearly labelled "not yet supplied" notice instead of invented capacity, accuracy,
power, dimensions or model numbers — fill these in once Labrite confirms them.

### Adding real photographs

Every product/section image on the site is currently a styled placeholder tile (built with
`mediaPlaceholder()` in `render.mjs`) labelled with the item's name — because pasted chat
images aren't saved to a file this build can read or commit. To drop in the real photos:

1. Save each photo as the path already referenced in `src/data/products.mjs`, e.g.
   `assets/images/products/analytical-balance.jpg`, `assets/images/products/muffle-furnace.jpg`, etc.
   (see the `image` field for each product for its exact expected filename).
2. Replace the corresponding `mediaPlaceholder(...)` call with a real `<img>` tag (or ask
   for this to be wired up) — the `imageAlt` text is already written for each product.
3. Section-level photography (hero, About, Coal Laboratory, business-area cards) has no
   fixed filename yet; add files under `assets/images/site/` and update the relevant
   `src/pages/*.mjs` module.
4. Run `npm run build` again.

## Content deliberately left as placeholders

Per the brief's rule against inventing Labrite-specific facts, the following are shown as
clearly marked "to be supplied" placeholders rather than guessed:

- Phone numbers, email addresses, physical address and business hours (Contact page, footer)
- Company history / "Our Experience" (About page)
- SANAS accreditation logo, number, scope and any related claim (Coal Laboratory page,
  dedicated Accreditation & Quality page) — add only official, approved wording and artwork
- Chemicals product list (Chemicals page)
- Represented brands/manufacturers (Agencies page)
- Privacy Policy and Terms of Use body copy

The contact form is fully built and client-side validated but has no live submission
endpoint yet (see the comment in `assets/js/main.js`) — connect it to Labrite's email/CRM
handler before launch.

## LinkedIn

The official LinkedIn URL (`https://www.linkedin.com/company/labrite/`) is defined once in
`src/data/nav.mjs` (`LINKEDIN_URL`) and rendered everywhere via `renderLinkedInLink()` in
`src/partials/render.mjs`, so every occurrence — footer social row, footer "Company" list,
and the Contact page's social section — shares one implementation: icon and text as a single
clickable link, `target="_blank"` + `rel="noopener noreferrer"`, an `aria-label`, and a red
hover state on both the icon and the text.
