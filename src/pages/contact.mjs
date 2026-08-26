import { renderLinkedInLink } from '../partials/render.mjs';
import { COMPANY } from '../data/company.mjs';

const main = `
    <section class="hero-simple">
      <div class="container hero-content">
        <span class="eyebrow">Contact</span>
        <h1>Contact &amp; enquiries</h1>
        <p class="lede">Get in touch with Labrite about laboratory testing, equipment, chemicals, or repairs and maintenance.</p>
      </div>
    </section>

    <section class="media ratio-21-9">
      <img src="/assets/images/site/reception-lounge.jpg" alt="Labrite reception area" loading="lazy" />
    </section>

    <section class="section">
      <div class="container split">
        <div class="split-content">
          <h2>Send an enquiry</h2>
          <form data-enquiry-form novalidate>
            <div class="form-row">
              <div class="form-field">
                <label for="name">Full name</label>
                <input type="text" id="name" name="name" autocomplete="name" required />
              </div>
              <div class="form-field">
                <label for="email">Email address</label>
                <input type="email" id="email" name="email" autocomplete="email" required />
              </div>
            </div>
            <div class="form-row">
              <div class="form-field">
                <label for="phone">Phone number</label>
                <input type="tel" id="phone" name="phone" autocomplete="tel" />
              </div>
              <div class="form-field">
                <label for="enquiry-type">Enquiry type</label>
                <select id="enquiry-type" name="enquiry-type" required>
                  <option value="">Select an option</option>
                  <option value="general">General enquiry</option>
                  <option value="product">Product / equipment enquiry</option>
                  <option value="laboratory">Coal Laboratory enquiry</option>
                  <option value="repairs">Repairs &amp; maintenance enquiry</option>
                  <option value="chemicals">Chemicals enquiry</option>
                  <option value="agencies">Agencies &amp; distribution enquiry</option>
                </select>
              </div>
            </div>
            <div class="form-field">
              <label for="message">Message</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button class="btn btn-primary btn-block" type="submit">Send enquiry</button>
            <div class="form-status" role="status" aria-live="polite"></div>
            <p class="hint" style="margin-top:1rem;">This form requires an email or CRM connection to be configured before it can deliver enquiries — until then, email Labrite directly using the button below.</p>
          </form>
          <a class="btn btn-secondary btn-block" href="${COMPANY.emailHref}" style="margin-top:1rem;">
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" style="flex-shrink:0;"><path d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z" stroke="currentColor" stroke-width="1.6" fill="none"/><path d="M3.5 7l8.5 6 8.5-6" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Email Labrite directly
          </a>
        </div>
        <div class="split-content">
          <h2>Contact details</h2>
          <div class="notice" style="margin-bottom:1.5rem;">
            Address, phone and email below are sourced from Labrite's public LinkedIn listing and business directories for confirmation — labrite.co.za was unreachable when this site was built. Business hours have not been confirmed yet.
          </div>
          <div class="grid grid-2" style="gap:1.5rem;">
            <div class="card business-card">
              <div class="card-body">
                <h3>Head Office</h3>
                <p>${COMPANY.addressLines.join('<br>')}</p>
                <p><a href="${COMPANY.phoneHref}" style="color:var(--red-accessible);font-weight:600;">${COMPANY.phoneDisplay}</a></p>
                <p><a href="${COMPANY.emailHref}" style="color:var(--red-accessible);font-weight:600;">${COMPANY.emailDisplay}</a></p>
              </div>
            </div>
            <div class="card business-card">
              <div class="card-body">
                <h3>Enquiry Routing</h3>
                <p>Product, Coal Laboratory, repairs and maintenance, chemicals and agency enquiries all currently route through the head office number and the form opposite — select the relevant enquiry type so it reaches the right team.</p>
              </div>
            </div>
            <div class="card business-card">
              <div class="card-body">
                <h3>Business Hours</h3>
                <p>[Business hours to be supplied]</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container text-center">
        <span class="eyebrow" style="justify-content:center;">Follow Labrite</span>
        <h2>Connect with Labrite on social media</h2>
        <p class="section-intro" style="margin:0 auto 1.5rem;">Follow Labrite's official LinkedIn company page for updates.</p>
        ${renderLinkedInLink({ text: 'Follow us on LinkedIn', className: 'social-link social-link-outline' })}
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head">
          <div>
            <h2>Location</h2>
            <p class="section-intro">${COMPANY.addressLines.join(', ')} — <a href="${COMPANY.mapsSearchUrl}" target="_blank" rel="noopener noreferrer" style="color:var(--red-accessible);font-weight:600;">view on Google Maps</a>.</p>
          </div>
        </div>
        <div class="media ratio-21-9" style="border:1px solid var(--border-grey);">
          <iframe
            src="${COMPANY.mapsEmbedSrc}"
            title="Map showing the Labrite head office address"
            width="100%"
            height="100%"
            style="border:0; display:block;"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>`;

export default {
  title: 'Contact Labrite | Enquiries, Products, Laboratory & Repairs',
  description:
    'Contact Labrite for general enquiries, product and equipment enquiries, Coal Laboratory enquiries, or repairs and maintenance requests.',
  canonicalPath: '/contact.html',
  activeKey: 'contact',
  outPath: 'contact.html',
  main,
};
