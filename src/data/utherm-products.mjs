// U-Therm catalogue — real manufacturer product photographs supplied by
// Labrite (client handoff package, Oct 2026), cropped from the source PDF
// catalogue pages (full gap-to-gap column width, so no part of any machine
// is clipped). Names are the manufacturer's own visible captions, used
// verbatim. Any source caption that was truncated/obscured in the PDF is
// deliberately NOT published as a product here (per the 9 Oct 2026 review:
// a clipped caption is not a finished title) — see README for the excluded
// list kept for when Labrite can supply the complete name.
// No model numbers or specifications are invented: none were supplied for
// these entries, so product pages state that plainly and route enquiries to
// Labrite instead of fabricating detail.

export const UTHERM_CATEGORIES = [
  { slug: 'coal-testing', label: 'Coal Testing', description: "U-Therm's core coal and energy testing range \u2014 calorimeters, proximate and sulphur analysers, ash fusion and abrasive index testers.", hasProducts: true },
  { slug: 'muffle-furnace', label: 'Muffle Furnaces', description: "Laboratory muffle furnaces for ashing and high-temperature test methods.", hasProducts: true },
  { slug: 'balances-scales', label: 'Balances & Scales', description: "Analytical and weighing balances for laboratory mass measurement.", hasProducts: true },
  { slug: 'sampling-instruments', label: 'Sampling & Sample Preparation', description: "Crushers, pulverizers, sieve shakers and riffles used to reduce and divide samples ahead of analysis.", hasProducts: true },
  { slug: 'heating-drying-ovens', label: 'Heating & Drying Ovens', description: "Laboratory drying and heating ovens.", hasProducts: false },
  { slug: 'carbon-sulfur-analyzer', label: 'Carbon & Sulfur Analysers', description: "Infrared carbon and sulfur analysis instruments.", hasProducts: false },
  { slug: 'icp-spectrometers', label: 'ICP Spectrometers', description: "Inductively coupled plasma spectrometry instruments.", hasProducts: false },
  { slug: 'microwave-digestion', label: 'Microwave Digestion & Extraction', description: "Microwave digestion and extraction systems for sample preparation.", hasProducts: false },
  { slug: 'spectrophotometer', label: 'Spectrophotometers', description: "Laboratory spectrophotometers.", hasProducts: false },
  { slug: 'xrf-spectroscopy', label: 'XRF & Related Spectroscopy', description: "X-ray fluorescence and related spectroscopy instruments.", hasProducts: false },
  { slug: 'small-instruments', label: 'Small Instruments', description: "Pipettes, circulators and other small laboratory instruments.", hasProducts: false },
];

export function getCategory(slug) {
  return UTHERM_CATEGORIES.find((c) => c.slug === slug);
}

