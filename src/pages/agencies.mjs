import { BRANDS } from '../data/agencies.mjs';

const brandCards = BRANDS.map(
  (b) => `
          <article class="card business-card card-plain">
            <div class="media ratio-16-9" style="background:var(--white);"><img src="${b.logo}" alt="${b.name} brand logo" loading="lazy" style="object-fit:contain;padding:2.5rem;" /></div>
            <div class="card-body">
              <h3>${b.name}</h3>
              <p>${b.summary}</p>
              <div class="card-actions"><a class="link-primary" href="/agencies/${b.slug}/">${b.hasCatalogue ? 'View equipment' : 'View brand'} →</a></div>
            </div>
          </article>`
).join('\n');

const main = `
    <section class="hero-simple">
      <div class="container hero-content">
        <span class="eyebrow">Agencies &amp; Distribution</span>
        <h1>Brands and manufacturers represented by Labrite</h1>
        <p class="lede">Labrite works closely with its clients to understand, evaluate and identify suitable laboratory equipment and technical solutions. Through our established partnerships with reputable international manufacturers and suppliers, we provide expert advice, equipment, spare parts, consumables and ongoing technical support. Where specific requirements cannot be met through our existing agencies or local suppliers, we explore alternative sourcing options internationally to deliver practical, reliable and cost-effective solutions.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="/contact.html">Enquire about a brand</a>
          <a class="btn btn-secondary" href="/equipment/">View equipment</a>
        </div>
      </div>
    </section>

    <section class="section section-paper">
      <div class="container">
        <div class="section-head">
          <div>
            <h2>Represented brands</h2>
          </div>
        </div>
        <div class="grid grid-3 reveal-group">
          ${brandCards}
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
