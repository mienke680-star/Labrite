import { productMedia } from '../partials/render.mjs';
import { BUSINESS_AREAS, EQUIPMENT_RANGES } from '../data/nav.mjs';
import { getProduct, PRODUCTS } from '../data/products.mjs';

const BUSINESS_CARD_MEDIA = {
  'Laboratory Services': productMedia(getProduct('test-sieves')),
  'Equipment & Instruments': productMedia(getProduct('top-loading-balance')),
  'Chemicals': `<div class="media ratio-4-3"><img src="/assets/images/atmosphere/chemicals-concept.jpg" alt="Laboratory chemical glassware and a coal sample" loading="lazy" /></div>`,
  'Repairs & Maintenance': `<div class="media ratio-4-3"><img src="/assets/images/site/lab-prep-area.jpg" alt="Labrite laboratory preparation area" loading="lazy" /></div>`,
  'Agencies & Distribution': `<div class="media ratio-4-3"><img src="/assets/images/site/reception-desk.jpg" alt="Labrite reception area" loading="lazy" /></div>`,
};

const businessCards = BUSINESS_AREAS.map(
  (a) => `
      <article class="card business-card">
        ${BUSINESS_CARD_MEDIA[a.label]}
        <div class="card-body">
          <h3>${a.label}</h3>
          <p>${a.desc}</p>
          <div class="card-actions">
            <a class="link-primary" href="${a.href}">Learn more →</a>
          </div>
        </div>
      </article>`
).join('\n');

const featuredSlugs = ['analytical-balance', 'halogen-moisture-analyzer', 'muffle-furnace', 'sample-crusher'];
const featuredCards = featuredSlugs
  .map(getProduct)
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
        <p class="lede">Labrite provides laboratory testing, equipment, instruments, chemicals and technical support — backed by one established, technically credible identity across every business area.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#business-areas">Explore Our Services</a>
          <a class="btn btn-secondary" href="/contact.html">Contact Labrite</a>
        </div>
      </div>
    </section>

    <section class="section section-mist">
      <div class="container">
        <div class="stats-strip reveal-group">
          <div class="stat">
            <span class="stat-number" data-count-to="${EQUIPMENT_RANGES.length}">0</span>
            <span class="stat-label">Equipment Ranges</span>
          </div>
          <div class="stat">
            <span class="stat-number" data-count-to="${PRODUCTS.length}">0</span>
            <span class="stat-label">Catalogued Instruments</span>
          </div>
          <div class="stat">
            <span class="stat-number" data-count-to="2">0</span>
            <span class="stat-label">Represented Brands</span>
          </div>
          <div class="stat">
            <span class="stat-number">T<span class="stat-suffix">1091</span></span>
            <span class="stat-label">SANAS Accreditation No.</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-paper">
      <div class="container split">
        <div class="split-content">
          <span class="eyebrow">Who We Are</span>
          <h2>One Labrite identity, built for laboratory and industrial work</h2>
          <span class="l-rule reveal-line" aria-hidden="true"></span>
          <p>Labrite (Pty) Ltd brings together Laboratory Services, equipment and instrument supply, laboratory chemicals, and repairs and maintenance under a single, consistent technical identity. Whichever part of Labrite you work with, the same standard of precision and reliability applies.</p>
          <a class="btn btn-secondary" href="/about.html">Learn more about Labrite</a>
        </div>
        <div class="split-media l-frame">
          <div class="media ratio-4-3"><img src="/assets/images/site/boardroom.jpg" alt="Labrite boardroom" loading="lazy" /></div>
        </div>
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
        <div class="grid grid-3 reveal-group">
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
          <p>Labrite's Laboratory Services carry out coal analysis, testing and sample preparation using dedicated laboratory equipment, from sample crushing and sieving through to moisture analysis and high-temperature testing — Coal Testing &amp; Analysis is the current discipline, with more to follow.</p>
          <a class="btn btn-secondary" href="/laboratory-services.html">Visit Laboratory Services</a>
        </div>
        <div class="split-media l-frame">
          <div class="media ratio-4-3"><img src="/assets/images/site/coal-sample.jpg" alt="Coal sample used in Labrite Laboratory Services testing" loading="lazy" /></div>
        </div>
      </div>
    </section>

    <section class="section section-mist">
      <div class="container">
        <div class="section-head">
          <div>
            <span class="eyebrow">Featured Equipment</span>
            <h2>From the equipment catalogue</h2>
            <p class="section-intro">A sample of the laboratory instruments Labrite supplies and supports.</p>
          </div>
          <a class="btn btn-secondary" href="/equipment/">View all equipment</a>
        </div>
        <div class="grid grid-4 reveal-group">
          ${featuredCards}
        </div>
      </div>
    </section>

    <section class="section section-paper">
      <div class="container split">
        <div class="split-content">
          <span class="eyebrow">Repairs &amp; Maintenance</span>
          <h2>The right choice for laboratory equipment, chemicals, repairs and maintenance</h2>
          <span class="l-rule reveal-line" aria-hidden="true"></span>
          <p>Beyond supplying equipment and chemicals, Labrite supports laboratories with inspection, maintenance and repair of the instruments they depend on — helping keep testing programmes running with minimal disruption.</p>
          <a class="btn btn-secondary" href="/repairs-maintenance.html">Repairs &amp; Maintenance</a>
        </div>
        <div class="split-media l-frame">
          <div class="media ratio-4-3"><img src="/assets/images/site/corridor.jpg" alt="Labrite laboratory corridor" loading="lazy" /></div>
        </div>
      </div>
    </section>

    <section class="section section-mist">
      <div class="container split reverse">
        <div class="split-content">
          <span class="eyebrow">Agencies &amp; Distribution</span>
          <h2>Brands and manufacturers represented by Labrite</h2>
          <span class="l-rule reveal-line" aria-hidden="true"></span>
          <p>Labrite represents a range of laboratory equipment brands and manufacturers, connecting South African laboratories with the instruments and products they rely on.</p>
          <a class="btn btn-secondary" href="/agencies.html">Agencies &amp; Distribution</a>
        </div>
        <div class="split-media l-frame">
          <div class="media ratio-4-3"><img src="/assets/images/site/open-office.jpg" alt="Labrite office" loading="lazy" /></div>
        </div>
      </div>
    </section>

    <section class="cta-band cta-band-photo">
      <div class="cta-media"><img src="/assets/images/atmosphere/coal-terrain.jpg" alt="" aria-hidden="true" loading="lazy" /></div>
      <div class="container">
        <div>
          <h2>Speak to Labrite about your laboratory</h2>
          <p>Testing, equipment, chemicals or technical support — get in touch with the Labrite team.</p>
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
