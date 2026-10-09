const ICONS = {
  lab: `<path d="M9 2v6.3L4.3 17a2 2 0 0 0 1.8 3h11.8a2 2 0 0 0 1.8-3L15 8.3V2" /><path d="M9 2h6" /><path d="M7.3 14h9.4" />`,
  equipment: `<path d="M12 3v4" /><path d="M4 7h16" /><path d="M5 7l-2.5 5a2.8 2.8 0 0 0 5 0L5 7z" /><path d="M19 7l2.5 5a2.8 2.8 0 0 1-5 0L19 7z" /><path d="M12 7v14" /><path d="M8 21h8" />`,
  chemicals: `<path d="M12 2s7 7.6 7 12.2A7 7 0 0 1 5 14.2C5 9.6 12 2 12 2z" />`,
  support: `<path d="M4 13v-2a8 8 0 0 1 16 0v2" /><path d="M3 13h3v6H4a1 1 0 0 1-1-1v-5z" /><path d="M21 13h-3v6h2a1 1 0 0 0 1-1v-5z" /><path d="M18 19a4 4 0 0 1-4 2h-1" />`,
  repairs: `<path d="M14.7 2.7a4.5 4.5 0 0 0-6.1 5.9L2.3 14.9v4.8h4.8l6.3-6.3a4.5 4.5 0 0 0 6-6.1l-3.3 3.3-2.1-2.1 3.3-3.3z" />`,
  agencies: `<circle cx="6" cy="6" r="2.2" /><circle cx="18" cy="6" r="2.2" /><circle cx="12" cy="18" r="2.2" /><path d="M7.8 7.3 10.5 16M16.2 7.3 13.5 16M8.2 6h7.6" />`,
  pin: `<path d="M12 21s7-7.3 7-12.2a7 7 0 1 0-14 0c0 4.9 7 12.2 7 12.2z" /><circle cx="12" cy="8.8" r="2.4" />`,
};

