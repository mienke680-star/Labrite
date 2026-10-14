import { breadcrumbSchema, enquiryHref } from '../partials/render.mjs';
import { UTHERM_CAPABILITY_GROUPS, getUThermByGroup } from '../data/utherm-products.mjs';

// Curated, editorial presentation of U-Therm's approved equipment: alternating
// larger image-led features and compact text entries, organised by capability
// group rather than a product-count catalogue grid (per the 14 Oct 2026 brief).
function renderEquipmentSection(brand) {
  const groups = UTHERM_CAPABILITY_GROUPS.map((group) => {
    const items = getUThermByGroup(group.slug);
    if (!items.length) return '';
    const entries = items
      .map(
        (item, i) => `
      <article class="equip-entry${i % 2 === 1 ? ' equip-entry-reverse' : ''}">
        <div class="equip-entry-media">
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
        </div>
        <div class="equip-entry-body">
          <h4>${item.name}</h4>
          <p>${item.application}</p>
          <div class="card-actions"><a class="link-primary" href="${enquiryHref({ type: 'agencies', product: item.name, brand: brand.name })}">Enquire about this equipment →</a></div>
        </div>
      </article>`
      )
      .join('\n');
    return `
      <div class="equip-group">
        <div class="equip-group-head">
          <h3>${group.label}</h3>
          <p>${group.description}</p>
        </div>
        ${entries}
      </div>`;
  }).join('\n');

  return `
    <section class="section section-paper">
      <div class="container">
        <div class="section-head">
          <div>
            <h2>Selected U-Therm Equipment</h2>
            <p class="section-intro">A curated selection relevant to the laboratory, mining and industrial markets Labrite serves, not U-Therm's full catalogue. Sales and quotations stay with Labrite.</p>
          </div>
        </div>
        ${groups}
      </div>
    </section>`;
}

export function renderAgencyBrandPage(brand) {
  const main = `
    <section class="hero-simple">
      <div class="container hero-content">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span aria-hidden="true">/</span>
          <a href="/agencies.html">Agencies &amp; Distribution</a><span aria-hidden="true">/</span>
          <span aria-current="page">${brand.name}</span>
        </nav>
        <span class="eyebrow">Represented Brand</span>
        <h1>${brand.name}</h1>
        <p class="lede">${brand.summary}</p>
      </div>
    </section>

    <section class="section section-paper">
      <div class="container">
        <div class="media ratio-16-9" style="max-width:420px;background:var(--white);border:1px solid rgba(0,0,0,0.08);"><img src="${brand.logo}" alt="${brand.name} brand logo" loading="lazy" style="object-fit:contain;padding:2rem;" /></div>
        ${
          brand.hasCatalogue
            ? `<div style="max-width:700px;margin-top:var(--space-8);">
          <p>${brand.role}</p>
        </div>`
            : ''
        }
      </div>
    </section>

    ${brand.hasCatalogue ? renderEquipmentSection(brand) : ''}

    <section class="cta-band">
      <div class="container">
        <div>
          <h2>Interested in ${brand.name} equipment?</h2>
          <p>Discuss your requirements with Labrite.</p>
        </div>
        <div class="cta-actions">
          <a class="btn btn-primary" href="${enquiryHref({ type: 'agencies', brand: brand.name })}">Contact Labrite</a>
        </div>
      </div>
    </section>`;

  const crumbs = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Agencies & Distribution', url: '/agencies.html' },
    { name: brand.name },
  ]);

  return {
    title: `${brand.name} | Labrite Agencies & Distribution`,
    description: brand.summary,
    canonicalPath: `/agencies/${brand.slug}/`,
    activeKey: 'agencies',
    outPath: `agencies/${brand.slug}/index.html`,
    main,
    structuredData: [crumbs],
  };
}
