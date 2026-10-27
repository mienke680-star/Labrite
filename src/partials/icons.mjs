// Shared line-icon set used wherever a business area needs a simple technical
// icon instead of a photograph (per the "authentic imagery only" direction —
// no generic/stock photos standing in for unverified premises or concepts).
// equipment/chemicals/agencies were redrawn (27 Oct 2026, client-supplied
// reference artwork) since the old scales-of-justice icon for Equipment &
// Instruments read as a legal symbol, not a laboratory one; lab and repairs
// were kept exactly as supplied artwork asked ("retain").
export const ICONS = {
  lab: `<path d="M9 2v6.3L4.3 17a2 2 0 0 0 1.8 3h11.8a2 2 0 0 0 1.8-3L15 8.3V2" /><path d="M9 2h6" /><path d="M7.3 14h9.4" />`,
  equipment: `<path d="M11 2v3" /><path d="M9.5 5h3" /><path d="M9.5 5v3.5a1.5 1.5 0 0 0 3 0V5" /><circle cx="14" cy="10.5" r="1.6" /><path d="M15.1 11.6c1.5.9 2.5 2.6 2.5 4.4" /><path d="M11 8.5V17" /><path d="M5 21h13" /><path d="M6 21a3.3 3.3 0 1 1 6-2" />`,
  chemicals: `<path d="M10 2h4" /><path d="M10.5 2v5.2" /><path d="M13.5 2v5.2" /><circle cx="12" cy="14.2" r="5.3" /><path d="M7.6 14.2h8.8" />`,
  support: `<path d="M4 13v-2a8 8 0 0 1 16 0v2" /><path d="M3 13h3v6H4a1 1 0 0 1-1-1v-5z" /><path d="M21 13h-3v6h2a1 1 0 0 0 1-1v-5z" /><path d="M18 19a4 4 0 0 1-4 2h-1" />`,
  repairs: `<path d="M14.7 2.7a4.5 4.5 0 0 0-6.1 5.9L2.3 14.9v4.8h4.8l6.3-6.3a4.5 4.5 0 0 0 6-6.1l-3.3 3.3-2.1-2.1 3.3-3.3z" />`,
  agencies: `<circle cx="12" cy="5" r="2.3" /><circle cx="6" cy="18" r="2.3" /><circle cx="18" cy="18" r="2.3" /><path d="M10.5 6.8 7.3 16" /><path d="M13.5 6.8 16.7 16" />`,
  pin: `<path d="M12 21s7-7.3 7-12.2a7 7 0 1 0-14 0c0 4.9 7 12.2 7 12.2z" /><circle cx="12" cy="8.8" r="2.4" />`,
  flask: `<path d="M9 2v6.3L4.3 17a2 2 0 0 0 1.8 3h11.8a2 2 0 0 0 1.8-3L15 8.3V2" /><path d="M9 2h6" /><path d="M7.3 14h9.4" />`,
  ppe: `<rect x="3.5" y="8.5" width="7" height="7" rx="3" /><rect x="13.5" y="8.5" width="7" height="7" rx="3" /><path d="M10.5 12h3" /><path d="M3.5 11h-1" /><path d="M20.5 11h1" />`,
};

export function iconSvg(name) {
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[name]}</svg>`;
}
