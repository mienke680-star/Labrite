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
- **One master identity** — the real supplied Labrite wordmark+tick artwork
  (`assets/images/brand/labrite-logo.png`, trimmed and made transparent — pixels
  untouched) renders via `renderLogo()` everywhere the logo appears on a light
  background. The Coal Laboratory business-unit lock-up (that same mark + "Coal
  Laboratory" + the approved tagline) is only used on Coal Laboratory content, never
  permanently fused to the master logo.
- **Supporting "L" device** — a restrained red/charcoal corner accent (`.l-frame` in
  `styles.css`) used sparingly to frame media, never as a logo substitute.

### Logo status

The real master logo file is in use (see above). The one gap: **no reverse (white-on-dark)
file was supplied**, so the dark footer still renders a coded text+tick stand-in
(`renderLogo({ reverse: true })` in `src/partials/render.mjs`) rather than the real
artwork — swap that in once Labrite supplies an approved reverse/white version. The
favicon (`assets/images/site/favicon.svg`) is a plain "L" monogram for the same
reason — deliberately not a redrawn tick — pending an approved favicon file.

## The product catalogue

`src/data/products.mjs` lists the 12 distinct pieces of equipment identified from the
supplied photographs, organised into five ranges (Weighing & Calibration, Moisture &
Drying, Sample Preparation & Sieving, Testing & Analysis, Laboratory Support). Multiple
photos of the same item were treated as one product with a gallery, not separate
listings. Where a product's exact model or specifications weren't confirmed (e.g. the
U-Therm analyzer), it's deliberately listed under a general, safe title rather than a
guessed one. Real photography for every product lives in `assets/images/products/`
(resized/compressed from the originals — see `productMedia()` in `render.mjs`).

**Technical specifications are intentionally omitted, not guessed.** Every product page
has a clearly labelled "not yet supplied" notice instead of invented capacity, accuracy,
power, dimensions or model numbers — fill these in once Labrite confirms them.

## Photography & brand assets

`assets/images/` holds the real supplied assets:

- `brand/` — the master Labrite logo, the SANAS Testing Laboratory accreditation mark
  (T1091, used unmodified), and two represented-brand logos (U-Therm, Maglev Africa).
  An Alibaba storefront badge was also supplied (`badge-alibaba.png`) but isn't placed
  on any page yet — no confirmed Alibaba profile URL to link it to.
- `products/` — one photo per catalogue product.
- `site/` — corporate/lab photography (reception, boardroom, lab spaces, corridor,
  entrance) plus the coal sample image, distributed across Home, About, Coal
  Laboratory, Chemicals and Contact.

All photos were resized (max 1600px) and re-encoded as JPEG to keep the site fast —
originals were several MB each as supplied.

## Content deliberately left as placeholders

Per the brief's rule against inventing Labrite-specific facts, the following are shown as
clearly marked "to be supplied" placeholders rather than guessed:

- Email address and business hours (Contact page, footer) — phone and address are now
  shown, sourced from Labrite's public LinkedIn listing for confirmation (see below)
- Fuller company history / "Our Experience" beyond the founding year (About page)
- SANAS accreditation **scope** — the logo, "SANAS-accredited Testing Laboratory" and
  accreditation number T1091 are now shown (real, supplied artwork/number), but which
  specific test methods the accreditation covers has not been supplied and is not stated
- Chemicals product list (Chemicals page — no chemical photos or products were supplied)
- Further represented brands beyond U-Therm and Maglev Africa (Agencies page)
- Privacy Policy and Terms of Use body copy

Contact phone (013 650 0394) and address (6 Dorinda Avenue, Extension 18, eMalahleni)
in `src/data/company.mjs` were sourced from Labrite's LinkedIn company page and
corroborating directories, not confirmed directly by Labrite — see the notices next to
them on the Contact/footer, and confirm before treating them as final.

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
