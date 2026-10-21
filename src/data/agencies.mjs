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
      'A manufacturer of specialised coal and energy testing equipment, including calorimeters, sulphur analysers, ash fusion testers, volatile matter furnaces and other analytical instruments. Labrite provides equipment supply, technical advice, spare parts and product support.',
    role: 'Labrite is the local commercial and technical contact for U-Therm equipment in South Africa, handling enquiries, quotations and ongoing support.',
    hasCatalogue: true,
  },
  {
    slug: 'herexi',
    name: 'Herexi Instruments',
    logo: '/assets/images/brand/partner-herexi.png',
    summary:
      'A manufacturer of laboratory centrifuges and related separation equipment. Through its supplier relationship, Labrite assists customers with equipment selection, supply, spare parts and technical support.',
    hasCatalogue: false,
  },
  {
    slug: 'maglev-africa',
    name: 'Maglev Africa',
    logo: '/assets/images/brand/partner-maglev-africa.png',
    summary:
      'A specialist supplier of electromagnetic and industrial technology solutions. Labrite works in cooperation with Maglev Africa to identify, source and supply suitable equipment and technical solutions for customer applications.',
    hasCatalogue: false,
  },
];

export function getBrand(slug) {
  const brand = BRANDS.find((b) => b.slug === slug);
  if (!brand) throw new Error(`Unknown brand: ${slug}`);
  return brand;
}
