import { breadcrumbSchema, enquiryHref } from '../partials/render.mjs';
import { UTHERM_CATEGORIES } from '../data/utherm-products.mjs';

export function renderAgencyCategoryPage(brand, category, products) {
  const otherCategories = UTHERM_CATEGORIES.filter((c) => c.slug !== category.slug && c.hasProducts);

  const cards = products
    .map(
      (p) => `
      <article class="card-product">
        <div class="media ratio-4-3"><img src="${p.image}" alt="${p.name}" loading="lazy" /></div>
        <div class="card-body">
          <span class="card-category">${brand.name}</span>
          <h3>${p.name}</h3>
          <div class="card-actions">
            <a class="link-primary" href="/agencies/u-therm/products/${p.slug}.html">View product →</a>
          </div>
        </div>
      </article>`
    )
    .join('\n');

  const otherCategoryLinks = otherCategories
    .map((c) => `<li><a href="/agencies/u-therm/${c.slug}.html">${c.label}</a></li>`)
    .join('\n            ');

  const main = `
    <section class="hero-simple">
      <div class="container hero-content">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span aria-hidden="true">/</span>
          <a href="/agencies.html">Agencies &amp; Distribution</a><span aria-hidden="true">/</span>
          <a href="/agencies/${brand.slug}/">${brand.name}</a><span aria-hidden="true">/</span>
          <span aria-current="page">${category.label}</span>
        </nav>
        <span class="eyebrow">${brand.name}</span>
        <h1>${category.label}</h1>
        <p class="lede">${category.description}</p>
      </div>
    </section>

    <section class="section section-paper">
      <div class="container">
        <div class="notice" style="margin-bottom:var(--space-10);max-width:820px;">
          <strong>Specifications on enquiry.</strong> These are the manufacturer's genuine product photographs and names as supplied by Labrite. Model numbers and detailed specifications were not included in the supplied material, so none are stated here — contact Labrite for current technical detail and availability.
        </div>
        <div class="grid grid-3 reveal-group">
          ${cards}
        </div>
      </div>
    </section>

    <section class="section section-mist">
      <div class="container">
        <div class="section-head">
          <div>
            <h2>Other ${brand.name} ranges</h2>
          </div>
          <a class="btn btn-secondary" href="/agencies/${brand.slug}/">View all ${brand.name} categories</a>
        </div>
        <ul class="grid grid-4" style="list-style:none;">
          ${otherCategoryLinks}
        </ul>
      </div>
    </section>

    <section class="cta-band">
      <div class="container">
        <div>
          <h2>Enquire about ${category.label}</h2>
          <p>Speak to Labrite about availability, pricing and technical support.</p>
        </div>
        <div class="cta-actions">
          <a class="btn btn-primary" href="${enquiryHref({ type: 'agencies', brand: brand.name, message: `Enquiry about: ${category.label} (${brand.name})\n\n` })}">Contact Labrite</a>
        </div>
      </div>
    </section>`;

  const crumbs = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Agencies & Distribution', url: '/agencies.html' },
    { name: brand.name, url: `/agencies/${brand.slug}/` },
    { name: category.label },
  ]);

  return {
    title: `${category.label} | ${brand.name} | Labrite`,
    description: category.description,
    canonicalPath: `/agencies/${brand.slug}/${category.slug}.html`,
    activeKey: 'agencies',
    outPath: `agencies/${brand.slug}/${category.slug}.html`,
    main,
    structuredData: [crumbs],
  };
}
