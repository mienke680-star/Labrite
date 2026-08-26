import { COMPANY } from '../data/company.mjs';

const main = `
    <section class="hero-simple">
      <div class="container hero-content">
        <span class="eyebrow">Legal</span>
        <h1>Privacy Policy</h1>
        <p class="lede">How this website collects, uses and protects information, under the Protection of Personal Information Act, 2013 (POPIA).</p>
      </div>
    </section>

    <section class="section">
      <div class="container" style="max-width:75ch;">
        <div class="notice" style="margin-bottom:2.5rem;">
          <strong>Drafted, not yet formally approved.</strong> This policy describes how the website itself is built to handle information. Labrite-specific details it cannot state with confidence — the registered Information Officer's name and contact details — are marked below and should be confirmed before this page is treated as final.
        </div>

        <h2>Who this policy covers</h2>
        <p>This policy applies to labrite-website.netlify.app and describes how Labrite CC ("Labrite", "we", "us"), of ${COMPANY.addressSingleLine}, processes personal information collected through this website, in accordance with the Protection of Personal Information Act, 2013 (POPIA).</p>

        <h2>Information we collect</h2>
        <p>The only personal information this website collects directly is what a visitor chooses to submit through the enquiry form on the Contact page: full name, email address, phone number, enquiry type and message. No account creation, payment details or browsing history are collected.</p>

        <h2>How we use it</h2>
        <p>Information submitted through the enquiry form is used solely to respond to that enquiry — routing it to the relevant team (Coal Laboratory, equipment, chemicals, repairs and maintenance, or agencies) and following up by phone or email. It is not sold, rented, or used for marketing without separate consent.</p>

        <h2>Cookies and similar technology</h2>
        <p>This website does not run analytics, advertising or marketing cookies. The cookies and local storage it does use are:</p>
        <div class="table-wrap" style="margin:1.5rem 0;">
          <table class="data-table">
            <thead>
              <tr><th>What</th><th>Purpose</th><th>Set by</th></tr>
            </thead>
            <tbody>
              <tr><td>Cookie consent choice</td><td>Remembers that you've seen the cookie notice</td><td>This website (browser storage, not a tracking cookie)</td></tr>
              <tr><td>Google Maps cookies</td><td>Loads the office location map on the Contact page</td><td>Google, when the map loads — see <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style="color:var(--red-accessible);font-weight:600;">Google's Privacy Policy</a></td></tr>
              <tr><td>Google Fonts request</td><td>Loads the Inter typeface used across the site</td><td>Google — your browser requests the font file directly from Google's servers</td></tr>
            </tbody>
          </table>
        </div>
        <p>You can decline non-essential cookies by not loading the Contact page's map, and can clear the consent choice at any time using "Cookie preferences" in the footer.</p>

        <h2>Third parties &amp; cross-border transfer</h2>
        <p>This website is hosted by Netlify and embeds Google Maps and Google Fonts. These providers may process data (such as IP address) outside South Africa, on their own servers, under their own privacy policies. The enquiry form's future email/CRM connection (see the Contact page) will be named here once it is configured.</p>

        <h2>Data retention</h2>
        <p>Enquiry messages are kept only for as long as needed to handle the enquiry and any resulting business relationship, then deleted or anonymised.</p>

        <h2>Your rights under POPIA</h2>
        <p>You have the right to: request access to personal information Labrite holds about you; request its correction or deletion; object to its processing; and lodge a complaint with the Information Regulator (South Africa) at <a href="https://inforegulator.org.za" target="_blank" rel="noopener noreferrer" style="color:var(--red-accessible);font-weight:600;">inforegulator.org.za</a> if you believe your information has been mishandled. To exercise any of these rights with Labrite directly, use the contact details below.</p>

        <h2>Security</h2>
        <p>Reasonable technical and organisational measures are used to protect information submitted through this website against loss, unauthorised access, and disclosure.</p>

        <h2>Information Officer</h2>
        <div class="notice">
          POPIA requires a registered Information Officer for privacy queries and complaints. Their name and direct contact details have not been supplied and are not stated here — in the meantime, direct any privacy query to <a href="${COMPANY.emailHref}" style="color:var(--red-accessible);font-weight:600;">${COMPANY.emailDisplay}</a>.
        </div>

        <h2>Changes to this policy</h2>
        <p>This policy may be updated as the website or Labrite's data practices change. Check back periodically for the current version.</p>

        <h2>Contact us</h2>
        <p>Questions about this policy or your information: <a href="${COMPANY.emailHref}" style="color:var(--red-accessible);font-weight:600;">${COMPANY.emailDisplay}</a> or <a href="${COMPANY.phoneHref}" style="color:var(--red-accessible);font-weight:600;">${COMPANY.phoneDisplay}</a>.</p>
      </div>
    </section>`;

export default {
  title: 'Privacy Policy | Labrite',
  description: 'How Labrite CC collects, uses and protects information through this website, under POPIA — including cookies, data collected, and your rights.',
  canonicalPath: '/privacy-policy.html',
  activeKey: '',
  outPath: 'privacy-policy.html',
  main,
};
