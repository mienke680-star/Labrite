import { iconSvg } from '../partials/icons.mjs';
import { BRANDS } from '../data/agencies.mjs';

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
    <section class="hero-simple">
      <div class="container hero-content">
        <span class="eyebrow">About Labrite</span>
        <h1>Laboratory expertise built on <em>experience</em></h1>
        <span class="hero-rule" aria-hidden="true"></span>
        <p class="lede">Labrite (Pty) Ltd provides professional laboratory testing services, laboratory equipment, instruments, chemicals, consumables and technical support to the mining, industrial and analytical sectors.</p>
        <p class="lede">With extensive practical experience in laboratory operations, equipment supply, installation, maintenance and technical support, Labrite delivers reliable solutions tailored to the operational requirements of its clients.</p>
        <p class="lede">Our services extend beyond laboratory testing to include the establishment and operation of on-site laboratories, the supply of specialised analytical equipment, and ongoing technical support. Through our network of established suppliers and international equipment manufacturers, we serve clients throughout South Africa and the broader African market.</p>
      </div>
    </section>

    <section class="section section-paper">
      <div class="container">
        <span class="eyebrow">Who We Are</span>
        <h2>Practical experience across the laboratory environment</h2>
        <span class="l-rule reveal-line" aria-hidden="true"></span>
        <div class="grid grid-2" style="gap:var(--space-10);max-width:980px;">
          <div>
            <p>Labrite is a South African company providing laboratory testing services, equipment, consumables and technical support to the mining, mineral processing and industrial sectors. Our laboratory services include the establishment and operation of on-site coal laboratories, supported by our centralised commercial coal laboratory in Middelburg, Mpumalanga. We provide sampling, sample preparation, analytical testing and reporting services to support our clients' operational and quality control requirements. In addition to our laboratory operations, Labrite supplies laboratory instruments, equipment, chemicals, consumables and specialised industrial products to clients throughout South Africa and across Africa, including Madagascar. Our technical services include equipment installation, servicing, repairs, maintenance and the supply of spare parts.</p>
          </div>
          <div>
            <p>Our strength lies in our practical understanding of laboratory operations and the industries we serve. We recognise that reliable analytical results depend not only on sound testing methods, but also on representative sampling, proper sample preparation, suitable equipment, competent personnel and effective quality control.</p>
            <p>Through this integrated approach, Labrite aims to deliver dependable products, professional services and practical solutions that support the efficiency and reliability of our clients' operations.</p>
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
            <p>Labrite was founded on a strong foundation of technical expertise in the manufacturing, fabrication, maintenance and rebuilding of industrial ovens and laboratory furnaces. Our early activities included the manufacture and supply of heating elements, thermocouples, refractory linings and specialised furnace components, supported by laboratory equipment sales, spare parts and consumables. From the outset, our commitment to quality workmanship, dependable customer service and trusted technical expertise established the foundation upon which Labrite has grown and diversified into the business it is today.</p>
          </div>
          <div class="timeline-item">
            <span class="timeline-dot" aria-hidden="true"></span>
            <span class="timeline-year">2018</span>
            <h4>Coal & mineral laboratory services</h4>
            <p>With the appointment of a new owner and Managing Director, Labrite entered a new phase of strategic growth and diversification. The company broadened its professional and technical service offerings, established strategic supplier and distribution partnerships with reputable international manufacturers, and expanded its equipment and product sales into the broader African market. A significant milestone in this development was the introduction of coal and mineral laboratory services, including sampling, sample preparation, analytical testing and reporting. This expansion complemented Labrite's established strengths in equipment supply, manufacturing, maintenance and technical support, positioning the company as a more comprehensive laboratory solutions provider. Throughout this growth, Labrite has remained committed to the principles upon which it was founded: technical expertise, quality workmanship, dependable service and lasting customer relationships built on trust.</p>
          </div>
          <div class="timeline-item">
            <span class="timeline-dot" aria-hidden="true"></span>
            <span class="timeline-year">Today</span>
            <h4>Client-site labs + Middelburg</h4>
            <p>Labrite operates on-site coal laboratories at client facilities, supported by its centralised commercial coal laboratory in Middelburg, Mpumalanga. Building on its established expertise in coal analysis, Labrite is expanding its laboratory services into the broader minerals sector, while developing mobile and containerised laboratory solutions to meet the growing demand for flexible, on-site analytical capabilities. These developments complement Labrite's established equipment supply, consumables, maintenance and technical support services, further strengthening its position as a comprehensive laboratory solutions provider in South Africa and across the African market.</p>
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
          ${BRANDS.map(
            (b) => `
          <a class="card business-card card-plain" href="/agencies/${b.slug}/">
            <div class="media ratio-16-9" style="background:var(--white);"><img src="${b.logo}" alt="${b.name} brand logo" loading="lazy" style="object-fit:contain;padding:2rem;" /></div>
          </a>`
          ).join('\n')}
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
