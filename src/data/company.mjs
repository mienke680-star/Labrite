// Real Labrite facts, sourced (not invented) from Labrite's own LinkedIn company
// page and corroborating public business directories, since labrite.co.za itself
// was unreachable (503) when this was compiled. Flagged to the user for
// confirmation — update here once Labrite confirms it directly; every page that
// shows contact/company facts imports from this single file.
export const SITE_URL = 'https://labrite-website.netlify.app';

export const COMPANY = {
  legalName: 'Labrite CC',
  founded: '1999',
  phoneDisplay: '013 650 0394',
  phoneHref: 'tel:+27136500394',
  emailDisplay: 'info@labrite.co.za',
  emailHref: 'mailto:info@labrite.co.za',
  addressLines: ['6 Dorinda Avenue, Extension 18', 'eMalahleni (Witbank), Mpumalanga', 'South Africa'],
  addressSingleLine: '6 Dorinda Avenue, Extension 18, eMalahleni (Witbank), Mpumalanga, South Africa',
  mapsSearchUrl:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('Labrite CC, 6 Dorinda Avenue, Extension 18, eMalahleni, Mpumalanga, South Africa'),
  mapsEmbedSrc:
    'https://www.google.com/maps?q=' +
    encodeURIComponent('Labrite CC, 6 Dorinda Avenue, Extension 18, eMalahleni, Mpumalanga, South Africa') +
    '&output=embed',
  // Confirmed by Labrite directly (supplied hours), unlike the sourced-for-confirmation
  // fields above. IANA zone for openingHoursSpecification / the live open-now badge.
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
