// Product catalogue — built only from equipment Labrite has actually supplied photography of.
// Technical specifications (capacity, accuracy, power, dimensions, manufacturer model numbers,
// certifications) are intentionally left as "not yet supplied" placeholders rather than invented,
// per the Labrite content rule: never fabricate specs, models or accreditation claims.

export const PRODUCTS = [
  {
    slug: 'analytical-balance',
    name: 'Analytical Balance',
    range: 'weighing-calibration',
    category: 'Weighing & Calibration',
    tagline: 'Precision laboratory balance',
    shortDescription: 'High-precision mass measurement for sample preparation, reagent weighing and quality control.',
    overview:
      'The analytical balance is used wherever a laboratory result depends on an accurate starting mass. Its enclosed glass draft shield isolates the weighing pan from air movement, while a stable internal mechanism holds a steady reading for repeatable results.',
    applications: [
      'Sample and reagent weighing ahead of testing',
      'Reference and tare weighing during laboratory procedures',
      'Routine quality control checks on prepared samples',
    ],
    image: '/assets/images/products/analytical-balance.jpg',
    imageAlt: 'Analytical balance with glass draft shield on a laboratory bench',
  },
  {
    slug: 'top-loading-balance',
    name: 'Top-Loading Balance',
    range: 'weighing-calibration',
    category: 'Weighing & Calibration',
    tagline: 'Laboratory bench scale',
    shortDescription: 'Fast, durable bench weighing for general laboratory and sample-preparation use.',
    overview:
      'A top-loading balance trades the enclosed draft shield of an analytical balance for a larger, open platform and faster handling, making it well suited to general bench weighing where samples are heavier or move through the laboratory in higher volumes.',
    applications: [
      'General laboratory and bench weighing',
      'Sample preparation ahead of drying, crushing or analysis',
      'Weighing of consumables and reference materials',
    ],
    image: '/assets/images/products/top-loading-balance.jpg',
    imageAlt: 'Top-loading laboratory balance with digital display on a bench',
  },
  {
    slug: 'calibration-weight-set',
    name: 'Calibration Weight Set',
    range: 'weighing-calibration',
    category: 'Weighing & Calibration',
    tagline: 'Mass calibration kit',
    shortDescription: 'A graded set of reference weights, held in a protective case, for verifying balance accuracy.',
    overview:
      'A calibration weight set provides a graded series of known reference masses used to check and adjust the accuracy of laboratory balances. Weights are stored in a padded, fitted case to protect their certified mass between uses.',
    applications: [
      'Routine verification of balance accuracy',
      'Balance calibration and adjustment',
      'Supporting internal quality-control checks on weighing equipment',
    ],
    image: '/assets/images/products/calibration-weight-set.jpg',
    imageAlt: 'Calibration weight set with graded reference weights in a fitted case',
  },
  {
    slug: 'halogen-moisture-analyzer',
    name: 'Halogen Moisture Analyzer',
    range: 'moisture-drying',
    category: 'Moisture & Drying',
    tagline: 'Rapid moisture testing balance',
    shortDescription: 'Combines precision weighing with halogen heating to determine sample moisture content quickly.',
    overview:
      'A halogen moisture analyzer combines a precision balance with a halogen heating element to dry a sample and calculate moisture content from the weight lost during heating, giving a result in a fraction of the time a conventional oven method requires.',
    applications: [
      'Rapid moisture-content determination on laboratory samples',
      'Process and quality-control moisture checks',
      'Supporting sample preparation workflows ahead of further analysis',
    ],
    image: '/assets/images/products/halogen-moisture-analyzer.jpg',
    imageAlt: 'Halogen moisture analyzer with heating element and digital display',
  },
  {
    slug: 'bench-drying-oven',
    name: 'Bench Drying Oven',
    range: 'moisture-drying',
    category: 'Moisture & Drying',
    tagline: 'Laboratory bench drying oven',
    shortDescription: 'Compact bench-top drying oven with digital temperature control for sample preparation.',
    overview:
      'This bench-top drying oven provides controlled, even heating for laboratory drying tasks where a compact footprint is needed. A digital controller monitors and displays chamber temperature, with an adjustable air door for ventilation control.',
    applications: [
      'Drying of samples ahead of weighing or analysis',
      'Moisture removal as part of sample preparation',
      'General laboratory heating and drying tasks',
    ],
    image: '/assets/images/products/bench-drying-oven.jpg',
    imageAlt: 'Compact laboratory bench drying oven with digital controller',
  },
  {
    slug: 'drying-cabinet',
    name: 'Laboratory Drying Cabinet',
    range: 'moisture-drying',
    category: 'Moisture & Drying',
    tagline: 'Large-capacity drying cabinet',
    shortDescription: 'Large multi-shelf drying cabinet for higher-volume sample throughput.',
    overview:
      'Where sample volumes are higher, this large-capacity drying cabinet offers multiple wire shelves within a stainless interior, allowing many samples to be dried evenly in parallel. Castors allow the unit to be repositioned within the laboratory.',
    applications: [
      'Higher-volume batch drying of samples',
      'Moisture removal ahead of weighing, crushing or analysis',
      'General laboratory drying where capacity is required',
    ],
    image: '/assets/images/products/drying-cabinet.jpg',
    imageAlt: 'Large multi-shelf laboratory drying cabinet with the door open',
  },
  {
    slug: 'desiccator-cabinet',
    name: 'Desiccator Cabinet',
    range: 'moisture-drying',
    category: 'Moisture & Drying',
    tagline: 'Laboratory dry storage cabinet',
    shortDescription: 'Controlled dry-storage cabinet that protects prepared samples from ambient moisture.',
    overview:
      'A desiccator cabinet holds prepared samples and moisture-sensitive materials in a low-humidity environment between preparation and testing, protecting results from ambient moisture pickup. Humidity and temperature are monitored on a digital display, and the cabinet locks for secure storage.',
    applications: [
      'Dry storage of prepared samples ahead of testing',
      'Protecting moisture-sensitive materials and reference samples',
      'Supporting consistent, repeatable moisture-analysis results',
    ],
    image: '/assets/images/products/desiccator-cabinet.jpg',
    imageAlt: 'Desiccator cabinet with digital humidity and temperature display',
  },
  {
    slug: 'sample-crusher',
    name: 'Laboratory Sample Crusher',
    range: 'sample-preparation',
    category: 'Sample Preparation',
    tagline: 'Sample preparation machine',
    shortDescription: 'Reduces coal and other solid samples to a consistent particle size ahead of testing.',
    overview:
      'The sample crusher reduces incoming coal and other solid material to a consistent, manageable particle size, an essential first step before sieving, moisture analysis or further laboratory testing. Material is fed through the top hopper and discharged once crushed.',
    applications: [
      'Primary size reduction of coal and solid samples',
      'Preparing material ahead of sieving or moisture analysis',
      'Standardising sample particle size prior to testing',
    ],
    image: '/assets/images/products/sample-crusher.jpg',
    imageAlt: 'Laboratory sample crusher used in coal sample preparation',
  },
  {
    slug: 'test-sieves',
    name: 'Laboratory Test Sieves',
    range: 'sample-preparation',
    category: 'Sieving & Particle Size Analysis',
    tagline: 'Laboratory sieve set',
    shortDescription: 'Stacked stainless-steel test sieves used to grade prepared samples by particle size.',
    overview:
      'A stacked set of stainless-steel test sieves, each with a defined mesh aperture, separates a prepared sample into particle-size fractions. Sieves are typically stacked coarsest to finest and shaken as a set so material is graded in a single pass.',
    applications: [
      'Particle-size grading of crushed or prepared samples',
      'Quality control on sample preparation consistency',
      'Supporting coal and material testing procedures',
    ],
    image: '/assets/images/products/test-sieves.jpg',
    imageAlt: 'Stack of stainless-steel laboratory test sieves',
  },
  {
    slug: 'muffle-furnace',
    name: 'Muffle Furnace',
    range: 'testing-analysis',
    category: 'Testing & Analysis',
    tagline: 'High-temperature laboratory furnace',
    shortDescription: 'High-temperature furnace used for ashing and combustion-based laboratory test methods.',
    overview:
      'The muffle furnace heats samples to high temperatures within an insulated, enclosed chamber, isolated from direct flame contact. A digital controller monitors and displays chamber temperature against the programmed setpoint throughout the test.',
    applications: [
      'Ashing and high-temperature laboratory test methods',
      'Coal and material testing procedures requiring controlled heating',
      'General high-temperature laboratory processes',
    ],
    image: '/assets/images/products/muffle-furnace.jpg',
    imageAlt: 'Muffle furnace with the door open showing the heated chamber',
  },
  {
    slug: 'laboratory-analyzer-system',
    name: 'Laboratory Analyzer System',
    range: 'testing-analysis',
    category: 'Testing & Analysis',
    tagline: 'Analytical instrument system',
    shortDescription: 'Computer-controlled analytical instrument system used for laboratory sample analysis.',
    overview:
      'This analyzer system pairs a dedicated benchtop analytical instrument with a computer workstation for instrument control, data capture and reporting. As the exact analytical method has not been confirmed for this listing, it is described here in general terms rather than by a specific test function. It is one example from U-Therm\'s wider coal and energy testing range — see the full <a href="/agencies/u-therm/" style="color:var(--luxury-red);font-weight:600;">U-Therm catalogue</a> for calorimeters, proximate analysers, sulphur analysers, ash fusion and abrasive index testers, muffle furnaces and balances.',
    applications: [
      'Computer-controlled laboratory sample analysis',
      'Instrument data capture and reporting',
      'Supporting Labrite’s wider Laboratory Services testing workflow',
    ],
    image: '/assets/images/products/laboratory-analyzer-system.jpg',
    imageAlt: 'Laboratory analyzer system with computer workstation and benchtop instrument',
  },
  {
    slug: 'label-printer',
    name: 'Label / Barcode Printer',
    range: 'laboratory-support',
    category: 'Laboratory Support',
    tagline: 'Laboratory barcode printer',
    shortDescription: 'Thermal label and barcode printer supporting sample tracking and identification.',
    overview:
      'A thermal label and barcode printer supports accurate sample identification and tracking as material moves through preparation and testing, printing clear, durable labels on demand at the point of need.',
    applications: [
      'Sample identification and chain-of-custody labelling',
      'Barcode printing for laboratory tracking systems',
      'General laboratory labelling requirements',
    ],
    image: '/assets/images/products/label-printer.jpg',
    imageAlt: 'Thermal label and barcode printer producing a sample label',
  },
];

export function getProductsByRange(rangeKey) {
  return PRODUCTS.filter((p) => p.range === rangeKey);
}

export function getProduct(slug) {
  return PRODUCTS.find((p) => p.slug === slug);
}
