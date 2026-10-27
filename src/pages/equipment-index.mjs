import { productMedia } from '../partials/render.mjs';
import { PRODUCTS } from '../data/products.mjs';

// This is not a sales catalogue — Labrite does not sell or rent out this
// equipment. It is equipment Labrite's own laboratory uses to deliver its
// testing results. Only items with a genuine supplied photograph are shown;
// nothing without a real photo is listed (see src/data/products.mjs).
const productCards = PRODUCTS.map(
  (p) => `
        <article class="card">
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
).join('\n');

const main = `
    <section class="hero-simple">
      <div class="container hero-content">
        <span class="eyebrow">Equipment &amp; Instruments</span>
        <h1>Equipment Labrite's laboratory relies on</h1>
        <p class="lede">The equipment shown below is used in Labrite's own laboratory to deliver accurate, repeatable testing results. It is not available for sale or rental.</p>
      </div>
    </section>

    <section class="section section-paper">
      <div class="container">
        <div class="section-head">
          <div>
            <h2>Weighing &amp; Calibration Equipment</h2>
            <p class="section-intro">Analytical, top pan and platform balances used for sample and reagent weighing, mass measurement and balance calibration.</p>
          </div>
        </div>
        <div class="grid grid-3 reveal-group">
          ${productCards}
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

export default {
  title: 'Equipment & Instruments | Labrite',
  description:
    'The laboratory equipment Labrite uses to deliver accurate, repeatable testing results — weighing and calibration instruments from Labrite\'s own laboratory.',
  canonicalPath: '/equipment/',
  activeKey: 'equipment',
  outPath: 'equipment/index.html',
  main,
};
