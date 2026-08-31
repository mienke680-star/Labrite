import { COMPANY } from '../data/company.mjs';

const main = `
    <section class="hero-simple">
      <div class="container hero-content">
        <span class="eyebrow">About Labrite</span>
        <h1>A technical laboratory and equipment business</h1>
        <p class="lede">Labrite (Pty) Ltd works across Laboratory Services, equipment and instruments, chemicals, and repairs and maintenance — one identity, applied consistently across every part of the business.</p>
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div class="split-content">
          <span class="eyebrow">Who We Are</span>
          <h2>Technical, precise, and built for laboratory work</h2>
          <p>Labrite is a technical laboratory and equipment-focused business. Its Laboratory Services carry out laboratory testing — currently Coal Testing &amp; Analysis — while its equipment, chemicals, repairs and maintenance, and agencies operations support laboratories and technical customers more broadly.</p>
          <p>Across every part of the business, Labrite is presented under one consistent corporate identity — recognisable, technically credible, and built around accuracy rather than decoration.</p>
        </div>
        <div class="split-media l-frame">
          <div class="media ratio-4-3"><img src="/assets/images/site/entrance-lobby.jpg" alt="Labrite office entrance" loading="lazy" /></div>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <span class="eyebrow">Our Experience</span>
        <h2>Background</h2>
        <p class="section-intro">Labrite (Pty) Ltd was established in ${COMPANY.founded}, serving laboratories in the mining industry across Southern Africa and exporting into Africa.</p>
        <div class="notice">
          <strong>Founding facts sourced, fuller history pending.</strong> The founding year above is drawn from Labrite's public LinkedIn listing for confirmation. A fuller company history and milestones will be published here once Labrite supplies them.
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head">
          <div>
            <span class="eyebrow">What We Do</span>
            <h2>The breadth of Labrite</h2>
            <p class="section-intro">Six areas, one identity.</p>
          </div>
        </div>
        <div class="grid grid-3">
          <article class="card business-card">
            <div class="card-body">
              <h3>Laboratory Services</h3>
              <p>Coal Testing &amp; Analysis, and future laboratory testing disciplines.</p>
              <div class="card-actions"><a class="link-primary" href="/laboratory-services.html">Learn more →</a></div>
            </div>
          </article>
          <article class="card business-card">
            <div class="card-body">
              <h3>Equipment &amp; Instruments</h3>
              <p>Professional laboratory instruments and equipment.</p>
              <div class="card-actions"><a class="link-primary" href="/equipment/">Learn more →</a></div>
            </div>
          </article>
          <article class="card business-card">
            <div class="card-body">
              <h3>Chemicals</h3>
              <p>Laboratory chemicals and related products.</p>
              <div class="card-actions"><a class="link-primary" href="/chemicals.html">Learn more →</a></div>
            </div>
          </article>
          <article class="card business-card">
            <div class="card-body">
              <h3>Technical Support</h3>
              <p>Practical, hands-on support for laboratory customers.</p>
              <div class="card-actions"><a class="link-primary" href="/repairs-maintenance.html">Learn more →</a></div>
            </div>
          </article>
          <article class="card business-card">
            <div class="card-body">
              <h3>Repairs &amp; Maintenance</h3>
              <p>Equipment servicing, repairs and ongoing support.</p>
              <div class="card-actions"><a class="link-primary" href="/repairs-maintenance.html">Learn more →</a></div>
            </div>
          </article>
          <article class="card business-card">
            <div class="card-body">
              <h3>Agencies &amp; Distribution</h3>
              <p>Brands and manufacturers represented by Labrite.</p>
              <div class="card-actions"><a class="link-primary" href="/agencies.html">Learn more →</a></div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section section-dark">
      <div class="container">
        <div class="section-head">
          <div>
            <span class="eyebrow" style="color:#FF8A8A;">Our Approach</span>
            <h2>Accuracy first, always</h2>
          </div>
        </div>
        <div class="grid grid-4">
          <div>
            <h3 style="color:#fff;">Accuracy</h3>
            <p>Technical work is only useful when it is correct — accuracy shapes every process.</p>
          </div>
          <div>
            <h3 style="color:#fff;">Reliability</h3>
            <p>Consistent results and dependable service, test after test, order after order.</p>
          </div>
          <div>
            <h3 style="color:#fff;">Technical Competence</h3>
            <p>Practical, hands-on knowledge of laboratory equipment and methods.</p>
          </div>
          <div>
            <h3 style="color:#fff;">Quality</h3>
            <p>Clear, defensible processes across testing, equipment and support.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-band">
      <div class="container">
        <div>
          <h2>Want to know more about Labrite?</h2>
          <p>Get in touch with the Labrite team.</p>
        </div>
        <div class="cta-actions">
          <a class="btn btn-primary" href="/contact.html">Contact Labrite</a>
        </div>
      </div>
    </section>`;

export default {
  title: 'About Labrite | Technical Laboratory & Equipment Business',
  description:
    'Labrite (Pty) Ltd is a technical laboratory and equipment business spanning Laboratory Services, equipment and instruments, chemicals, repairs and maintenance, and agencies.',
  canonicalPath: '/about.html',
  activeKey: 'about',
  outPath: 'about.html',
  main,
};
