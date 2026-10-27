import { breadcrumbSchema, enquiryHref } from '../partials/render.mjs';
import { UTHERM_CAPABILITY_GROUPS, getUThermByGroup } from '../data/utherm-products.mjs';

export function renderAgencyProductPage(brand, product) {
  const group = UTHERM_CAPABILITY_GROUPS.find((g) => g.slug === product.group);
  const related = getUThermByGroup(product.group)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  const featuresList = product.features
    ? `<h3>Features</h3>
          <ul style="display:flex;flex-direction:column;gap:0.5rem;margin-bottom:1.5rem;">
            ${product.features.map((f) => `<li>${f}</li>`).join('\n            ')}
          </ul>`
    : '';

  const variantsTable = product.variants
    ? `
    <section class="section section-mist">
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
          <div class="media ratio-4-3"><img src="${p.image}" alt="${p.name}" loading="lazy" /></div>
          <div class="card-body">
            <span class="card-category">${brand.name}</span>
            <h3>${p.name}</h3>
            <p>${p.application}</p>
            <div class="card-actions">
              ${p.hasDetail ? `<a class="link-primary" href="/agencies/${brand.slug}/products/${p.slug}.html">View details →</a>` : ''}
            </div>
          </div>
        </article>`
        )
        .join('\n')
    : '';

  const main = `
    <section class="hero-simple">
      <div class="container hero-content">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span aria-hidden="true">/</span>
          <a href="/agencies.html">Agencies &amp; Distribution</a><span aria-hidden="true">/</span>
          <a href="/agencies/${brand.slug}/">${brand.name}</a><span aria-hidden="true">/</span>
          <span aria-current="page">${product.name}</span>
        </nav>
        <span class="eyebrow">${group ? group.label : brand.name}</span>
        <h1>${product.name}</h1>
        <p class="lede">${product.application}</p>
      </div>
    </section>

    <section class="section section-paper">
      <div class="container split l-frame">
        <div class="split-media">
          <div class="media ratio-4-3"><img src="${product.image}" alt="${product.name}" loading="lazy" /></div>
        </div>
        <div class="split-content">
          ${product.overview ? `<h2>Overview</h2><p>${product.overview}</p>` : ''}
          ${featuresList}
          <div class="hero-actions">
            <a class="btn btn-primary" href="${enquiryHref({ type: 'agencies', product: product.name, brand: brand.name })}">Enquire about this equipment</a>
            <a class="btn btn-secondary" href="/agencies/${brand.slug}/">Back to ${brand.name}</a>
          </div>
        </div>
      </div>
    </section>
    ${variantsTable}
    ${
      relatedCards
        ? `
    <section class="section section-paper">
      <div class="container">
        <div class="section-head">
          <div>
            <h2>Related equipment</h2>
            <p class="section-intro">More from ${group ? group.label : brand.name}.</p>
          </div>
          <a class="btn btn-secondary" href="/agencies/${brand.slug}/">View all ${brand.name} equipment</a>
        </div>
        <div class="grid grid-3">
          ${relatedCards}
        </div>
      </div>
    </section>`
        : ''
    }

    <section class="cta-band">
      <div class="container">
        <div>
          <h2>Ready to enquire about the ${product.name}?</h2>
          <p>Speak to Labrite about availability and technical support.</p>
        </div>
        <div class="cta-actions">
          <a class="btn btn-primary" href="${enquiryHref({ type: 'agencies', product: product.name, brand: brand.name })}">Enquire now</a>
        </div>
      </div>
    </section>`;

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.application,
    brand: { '@type': 'Brand', name: brand.name },
  };
  const crumbs = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Agencies & Distribution', url: '/agencies.html' },
    { name: brand.name, url: `/agencies/${brand.slug}/` },
    { name: product.name },
  ]);

  return {
    title: `${product.name} | ${brand.name} | Labrite`,
    description: product.application,
    canonicalPath: `/agencies/${brand.slug}/products/${product.slug}.html`,
    activeKey: 'agencies',
    outPath: `agencies/${brand.slug}/products/${product.slug}.html`,
    main,
    structuredData: [productSchema, crumbs],
  };
}