// Visible manufacturer captions, used as supplied — complete captions only
// (see the file header). Specifications and model numbers were not included
// in the supplied material for these entries, so none are stated here.
export const UTHERM_PRODUCTS = [
  {
    slug: 'abrasive-index-tester-for-coal-p02-c01',
    referenceId: 'P02-C01',
    name: "Abrasive Index Tester for Coal",
    category: 'coal-testing',
    image: '/assets/images/agencies/u-therm/p02-c1.jpg',
  },
  {
    slug: 'automatic-ir-sulfur-analyzer-p02-c02',
    referenceId: 'P02-C02',
    name: "Automatic IR Sulfur Analyzer",
    category: 'coal-testing',
    image: '/assets/images/agencies/u-therm/p02-c2.jpg',
  },
  {
    slug: 'ash-fusion-tester-p02-c03',
    referenceId: 'P02-C03',
    name: "Ash Fusion Tester",
    category: 'coal-testing',
    image: '/assets/images/agencies/u-therm/p02-c3.jpg',
  },
  {
    slug: 'full-automatic-calorimeter-p03-c01',
    referenceId: 'P03-C01',
    name: "Full Automatic Calorimeter",
    category: 'coal-testing',
    image: '/assets/images/agencies/u-therm/p03-c1.jpg',
  },
  {
    slug: 'automatic-calorimeter-yx-zr-g-p03-c02',
    referenceId: 'P03-C02',
    name: "Automatic Calorimeter YX-ZR/G",
    category: 'coal-testing',
    image: '/assets/images/agencies/u-therm/p03-c2.jpg',
  },
  {
    slug: 'automatic-caking-index-tester-p04-c01',
    referenceId: 'P04-C01',
    name: "Automatic Caking Index Tester",
    category: 'coal-testing',
    image: '/assets/images/agencies/u-therm/p04-c1.jpg',
  },
  {
    slug: 'automatic-calorimeter-p04-c02',
    referenceId: 'P04-C02',
    name: "Automatic Calorimeter",
    category: 'coal-testing',
    image: '/assets/images/agencies/u-therm/p04-c2.jpg',
  },
  {
    slug: 'automatic-calorimeter-up-and-down-p04-c03',
    referenceId: 'P04-C03',
    name: "Automatic Calorimeter (Up and Down)",
    category: 'coal-testing',
    image: '/assets/images/agencies/u-therm/p04-c3.jpg',
  },
  {
    slug: 'chn-elemental-analyzer-p05-c01',
    referenceId: 'P05-C01',
    name: "CHN Elemental Analyzer",
    category: 'coal-testing',
    image: '/assets/images/agencies/u-therm/p05-c1.jpg',
  },
  {
    slug: 'microwave-moisture-analyzer-p05-c03',
    referenceId: 'P05-C03',
    name: "Microwave Moisture Analyzer",
    category: 'coal-testing',
    image: '/assets/images/agencies/u-therm/p05-c3.jpg',
  },
  {
    slug: 'moisture-tester-p06-c01',
    referenceId: 'P06-C01',
    name: "Moisture Tester",
    category: 'coal-testing',
    image: '/assets/images/agencies/u-therm/p06-c1.jpg',
  },
  {
    slug: 'total-sulfur-analyzer-p06-c02',
    referenceId: 'P06-C02',
    name: "Total Sulfur Analyzer",
    category: 'coal-testing',
    image: '/assets/images/agencies/u-therm/p06-c2.jpg',
  },
  {
    slug: 'automatic-proximate-analyzer-tga-p06-c03',
    referenceId: 'P06-C03',
    name: "Automatic Proximate Analyzer (TGA)",
    category: 'coal-testing',
    image: '/assets/images/agencies/u-therm/p06-c3.jpg',
  },
  {
    slug: 'automatic-calorimeter-p07-c01',
    referenceId: 'P07-C01',
    name: "Automatic Calorimeter",
    category: 'coal-testing',
    image: '/assets/images/agencies/u-therm/p07-c1.jpg',
  },
  {
    slug: 'microwave-muffle-furnace-p08-c01',
    referenceId: 'P08-C01',
    name: "Microwave Muffle Furnace",
    category: 'muffle-furnace',
    image: '/assets/images/agencies/u-therm/p08-c1.jpg',
  },
  {
    slug: 'program-control-chamber-electric-furnace-p08-c02',
    referenceId: 'P08-C02',
    name: "Program control chamber electric furnace",
    category: 'muffle-furnace',
    image: '/assets/images/agencies/u-therm/p08-c2.jpg',
  },
  {
    slug: 'muffle-furnace-p09-c01',
    referenceId: 'P09-C01',
    name: "Muffle Furnace",
    category: 'muffle-furnace',
    image: '/assets/images/agencies/u-therm/p09-c1.jpg',
  },
  {
    slug: 'intelligent-muffle-furnace-p09-c02',
    referenceId: 'P09-C02',
    name: "Intelligent Muffle Furnace",
    category: 'muffle-furnace',
    image: '/assets/images/agencies/u-therm/p09-c2.jpg',
  },
  {
    slug: 'intelligent-high-temperature-carbon-test-p09-c03',
    referenceId: 'P09-C03',
    name: "Intelligent high temperature carbon test",
    category: 'muffle-furnace',
    image: '/assets/images/agencies/u-therm/p09-c3.jpg',
  },
  {
    slug: 'mf1600-series-box-type-furnace-p10-c03',
    referenceId: 'P10-C03',
    name: "MF1600 series box-type furnace",
    category: 'muffle-furnace',
    image: '/assets/images/agencies/u-therm/p10-c3.jpg',
  },
  {
    slug: 'mf1400-series-box-type-furnace-p11-c01',
    referenceId: 'P11-C01',
    name: "MF1400 series box-type furnace",
    category: 'muffle-furnace',
    image: '/assets/images/agencies/u-therm/p11-c1.jpg',
  },
  {
    slug: 'mf1800-series-box-type-furnace-p11-c02',
    referenceId: 'P11-C02',
    name: "MF1800 series box-type furnace",
    category: 'muffle-furnace',
    image: '/assets/images/agencies/u-therm/p11-c2.jpg',
  },
  {
    slug: 'wb-series-0-1mg-analytical-balance-p14-c01',
    referenceId: 'P14-C01',
    name: "WB series 0.1mg Analytical Balance",
    category: 'balances-scales',
    image: '/assets/images/agencies/u-therm/p14-c1.jpg',
  },
  {
    slug: 'wb-series-1mg-analytical-balance-p14-c02',
    referenceId: 'P14-C02',
    name: "WB series 1mg Analytical Balance",
    category: 'balances-scales',
    image: '/assets/images/agencies/u-therm/p14-c2.jpg',
  },
  {
    slug: 'touch-balance-p15-c01',
    referenceId: 'P15-C01',
    name: "Touch balance",
    category: 'balances-scales',
    image: '/assets/images/agencies/u-therm/p15-c1.jpg',
  },
  {
    slug: 'electronic-balance-p15-c02',
    referenceId: 'P15-C02',
    name: "Electronic Balance",
    category: 'balances-scales',
    image: '/assets/images/agencies/u-therm/p15-c2.jpg',
  },
  {
    slug: 'large-weighing-balance-p15-c03',
    referenceId: 'P15-C03',
    name: "Large weighing Balance",
    category: 'balances-scales',
    image: '/assets/images/agencies/u-therm/p15-c3.jpg',
  },
  {
    slug: 'large-weighing-balance-p16-c01',
    referenceId: 'P16-C01',
    name: "Large weighing Balance",
    category: 'balances-scales',
    image: '/assets/images/agencies/u-therm/p16-c1.jpg',
  },
  {
    slug: 'moisture-analyzer-p16-c02',
    referenceId: 'P16-C02',
    name: "Moisture Analyzer",
    category: 'balances-scales',
    image: '/assets/images/agencies/u-therm/p16-c2.jpg',
  },
  {
    slug: 'internal-calibration-analytical-balances-p16-c03',
    referenceId: 'P16-C03',
    name: "Internal Calibration Analytical Balances",
    category: 'balances-scales',
    image: '/assets/images/agencies/u-therm/p16-c3.jpg',
  },
  {
    slug: 'external-calibration-analytical-balances-p17-c01',
    referenceId: 'P17-C01',
    name: "External calibration Analytical Balances",
    category: 'balances-scales',
    image: '/assets/images/agencies/u-therm/p17-c1.jpg',
  },
  {
    slug: 'semi-microelectronic-analytical-balance-p17-c02',
    referenceId: 'P17-C02',
    name: "Semi-microelectronic analytical balance",
    category: 'balances-scales',
    image: '/assets/images/agencies/u-therm/p17-c2.jpg',
  },
  {
    slug: 'analytical-balances-p17-c03',
    referenceId: 'P17-C03',
    name: "Analytical Balances",
    category: 'balances-scales',
    image: '/assets/images/agencies/u-therm/p17-c3.jpg',
  },
  {
    slug: 'moisture-analyzer-p18-c01',
    referenceId: 'P18-C01',
    name: "Moisture Analyzer",
    category: 'balances-scales',
    image: '/assets/images/agencies/u-therm/p18-c1.jpg',
  },
  {
    slug: 'wet-coal-hammer-crusher-p36-c03',
    referenceId: 'P36-C03',
    name: "Wet coal hammer crusher",
    category: 'sampling-instruments',
    image: '/assets/images/agencies/u-therm/p36-c3.jpg',
  },
  {
    slug: 'jaw-crusher-p37-c01',
    referenceId: 'P37-C01',
    name: "Jaw Crusher",
    category: 'sampling-instruments',
    image: '/assets/images/agencies/u-therm/p37-c1.jpg',
  },
  {
    slug: 'twin-roll-crusher-p37-c02',
    referenceId: 'P37-C02',
    name: "Twin-roll crusher",
    category: 'sampling-instruments',
    image: '/assets/images/agencies/u-therm/p37-c2.jpg',
  },
  {
    slug: 'fast-compaction-sample-pulverizer-p37-c03',
    referenceId: 'P37-C03',
    name: "Fast compaction Sample Pulverizer",
    category: 'sampling-instruments',
    image: '/assets/images/agencies/u-therm/p37-c3.jpg',
  },
  {
    slug: 'sealed-sample-pulverizer-p38-c01',
    referenceId: 'P38-C01',
    name: "Sealed Sample Pulverizer",
    category: 'sampling-instruments',
    image: '/assets/images/agencies/u-therm/p38-c1.jpg',
  },
  {
    slug: 'standard-sieve-shaker-p38-c02',
    referenceId: 'P38-C02',
    name: "Standard Sieve Shaker",
    category: 'sampling-instruments',
    image: '/assets/images/agencies/u-therm/p38-c2.jpg',
  },
  {
    slug: 'whole-sealed-stainless-steel-riffle-p39-c02',
    referenceId: 'P39-C02',
    name: "Whole sealed stainless steel riffle",
    category: 'sampling-instruments',
    image: '/assets/images/agencies/u-therm/p39-c2.jpg',
  },
  {
    slug: 'stainless-steel-slot-type-riffle-p39-c03',
    referenceId: 'P39-C03',
    name: "Stainless steel slot type riffle",
    category: 'sampling-instruments',
    image: '/assets/images/agencies/u-therm/p39-c3.jpg',
  },
];

export function getUThermProduct(slug) {
  return UTHERM_PRODUCTS.find((p) => p.slug === slug);
}

export function getUThermProductsByCategory(categorySlug) {
  return UTHERM_PRODUCTS.filter((p) => p.category === categorySlug);
}
