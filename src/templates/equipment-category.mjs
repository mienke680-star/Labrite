import { productMedia, breadcrumbSchema } from '../partials/render.mjs';
import { EQUIPMENT_RANGES } from '../data/nav.mjs';

export function renderEquipmentCategoryPage(range, products) {
  const otherRanges = EQUIPMENT_RANGES.filter((r) => r.key !== range.key);

  const cards = products
    .map(
      (p) => `
        <article class="card">
          ${productMedia(p)}
          <div class="card-body">
            <span class="card-category">${p.category}</span>
            <h3>${p.name}</h3>
            <p>${p.shortDescription}</p>
            <div class="card-actions">
              <a class="link-primary" href="/equipment/products/${p.slug}.html">View product →</a>
              <a class="link-secondary" href="/contact.html">Enquire</a>
            </div>
          </div>
        </article>`
    )
    .join('\n');

  const otherRangeLinks = otherRanges
    .map((r) => `<li><a href="${r.href}">${r.label}</a></li>`)
    .join('\n            ');

  const main = `
    <section class="hero-simple">
      <div class="container hero-content">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span aria-hidden="true">/</span>
          <a href="/equipment/">Equipment &amp; Instruments</a><span aria-hidden="true">/</span>
          <span aria-current="page">${range.label}</span>
        </nav>
        <span class="eyebrow">Equipment &amp; Instruments</span>
        <h1>${range.label}</h1>
        <p class="lede">${range.desc}</p>
      </div>
    </section>

    <section class="section section-paper">
      <div class="container">
        <div class="grid grid-3 reveal-group">
          ${cards}
        </div>
      </div>
    </section>

    <section class="section section-mist">
      <div class="container">
        <div class="section-head">
          <div>
            <h2>Explore other ranges</h2>
            <p class="section-intro">Labrite's full equipment catalogue spans weighing, drying, sample preparation, testing and laboratory support.</p>
          </div>
          <a class="btn btn-secondary" href="/equipment/">View all equipment</a>
        </div>
        <ul class="grid grid-4" style="list-style:none;">
          ${otherRangeLinks}
        </ul>
      </div>
    </section>

    <section class="cta-band">
      <div class="container">
        <div>
          <h2>Need help choosing equipment?</h2>
          <p>Talk to Labrite about your laboratory's requirements.</p>
        </div>
        <div class="cta-actions">
          <a class="btn btn-primary" href="/contact.html">Contact Labrite</a>
        </div>
      </div>
    </section>`;

  const crumbs = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Equipment & Instruments', url: '/equipment/' },
    { name: range.label },
  ]);

  return {
    title: `${range.label} | Labrite Equipment & Instruments`,
    description: range.desc,
    canonicalPath: range.href,
    activeKey: 'equipment',
    outPath: `equipment/${range.key}.html`,
    main,
    structuredData: [crumbs],
  };
}
