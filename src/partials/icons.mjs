// Shared line-icon set used wherever a business area needs a simple technical
// icon instead of a photograph (per the "authentic imagery only" direction —
// no generic/stock photos standing in for unverified premises or concepts).
export const ICONS = {
  lab: `<path d="M9 2v6.3L4.3 17a2 2 0 0 0 1.8 3h11.8a2 2 0 0 0 1.8-3L15 8.3V2" /><path d="M9 2h6" /><path d="M7.3 14h9.4" />`,
  equipment: `<path d="M12 3v4" /><path d="M4 7h16" /><path d="M5 7l-2.5 5a2.8 2.8 0 0 0 5 0L5 7z" /><path d="M19 7l2.5 5a2.8 2.8 0 0 1-5 0L19 7z" /><path d="M12 7v14" /><path d="M8 21h8" />`,
  chemicals: `<path d="M12 2s7 7.6 7 12.2A7 7 0 0 1 5 14.2C5 9.6 12 2 12 2z" />`,
  support: `<path d="M4 13v-2a8 8 0 0 1 16 0v2" /><path d="M3 13h3v6H4a1 1 0 0 1-1-1v-5z" /><path d="M21 13h-3v6h2a1 1 0 0 0 1-1v-5z" /><path d="M18 19a4 4 0 0 1-4 2h-1" />`,
  repairs: `<path d="M14.7 2.7a4.5 4.5 0 0 0-6.1 5.9L2.3 14.9v4.8h4.8l6.3-6.3a4.5 4.5 0 0 0 6-6.1l-3.3 3.3-2.1-2.1 3.3-3.3z" />`,
  agencies: `<circle cx="6" cy="6" r="2.2" /><circle cx="18" cy="6" r="2.2" /><circle cx="12" cy="18" r="2.2" /><path d="M7.8 7.3 10.5 16M16.2 7.3 13.5 16M8.2 6h7.6" />`,
  pin: `<path d="M12 21s7-7.3 7-12.2a7 7 0 1 0-14 0c0 4.9 7 12.2 7 12.2z" /><circle cx="12" cy="8.8" r="2.4" />`,
  flask: `<path d="M9 2v6.3L4.3 17a2 2 0 0 0 1.8 3h11.8a2 2 0 0 0 1.8-3L15 8.3V2" /><path d="M9 2h6" /><path d="M7.3 14h9.4" />`,
};

export function iconSvg(name) {
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[name]}</svg>`;
}
