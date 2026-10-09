import { breadcrumbSchema } from '../partials/render.mjs';
import { getCategory, getUThermProductsByCategory } from '../data/utherm-products.mjs';
import { SITE_URL } from '../data/company.mjs';

export function renderAgencyProductPage(brand, product) {
  const category = getCategory(product.category);
  const related = getUThermProductsByCategory(product.category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  const relatedCards = related.length
    ? related
        .map(
          (p) => `
        <article class="card">
          <div class="media ratio-4-3"><img src="${p.image}" alt="${p.name}" loading="lazy" /></div>
          <div class="card-body">
            <h3>${p.name}</h3>
            <div class="card-actions">
              <a class="link-primary" href="/agencies/u-therm/products/${p.slug}.html">View product →</a>
            </div>
          </div>
        </article>`
        )
        .join('\n')
    : '<p>No further products listed in this category yet.</p>';

  const main = `
    <section class="hero-simple">
      <div class="container hero-content">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span aria-hidden="true">/</span>
          <a href="/agencies.html">Agencies &amp; Distribution</a><span aria-hidden="true">/</span>
          <a href="/agencies/${brand.slug}/">${brand.name}</a><span aria-hidden="true">/</span>
          <a href="/agencies/${brand.slug}/${category.slug}.html">${category.label}</a><span aria-hidden="true">/</span>
          <span aria-current="page">${product.name}</span>
        </nav>
        <span class="eyebrow">${brand.name} — ${category.label}</span>
        <h1>${product.name}</h1>
      </div>
    </section>

    <section class="section section-paper">
      <div class="container split l-frame">
        <div class="split-media">
          <div class="media ratio-4-3"><img src="${product.image}" alt="${product.name}" loading="lazy" /></div>
        </div>
        <div class="split-content">
          <h2>Overview</h2>
          <p>A ${product.name.toLowerCase()} from ${brand.name}'s ${category.label.toLowerCase()} range, represented and supported in South Africa by Labrite. This is the manufacturer's genuine product photograph and name as supplied by Labrite.</p>
          <div class="notice">
            <strong>Specifications on enquiry.</strong> Model number and detailed specifications were not included in the supplied material, so none are stated here — contact Labrite for current technical detail, pricing and availability.
          </div>
          <div class="hero-actions">
            <a class="btn btn-primary" href="/contact.html">Enquire about this product</a>
            <a class="btn btn-secondary" href="/agencies/${brand.slug}/${category.slug}.html">Back to ${category.label}</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-mist">
      <div class="container">
        <div class="section-head">
          <div>
            <h2>More from ${category.label}</h2>
          </div>
          <a class="btn btn-secondary" href="/agencies/${brand.slug}/${category.slug}.html">View all ${category.label}</a>
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

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: `${product.name} — ${brand.name}, represented by Labrite.`,
    image: `${SITE_URL}${product.image}`,
    category: category.label,
    brand: { '@type': 'Brand', name: brand.name },
  };
  const crumbs = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Agencies & Distribution', url: '/agencies.html' },
    { name: brand.name, url: `/agencies/${brand.slug}/` },
    { name: category.label, url: `/agencies/${brand.slug}/${category.slug}.html` },
    { name: product.name },
  ]);

  return {
    title: `${product.name} | ${brand.name} | Labrite`,
    description: `${product.name} — ${brand.name}, represented and supported in South Africa by Labrite.`,
    canonicalPath: `/agencies/${brand.slug}/products/${product.slug}.html`,
    activeKey: 'agencies',
    outPath: `agencies/${brand.slug}/products/${product.slug}.html`,
    main,
    structuredData: [productSchema, crumbs],
  };
}
