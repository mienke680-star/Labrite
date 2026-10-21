import { enquiryHref } from '../partials/render.mjs';
import { iconSvg } from '../partials/icons.mjs';
import { BUSINESS_AREAS, EQUIPMENT_RANGES } from '../data/nav.mjs';
import { BRANDS } from '../data/agencies.mjs';
import { UTHERM_EQUIPMENT } from '../data/utherm-products.mjs';

const BUSINESS_CARD_ICON = {
  'Laboratory Services': 'lab',
  'Equipment & Instruments': 'equipment',
  'Chemicals': 'chemicals',
  'Repairs & Maintenance': 'repairs',
  'Agencies & Distribution': 'agencies',
};

const CARD_TITLE_OVERRIDE = {
  Chemicals: 'Chemicals, Consumables &amp; PPE',
};

const businessCards = BUSINESS_AREAS.map(
  (a) => `
      <article class="icon-card">
        <div class="icon-card-icon">${iconSvg(BUSINESS_CARD_ICON[a.label])}</div>
        <h3>${CARD_TITLE_OVERRIDE[a.label] || a.label}</h3>
        <p>${a.desc}</p>
        <div class="card-actions"><a class="link-primary" href="${a.href}">Learn more →</a></div>
      </article>`
).join('\n');

const featuredSlugs = ['microwave-muffle-furnace', 'wb-series-analytical-balance', 'automatic-proximate-analyzer-tga'];
const featuredCards = featuredSlugs
  .map((slug) => UTHERM_EQUIPMENT.find((e) => e.slug === slug))
  .map(
    (item) => `
      <article class="card-product">
        <div class="media ratio-4-3"><img src="${item.image}" alt="${item.name}" loading="lazy" /></div>
        <div class="card-body">
          <span class="card-category">U-Therm</span>
          <h3>${item.name}</h3>
          <p>${item.application}</p>
          <div class="card-actions">
            <a class="link-primary" href="${enquiryHref({ type: 'agencies', product: item.name, brand: 'U-Therm' })}">Enquire about this equipment →</a>
          </div>
        </div>
      </article>`
  )
  .join('\n');

