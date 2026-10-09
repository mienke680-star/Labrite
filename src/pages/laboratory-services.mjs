import { renderLogo } from '../partials/render.mjs';

const main = `
    <section class="hero-simple">
      <div class="container hero-content">
        <span class="eyebrow">Business Unit</span>
        <div style="margin-bottom:1.5rem;">
          ${renderLogo({ reverse: false, size: 'lg', subLabel: 'Laboratory Services', tagline: 'Applying science for accuracy and precision' })}
        </div>
        <h1>Laboratory services tailored to your <em>operational needs</em></h1>
        <span class="hero-rule" aria-hidden="true"></span>
        <p class="lede">Audited processes, traceable results and internationally recognised standards. Labrite provides laboratory and field services tailored to the operational and analytical requirements of our clients — extending beyond laboratory analysis to sampling, sample preparation, plant-related sampling and verification, specialised coal testing and technical support.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="/contact.html">Laboratory enquiries</a>
          <a class="btn btn-secondary" href="/accreditation.html">View accredited scope</a>
        </div>
      </div>
    </section>

    <section class="section section-paper">
      <div class="container">
        <span class="eyebrow">Our Process</span>
        <h2>What Labrite's Laboratory Services cover</h2>
        <span class="l-rule reveal-line" aria-hidden="true"></span>
        <p class="section-intro">Every assignment begins with a review of the client's requirements. We consider the material, the purpose of the work, the analyses required, representative sampling and minimum mass requirements, sample identification and handling, preparation methods, quality-control requirements and the appropriate recognised methods before the work is undertaken.</p>
      </div>
    </section>

    <section class="section section-mist">
      <div class="container">
        <div class="grid grid-2 reveal-group" style="gap:var(--space-10);">
          <div>
            <h3>Sampling &amp; Sample Management</h3>
            <p>Stockpile sampling, in-plant sampling, sample identification, handling, transportation and preparation, with sampling requirements considered in relation to the material and the analysis ultimately required.</p>
          </div>
          <div>
            <h3>Sample Preparation</h3>
            <p>Controlled preparation of coal samples for analysis. Labrite's accredited scope includes sample preparation in accordance with ISO 18283.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-paper">
      <div class="container">
        <span class="eyebrow">Coal Testing &amp; Analysis</span>
        <h2>Accredited scope</h2>
        <span class="l-rule reveal-line" aria-hidden="true"></span>
        <div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr><th>Service / Determination</th><th>Standard</th></tr>
            </thead>
            <tbody>
              <tr><td>Ash</td><td><strong>ISO 1171</strong></td></tr>
              <tr><td>Moisture in the Analysis Sample</td><td><strong>SANS 5925</strong></td></tr>
              <tr><td>Volatile Matter</td><td><strong>ISO 562</strong></td></tr>
              <tr><td>Fixed Carbon / Proximate Calculation</td><td><strong>ISO 17246</strong></td></tr>
              <tr><td>Sample Preparation</td><td><strong>ISO 18283</strong></td></tr>
              <tr><td>Total Sulphur</td><td><strong>ISO 20336</strong></td></tr>
              <tr><td>Calorific Value</td><td><strong>ISO 1928</strong></td></tr>
              <tr><td>Total Moisture</td><td><strong>ISO 589</strong></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="section section-mist">
      <div class="container">
        <span class="eyebrow">Beyond the Accredited Scope</span>
        <h2>Specialised Coal &amp; Mineral Services</h2>
        <span class="l-rule reveal-line" aria-hidden="true"></span>
        <ul class="prose-list reveal-group" style="max-width:700px;">
          <li>Float Sink Analysis</li>
          <li>Apparent Relative Density (ARD)</li>
          <li>Drill core RD</li>
          <li>Stockpile sampling</li>
          <li>Plant audits</li>
          <li>In-plant sampling</li>
          <li>Third-party witnessing</li>
        </ul>
      </div>
    </section>

    <section class="section section-paper">
      <div class="container">
        <span class="eyebrow">Quality &amp; Accreditation</span>
        <h2>Accreditation &amp; technical control</h2>
        <span class="l-rule reveal-line" aria-hidden="true"></span>
        <p class="section-intro">Labrite's SANAS-accredited scope includes specified coal sample preparation and analytical methods. Other specialised services are provided under Labrite's technical and quality-management processes but do not necessarily form part of the accredited scope.</p>
        <div class="notice" style="max-width:700px;">
          Labrite's Coal Testing &amp; Analysis laboratory operates as a SANAS-accredited testing laboratory, accreditation number <strong>T1091</strong>. Full accreditation scope and schedule are published on the dedicated <a href="/accreditation.html" style="color:var(--luxury-red);font-weight:600;">Accreditation &amp; Quality</a> page.
        </div>
      </div>
    </section>

    <section class="section section-dark">
      <div class="container text-center">
        <blockquote style="max-width:780px;margin:0 auto;font-family:var(--font-display);font-size:clamp(1.25rem,1.1rem + 0.7vw,1.75rem);font-weight:500;color:var(--white);font-style:normal;line-height:1.4;">
          "At Labrite, the result is only as reliable as the process that produced it. Sampling, handling, preparation, analysis, quality control and technical review are therefore considered as interconnected parts of the same analytical process."
        </blockquote>
      </div>
    </section>

    <section class="cta-band">
      <div class="container">
        <div>
          <h2>Laboratory Services enquiries</h2>
          <p>Get in touch with Labrite about coal testing and sample preparation.</p>
        </div>
        <div class="cta-actions">
          <a class="btn btn-primary" href="/contact.html">Enquire now</a>
        </div>
      </div>
    </section>`;

export default {
  title: 'Laboratory Services | Labrite',
  description:
    'Labrite provides laboratory and field services tailored to the operational and analytical requirements of our clients — sampling, sample preparation, coal testing and analysis, and specialised coal and mineral services.',
  canonicalPath: '/laboratory-services.html',
  activeKey: 'laboratory-services',
  outPath: 'laboratory-services.html',
  main,
};
