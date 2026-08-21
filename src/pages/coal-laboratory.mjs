import { mediaPlaceholder, renderLogo } from '../partials/render.mjs';

const main = `
    <section class="hero-simple">
      <div class="container hero-content">
        <span class="eyebrow">Business Unit</span>
        <div style="margin-bottom:1.5rem;">
          ${renderLogo({ size: 'lg', subLabel: 'Coal Laboratory', tagline: 'Applying science for accuracy and precision' })}
        </div>
        <h1>Coal analysis and testing you can rely on</h1>
        <p class="lede">The Labrite Coal Laboratory carries out coal sample preparation, analysis and testing using dedicated laboratory equipment, from crushing and sieving through to moisture analysis and high-temperature testing.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="/contact.html">Laboratory enquiries</a>
          <a class="btn btn-secondary" href="/equipment/">View laboratory equipment</a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div class="split-content">
          <span class="eyebrow">Laboratory Overview</span>
          <h2>Purpose-built for coal testing</h2>
          <p>The Coal Laboratory prepares and tests coal samples through a structured sequence of crushing, sieving, drying and analysis — each stage designed to protect the accuracy of the final result.</p>
        </div>
        <div class="split-media l-frame">
          ${mediaPlaceholder({ title: 'Coal sample', note: 'Photograph to be added', ratio: 'ratio-4-3' })}
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <div class="section-head">
          <div>
            <span class="eyebrow">Sample Preparation &amp; Testing</span>
            <h2>From raw sample to laboratory result</h2>
            <p class="section-intro">Coal moves through several dedicated stages of preparation and analysis.</p>
          </div>
        </div>
        <div class="grid grid-4">
          <article class="card business-card">
            <div class="card-body">
              <h3>Sample Preparation</h3>
              <p>Raw coal samples are reduced to a consistent particle size using a dedicated sample crusher.</p>
            </div>
          </article>
          <article class="card business-card">
            <div class="card-body">
              <h3>Sieving</h3>
              <p>Prepared material is graded by particle size across a stacked set of laboratory test sieves.</p>
            </div>
          </article>
          <article class="card business-card">
            <div class="card-body">
              <h3>Moisture Analysis</h3>
              <p>Moisture content is determined using halogen moisture analysis and laboratory drying equipment.</p>
            </div>
          </article>
          <article class="card business-card">
            <div class="card-body">
              <h3>High-Temperature Testing</h3>
              <p>Muffle furnace testing supports ashing and other high-temperature laboratory methods.</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container split reverse">
        <div class="split-content">
          <span class="eyebrow">Equipment</span>
          <h2>Dedicated coal laboratory equipment</h2>
          <p>The laboratory is equipped with sample crushers, test sieves, moisture analyzers, drying ovens and cabinets, desiccator storage and a muffle furnace — supported by precision balances and a calibration weight set.</p>
          <a class="btn btn-secondary" href="/equipment/">Browse laboratory equipment</a>
        </div>
        <div class="split-media l-frame">
          ${mediaPlaceholder({ title: 'Laboratory equipment', note: 'Photograph to be added', ratio: 'ratio-4-3' })}
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <span class="eyebrow">Quality &amp; Accreditation</span>
        <h2>Accreditation information</h2>
        <div class="notice">
          <strong>Published only where confirmed.</strong> Any SANAS accreditation logo, symbol, accreditation number, scope or claim will be displayed here strictly as supplied and approved by Labrite. See the <a href="/accreditation.html" style="color:var(--red-accessible);font-weight:600;">Accreditation &amp; Quality</a> page for current status.
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head">
          <div>
            <span class="eyebrow">Laboratory Gallery</span>
            <h2>Inside the Coal Laboratory</h2>
          </div>
        </div>
        <div class="grid grid-3">
          ${mediaPlaceholder({ title: 'Sample preparation', note: 'Photograph to be added', ratio: 'ratio-4-3' })}
          ${mediaPlaceholder({ title: 'Laboratory testing', note: 'Photograph to be added', ratio: 'ratio-4-3' })}
          ${mediaPlaceholder({ title: 'Laboratory equipment', note: 'Photograph to be added', ratio: 'ratio-4-3' })}
        </div>
      </div>
    </section>

    <section class="cta-band">
      <div class="container">
        <div>
          <h2>Coal Laboratory enquiries</h2>
          <p>Get in touch with Labrite about coal testing and sample preparation.</p>
        </div>
        <div class="cta-actions">
          <a class="btn btn-primary" href="/contact.html">Enquire now</a>
        </div>
      </div>
    </section>`;

export default {
  title: 'Coal Laboratory | Labrite',
  description:
    'The Labrite Coal Laboratory carries out coal analysis, testing and sample preparation — from crushing and sieving to moisture analysis and high-temperature testing.',
  canonicalPath: '/coal-laboratory.html',
  activeKey: 'coal-laboratory',
  outPath: 'coal-laboratory.html',
  main,
};
