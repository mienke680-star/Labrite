import { COMPANY, INFORMATION_OFFICER } from '../data/company.mjs';

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
          <strong>Based on Labrite's approved internal Privacy Policy</strong> (Document POL-POPIA-001, Revision 0, approved by the Quality Manager, issued 10 May 2026), adapted here for website visitors specifically. The Information Officer, legal name, registration number, address and enquiry-handling details below are confirmed directly by Labrite. Labrite's general company phone and email are still sourced from public listings pending direct confirmation (see the Contact page).
        </div>

        <h2>Who this policy covers</h2>
        <p>This Privacy Policy describes how ${COMPANY.legalName} (registration number ${COMPANY.registrationNumber}) ("Labrite", "we", "us" or "our") collects and processes personal information through its website (currently published at labrite-website.netlify.app, ahead of a Labrite-owned domain) and related online services, in accordance with the Protection of Personal Information Act 4 of 2013 ("POPIA") and Labrite's ISO/IEC 17025 quality management system.</p>
        <p>${COMPANY.legalName} is the responsible party for the personal information described in this policy.<br>Address: ${COMPANY.addressSingleLine}</p>

        <h2>Information we collect</h2>
        <p><strong>Information you provide directly.</strong> When you submit an enquiry through this website, we collect what you enter into the enquiry form: full name, email address, enquiry type and message are required; phone number is optional. Providing this information is voluntary, but the required fields are needed for Labrite to receive and respond to your enquiry — if they're left out, Labrite may be unable to respond to you through the website. This website does not offer account creation and does not take payment.</p>
        <p><strong>Technical information.</strong> This website is hosted by Netlify. As with any website, Netlify's infrastructure automatically processes standard technical information needed to serve each request, including your IP address — Netlify's own access logs retain this for under 30 days (see <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener noreferrer" style="color:var(--red-accessible);font-weight:600;">Netlify's Privacy Policy</a>). No analytics, advertising or tracking script is installed on this website, so no browsing-history profile is built beyond that standard hosting log.</p>

        <h2>How we use it</h2>
        <p>Information submitted through the website may be used to respond to enquiries, provide requested information or quotations, communicate with the enquirer and, where applicable, administer any resulting customer, supplier or business relationship. Enquiries are routed internally to the relevant Labrite team based on their subject matter — Laboratory Services, equipment, chemicals, repairs and maintenance, or agencies. It is not sold, rented, or used for marketing without separate consent.</p>

        <h2>Cookies and similar technology</h2>
        <p>This website does not run analytics, advertising or marketing cookies. The cookies and similar requests it does use are:</p>
        <div class="table-wrap" style="margin:1.5rem 0;">
          <table class="data-table">
            <thead>
              <tr><th>What</th><th>Purpose</th><th>Set by</th></tr>
            </thead>
            <tbody>
              <tr><td>Cookie consent choice</td><td>Remembers that you've accepted the cookie notice</td><td>This website (browser storage, not a tracking cookie)</td></tr>
              <tr><td>Google Maps cookies</td><td>Loads the office location map on the Contact page</td><td>Google — only after you accept cookies; the map does not load beforehand. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style="color:var(--red-accessible);font-weight:600;">Google's Privacy Policy</a></td></tr>
              <tr><td>Google Fonts request</td><td>Loads the Inter typeface used across the site</td><td>Google — your browser requests the font file directly from Google's servers on every page. Self-hosting this instead is under consideration.</td></tr>
            </tbody>
          </table>
        </div>
        <p>You can clear your consent choice at any time using "Cookie preferences" in the footer.</p>

        <h2>Third parties &amp; cross-border transfer</h2>
        <p>This website uses the following external services, each of which may process data (such as IP address) outside South Africa, on their own servers, under their own privacy policies:</p>
        <ul class="prose-list">
          <li><strong>Netlify</strong> — website hosting and build infrastructure.</li>
          <li><strong>Google Maps</strong> — embeds the office location on the Contact page, only after cookie consent.</li>
          <li><strong>Google Fonts</strong> — delivers the Inter typeface.</li>
        </ul>
        <p>No analytics, advertising, CRM or email-routing service is connected to this website yet — enquiries currently reach Labrite only via the direct "Email Labrite directly" link on the Contact page. This section will be updated to name that service once one is configured. Labrite does not sell personal information, and beyond the services above only discloses it with consent, where required by law, to accreditation bodies (such as SANAS), to approved service providers supporting laboratory operations, or under contractual obligations.</p>

        <h2>Data retention</h2>
        <p>Enquiry information is retained only for as long as reasonably necessary for the purpose for which it was collected. Where an enquiry results in a quotation, contract, customer relationship or other business transaction, relevant information may be retained for the period required by applicable law, contractual requirements and Labrite's legitimate record-keeping obligations. Information that is no longer required will be securely deleted, destroyed or de-identified as appropriate.</p>

        <h2>Your rights under POPIA</h2>
        <p>Subject to POPIA, you have the right to: request confirmation of whether Labrite holds personal information about you, and to access it; request correction or updating of information that is inaccurate, incomplete or outdated; request deletion or destruction of information Labrite is no longer entitled to hold, where legally permissible; object to processing on reasonable grounds; withdraw consent where processing is based on it; and lodge a complaint with the Information Regulator (South Africa) if you believe your information has been mishandled — see below. Requests should be submitted in writing to the Information Officer, using the details below.</p>

        <h2>Security</h2>
        <p>Labrite takes reasonable technical and organisational measures to protect personal information in its possession against loss, unauthorised access, disclosure, destruction, misuse and alteration. This website has no database and no payment processing — enquiry submissions are handled client-side only, pending the email/CRM connection noted above.</p>

        <h2>Data breaches</h2>
        <p>Any actual or suspected security breach involving personal information is reported to management immediately, investigated, recorded, and subject to corrective action in accordance with Labrite's legal obligations and its ISO/IEC 17025 incident management system.</p>

        <h2>Information Officer</h2>
        <p>Labrite's appointed Information Officer is:</p>
        <p>
          <strong>Name:</strong> ${INFORMATION_OFFICER.name}<br>
          <strong>Position:</strong> ${INFORMATION_OFFICER.position}<br>
          <strong>Email:</strong> <a href="${INFORMATION_OFFICER.emailHref}" style="color:var(--red-accessible);font-weight:600;">${INFORMATION_OFFICER.emailDisplay}</a><br>
          <strong>Contact number:</strong> <a href="${INFORMATION_OFFICER.phoneHref}" style="color:var(--red-accessible);font-weight:600;">${INFORMATION_OFFICER.phoneDisplay}</a>
        </p>
        <p>The Information Officer is responsible for POPIA compliance oversight, managing privacy-related matters, coordinating breach investigations, handling data subject requests, and promoting awareness and compliance.</p>

        <h2>Information Regulator</h2>
        <p>If you believe your personal information has been processed unlawfully, you have the right to lodge a complaint with the Information Regulator (South Africa):</p>
        <p>
          Address: Woodmead North Office Park, 54 Maxwell Drive, Woodmead, Johannesburg, 2191<br>
          Phone: 010 023 5200 (toll-free: 0800 017 160)<br>
          POPIA complaints: <a href="mailto:POPIAComplaints@inforegulator.org.za" style="color:var(--red-accessible);font-weight:600;">POPIAComplaints@inforegulator.org.za</a><br>
          Website: <a href="https://inforegulator.org.za" target="_blank" rel="noopener noreferrer" style="color:var(--red-accessible);font-weight:600;">inforegulator.org.za</a>
        </p>
        <p style="font-size:0.8125rem;opacity:0.7;">These details are independently published by the Information Regulator and may change — please verify against inforegulator.org.za/contact-us if in doubt.</p>

        <h2>Changes to this policy</h2>
        <p>This policy is reviewed annually, upon legislative change, following major incidents, or when operational changes require it. This page will be updated to match any future revision of the underlying approved policy.<br>Effective date: 10 May 2026 (POL-POPIA-001, Revision 0)<br>Last updated: 31 August 2026</p>

        <h2>Contact us</h2>
        <p>For questions about this policy or to exercise your rights under POPIA, contact Labrite's Information Officer, ${INFORMATION_OFFICER.name}, at <a href="${INFORMATION_OFFICER.emailHref}" style="color:var(--red-accessible);font-weight:600;">${INFORMATION_OFFICER.emailDisplay}</a> or <a href="${INFORMATION_OFFICER.phoneHref}" style="color:var(--red-accessible);font-weight:600;">${INFORMATION_OFFICER.phoneDisplay}</a>. For general enquiries, use the <a href="/contact.html" style="color:var(--red-accessible);font-weight:600;">contact form</a>.</p>
      </div>
    </section>`;

export default {
  title: 'Privacy Policy | Labrite',
  description: `How ${COMPANY.legalName} collects, uses and protects information through this website, under POPIA — including cookies, data collected, and your rights.`,
  canonicalPath: '/privacy-policy.html',
  activeKey: '',
  outPath: 'privacy-policy.html',
  main,
};
