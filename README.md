# Labrite

Corporate website for Labrite (Pty) Ltd — Laboratory Services (currently Coal Testing &
Analysis), Equipment & Instruments, Chemicals, Repairs & Maintenance, and Agencies &
Distribution, presented under one master Labrite identity.

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
    company.mjs        Real Labrite facts — legal name, address, Information Officer,
                        hours — single source of truth, imported everywhere.
    nav.mjs          Navigation, footer service links, equipment ranges, the
                      LinkedIn URL — single source of truth, imported everywhere.
    products.mjs      The 12-product equipment catalogue (see below).
  partials/
    render.mjs         renderHeader / renderFooter / renderLogo / renderLinkedInLink /
                        mediaPlaceholder / renderPage — every page is assembled from these,
                        so header, footer, nav and the LinkedIn link are defined exactly once.
  pages/               One module per hand-authored page (Home, About, Laboratory Services,
                        Chemicals, Repairs & Maintenance, Agencies & Distribution, Contact,
                        Accreditation, legal pages, the Equipment & Instruments index).
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
  background; the dark-background variant (`labrite-logo-reverse.png`) is the same
  file with only its grayscale wordmark pixels inverted to white, alpha-for-alpha —
  the red tick is untouched byte-for-byte, so proportions, spacing, tick size, angle
  and position are identical in both. The Laboratory Services business-unit lock-up
  (that same mark + "Laboratory Services" + the approved tagline) is only used on
  Laboratory Services content, never permanently fused to the master logo.
- **Supporting "L" device** — a restrained red/charcoal corner accent (`.l-frame` in
  `styles.css`) used sparingly to frame media, never as a logo substitute.

### Logo status

The real master logo file is in use everywhere, in both normal and reverse form (see
above) — no page recreates the "Labrite" wordmark in a substitute font. A true
monochrome file hasn't been supplied yet; nothing on the site currently needs one.
The favicon (`assets/images/site/favicon.svg`) is a plain "L" monogram — deliberately
not a redrawn tick — pending an approved favicon file.

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
  entrance) plus the coal sample image, distributed across Home, About, Laboratory
  Services, Chemicals and Contact.

All photos were resized (max 1600px) and re-encoded as JPEG to keep the site fast —
originals were several MB each as supplied.

## Business hours & the "open now" badge

`COMPANY.hoursSummary` / `COMPANY.hoursSchema` in `src/data/company.mjs` hold the hours
Labrite supplied directly (Mon–Fri 7:45 AM–4:30 PM, closed weekends) — these are treated
as confirmed, unlike the sourced-for-confirmation phone/address below. They drive three
things: the Contact page's hours card, the `LocalBusiness` `openingHoursSpecification` in
the site-wide JSON-LD, and a live "Open now" / "Closed now" badge computed client-side in
`assets/js/main.js` against `Africa/Johannesburg` time (correct regardless of the
visitor's own timezone).

## Cookies & POPIA

A cookie consent banner (`renderCookieBanner()` in `render.mjs`, behaviour in
`main.js`) appears once per browser (remembered via `localStorage`) on every page, and is
reopenable any time via "Cookie preferences" in the footer. Non-essential embeds don't
load before that choice is made: the Contact page's Google Maps iframe is only created
(via `[data-map-embed]` / `loadConsentGatedEmbeds()` in `main.js`) once consent is
accepted, not on page load. `privacy-policy.html` is a real, POPIA-referencing policy —
what's collected (the enquiry form, plus standard Netlify hosting logs), the cookies and
external requests actually in use (consent flag, consent-gated Google Maps, Google Fonts —
not yet self-hosted), data subject rights, and the Information Regulator's complaints
contact. The registered **Information Officer** (Jacques Stander, confirmed directly) is
now named on that page — the one remaining gap is Labrite's general company phone/email,
still sourced rather than confirmed (see below).

## SEO

`sitemap.xml` is generated by `build.mjs` from every page's `canonicalPath` (regenerate it
by re-running `npm run build`); `robots.txt` points at it. Every page carries a
`LocalBusiness` JSON-LD block (real name/address/phone/email/hours/logo/LinkedIn); product
pages add `Product` + `BreadcrumbList` schema, category pages add `BreadcrumbList`. `og:image`
/ `twitter:card` / `theme-color` meta tags are set site-wide using the real logo.

