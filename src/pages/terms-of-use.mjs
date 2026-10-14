import { COMPANY } from '../data/company.mjs';

const main = `
    <section class="hero-simple">
      <div class="container hero-content">
        <span class="eyebrow">Legal</span>
        <h1>Terms of Use</h1>
        <p class="lede">Terms governing the use of this website.</p>
      </div>
    </section>
    <section class="section section-paper">
      <div class="container" style="max-width:80ch;">
        <p>This website is operated by ${COMPANY.legalName}, registration number ${COMPANY.registrationNumber}, of ${COMPANY.addressSingleLine}.</p>
      </div>
    </section>`;

export default {
  title: 'Terms of Use | Labrite',
  description: 'Terms of use for the Labrite website.',
  canonicalPath: '/terms-of-use.html',
  activeKey: '',
  outPath: 'terms-of-use.html',
  main,
};
