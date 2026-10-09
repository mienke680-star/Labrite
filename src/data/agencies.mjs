// Brands Labrite represents. One shared source so names, logos and counts
// stay consistent between Home, the Agencies index and each brand's own
// pages — see product-image-map.json / PRODUCT_IMAGE_MAP.md (supplied
// handoff package) for which brands currently have verified catalogue media.
export const BRANDS = [
  {
    slug: 'u-therm',
    name: 'U-Therm',
    logo: '/assets/images/brand/partner-u-therm.png',
    summary:
      'A coal and energy testing equipment manufacturer — calorimeters, proximate analysers, sulphur analysers, ash fusion testers, abrasive index testers, muffle furnaces, balances and other specialised analytical instrumentation.',
    hasCatalogue: true,
  },
  {
    slug: 'herexi',
    name: 'Herexi',
    logo: '/assets/images/brand/partner-herexi.png',
    summary:
      'A manufacturer and technology provider represented by Labrite, supporting the laboratory and industrial markets Labrite serves with local commercial and technical support.',
    hasCatalogue: false,
  },
  {
    slug: 'maglev-africa',
    name: 'Maglev Africa',
    logo: '/assets/images/brand/partner-maglev-africa.png',
    summary:
      'A manufacturer and technology provider represented by Labrite, supporting the laboratory and industrial markets Labrite serves with local commercial and technical support.',
    hasCatalogue: false,
  },
];

export function getBrand(slug) {
  const brand = BRANDS.find((b) => b.slug === slug);
  if (!brand) throw new Error(`Unknown brand: ${slug}`);
  return brand;
}
