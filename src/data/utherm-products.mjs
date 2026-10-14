// U-Therm equipment used on the curated brand page. Exactly the eight
// manufacturer photographs approved by the client (9 Oct 2026 "Use of
// agencies web media" selection), each with a deliberate role rather than
// a repeated catalogue grid. No model numbers or specifications beyond a
// one-sentence application are stated, since none were supplied/verified.
export const UTHERM_CAPABILITY_GROUPS = [
  {
    slug: 'coal-energy-testing',
    label: 'Coal and Energy Testing',
    description:
      'Analytical instruments for coal and energy testing — calorific value, ash behaviour, sulphur content, proximate analysis and abrasiveness.',
  },
  {
    slug: 'sample-preparation',
    label: 'Sample Preparation and Laboratory Support',
    description: 'Equipment supporting sample reduction and preparation ahead of analysis.',
  },
  {
    slug: 'high-temperature-general',
    label: 'High-Temperature and General Laboratory Equipment',
    description: 'Furnaces and precision balances for general laboratory use.',
  },
];

export const UTHERM_EQUIPMENT = [
  {
    slug: 'abrasive-index-tester-for-coal',
    name: 'Abrasive Index Tester for Coal',
    group: 'coal-energy-testing',
    application: 'Measures the abrasiveness of coal and similar materials, informing equipment wear and handling considerations.',
    image: '/assets/images/agencies/u-therm/p02-c1.jpg',
  },
  {
    slug: 'automatic-ir-sulfur-analyzer',
    name: 'Automatic IR Sulfur Analyzer',
    group: 'coal-energy-testing',
    application: 'Determines sulphur content in coal and related materials using infrared analysis.',
    image: '/assets/images/agencies/u-therm/p02-c2.jpg',
  },
  {
    slug: 'ash-fusion-tester',
    name: 'Ash Fusion Tester',
    group: 'coal-energy-testing',
    application: 'Assesses the fusion behaviour of coal ash under controlled heating.',
    image: '/assets/images/agencies/u-therm/p02-c3.jpg',
  },
  {
    slug: 'full-automatic-calorimeter',
    name: 'Full Automatic Calorimeter',
    group: 'coal-energy-testing',
    application: 'Determines the calorific value of coal and similar solid fuels.',
    image: '/assets/images/agencies/u-therm/p03-c1.jpg',
  },
  {
    slug: 'automatic-proximate-analyzer-tga',
    name: 'Automatic Proximate Analyzer (TGA)',
    group: 'coal-energy-testing',
    application: 'Performs proximate analysis, moisture, volatile matter, ash and fixed carbon, using thermogravimetric methods.',
    image: '/assets/images/agencies/u-therm/p06-c3.jpg',
  },
  {
    slug: 'wet-coal-hammer-crusher',
    name: 'Wet Coal Hammer Crusher',
    group: 'sample-preparation',
    application: 'Reduces coal samples to a consistent particle size ahead of analysis.',
    image: '/assets/images/agencies/u-therm/p36-c3.jpg',
  },
  {
    slug: 'microwave-muffle-furnace',
    name: 'Microwave Muffle Furnace',
    group: 'high-temperature-general',
    application: 'A high-temperature furnace used for ashing and other high-temperature laboratory methods.',
    image: '/assets/images/agencies/u-therm/p08-c1.jpg',
  },
  {
    slug: 'wb-series-analytical-balance',
    name: 'WB Series 0.1 mg Analytical Balance',
    group: 'high-temperature-general',
    application: 'A precision analytical balance for laboratory mass measurement.',
    image: '/assets/images/agencies/u-therm/p14-c1.jpg',
  },
];

export function getUThermByGroup(groupSlug) {
  return UTHERM_EQUIPMENT.filter((e) => e.group === groupSlug);
}
