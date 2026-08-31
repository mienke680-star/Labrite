import { NAV_ITEMS, BUSINESS_AREAS, LINKEDIN_URL, FOOTER_LEGAL_LINKS } from '../data/nav.mjs';
import { COMPANY, SITE_URL } from '../data/company.mjs';

// Master Labrite wordmark: the supplied logo file (trimmed, background made
// transparent — artwork itself untouched) for light backgrounds. The reverse
// (white-on-dark) variant is the same supplied artwork with only its
// grayscale (wordmark) pixels inverted to white, alpha-for-alpha — the red
// tick is left byte-for-byte unchanged — so proportions, spacing, tick size,
// angle and position are identical to the master file, per the approved
// normal/reverse/monochrome logo standard.
export function renderLogo({ reverse = false, size = null, subLabel = null, tagline = null, href = '/' } = {}) {
  const classes = ['logo', reverse ? 'reverse' : '', size ? `size-${size}` : ''].filter(Boolean).join(' ');
  const label = subLabel ? `Labrite ${subLabel} — home` : 'Labrite — home';
  const src = reverse ? '/assets/images/brand/labrite-logo-reverse.png' : '/assets/images/brand/labrite-logo.png';

  return `
    <a class="${classes}" href="${href}" aria-label="${label}">
      <img class="logo-img" src="${src}" alt="Labrite" width="1320" height="350" />
      ${subLabel ? `<span class="logo-sub">${subLabel}</span>` : ''}
      ${tagline ? `<span class="logo-tagline">${tagline}</span>` : ''}
    </a>`;
}

export function renderHead({ title, description, canonicalPath = '/' }) {
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  return `<meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <link rel="canonical" href="${canonicalUrl}" />
  <meta name="theme-color" content="#30373F" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Labrite" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="og:image" content="${SITE_URL}/assets/images/brand/labrite-logo.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${SITE_URL}/assets/images/brand/labrite-logo.png" />
  <link rel="icon" href="/assets/images/site/favicon.svg" type="image/svg+xml" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="/assets/css/styles.css" />
  ${renderStructuredData()}`;
}

function renderStructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: COMPANY.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}/assets/images/brand/labrite-logo.png`,
    image: `${SITE_URL}/assets/images/brand/labrite-logo.png`,
    telephone: COMPANY.phoneDisplay,
    email: COMPANY.emailDisplay,
    foundingDate: COMPANY.founded,
    sameAs: [LINKEDIN_URL],
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY.addressStreet,
      addressLocality: COMPANY.addressLocality,
      addressRegion: COMPANY.addressRegion,
      postalCode: COMPANY.addressPostalCode,
      addressCountry: 'ZA',
    },
    openingHoursSpecification: COMPANY.hoursSchema.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.day,
      opens: h.opens,
      closes: h.closes,
    })),
  };
  return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
}

export function renderHeader(activeKey) {
  const items = NAV_ITEMS.map((item) => {
    const current = item.key === activeKey ? ' aria-current="page"' : '';
    return `<li><a class="nav-link" href="${item.href}"${current}>${item.label}</a></li>`;
  }).join('\n            ');

  return `
  <a class="skip-link" href="#main">Skip to main content</a>
  <header class="site-header">
    <div class="container">
      ${renderLogo()}
      <nav class="primary-nav" aria-label="Primary">
        <ul>
          ${items}
        </ul>
        <div class="header-cta">
          <a class="btn btn-primary btn-sm" href="/contact.html">Contact Labrite</a>
        </div>
      </nav>
      <button class="nav-toggle" data-nav-toggle aria-expanded="false" aria-controls="primary-nav" aria-label="Toggle navigation menu">
        <svg class="menu-lines" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg>
        <svg class="x-line" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg>
      </button>
    </div>
  </header>`;
}

const LINKEDIN_ICON = `<svg viewBox="0 0 448 512" aria-hidden="true" focusable="false"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>`;

// Reusable LinkedIn link — icon + text together are one fully clickable target.
// Always the confirmed official Labrite company page, opened in a new tab.
export function renderLinkedInLink({ text = 'Follow us on LinkedIn', className = 'social-link' } = {}) {
  return `<a class="${className}" href="${LINKEDIN_URL}" target="_blank" rel="noopener noreferrer" aria-label="Visit Labrite on LinkedIn (opens in a new tab)">${LINKEDIN_ICON}<span>${text}</span></a>`;
}

export function renderFooter() {
  const businessLinks = BUSINESS_AREAS.map((a) => `<li><a href="${a.href}">${a.label}</a></li>`).join('\n              ');
  const legalLinks = FOOTER_LEGAL_LINKS.map((l) => `<a href="${l.href}">${l.label}</a>`).join('\n          ');

  return `
  <footer class="site-footer">
    <div class="container footer-top">
      <div class="footer-brand">
        ${renderLogo({ reverse: true })}
        <p>Laboratory services, equipment, chemicals, technical support, repairs and maintenance for mining, industrial and laboratory applications.</p>
        <div class="social-links">
          ${renderLinkedInLink()}
        </div>
      </div>
      <div class="footer-col">
        <h4>Our Services</h4>
        <ul>
          ${businessLinks}
        </ul>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="/about.html">About Labrite</a></li>
          <li><a href="/accreditation.html">Accreditation &amp; Quality</a></li>
          <li><a href="/contact.html">Contact &amp; Enquiries</a></li>
          <li><a href="${LINKEDIN_URL}" target="_blank" rel="noopener noreferrer" aria-label="Visit Labrite on LinkedIn (opens in a new tab)">LinkedIn</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <address>
          ${COMPANY.addressLines.join('<br>')}<br>
          <a href="${COMPANY.phoneHref}">${COMPANY.phoneDisplay}</a><br>
          <a href="${COMPANY.emailHref}">${COMPANY.emailDisplay}</a>
        </address>
      </div>
    </div>
    <div class="container footer-bottom">
      <p>© <span data-year>2026</span> ${COMPANY.legalName}. All rights reserved. Reg. no. ${COMPANY.registrationNumber}.</p>
      <div class="legal-links">
          ${legalLinks}
          <button type="button" class="cookie-reopen" data-reopen-cookie-banner>Cookie preferences</button>
      </div>
    </div>
  </footer>
  <script src="/assets/js/main.js" defer></script>`;
}

export function renderCookieBanner() {
  return `
  <div class="cookie-banner" data-cookie-banner role="region" aria-label="Cookie notice" hidden>
    <p>This website uses cookies for essential functionality and from embedded content such as the Google Maps location on the Contact page. See the <a href="/privacy-policy.html">Privacy Policy</a> for details.</p>
    <div class="cookie-banner-actions">
      <button type="button" class="btn btn-primary" data-cookie-accept>Accept</button>
    </div>
  </div>`;
}

export function renderPage({ title, description, canonicalPath, activeKey, bodyClass = '', main, structuredData }) {
  const extraSchema = (structuredData || [])
    .map((obj) => `<script type="application/ld+json">${JSON.stringify(obj)}</script>`)
    .join('\n');
  return `<!doctype html>
<html lang="en">
<head>
${renderHead({ title, description, canonicalPath })}
  ${extraSchema}
</head>
<body class="${bodyClass}">
${renderHeader(activeKey)}
  <main id="main">
${main}
  </main>
${renderFooter()}
${renderCookieBanner()}
</body>
</html>
`;
}

// BreadcrumbList schema matching a page's visible breadcrumb trail.
export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url ? `${SITE_URL}${item.url}` : undefined,
    })),
  };
}

export function productMedia(product, { ratio = 'ratio-4-3' } = {}) {
  return `<div class="media ${ratio}"><img src="${product.image}" alt="${product.imageAlt}" loading="lazy" /></div>`;
}

export function mediaPlaceholder({ title, note = 'Photograph to be added', ratio = 'ratio-4-3' }) {
  return `<div class="media ${ratio}"><div class="media-placeholder">
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="9" cy="10" r="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M3 16l5-4 4 3 4-5 5 6" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>
    <span class="ph-title">${title}</span>
    <span class="ph-note">${note}</span>
  </div></div>`;
}
