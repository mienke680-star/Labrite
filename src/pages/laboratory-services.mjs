import { renderLogo, productMedia } from '../partials/render.mjs';
import { getProduct } from '../data/products.mjs';

const main = `
    <section class="hero">
      <div class="hero-media">
        <img src="/assets/images/atmosphere/coal-pile.jpg" alt="Coal, the material behind Labrite's current testing discipline" />
      </div>
      <div class="container hero-content">
        <span class="eyebrow">Business Unit</span>
        <div style="margin-bottom:1.5rem;">
          ${renderLogo({ reverse: true, size: 'lg', subLabel: 'Laboratory Services', tagline: 'Applying science for accuracy and precision' })}
        </div>
        <h1>Laboratory testing you can <em>rely on</em></h1>
        <span class="hero-rule" aria-hidden="true"></span>
        <p class="lede">Labrite's Laboratory Services carry out sample preparation, analysis and testing using dedicated laboratory equipment. Coal Testing &amp; Analysis is the current discipline offered under this business unit, with further laboratory disciplines to be added as they're established.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="/contact.html">Laboratory enquiries</a>
          <a class="btn btn-secondary" href="/equipment/">View laboratory equipment</a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head">
          <div>
            <span class="eyebrow">Testing Disciplines</span>
            <h2>What Labrite's Laboratory Services cover</h2>
            <p class="section-intro">Structured to grow as Labrite adds laboratory disciplines beyond coal.</p>
          </div>
        </div>
        <div class="grid grid-3">
          <article class="card business-card">
            <div class="card-body">
              <h3>Coal Testing &amp; Analysis</h3>
              <p>Coal sample preparation, analysis and testing — Labrite's current laboratory discipline. Full detail below.</p>
            </div>
          </article>
          <article class="card business-card">
            <div class="card-body">
              <h3>Future disciplines</h3>
              <p>Additional laboratory disciplines (for example ore testing) will be added here as Labrite establishes them.</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container split">
        <div class="split-content">
          <span class="eyebrow">Coal Testing &amp; Analysis</span>
          <h2>Purpose-built for coal testing</h2>
          <p>Coal samples are prepared and tested through a structured sequence of crushing, sieving, drying and analysis — each stage designed to protect the accuracy of the final result.</p>
        </div>
        <div class="split-media l-frame">
          <div class="media ratio-4-3"><img src="/assets/images/site/coal-sample.jpg" alt="Coal sample used as laboratory test material" loading="lazy" /></div>
        </div>
      </div>
    </section>

    <section class="section">
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

    <section class="section section-alt">
      <div class="container split reverse">
        <div class="split-content">
          <span class="eyebrow">Equipment</span>
          <h2>Dedicated coal laboratory equipment</h2>
          <p>The laboratory is equipped with sample crushers, test sieves, moisture analyzers, drying ovens and cabinets, desiccator storage and a muffle furnace — supported by precision balances and a calibration weight set.</p>
          <a class="btn btn-secondary" href="/equipment/">Browse laboratory equipment</a>
        </div>
        <div class="split-media l-frame">
          ${productMedia(getProduct('sample-crusher'))}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div class="split-content">
          <span class="eyebrow">Quality &amp; Accreditation</span>
          <h2>SANAS-accredited testing laboratory</h2>
          <p>Labrite's Coal Testing &amp; Analysis laboratory operates as a SANAS-accredited testing laboratory, accreditation number <strong>T1091</strong>.</p>
          <div class="notice">
            Full accreditation scope and schedule are published on the dedicated <a href="/accreditation.html" style="color:var(--red-accessible);font-weight:600;">Accreditation &amp; Quality</a> page. This symbol is used exactly as supplied by Labrite and is not applied to services outside its confirmed scope.
          </div>
        </div>
        <div class="split-media">
          <div class="media ratio-4-3" style="background:var(--white);"><img src="/assets/images/brand/sanas-accreditation.png" alt="SANAS Testing Laboratory accreditation mark, number T1091" loading="lazy" style="object-fit:contain;padding:2rem;" /></div>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <div class="section-head">
          <div>
            <span class="eyebrow">Laboratory Gallery</span>
            <h2>Inside the laboratory</h2>
          </div>
        </div>
        <div class="grid grid-3">
          <div class="media ratio-4-3"><img src="/assets/images/site/lab-prep-area.jpg" alt="Labrite laboratory sample preparation area" loading="lazy" /></div>
          <div class="media ratio-4-3"><img src="/assets/images/site/lab-bench-glassware.jpg" alt="Labrite laboratory testing bench with glassware" loading="lazy" /></div>
          ${productMedia(getProduct('analytical-balance'))}
        </div>
      </div>
    </section>

    <section class="cta-band cta-band-photo">
      <div class="cta-media"><img src="/assets/images/atmosphere/lab-bench-wide.jpg" alt="" aria-hidden="true" loading="lazy" /></div>
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
    "Labrite's Laboratory Services carry out laboratory testing and sample preparation — currently Coal Testing & Analysis, from crushing and sieving to moisture analysis and high-temperature testing.",
  canonicalPath: '/laboratory-services.html',
  activeKey: 'laboratory-services',
  outPath: 'laboratory-services.html',
  main,
};
