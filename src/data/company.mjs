// Real Labrite facts. Legal name, address and the Information Officer record
// below were confirmed directly by Jacques Stander (Quality Manager /
// Information Officer) on 2026-08-31, superseding the previously
// sourced-but-unconfirmed LinkedIn/directory data — do not reintroduce the
// old "Labrite CC" / eMalahleni details. Legal name, address and the
// registration number are independently corroborated by a CIPC COR21.1
// certificate. Phone/email display fields are the one remaining gap:
// Labrite's general company line, not yet confirmed.
// Every page that shows contact/company facts imports from this single file.
export const SITE_URL = 'https://labrite-website.netlify.app';

export const COMPANY = {
  legalName: 'Labrite (Pty) Ltd',
  // CIPC registration number for Labrite (Pty) Ltd, effective 17/11/2020 —
  // this is the current legal entity's registration date, distinct from
  // "founded" below (the business's own operating-since claim, sourced
  // separately from LinkedIn). Do not conflate the two.
  registrationNumber: '2020/875632/07',
  founded: '1999',
  // Sourced from LinkedIn/directories, not yet confirmed directly — see the
  // notice on the Contact page. Left as-is pending confirmation, per Jacques'
  // instruction not to invent a replacement for something not yet corrected.
  phoneDisplay: '013 650 0394',
  phoneHref: 'tel:+27136500394',
  emailDisplay: 'info@labrite.co.za',
  emailHref: 'mailto:info@labrite.co.za',
  addressLines: ['4 Slegtkamp Street, Unit C', 'Middelburg, Mpumalanga, 1050', 'South Africa'],
  addressSingleLine: '4 Slegtkamp Street, Unit C, Middelburg, Mpumalanga, 1050, South Africa',
  addressStreet: '4 Slegtkamp Street, Unit C',
  addressLocality: 'Middelburg',
  addressRegion: 'Mpumalanga',
  addressPostalCode: '1050',
  mapsSearchUrl:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('4 Slegtkamp Street, Unit C, Middelburg, Mpumalanga, 1050, South Africa'),
  mapsEmbedSrc:
    'https://www.google.com/maps?q=' +
    encodeURIComponent('4 Slegtkamp Street, Unit C, Middelburg, Mpumalanga, 1050, South Africa') +
    '&output=embed',
  // Confirmed by Labrite directly (supplied hours). IANA zone for
  // openingHoursSpecification / the live open-now badge.
  timeZone: 'Africa/Johannesburg',
  hoursSummary: [
    { label: 'Monday – Friday', value: '7:45 AM – 4:30 PM' },
    { label: 'Saturday – Sunday', value: 'Closed' },
  ],
  hoursSchema: [
    { day: 'Monday', opens: '07:45', closes: '16:30' },
    { day: 'Tuesday', opens: '07:45', closes: '16:30' },
    { day: 'Wednesday', opens: '07:45', closes: '16:30' },
    { day: 'Thursday', opens: '07:45', closes: '16:30' },
    { day: 'Friday', opens: '07:45', closes: '16:30' },
  ],
};

// The registered Information Officer for POPIA purposes — confirmed directly
// by Labrite. Used on the Privacy Policy page.
export const INFORMATION_OFFICER = {
  name: 'Jacques Stander',
  position: 'Quality Manager / Information Officer',
  emailDisplay: 'jacques@labrite.co.za',
  emailHref: 'mailto:jacques@labrite.co.za',
  phoneDisplay: '067 425 7174',
  phoneHref: 'tel:+27674257174',
};
