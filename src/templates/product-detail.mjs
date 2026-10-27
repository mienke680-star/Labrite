import { productMedia, breadcrumbSchema } from '../partials/render.mjs';
import { PRODUCTS } from '../data/products.mjs';
import { SITE_URL } from '../data/company.mjs';

export function renderProductPage(product) {
  const related = PRODUCTS.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3);

  const applications = product.applications
    .map((a) => `<li>${a}</li>`)
    .join('\n              ');

  const variantsTable = product.variants
    ? `
    <section class="section section-paper">
      <div class="container">
        <h2>Model variants</h2>
        <span class="l-rule reveal-line" aria-hidden="true"></span>
        <div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr>${product.variantColumns.map((c) => `<th>${c}</th>`).join('')}</tr>
            </thead>
            <tbody>
              ${product.variants
                .map((row) => `<tr>${row.map((cell, i) => (i === 0 ? `<td><strong>${cell}</strong></td>` : `<td>${cell}</td>`)).join('')}</tr>`)
                .join('\n              ')}
            </tbody>
          </table>
        </div>
        ${product.note ? `<p style="font-size:0.875rem;color:#6b6b72;margin-top:var(--space-6);">${product.note}</p>` : ''}
      </div>
    </section>`
    : '';

  const relatedCards = related.length
    ? related
        .map(
          (p) => `
        <article class="card-product">
          ${productMedia(p)}
          <div class="card-body">
            <span class="card-category">${p.category}</span>
            <h3>${p.name}</h3>
            <p>${p.shortDescription}</p>
            <div class="card-actions">
              <a class="link-primary" href="/equipment/products/${p.slug}.html">View details →</a>
            </div>
          </div>
        </article>`
        )
        .join('\n')
    : '<p>No further equipment listed here yet.</p>';

  const main = `
    <section class="hero-simple">
      <div class="container hero-content">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span aria-hidden="true">/</span>
          <a href="/equipment/">Equipment &amp; Instruments</a><span aria-hidden="true">/</span>
          <span aria-current="page">${product.name}</span>
        </nav>
        <span class="eyebrow">${product.category}</span>
        <h1>${product.name}</h1>
        <p class="lede">${product.shortDescription}</p>
      </div>
    </section>

    <section class="section section-paper">
      <div class="container split l-frame">
        <div class="split-media">
          ${productMedia(product)}
        </div>
        <div class="split-content">
          <h2>Overview</h2>
          <p>${product.overview}</p>
          <h3>Applications</h3>
          <ul style="display:flex;flex-direction:column;gap:0.5rem;margin-bottom:1.5rem;">
              ${applications}
          </ul>
          <div class="hero-actions">
            <a class="btn btn-secondary" href="/equipment/">Back to Equipment &amp; Instruments</a>
          </div>
        </div>
      </div>
    </section>
    ${variantsTable}

    <section class="section section-mist">
      <div class="container">
        <div class="section-head">
          <div>
            <h2>Related equipment</h2>
            <p class="section-intro">More from Labrite's ${product.category}.</p>
          </div>
          <a class="btn btn-secondary" href="/equipment/">View all equipment</a>
        </div>
        <div class="grid grid-3">
          ${relatedCards}
        </div>
      </div>
    </section>

    <section class="cta-band">
      <div class="container">
        <div>
          <h2>Want to know more about Labrite's laboratory capability?</h2>
          <p>Get in touch with the Labrite team to learn more about our laboratory services.</p>
        </div>
        <div class="cta-actions">
          <a class="btn btn-primary" href="/contact.html">Contact Labrite</a>
        </div>
      </div>
    </section>`;

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.shortDescription,
    category: product.category,
    ...(product.image ? { image: `${SITE_URL}${product.image}` } : {}),
    brand: { '@type': 'Organization', name: 'Labrite' },
  };
  const crumbs = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Equipment & Instruments', url: '/equipment/' },
    { name: product.name },
  ]);

  return {
    title: `${product.name} | Labrite Equipment`,
    description: product.shortDescription,
    canonicalPath: `/equipment/products/${product.slug}.html`,
    activeKey: 'equipment',
    outPath: `equipment/products/${product.slug}.html`,
    main,
    structuredData: [productSchema, crumbs],
  };
}
