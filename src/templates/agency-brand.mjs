import { breadcrumbSchema, enquiryHref } from '../partials/render.mjs';
import { UTHERM_CAPABILITY_GROUPS, getUThermByGroup } from '../data/utherm-products.mjs';
import { MAGLEV_PRODUCT_GROUPS } from '../data/maglev-products.mjs';

// Editorial presentation of U-Therm's equipment, organised by capability
// group. Items with a dedicated detail page (model-variant specification
// tables, multiple product families) link through to it; simpler single
// -spec items keep the original direct-enquiry card.
function renderUThermEquipmentSection(brand) {
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
          <div class="card-actions">
            ${item.hasDetail ? `<a class="link-primary" href="/agencies/${brand.slug}/products/${item.slug}.html">View full specifications →</a>` : ''}
            <a class="${item.hasDetail ? 'link-secondary' : 'link-primary'}" href="${enquiryHref({ type: 'agencies', product: item.name, brand: brand.name })}">Enquire about this equipment${item.hasDetail ? '' : ' →'}</a>
          </div>
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
            <h2>U-Therm Equipment</h2>
            <p class="section-intro">Equipment represented by Labrite, organised by application. Sales, quotations and technical support stay with Labrite.</p>
          </div>
        </div>
        ${groups}
      </div>
    </section>`;
}

// Maglev Africa's two product groups (Permanent-Magnet Direct-Drive Motors,
// Magnetic Levitation Products), per the supplied manufacturer artwork.
// Performance figures below are Maglev Africa's own published figures for
// its equipment, not a Labrite guarantee.
function renderMaglevProductGroups(brand) {
  const groups = MAGLEV_PRODUCT_GROUPS.map(
    (group) => `
      <div class="equip-group">
        <div class="equip-group-head">
          <h3>${group.label}</h3>
          <p>${group.description}</p>
          ${
            group.highlights
              ? `<ul class="prose-list" style="margin-top:var(--space-4);">${group.highlights.map((h) => `<li>${h}</li>`).join('')}</ul>`
              : ''
          }
        </div>
        <div class="grid grid-3 reveal-group">
          ${group.products
            .map(
              (p) => `
          <article class="card-product">
            <div class="media ratio-4-3"><img src="${p.image}" alt="${p.name}" loading="lazy" /></div>
            <div class="card-body">
              <span class="card-category">${brand.name}</span>
              <h3>${p.name}</h3>
              ${p.description ? `<p>${p.description}</p>` : ''}
              <div class="card-actions">
                <a class="link-primary" href="${enquiryHref({ type: 'agencies', product: p.name, brand: brand.name })}">Enquire through Labrite →</a>
              </div>
            </div>
          </article>`
            )
            .join('\n')}
        </div>
      </div>`
  ).join('\n');

  return `
    <section class="section section-paper">
      <div class="container">
        <div class="section-head">
          <div>
            <h2>Maglev Africa Product Groups</h2>
            <p class="section-intro">Electromagnetic equipment Labrite promotes on Maglev Africa's behalf. Figures below are Maglev Africa's own published specifications, not a Labrite guarantee. Sales enquiries are handled through Labrite.</p>
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
          brand.role
            ? `<div style="max-width:700px;margin-top:var(--space-8);">
          <p>${brand.role}</p>
        </div>`
            : ''
        }
      </div>
    </section>

    ${brand.hasCatalogue ? renderUThermEquipmentSection(brand) : ''}
    ${brand.hasProductGroups ? renderMaglevProductGroups(brand) : ''}

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
