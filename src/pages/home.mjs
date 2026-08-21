import { mediaPlaceholder } from '../partials/render.mjs';
import { BUSINESS_AREAS } from '../data/nav.mjs';
import { getProduct } from '../data/products.mjs';

const businessCards = BUSINESS_AREAS.map(
  (a) => `
      <article class="card business-card">
        ${mediaPlaceholder({ title: a.label, note: 'Photograph to be added', ratio: 'ratio-4-3' })}
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
        ${mediaPlaceholder({ title: p.name, note: 'Photograph to be added', ratio: 'ratio-4-3' })}
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
    <section class="hero">
      <div class="hero-media">
        ${mediaPlaceholder({ title: 'Labrite laboratory photography', note: 'Hero photograph to be added', ratio: '' })}
      </div>
      <div class="container hero-content">
        <span class="eyebrow">Laboratory · Equipment · Chemicals · Technical Support</span>
        <h1>Laboratory confidence. Built on accuracy.</h1>
        <p class="lede">Labrite provides laboratory testing, equipment, instruments, chemicals and technical support — backed by one established, technically credible identity across every business area.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#business-areas">Explore Our Services</a>
          <a class="btn btn-secondary" href="/contact.html">Contact Labrite</a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div class="split-content">
          <span class="eyebrow">Who We Are</span>
          <h2>One Labrite identity, built for laboratory and industrial work</h2>
          <p>Labrite CC brings together a Coal Laboratory, equipment and instrument supply, laboratory chemicals, and repairs and maintenance under a single, consistent technical identity. Whichever part of Labrite you work with, the same standard of precision and reliability applies.</p>
          <a class="btn btn-secondary" href="/about.html">Learn more about Labrite</a>
        </div>
        <div class="split-media l-frame">
          ${mediaPlaceholder({ title: 'Labrite laboratory environment', note: 'Photograph to be added', ratio: 'ratio-4-3' })}
        </div>
      </div>
    </section>

    <section id="business-areas" class="section section-alt">
      <div class="container">
        <div class="section-head">
          <div>
            <span class="eyebrow">What We Do</span>
            <h2>Core business areas</h2>
            <p class="section-intro">Labrite's work spans laboratory testing, equipment supply, chemicals, technical support and distribution.</p>
          </div>
        </div>
        <div class="grid grid-3">
          ${businessCards}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container split reverse">
        <div class="split-content">
          <span class="eyebrow">Coal Laboratory</span>
          <h2>Applying science for accuracy and precision</h2>
          <p>The Labrite Coal Laboratory carries out coal analysis, testing and sample preparation using dedicated laboratory equipment, from sample crushing and sieving through to moisture analysis and high-temperature testing.</p>
          <a class="btn btn-secondary" href="/coal-laboratory.html">Visit the Coal Laboratory</a>
        </div>
        <div class="split-media l-frame">
          ${mediaPlaceholder({ title: 'Coal Laboratory', note: 'Photograph to be added', ratio: 'ratio-4-3' })}
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <div class="section-head">
          <div>
            <span class="eyebrow">Featured Equipment</span>
            <h2>From the equipment catalogue</h2>
            <p class="section-intro">A sample of the laboratory instruments Labrite supplies and supports.</p>
          </div>
          <a class="btn btn-secondary" href="/equipment/">View all equipment</a>
        </div>
        <div class="grid grid-4">
          ${featuredCards}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div class="split-content">
          <span class="eyebrow">Repairs &amp; Maintenance</span>
          <h2>The right choice for laboratory equipment, chemicals, repairs and maintenance</h2>
          <p>Beyond supplying equipment and chemicals, Labrite supports laboratories with inspection, maintenance and repair of the instruments they depend on — helping keep testing programmes running with minimal disruption.</p>
          <a class="btn btn-secondary" href="/repairs-maintenance.html">Repairs &amp; Maintenance</a>
        </div>
        <div class="split-media l-frame">
          ${mediaPlaceholder({ title: 'Repairs & Maintenance', note: 'Photograph to be added', ratio: 'ratio-4-3' })}
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container split reverse">
        <div class="split-content">
          <span class="eyebrow">Agencies &amp; Distribution</span>
          <h2>Brands and manufacturers represented by Labrite</h2>
          <p>Labrite represents a range of laboratory equipment brands and manufacturers, connecting South African laboratories with the instruments and products they rely on.</p>
          <a class="btn btn-secondary" href="/agencies.html">Agencies &amp; Distribution</a>
        </div>
        <div class="split-media l-frame">
          ${mediaPlaceholder({ title: 'Agencies & Distribution', note: 'Photograph to be added', ratio: 'ratio-4-3' })}
        </div>
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
    </section>`;

export default {
  title: 'Labrite | Laboratory Services, Equipment & Technical Support',
  description:
    'Labrite provides Coal Laboratory testing, laboratory equipment and instruments, chemicals, repairs and maintenance, and agencies and distribution — one established Labrite identity across every business area.',
  canonicalPath: '/',
  activeKey: 'home',
  outPath: 'index.html',
  main,
};