## Legal name, address & terminology standardisation

Following written feedback from Jacques Stander (Quality Manager / Information Officer),
several site-wide standards were corrected in one pass rather than page by page:

- Legal entity is `Labrite (Pty) Ltd` everywhere (footer, copyright, structured data,
  Privacy Policy) — `Labrite CC` no longer appears anywhere on the site.
- The address is `4 Slegtkamp Street, Unit C, Middelburg, Mpumalanga, 1050, South Africa`
  everywhere (footer, Contact page, Google Maps embed, structured data) — the old
  eMalahleni address is gone.
- "Coal Laboratory" is now **Laboratory Services** in navigation, the footer and page
  URLs (`/laboratory-services.html`, `src/pages/laboratory-services.mjs`), structured as
  an umbrella with **Coal Testing & Analysis** as its current, and so far only,
  discipline — so a future lab discipline can be added without a nav restructure. The old
  `/coal-laboratory.html` URL 301-redirects to the new one (`_redirects`).
- "Agencies" (nav) and "Agencies & Distribution" (footer) are now the same term
  everywhere; the footer's "Business Areas" heading is now "Our Services".
- The footer's one-line company description was rewritten to describe what Labrite does
  for a visitor, rather than restate the internal branding line.

`COMPANY` and the new `INFORMATION_OFFICER` record in `src/data/company.mjs` are both
confirmed directly by Labrite; only the general company phone/email remain sourced (see
below).

## Content deliberately left as placeholders

Per the brief's rule against inventing Labrite-specific facts, the following are shown as
clearly marked "to be supplied" placeholders rather than guessed:

- Fuller company history / "Our Experience" beyond the founding year (About page)
- SANAS accreditation **scope** — the logo, "SANAS-accredited Testing Laboratory" and
  accreditation number T1091 are now shown (real, supplied artwork/number), but which
  specific test methods the accreditation covers has not been supplied and is not stated
- Chemicals product list (Chemicals page — no chemical photos or products were supplied)
- Further represented brands beyond U-Therm and Maglev Africa (Agencies page)
- Terms of Use body copy
- A confirmed email/CRM connection for the enquiry form (Privacy Policy's Third
  Parties section names this as not yet configured, rather than guessing a provider)

Contact phone (013 650 0394) and email (info@labrite.co.za) in `src/data/company.mjs`
were sourced from Labrite's LinkedIn company page and corroborating directories, not
confirmed directly by Labrite — see the notice next to them on the Contact page, and
confirm before treating them as final. Legal name (Labrite (Pty) Ltd), registered
address (4 Slegtkamp Street, Unit C, Middelburg, Mpumalanga, 1050), business hours, and
the Information Officer record were all confirmed directly by Labrite (Jacques Stander,
Quality Manager / Information Officer) and are treated as final.

The contact form is fully built and client-side validated but has no live submission
endpoint yet (see the comment in `assets/js/main.js`) — until it's connected, a
"Email Labrite directly" `mailto:` button sits right under it as the one thing on that
page that actually delivers a message today.

## LinkedIn

The official LinkedIn URL (`https://www.linkedin.com/company/labrite/`) is defined once in
`src/data/nav.mjs` (`LINKEDIN_URL`) and rendered everywhere via `renderLinkedInLink()` in
`src/partials/render.mjs`, so every occurrence — footer social row, footer "Company" list,
and the Contact page's social section — shares one implementation: icon and text as a single
clickable link, `target="_blank"` + `rel="noopener noreferrer"`, an `aria-label`, and a red
hover state on both the icon and the text.
