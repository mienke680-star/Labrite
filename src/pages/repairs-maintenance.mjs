import { productMedia } from '../partials/render.mjs';
import { getProduct } from '../data/products.mjs';

const main = `
    <section class="hero-simple">
      <div class="container hero-content">
        <span class="eyebrow">Repairs &amp; Maintenance</span>
        <h1>The right choice for laboratory equipment, chemicals, repairs and maintenance</h1>
        <p class="lede">Labrite supports laboratories with practical, technical servicing of the equipment they rely on — helping keep testing programmes running with minimal disruption.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="/contact.html">Request service</a>
          <a class="btn btn-secondary" href="/equipment/">View equipment</a>
        </div>
      </div>
      <span class="scroll-indicator" aria-hidden="true">Scroll</span>
    </section>

    <section class="section section-paper">
      <div class="container">
        <div class="section-head">
          <div>
            <h2>Service areas</h2>
            <p class="section-intro">Technical support across the laboratory equipment lifecycle.</p>
          </div>
        </div>
        <div class="grid grid-4 reveal-group">
          <article class="card business-card card-plain">
            <div class="card-body">
              <h3>Equipment Inspection</h3>
              <p>Technical inspection of laboratory equipment to identify servicing needs.</p>
            </div>
          </article>
          <article class="card business-card card-plain">
            <div class="card-body">
              <h3>Maintenance</h3>
              <p>Ongoing maintenance to help equipment perform reliably over time.</p>
            </div>
          </article>
          <article class="card business-card card-plain">
            <div class="card-body">
              <h3>Repairs</h3>
              <p>Technical repair of laboratory instruments and equipment.</p>
            </div>
          </article>
          <article class="card business-card card-plain">
            <div class="card-body">
              <h3>Technical Support</h3>
              <p>Practical, hands-on support for laboratory customers.</p>
            </div>
          </article>
        </div>
        <div class="notice" style="margin-top:2rem;">
          <strong>Note.</strong> Labrite's public LinkedIn listing specifically names furnace repair and calibration, and custom element design and manufacture, among its services — shown below for confirmation. Specific certifications, turnaround times or brand-specific service authorisations will be added once confirmed.
        </div>
      </div>
    </section>

    <section class="section section-mist">
      <div class="container">
        <div class="section-head">
          <div>
            <h2>Specialist repair services</h2>
            <p class="section-intro">Sourced from Labrite's public LinkedIn listing.</p>
          </div>
        </div>
        <div class="grid grid-2 reveal-group">
          <article class="card business-card card-plain">
            <div class="card-body">
              <h3>Furnace Repair &amp; Calibration</h3>
              <p>Repair and calibration of laboratory furnaces, keeping high-temperature testing equipment running accurately.</p>
            </div>
          </article>
          <article class="card business-card card-plain">
            <div class="card-body">
              <h3>Custom Element Design &amp; Manufacture</h3>
              <p>Design and manufacture of custom heating elements for laboratory equipment.</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section section-mist">
      <div class="container split reverse">
        <div class="split-content">
          <h2>A technical support partner</h2>
          <span class="l-rule reveal-line" aria-hidden="true"></span>
          <p>Beyond supplying equipment and chemicals, Labrite works alongside laboratories as a technical support partner — helping resolve equipment issues quickly and keep testing on schedule.</p>
          <a class="btn btn-secondary" href="/contact.html">Discuss your equipment</a>
        </div>
        <div class="split-media l-frame">
          ${productMedia(getProduct('muffle-furnace'))}
        </div>
      </div>
    </section>

    <section class="cta-band">
      <div class="container">
        <div>
          <h2>Need equipment serviced or repaired?</h2>
          <p>Get in touch with the Labrite technical team.</p>
        </div>
        <div class="cta-actions">
          <a class="btn btn-primary" href="/contact.html">Request service</a>
        </div>
      </div>
    </section>`;

export default {
  title: 'Repairs & Maintenance | Labrite',
  description:
    'Labrite is the right choice for laboratory equipment, chemicals, repairs and maintenance — technical inspection, maintenance, repairs and support for laboratory equipment.',
  canonicalPath: '/repairs-maintenance.html',
  activeKey: 'repairs',
  outPath: 'repairs-maintenance.html',
  main,
};