const main = `
    <section class="hero hero-light">
      <div class="container hero-content">
        <span class="eyebrow">Laboratory · Equipment · Chemicals · Technical Support</span>
        <h1>Laboratory confidence. Built on <em>accuracy</em>.</h1>
        <span class="hero-rule" aria-hidden="true"></span>
        <p class="lede">Labrite provides professional laboratory testing services, analytical equipment, instruments, chemicals, consumables and specialised technical support to the mining, mineral processing and industrial sectors. Combining practical laboratory experience with national and international supplier relationships, we provide dependable services, quality products and technical solutions suited to our clients' requirements.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#business-areas">Explore Our Services</a>
          <a class="btn btn-secondary" href="/contact.html">Contact Labrite</a>
        </div>
      </div>
    </section>

    <section class="section section-dark">
      <div class="container">
        <div class="stats-strip is-triple reveal-group">
          <div class="stat">
            <span class="stat-number" data-count-to="${EQUIPMENT_RANGES.length}">${EQUIPMENT_RANGES.length}</span>
            <span class="stat-label">Equipment Ranges</span>
          </div>
          <div class="stat">
            <span class="stat-number" data-count-to="${BRANDS.length}">${BRANDS.length}</span>
            <span class="stat-label">Represented Brands</span>
          </div>
          <div class="stat">
            <span class="stat-label" style="margin-top:0;">Labrite is a SANAS-accredited laboratory (T1091).</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-paper">
      <div class="container" style="max-width:760px;">
        <span class="eyebrow">Who We Are</span>
        <h2>One Company. Integrated Laboratory and Technical Solutions</h2>
        <span class="l-rule reveal-line" aria-hidden="true"></span>
        <p>Labrite combines laboratory testing, equipment supply, specialised technical services and sourcing capabilities to support its clients' operational requirements.</p>
        <a class="btn btn-secondary" href="/about.html">Learn more about Labrite</a>
      </div>
    </section>

    <section id="business-areas" class="section section-mist">
      <div class="container">
        <div class="section-head">
          <div>
            <span class="eyebrow">What We Do</span>
            <h2>Core business areas</h2>
            <p class="section-intro">Labrite's work spans laboratory testing, equipment supply, chemicals, technical support and distribution.</p>
          </div>
        </div>
        <div class="icon-grid reveal-group">
          ${businessCards}
        </div>
      </div>
    </section>

    <section class="section section-paper">
      <div class="container split reverse">
        <div class="split-content">
          <span class="eyebrow">Laboratory Services</span>
          <h2>Applying science for accuracy and precision</h2>
          <span class="l-rule reveal-line" aria-hidden="true"></span>
          <p>Labrite's Laboratory Services carry out sampling, sample preparation, and Coal Testing &amp; Analysis, from sample crushing and sieving through to moisture analysis and high-temperature testing.</p>
          <a class="btn btn-secondary" href="/laboratory-services.html">Visit Laboratory Services</a>
        </div>
        <div class="split-media">
          <div class="method-panel">
            <span class="method-panel-label">Accredited Scope</span>
            <ul class="method-panel-list">
              <li><span>Ash</span><code>ISO 1171</code></li>
              <li><span>Calorific Value</span><code>ISO 1928</code></li>
              <li><span>Total Sulphur</span><code>ISO 20336</code></li>
              <li><span>Volatile Matter</span><code>ISO 562</code></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-mist">
      <div class="container">
        <div class="section-head">
          <div>
            <span class="eyebrow">Represented Equipment</span>
            <h2>A technical partner, not just a supplier</h2>
            <p class="section-intro">Labrite works with established manufacturers and suppliers to provide analytical instruments, spare parts and technical support. We assist customers in identifying and sourcing suitable equipment locally and internationally.</p>
          </div>
          <a class="btn btn-secondary" href="/agencies/u-therm/">View U-Therm</a>
        </div>
        <div class="grid grid-3 reveal-group">
          ${featuredCards}
        </div>
      </div>
    </section>

    <section class="section section-paper">
      <div class="container" style="max-width:760px;">
        <span class="eyebrow">Repairs &amp; Maintenance</span>
        <h2>Equipment Repairs, Servicing and Maintenance</h2>
        <span class="l-rule reveal-line" aria-hidden="true"></span>
        <p>Labrite provides inspection, servicing, repairs and maintenance for a range of laboratory equipment and instruments, helping customers maintain reliability and minimise downtime.</p>
        <a class="btn btn-secondary" href="/repairs-maintenance.html">Repairs &amp; Maintenance</a>
      </div>
    </section>

    <section class="section section-mist">
      <div class="container" style="max-width:760px;">
        <span class="eyebrow">Agencies &amp; Distribution</span>
        <h2>Brands and manufacturers represented by Labrite</h2>
        <span class="l-rule reveal-line" aria-hidden="true"></span>
        <p>Through established relationships with reputable manufacturers and suppliers, Labrite provides equipment solutions, technical advice, spare parts and product support. Our sourcing capabilities also extend beyond represented brands to meet specialised requirements.</p>
        <a class="btn btn-secondary" href="/agencies.html">Agencies &amp; Distribution</a>
      </div>
    </section>

    <section class="cta-band">
      <div class="container">
        <div>
          <h2>Speak to Labrite about your laboratory</h2>
          <p>Testing, equipment, chemicals or technical support — get in touch with the Labrite team.</p>
        </div>
        <div class="cta-actions">
          <a class="btn btn-primary" href="/contact.html">Contact Labrite</a>
        </div>
      </div>
    </section>

    <section class="cta-band">
      <div class="container">
        <div>
          <h2>Looking for a Specialised Laboratory Solution?</h2>
          <p>Contact Labrite with your equipment, chemical, consumable, spare-part or technical requirements. We will assess your enquiry and investigate suitable national or international sourcing options.</p>
        </div>
        <div class="cta-actions">
          <a class="btn btn-primary" href="/contact.html">Contact Labrite</a>
        </div>
      </div>
    </section>`;

export default {
  title: 'Labrite | Laboratory Services, Equipment & Technical Support',
  description:
    'Labrite provides Laboratory Services (currently Coal Testing & Analysis), laboratory equipment and instruments, chemicals, repairs and maintenance, and agencies and distribution — one established Labrite identity across every business area.',
  canonicalPath: '/',
  activeKey: 'home',
  outPath: 'index.html',
  main,
};
