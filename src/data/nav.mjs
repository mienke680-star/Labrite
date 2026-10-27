export const LINKEDIN_URL = 'https://www.linkedin.com/company/labrite/';

export const NAV_ITEMS = [
  { key: 'home', label: 'Home', href: '/' },
  { key: 'about', label: 'About Labrite', href: '/about.html' },
  { key: 'laboratory-services', label: 'Laboratory Services', href: '/laboratory-services.html' },
  { key: 'equipment', label: 'Equipment & Instruments', href: '/equipment/' },
  { key: 'chemicals', label: 'Chemicals', href: '/chemicals.html' },
  { key: 'repairs', label: 'Repairs & Maintenance', href: '/repairs-maintenance.html' },
  { key: 'agencies', label: 'Agencies & Distribution', href: '/agencies.html' },
  { key: 'contact', label: 'Contact', href: '/contact.html' },
];

// The umbrella term is "Laboratory Services" so new disciplines (e.g. a future
// chrome ore laboratory) can be added without restructuring the site — Coal
// Testing & Analysis is the current, and so far only, discipline under it.
export const BUSINESS_AREAS = [
  { label: 'Laboratory Services', href: '/laboratory-services.html', desc: 'Sampling, sample preparation, and Coal Testing & Analysis.' },
  { label: 'Equipment & Instruments', href: '/equipment/', desc: 'Laboratory instruments and equipment.' },
  { label: 'Chemicals', href: '/chemicals.html', desc: 'Laboratory chemicals and related products.' },
  { label: 'Repairs & Maintenance', href: '/repairs-maintenance.html', desc: 'Servicing, repairs and equipment support.' },
  { label: 'Agencies & Distribution', href: '/agencies.html', desc: 'Brands and manufacturers represented by Labrite.' },
];

export const FOOTER_LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy-policy.html' },
  { label: 'Terms of Use', href: '/terms-of-use.html' },
];
