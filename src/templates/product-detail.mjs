import { mediaPlaceholder } from '../partials/render.mjs';
import { EQUIPMENT_RANGES } from '../data/nav.mjs';
import { PRODUCTS } from '../data/products.mjs';

export function renderProductPage(product) {
  const range = EQUIPMENT_RANGES.find((r) => r.key === product.range);
  const related = PRODUCTS.filter((p) => p.range === product.range && p.slug !== product.slug).slice(0, 3);

  const applications = product.applications
    .map((a) => `<li>${a}</li>`)
    .join('\n              ');

  const relatedCards = related.length
    ? related
        .map(
          (p) => `
        <article class="card">
          ${mediaPlaceholder({ title: p.name, note: 'Photograph to be added', ratio: 'ratio-4-3' })}
          <div class="card-body">
            <span class="card-category">${p.category}</span>
            <h3>${p.name}</h3>
            <p>${p.shortDescription}</p>
            <div class="card-actions">
              <a class="link-primary" href="/equipment/products/${p.slug}.html">View product →</a>
            </div>
          </div>
        </article>`
        )
        .join('\n')
    : '<p>No further equipment listed in this range yet.</p>';

  const main = `
    <section class="hero-simple">
      <div class="container hero-content">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span aria-hidden="true">/</span>
          <a href="/equipment/">Equipment &amp; Instruments</a><span aria-hidden="true">/</span>
          <a href="${range.href}">${range.label}</a><span aria-hidden="true">/</span>
          <span aria-current="page">${product.name}</span>
        </nav>
        <span class="eyebrow">${product.category}</span>
        <h1>${product.name}</h1>
        <p class="lede">${product.shortDescription}</p>
      </div>
    </section>

    <section class="section">
      <div class="container split l-frame">
        <div class="split-media">
          ${mediaPlaceholder({ title: product.name, note: product.imageAlt, ratio: 'ratio-4-3' })}
        </div>
        <div class="split-content">
          <h2>Overview</h2>
          <p>${product.overview}</p>
          <h3>Applications</h3>
          <ul style="display:flex;flex-direction:column;gap:0.5rem;margin-bottom:1.5rem;">
              ${applications}
          </ul>
          <div class="hero-actions">
            <a class="btn btn-primary" href="/contact.html">Enquire about this product</a>
            <a class="btn btn-secondary" href="${range.href}">Back to ${range.label}</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <div class="section-head">
          <div>
            <h2>Technical information</h2>
            <p class="section-intro">Published only once confirmed by Labrite.</p>
          </div>
        </div>
        <div class="notice">
          <strong>Not yet supplied.</strong> Capacity, accuracy, power requirements, dimensions, manufacturer and model details for this product have not been confirmed for publication. Contact Labrite directly for current technical specifications.
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head">
          <div>
            <h2>Related equipment</h2>
            <p class="section-intro">More from the ${range.label} range.</p>
          </div>
          <a class="btn btn-secondary" href="${range.href}">View all ${range.label}</a>
        </div>
        <div class="grid grid-3">
          ${relatedCards}
        </div>
      </div>
    </section>

    <section class="cta-band">
      <div class="container">
        <div>
          <h2>Ready to enquire about the ${product.name}?</h2>
          <p>Speak to Labrite about availability, pricing and laboratory support.</p>
        </div>
        <div class="cta-actions">
          <a class="btn btn-primary" href="/contact.html">Enquire now</a>
        </div>
      </div>
    </section>`;

  return {
    title: `${product.name} | Labrite Equipment`,
    description: product.shortDescription,
    canonicalPath: `/equipment/products/${product.slug}.html`,
    activeKey: 'equipment',
    outPath: `equipment/products/${product.slug}.html`,
    main,
  };
}
