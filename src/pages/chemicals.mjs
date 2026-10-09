const main = `
    <section class="hero">
      <div class="hero-media">
        <img src="/assets/images/atmosphere/chemicals-concept.jpg" alt="Laboratory chemical glassware and a coal sample" />
      </div>
      <div class="container hero-content">
        <span class="eyebrow">Chemicals</span>
        <h1>Laboratory chemicals for <em>accurate</em> testing</h1>
        <span class="hero-rule" aria-hidden="true"></span>
        <p class="lede">Labrite supplies laboratory chemicals supporting sample preparation, testing and analysis — part of the same right choice for laboratory equipment, chemicals, repairs and maintenance that runs across the business.</p>
      </div>
      <span class="scroll-indicator" aria-hidden="true">Scroll</span>
    </section>

    <section class="section section-paper">
      <div class="container split reverse">
        <div class="split-content">
          <h2>Product range</h2>
          <span class="l-rule reveal-line" aria-hidden="true"></span>
          <p class="section-intro">Labrite's confirmed chemical product list is being finalised for publication.</p>
          <div class="notice">
            <strong>Content pending.</strong> Specific chemical products, categories and technical or safety documentation will be published here once confirmed by Labrite — this page is intentionally structured and ready for that content rather than an invented product list.
          </div>
        </div>
        <div class="split-media l-frame">
          <div class="media ratio-4-3"><img src="/assets/images/site/lab-prep-area.jpg" alt="Labrite laboratory sample preparation area" loading="lazy" /></div>
        </div>
      </div>
    </section>

    <section class="section section-mist">
      <div class="container split">
        <div class="split-content">
          <h2>Laboratory applications</h2>
          <span class="l-rule reveal-line" aria-hidden="true"></span>
          <p>Laboratory chemicals support sample preparation and analytical testing across Labrite's Laboratory Services and equipment customers alike, working alongside the instruments in Labrite's equipment catalogue.</p>
          <a class="btn btn-secondary" href="/equipment/">View laboratory equipment</a>
        </div>
        <div class="split-media l-frame">
          <div class="media ratio-4-3"><img src="/assets/images/site/lab-bench-glassware.jpg" alt="Labrite laboratory glassware and reagents" loading="lazy" /></div>
        </div>
      </div>
    </section>

    <section class="cta-band cta-band-photo">
      <div class="cta-media"><img src="/assets/images/atmosphere/flask-single.jpg" alt="" aria-hidden="true" loading="lazy" /></div>
      <div class="container">
        <div>
          <h2>Chemical product enquiries</h2>
          <p>Contact Labrite for current availability and technical documentation.</p>
        </div>
        <div class="cta-actions">
          <a class="btn btn-primary" href="/contact.html">Enquire now</a>
        </div>
      </div>
    </section>`;

export default {
  title: 'Chemicals | Labrite Laboratory Chemicals',
  description:
    'Labrite supplies laboratory chemicals supporting sample preparation, testing and analysis, as part of its equipment, chemicals, repairs and maintenance offering.',
  canonicalPath: '/chemicals.html',
  activeKey: 'chemicals',
  outPath: 'chemicals.html',
  main,
};
