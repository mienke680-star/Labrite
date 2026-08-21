const main = `
    <section class="hero-simple">
      <div class="container hero-content">
        <span class="eyebrow">Accreditation &amp; Quality</span>
        <h1>Quality and accreditation information</h1>
        <p class="lede">Labrite treats accreditation claims as strictly controlled information, published only where supplied and formally approved.</p>
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div class="split-content">
          <h2>SANAS accreditation</h2>
          <p>The Labrite Coal Laboratory is a SANAS-accredited testing laboratory, accreditation number <strong>T1091</strong>. The symbol shown is used exactly as supplied by Labrite, unmodified.</p>
          <div class="notice">
            <strong>Scope pending.</strong> The detailed scope of accreditation (which specific test methods it covers) has not been supplied and is not stated here. No accreditation logo or claim is used elsewhere on this website for services outside this confirmed scope.
          </div>
        </div>
        <div class="split-media">
          <div class="media ratio-4-3" style="background:var(--white);"><img src="/assets/images/brand/sanas-accreditation.png" alt="SANAS Testing Laboratory accreditation mark, number T1091" loading="lazy" style="object-fit:contain;padding:2rem;" /></div>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container split">
        <div class="split-content">
          <h2>Quality approach</h2>
          <p>Labrite's laboratory and equipment operations follow structured, repeatable processes designed to protect the accuracy and reliability of every result and service delivered.</p>
          <a class="btn btn-secondary" href="/coal-laboratory.html">Coal Laboratory</a>
        </div>
      </div>
    </section>

    <section class="cta-band">
      <div class="container">
        <div>
          <h2>Questions about accreditation or quality?</h2>
          <p>Contact Labrite directly for current, confirmed information.</p>
        </div>
        <div class="cta-actions">
          <a class="btn btn-primary" href="/contact.html">Contact Labrite</a>
        </div>
      </div>
    </section>`;

export default {
  title: 'Accreditation & Quality | Labrite',
  description:
    'Labrite publishes SANAS accreditation and quality information only where officially supplied and approved.',
  canonicalPath: '/accreditation.html',
  activeKey: 'about',
  outPath: 'accreditation.html',
  main,
};
