# Labrite

Corporate website for Labrite (Pty) Ltd — Laboratory Services (currently Coal Testing &
Analysis), Equipment & Instruments, Chemicals, Repairs & Maintenance, and Agencies &
Distribution, presented under one master Labrite identity.

Static site. No framework, no bundler, no runtime dependencies — plain HTML, CSS and
vanilla JS, generated from a small set of reusable page/data modules by a zero-dependency
Node build script. Originally built against the supplied Labrite Brand Identity & Website
Style Guide; its palette has since been through two client-directed visual redesigns (see
"Visual identity history" below) — content, structure and every component name stayed the
same both times, only the visual treatment changed.

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

- **Colour** — see "Visual identity history" below for the current palette and how it got
  there. The original Labrite Brand Identity & Website Style Guide's palette (Labrite Red
  `#FF0000`, Accessible Red `#C70000`, Black, Technical Charcoal `#30373F`, White, Light
  Neutral `#F5F6F7`, Border Grey `#D9DDE1`) is no longer in use for the visual layer.
- **Type** — Space Grotesk for headings/display, Inter for body/nav/buttons (both from
  Google Fonts, Arial fallback).
- **One master identity** — the real supplied Labrite wordmark+tick artwork
  (`assets/images/brand/labrite-logo.png`, trimmed and made transparent — pixels
  untouched) renders via `renderLogo()` everywhere the logo appears on a light
  background; the dark-background variant (`labrite-logo-reverse.png`) is the same
  file with only its grayscale wordmark pixels inverted to white, alpha-for-alpha —
  the red tick is untouched byte-for-byte, so proportions, spacing, tick size, angle
  and position are identical in both. Since every background on the site is dark now,
  only the reverse variant is actually used anywhere. The Laboratory Services
  business-unit lock-up (that same mark + "Laboratory Services" + the approved tagline)
  is only used on Laboratory Services content, never permanently fused to the master logo.
- **Supporting "L" device** — a restrained accent corner (`.l-frame` in `styles.css`) used
  sparingly to frame media, never as a logo substitute.

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

## Visual identity history

The visual layer has been through two client-directed redesigns since the original brand
guide. Both times, **only `assets/css/styles.css`, `assets/js/main.js`, a handful of hero/
CTA sections, and image assets changed** — every page's wording, links, forms, structure
and the master logo artwork stayed exactly as they were, and every original CSS
custom-property/selector name was kept so content files never needed touching for a
palette shift alone.

**1. Coal-inspired gold redesign (superseded).** A black / metallic-gold / deep-oxblood
luxury identity (Playfair Display headings, gold-fill buttons). Superseded in full by the
redesign below — no trace of it remains in `styles.css`.

**2. Cinematic red/white/black redesign (current).** A full structural and visual rebuild
— "smooth, cinematic and highly animated," not a colour swap — per an explicit client
brief that also superseded the original brand guide's palette.

- **Palette** — Carbon Black `#050505` (page background), Deep Charcoal `#101114`
  (alternate sections, card/table panels), Deep Oxblood `#5C0A0A` and Rich Burgundy
  `#780F18` (atmospheric glows, button hover), Bright Accent Red `#D71935` (the working
  "red" accent — links, borders, buttons, icons, lines) and Luxury Red `#A8081E` (primary
  button fill), Clean White `#FFFFFF` / Soft White `#F2F2F2` (headings/body text), Cool
  Grey `#A9ADB4` (secondary text). **Verified against a WCAG contrast script**: neither red
  clears 4.5:1 on any dark surface at body-text size (it tops out around 4:1), so red is
  used only where that's fine — large headings (≥24px clears the 3:1 large-text minimum),
  buttons (white-on-red or red-on-white, both 5:1+), borders, icons, and underlines — never
  as small link/body text, which stays white or Cool Grey (9:1+) instead.
- **No boxy cards** — `.card`'s image no longer sits in its own block above a separate
  white text panel; the image is now an absolutely-positioned full-bleed background with
  the text overlaid on a bottom gradient scrim (`.card::before`), so every card grid
  site-wide (business areas, equipment ranges, the full product catalogue) reads as a
  flowing image showcase, not a grid of identical rectangles — from one shared CSS rule,
  no per-page markup changes needed. A `.card-plain` opt-out keeps genuinely non-visual
  cards (contact-detail cards, the SANAS/partner-logo cards, abstract service-list cards
  with no representative photo) as plain panels instead of forcing a mismatched image.
- **Typography** — Space Grotesk (display) for all headings, Inter (sans, weight 300 for
  leads/intros) for body/nav/buttons. One word per hero heading is a plain bold `<em>`,
  styled red by a global rule.
- **Motion** — hero text fades up in sequence (eyebrow → heading → rule → lead → buttons)
  via CSS `@keyframes`; a self-drawing `.hero-rule`/`.l-rule.reveal-line` red line; card
  grids fade up staggered by `:nth-child` delay once scrolled into view
  (`.reveal-group`); a slow Ken Burns zoom on hero/CTA photos; a scroll-linked parallax
  on hero/CTA images (`[class*="-media"]`, throttled via `requestAnimationFrame`,
  skipped under `prefers-reduced-motion` and on narrow/mobile viewports, per the brief);
  animated number counters on the Home statistics strip (`[data-count-to]`); a
  cursor-following ambient glow on desktop pointers only (`.cursor-glow`, see
  `[data-cursor-glow]` in `main.js`); a header that fades in on load and turns solid on
  scroll; an animated red underline on nav links and card actions.
- **Statistics strip** (Home page) — four real, already-published numbers presented as
  large animated counters: equipment ranges (5), catalogued instruments (12), represented
  brands (2), and the SANAS accreditation number (T1091) — no invented metrics.
- **Hero photography** — Home, Chemicals, Laboratory Services and About use a full-bleed
  photo from `assets/images/atmosphere/` behind a black gradient overlay; the chemicals
  hero is the photo supplied specifically for that page. Every other page keeps the shared
  `.hero-simple` treatment (a dark radial burgundy glow, no photo) so the palette is
  consistent site-wide without forcing a photo onto every page. Three CTA bands (Home,
  Chemicals, Laboratory Services) reuse the image set as a `.cta-band-photo` background.
- **Header/nav** — transparent over the hero, solid black past a 24px scroll threshold.
  **Careful CSS constraint**: the header must never receive a `transform`, `filter`,
  `backdrop-filter` or `will-change` matching those, in any state — any of the four
  creates a CSS containing block, which breaks the mobile nav's full-screen
  `position: fixed` panel (nested inside the header). This is a repeat of a bug first
  found and fixed earlier in this project (`backdrop-filter` on `.site-header`) —
  reintroduced once in this redesign's first pass (both a `transform`-based header
  entrance animation and a scroll `backdrop-filter` blur), caught in mobile QA, and fixed
  by using opacity-only for the header's entrance fade and a solid (non-blurred)
  background for its scrolled state.

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
clickable link, `target="_blank"` + `rel="noopener noreferrer"`, an `aria-label`, and a red
hover state on both the icon and the text.
