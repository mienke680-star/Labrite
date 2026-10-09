const main = `
    <section class="hero-simple">
      <div class="container hero-content">
        <span class="eyebrow">Agencies &amp; Distribution</span>
        <h1>Brands and manufacturers represented by Labrite</h1>
        <p class="lede">Labrite connects laboratories with equipment brands and manufacturers, supporting the products it represents with local technical knowledge.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="/contact.html">Enquire about a brand</a>
          <a class="btn btn-secondary" href="/equipment/">View equipment</a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head">
          <div>
            <h2>Represented brands</h2>
            <p class="section-intro">Brand logos are used only where supplied. No exclusive distribution rights are implied unless separately confirmed.</p>
          </div>
        </div>
        <div class="grid grid-3 reveal-group">
          <article class="card business-card card-plain">
            <div class="media ratio-16-9" style="background:var(--white);"><img src="/assets/images/brand/partner-u-therm.png" alt="U-Therm laboratory instruments brand logo" loading="lazy" style="object-fit:contain;padding:2.5rem;" /></div>
            <div class="card-body">
              <h3>U-Therm</h3>
              <p>A coal and energy testing equipment manufacturer — calorimeters, proximate analysers, sulphur analysers, ash fusion testers, abrasive index testers and other specialised analytical instrumentation.</p>
              <div class="card-actions"><a class="link-primary" href="/equipment/products/laboratory-analyzer-system.html">View equipment →</a></div>
            </div>
          </article>
          <article class="card business-card card-plain">
            <div class="media ratio-16-9" style="background:var(--white);"><img src="/assets/images/brand/partner-maglev-africa.png" alt="Maglev Africa brand logo" loading="lazy" style="object-fit:contain;padding:2.5rem;" /></div>
            <div class="card-body">
              <h3>Maglev Africa</h3>
              <p>A brand Labrite works with. Product categories and relationship details to be confirmed.</p>
            </div>
          </article>
          <article class="card business-card card-plain">
            <div class="media ratio-16-9" style="background:var(--white);"><img src="/assets/images/brand/partner-herexi.png" alt="Herexi brand logo" loading="lazy" style="object-fit:contain;padding:2.5rem;" /></div>
            <div class="card-body">
              <h3>Herexi</h3>
              <p>A brand Labrite works with. Product categories and relationship details to be confirmed.</p>
            </div>
          </article>
        </div>
        <div class="notice" style="margin-top:2rem;">
          <strong>More brands pending.</strong> Further manufacturer and brand details will be published here only where supplied and officially approved.
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <div class="section-head">
          <div>
            <h2>Product categories</h2>
            <p class="section-intro">Agency products are integrated into Labrite's wider equipment catalogue.</p>
          </div>
          <a class="btn btn-secondary" href="/equipment/">Browse equipment</a>
        </div>
      </div>
    </section>

    <section class="cta-band">
      <div class="container">
        <div>
          <h2>Interested in a brand Labrite represents?</h2>
          <p>Contact Labrite for current agency and distribution information.</p>
        </div>
        <div class="cta-actions">
          <a class="btn btn-primary" href="/contact.html">Contact Labrite</a>
        </div>
      </div>
    </section>`;

export default {
  title: 'Agencies & Distribution | Labrite',
  description:
    'Labrite represents laboratory equipment brands and manufacturers, connecting laboratories with the products it distributes and supports.',
  canonicalPath: '/agencies.html',
  activeKey: 'agencies',
  outPath: 'agencies.html',
  main,
};
