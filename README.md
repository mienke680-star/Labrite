# Labrite

Corporate website for Labrite (Pty) Ltd — Laboratory Services (currently Coal Testing &
Analysis), Equipment & Instruments, Chemicals, Repairs & Maintenance, and Agencies &
Distribution, presented under one master Labrite identity.

Static site. No framework, no bundler, no runtime dependencies — plain HTML, CSS and
vanilla JS, generated from a small set of reusable page/data modules by a zero-dependency
Node build script. Originally built against the supplied Labrite Brand Identity & Website
Style Guide; its palette was superseded site-wide by a coal-inspired luxury redesign brief
(see "Coal-inspired luxury redesign" below) — content, structure and every component stayed
the same, only the visual treatment changed.

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

- **Colour** — see "Coal-inspired luxury redesign" below for the current palette. The
  original Labrite Brand Identity & Website Style Guide's palette (Labrite Red `#FF0000`,
  Accessible Red `#C70000`, Black, Technical Charcoal `#30373F`, White, Light Neutral
  `#F5F6F7`, Border Grey `#D9DDE1`) is no longer in use for the visual layer.
- **Type** — Playfair Display for headings, Inter for body/nav/buttons (both from Google
  Fonts, Georgia/Arial fallbacks).
- **One master identity** — the real supplied Labrite wordmark+tick artwork
  (`assets/images/brand/labrite-logo.png`, trimmed and made transparent — pixels
  untouched) renders via `renderLogo()` everywhere the logo appears on a light
  background; the dark-background variant (`labrite-logo-reverse.png`) is the same
  file with only its grayscale wordmark pixels inverted to white, alpha-for-alpha —
  the red tick is untouched byte-for-byte, so proportions, spacing, tick size, angle
  and position are identical in both. The Laboratory Services business-unit lock-up
  (that same mark + "Laboratory Services" + the approved tagline) is only used on
  Laboratory Services content, never permanently fused to the master logo.
- **Supporting "L" device** — a restrained gold/oxblood corner accent (`.l-frame` in
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
- `atmosphere/` — seven supplied images used purely as decorative hero/CTA-band
  backgrounds for the coal-inspired redesign (see below) — never used in place of real
  product/facility photography, which stays exactly where it was.

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

## Coal-inspired luxury redesign

The entire visual layer was redesigned to a black / metallic-gold / deep-oxblood luxury
identity, per an explicit client brief — **this supersedes the original Labrite Brand
Identity Guide's palette** (which specified red/black/charcoal/white with no other
corporate colours). Nothing else changed: every page, all wording, links, forms, the
master logo artwork, and site structure are exactly as they were: `assets/css/styles.css`
was rewritten but keeps every original selector and CSS custom-property name, so no
content file needed to change for the palette shift alone.

- **Palette** — Carbon Black `#050505` (page background), Soft Black `#101010` (cards,
  tables, footer), Charcoal `#1A1A1A` (alternate sections), Deep Oxblood `#5C0A0A` and
  Rich Burgundy `#780F18` (hover fills, atmospheric glows), Metallic Gold `#C7A45A` and
  Champagne Gold `#D7BE82` (buttons, links, borders, headings accents), Warm White
  `#F5F1E8` (body text). Every text/background combination actually used was verified
  against WCAG AA (4.5:1) with a contrast script — the tightest is gold-on-charcoal at
  7.36:1, well clear of the minimum.
- **Logo on a dark header** — since the header (and now every section) is dark, it always
  renders the reverse logo (`renderLogo({ reverse: true })`); the normal light-background
  variant is no longer used anywhere.
- **Typography** — Playfair Display (serif) for all headings, Inter (sans) unchanged for
  body/nav/buttons. One word per hero heading is set in gold italic (`<em>`) for emphasis,
  per the brief.
- **Hero photography** — the Home, Chemicals, Laboratory Services and About pages use a
  full-bleed photo from `assets/images/atmosphere/` behind a black gradient overlay (with
  a slow, subtly-looping zoom — `@keyframes hero-kenburns`, disabled under
  `prefers-reduced-motion`); the chemicals-page hero is the photo supplied specifically for
  that page. Every other page keeps the shared `.hero-simple` treatment — a dark radial
  burgundy glow with a thin gold rule at the base — so the palette is consistent everywhere
  without needing a unique photo per page. Three CTA bands (Home, Chemicals, Laboratory
  Services) reuse the same image set as a full-bleed background (`.cta-band-photo`).
- **Header behaviour** — transparent over the hero, turning solid black on scroll (`>24px`,
  see the scroll listener in `main.js`); purely presentational, the nav itself is unchanged.
- **Components** — cards, tables, forms, notices and the filter bar all moved from white/
  light-neutral panels to dark panels with fine gold borders, per the brief; buttons are
  gold-fill/black-text (primary, hover → oxblood/warm-white) and gold-outline/transparent
  (secondary). The SANAS mark and partner-brand logos keep a light (warm-white) backing
  card, since those supplied logo files need a light background to read correctly.

## Content deliberately left as placeholders

Per the brief's rule against inventing Labrite-specific facts, the following are shown as
clearly marked "to be supplied" placeholders rather than guessed:

- Fuller company history / "Our Experience" beyond the founding year (About page)
- SANAS accreditation **scope** — the logo, "SANAS-accredited Testing Laboratory" and
  accreditation number T1091 are now shown (real, supplied artwork/number), but which
  specific test methods the accreditation covers has not been supplied and is not stated
- Chemicals product list (Chemicals page — a chemical-themed concept photo was supplied
  and is used as the page's hero and on the Home business-area card, but no specific
  product line-up or photos were supplied)
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
clickable link, `target="_blank"` + `rel="noopener noreferrer"`, an `aria-label`, and a gold
hover state on both the icon and the text.