function iconSvg(name) {
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[name]}</svg>`;
}

const WHAT_WE_DO = [
  {
    icon: 'lab',
    title: 'Laboratory Services',
    desc: 'Sampling, sample preparation, testing, analysis and reporting, with established expertise in coal laboratory operations and coal analysis.',
    href: '/laboratory-services.html',
  },
  {
    icon: 'equipment',
    title: 'Equipment & Instruments',
    desc: 'Laboratory equipment and instruments for sampling, sample preparation, testing, analysis and general laboratory applications.',
    href: '/equipment/',
  },
  {
    icon: 'chemicals',
    title: 'Chemicals & Consumables',
    desc: 'Laboratory chemicals, reagents, consumables and related products for analytical, mining and industrial laboratory applications.',
    href: '/chemicals.html',
  },
  {
    icon: 'support',
    title: 'Technical Support',
    desc: 'Practical technical assistance for laboratory equipment, applications and operational requirements, supported by hands-on industry experience.',
    href: '/repairs-maintenance.html',
  },
  {
    icon: 'repairs',
    title: 'Repairs & Maintenance',
    desc: 'Equipment inspection, fault finding, servicing, repairs and preventative maintenance for laboratory and related equipment.',
    href: '/repairs-maintenance.html',
  },
  {
    icon: 'agencies',
    title: 'Agencies & Distribution',
    desc: 'Selected specialised equipment and technologies represented, supplied and supported by Labrite, including products from U-Therm, Herexi and Maglev Africa.',
    href: '/agencies.html',
  },
];

const whatWeDoCards = WHAT_WE_DO.map(
  (item) => `
          <article class="icon-card">
            <div class="icon-card-icon">${iconSvg(item.icon)}</div>
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
            <div class="card-actions"><a class="link-primary" href="${item.href}">Learn more →</a></div>
          </article>`
).join('\n');

const main = `
    <section class="hero">
      <div class="hero-media">
        <img src="/assets/images/atmosphere/glassware-wide.jpg" alt="Laboratory glassware" />
      </div>
      <div class="container hero-content">
        <span class="eyebrow">About Labrite</span>
        <h1>Laboratory expertise built on <em>experience</em></h1>
        <span class="hero-rule" aria-hidden="true"></span>
        <p class="lede">Labrite provides laboratory services, laboratory equipment and instruments, chemicals and consumables, technical support, repairs and maintenance, and selected agency and distribution services. From operating coal laboratories to supplying and supporting laboratory and specialised equipment across Africa, our business is built on practical experience of the environments in which our customers work.</p>
      </div>
      <span class="scroll-indicator" aria-hidden="true">Scroll</span>
    </section>

    <section class="section section-paper">
      <div class="container">
        <span class="eyebrow">Who We Are</span>
        <h2>Practical experience across the laboratory environment</h2>
        <span class="l-rule reveal-line" aria-hidden="true"></span>
        <div class="grid grid-2" style="gap:var(--space-10);max-width:980px;">
          <div>
            <p>Labrite is a South African laboratory services, equipment and technical support company serving the mining, mineral processing, industrial and laboratory sectors.</p>
            <p>Our laboratory operations include coal laboratories established on client sites, as well as our centralised commercial coal laboratory in Middelburg, Mpumalanga. These operations provide sampling, sample preparation, testing, analysis and reporting services in support of our clients' operational and quality requirements.</p>
          </div>
          <div>
            <p>Beyond our own laboratory operations, Labrite supplies laboratory equipment, instruments, chemicals and consumables to laboratories across Africa, including Madagascar. We also supply specialised equipment, spare parts and consumables directly to mining and related industrial operations across the continent.</p>
            <p>What connects these activities is a practical understanding of laboratory operations. Reliable laboratory performance depends on more than a test method or an individual instrument — it requires suitable equipment, representative sampling, sound preparation, competent people, quality control, dependable consumables and effective technical support.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-mist">
      <div class="container">
        <span class="eyebrow">Our Background</span>
        <h2>From supporting laboratories to operating, equipping and supporting them</h2>
        <span class="l-rule reveal-line" aria-hidden="true"></span>
        <div class="timeline reveal-group">
          <div class="timeline-item">
            <span class="timeline-dot" aria-hidden="true"></span>
            <span class="timeline-year">1999</span>
            <h4>Consumables & technical services</h4>
            <p>Labrite began as a supplier of laboratory consumables and technical services to the mining and associated laboratory industries — including equipment maintenance and specialised furnace refractory repair and rebuilding.</p>
          </div>
          <div class="timeline-item">
            <span class="timeline-dot" aria-hidden="true"></span>
            <span class="timeline-year">2018</span>
            <h4>Coal & mineral laboratory services</h4>
            <p>Labrite expanded into coal and mineral laboratory services, adding sampling, sample preparation, testing and analysis to its established equipment, supply and technical capabilities.</p>
          </div>
          <div class="timeline-item">
            <span class="timeline-dot" aria-hidden="true"></span>
            <span class="timeline-year">Today</span>
            <h4>Client-site labs + Middelburg</h4>
            <p>Labrite operates coal laboratories at client sites as well as a centralised commercial coal laboratory in Middelburg, Mpumalanga, alongside equipment, consumables, technical support and specialised supply services across Africa.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-paper">
      <div class="container">
        <span class="eyebrow">Our Reach</span>
        <h2>Supporting laboratories and mining operations across Africa</h2>
        <span class="l-rule reveal-line" aria-hidden="true"></span>
        <p class="section-intro">Our combination of laboratory operations, equipment knowledge, technical support and supply capability allows us to assist customers with both individual requirements and broader laboratory solutions.</p>
        <div class="reach-grid reveal-group">
          <div class="reach-card">
            <div class="reach-card-icon">${iconSvg('pin')}</div>
            <h4>South Africa</h4>
            <p>Laboratory operations, coal testing and equipment supply based in Middelburg, Mpumalanga, serving the mining, mineral processing and laboratory sectors.</p>
          </div>
          <div class="reach-card">
            <div class="reach-card-icon">${iconSvg('pin')}</div>
            <h4>Africa, including Madagascar</h4>
            <p>Laboratory equipment, instruments, specialised equipment, spare parts and consumables supplied to mining and laboratory operations across the wider African region.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-mist">
      <div class="container">
        <span class="eyebrow">Agencies &amp; Distribution</span>
        <h2>Representing specialised laboratory technologies</h2>
        <span class="l-rule reveal-line" aria-hidden="true"></span>
        <p class="section-intro">Labrite works with selected manufacturers and technology providers whose equipment complements the laboratory and industrial markets we serve — including laboratory testing and specialised equipment from U-Therm, Herexi and Maglev Africa. Through these relationships, Labrite provides customers with local commercial and technical support, product knowledge and access to specialised equipment suited to laboratory and industrial applications.</p>
        <div class="grid grid-3 reveal-group" style="margin-top:var(--space-8);">
          <article class="card business-card card-plain">
            <div class="media ratio-16-9" style="background:var(--white);"><img src="/assets/images/brand/partner-u-therm.png" alt="U-Therm brand logo" loading="lazy" style="object-fit:contain;padding:2rem;" /></div>
          </article>
          <article class="card business-card card-plain">
            <div class="media ratio-16-9" style="background:var(--white);"><img src="/assets/images/brand/partner-maglev-africa.png" alt="Maglev Africa brand logo" loading="lazy" style="object-fit:contain;padding:2rem;" /></div>
          </article>
          <article class="card business-card card-plain">
            <div class="media ratio-16-9" style="background:var(--white);"><img src="/assets/images/brand/partner-herexi.png" alt="Herexi brand logo" loading="lazy" style="object-fit:contain;padding:2rem;" /></div>
          </article>
        </div>
        <div class="notice" style="margin-top:2rem;">
          See the dedicated <a href="/agencies.html" style="color:var(--luxury-red);font-weight:600;">Agencies &amp; Distribution</a> page for current brand detail.
        </div>
      </div>
    </section>

    <section class="section section-paper">
      <div class="container">
        <div class="section-head">
          <div>
            <span class="eyebrow">What We Do</span>
            <h2>From laboratory operations to equipment and technical support</h2>
            <p class="section-intro">Our services and products cover key parts of the laboratory value chain — from sampling and sample preparation through to testing, equipment, consumables, technical support and maintenance.</p>
          </div>
        </div>
        <div class="icon-grid reveal-group">
          ${whatWeDoCards}
        </div>
      </div>
    </section>

    <section class="section section-dark">
      <div class="container">
        <div class="section-head">
          <div>
            <span class="eyebrow">Our Approach</span>
            <h2>Accuracy first, always</h2>
          </div>
        </div>
        <div class="grid grid-4 reveal-group">
          <div>
            <h3>Accuracy</h3>
            <p>Reliable laboratory information begins with representative sampling, sound preparation, appropriate methods, suitable equipment and disciplined execution.</p>
          </div>
          <div>
            <h3>Reliability</h3>
            <p>Our customers depend on their laboratories and equipment to perform. We aim to provide dependable service, responsive support and practical solutions that keep operations moving.</p>
          </div>
          <div>
            <h3>Technical Competence</h3>
            <p>Our experience extends across laboratory operations, equipment, maintenance and technical supply — allowing us to understand both the analytical requirement and the equipment and processes behind it.</p>
          </div>
          <div>
            <h3>Quality</h3>
            <p>Quality is not limited to the final test result. It extends through sampling, preparation, analysis, equipment, consumables, maintenance, reporting and customer support.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-band">
      <div class="container">
        <div>
          <h2>How can Labrite support your laboratory or operation?</h2>
          <p>Whether you require laboratory testing, an on-site laboratory service, equipment and instruments, chemicals and consumables, technical support, repairs and maintenance, or specialised equipment for a mining operation, speak to the Labrite team.</p>
        </div>
        <div class="cta-actions">
          <a class="btn btn-primary" href="/contact.html">Contact Labrite</a>
        </div>
      </div>
    </section>`;

export default {
  title: 'About Labrite | Laboratory Expertise Built on Experience',
  description:
    'Labrite is a South African laboratory services, equipment and technical support company serving the mining, mineral processing, industrial and laboratory sectors across Africa.',
  canonicalPath: '/about.html',
  activeKey: 'about',
  outPath: 'about.html',
  main,
};
