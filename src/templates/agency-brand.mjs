import { breadcrumbSchema } from '../partials/render.mjs';
import { UTHERM_CATEGORIES, UTHERM_PRODUCTS, getUThermProductsByCategory } from '../data/utherm-products.mjs';

const CATEGORY_SAMPLE_PRODUCT = {};
UTHERM_PRODUCTS.forEach((p) => {
  if (!CATEGORY_SAMPLE_PRODUCT[p.category]) CATEGORY_SAMPLE_PRODUCT[p.category] = p;
});

function renderCategorySection(brand) {
  const categoryCards = UTHERM_CATEGORIES.map((c) => {
    const count = getUThermProductsByCategory(c.slug).length;
    const sample = CATEGORY_SAMPLE_PRODUCT[c.slug];
    if (c.hasProducts && sample) {
      return `
      <article class="card">
        <div class="media ratio-4-3"><img src="${sample.image}" alt="${sample.name}" loading="lazy" /></div>
        <div class="card-body">
          <h3>${c.label}</h3>
          <p>${c.description}</p>
          <div class="card-actions">
            <a class="link-primary" href="/agencies/u-therm/${c.slug}.html">View ${count} products →</a>
          </div>
        </div>
      </article>`;
    }
    return `
      <article class="card business-card card-plain">
        <div class="card-body">
          <h3>${c.label}</h3>
          <p>${c.description}</p>
          <div class="card-actions"><a class="link-primary" href="/contact.html">Enquire about this range →</a></div>
        </div>
      </article>`;
  }).join('\n');

  return `
    <section class="section section-paper">
      <div class="container">
        <div class="section-head">
          <div>
            <h2>Product categories</h2>
            <p class="section-intro">Curated ranges relevant to the laboratory, mining and industrial markets Labrite serves — not ${brand.name}'s full catalogue. Sales and quotations stay with Labrite.</p>
          </div>
        </div>
        <div class="grid grid-3 reveal-group">
          ${categoryCards}
        </div>
      </div>
    </section>`;
}

export function renderAgencyBrandPage(brand) {
  const main = `
    <section class="hero-simple">
      <div class="container hero-content">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span aria-hidden="true">/</span>
          <a href="/agencies.html">Agencies &amp; Distribution</a><span aria-hidden="true">/</span>
          <span aria-current="page">${brand.name}</span>
        </nav>
        <span class="eyebrow">Represented Brand</span>
        <h1>${brand.name}</h1>
        <p class="lede">${brand.summary}</p>
      </div>
    </section>

    <section class="section section-paper">
      <div class="container">
        <div class="media ratio-16-9" style="max-width:420px;background:var(--white);border:1px solid rgba(0,0,0,0.08);"><img src="${brand.logo}" alt="${brand.name} brand logo" loading="lazy" style="object-fit:contain;padding:2rem;" /></div>
        ${!brand.hasCatalogue ? `<div class="notice" style="margin-top:var(--space-8);max-width:700px;"><strong>Catalogue pending.</strong> ${brand.name}'s product media has not yet been supplied for publication. Contact Labrite directly to discuss ${brand.name} equipment and availability.</div>` : ''}
      </div>
    </section>

    ${brand.hasCatalogue ? renderCategorySection(brand) : ''}

    <section class="cta-band">
      <div class="container">
        <div>
          <h2>Interested in ${brand.name} equipment?</h2>
          <p>Contact Labrite for availability, pricing and technical support.</p>
        </div>
        <div class="cta-actions">
          <a class="btn btn-primary" href="/contact.html">Contact Labrite</a>
        </div>
      </div>
    </section>`;

  const crumbs = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Agencies & Distribution', url: '/agencies.html' },
    { name: brand.name },
  ]);

  return {
    title: `${brand.name} | Labrite Agencies & Distribution`,
    description: brand.summary,
    canonicalPath: `/agencies/${brand.slug}/`,
    activeKey: 'agencies',
    outPath: `agencies/${brand.slug}/index.html`,
    main,
    structuredData: [crumbs],
  };
}
