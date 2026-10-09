import { productMedia } from '../partials/render.mjs';
import { EQUIPMENT_RANGES } from '../data/nav.mjs';
import { PRODUCTS, getProductsByRange } from '../data/products.mjs';

const rangeCards = EQUIPMENT_RANGES.map((r) => {
  const rep = getProductsByRange(r.key)[0];
  return `
      <article class="card">
        ${productMedia(rep)}
        <div class="card-body">
          <span class="card-category">Equipment Range</span>
          <h3>${r.label}</h3>
          <p>${r.desc}</p>
          <div class="card-actions">
            <a class="link-primary" href="${r.href}">View range →</a>
          </div>
        </div>
      </article>`;
}).join('\n');

const filterChips = [
  `<button class="filter-chip" type="button" data-filter="all" aria-pressed="true">All Equipment</button>`,
  ...EQUIPMENT_RANGES.map(
    (r) => `<button class="filter-chip" type="button" data-filter="${r.key}" aria-pressed="false">${r.label}</button>`
  ),
].join('\n          ');

const productCards = PRODUCTS.map(
  (p) => `
        <article class="card" data-category="${p.range}">
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
).join('\n');

const main = `
    <section class="hero-simple">
      <div class="container hero-content">
        <span class="eyebrow">Equipment &amp; Instruments</span>
        <h1>Laboratory equipment, built for accuracy</h1>
        <p class="lede">The right choice for laboratory equipment, chemicals, repairs and maintenance — a professional catalogue of the instruments Labrite supplies and supports.</p>
      </div>
    </section>

    <section class="section section-paper">
      <div class="container">
        <div class="section-head">
          <div>
            <h2>Equipment ranges</h2>
            <p class="section-intro">Browse by range, or filter the full catalogue below.</p>
          </div>
        </div>
        <div class="grid grid-3 reveal-group">
          ${rangeCards}
        </div>
      </div>
    </section>

    <section class="section section-mist">
      <div class="container">
        <div class="section-head">
          <div>
            <h2>Full equipment catalogue</h2>
            <p class="section-intro">Filter by range to find the right instrument.</p>
          </div>
        </div>
        <div class="filter-bar" data-filter-bar role="group" aria-label="Filter equipment by range">
          ${filterChips}
        </div>
        <div class="grid grid-3 reveal-group">
          ${productCards}
        </div>
      </div>
    </section>

    <section class="cta-band">
      <div class="container">
        <div>
          <h2>Can't find what you're looking for?</h2>
          <p>Labrite's team can advise on the right equipment for your laboratory.</p>
        </div>
        <div class="cta-actions">
          <a class="btn btn-primary" href="/contact.html">Contact Labrite</a>
        </div>
      </div>
    </section>`;

export default {
  title: 'Equipment & Instruments | Labrite',
  description:
    'Professional laboratory equipment and instruments from Labrite — weighing and calibration, moisture and drying, sample preparation, testing and analysis, and laboratory support equipment.',
  canonicalPath: '/equipment/',
  activeKey: 'equipment',
  outPath: 'equipment/index.html',
  main,
};
