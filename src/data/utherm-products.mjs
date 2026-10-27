// U-Therm equipment represented on the brand page. The original eight items
// (9 Oct 2026 "Use of agencies web media" selection) remain; a further round
// of manufacturer source documents (27 Oct 2026 handoff) added full technical
// data, model-variant tables and genuine product photography for several new
// equipment families, so the brand page is now a full catalogue rather than
// a capped eight-image preview. Every spec below is taken directly from the
// supplied source documents — nothing is invented. Two items (the IR sulfur
// analyzer and the calorimeter) were already part of the original eight with
// only a one-line description; the new source documents happened to cover
// the same equipment in full, so those two entries were enriched in place
// (fuller specs, a cleaner manufacturer-branded photo) rather than
// duplicated — see README for the before/after note.
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
    description: 'Crushers, pulverisers and other equipment supporting sample reduction and preparation ahead of analysis.',
  },
  {
    slug: 'high-temperature-general',
    label: 'High-Temperature and General Laboratory Equipment',
    description: 'Furnaces, drying ovens, desiccators and precision balances for general laboratory use.',
  },
];

export const UTHERM_EQUIPMENT = [
  // ---------- Coal and Energy Testing ----------
  {
    slug: 'abrasive-index-tester-for-coal',
    name: 'Abrasive Index Tester for Coal',
    group: 'coal-energy-testing',
    application: 'Measures the abrasiveness of coal and similar materials, informing equipment wear and handling considerations.',
    image: '/assets/images/agencies/u-therm/p02-c1.jpg',
    hasDetail: false,
  },
  {
    slug: 'automatic-ir-sulfur-analyzer',
    name: 'Automatic IR Sulfur Analyzer (YX-DL8802)',
    group: 'coal-energy-testing',
    application: 'Determines total sulphur content in coal, coke and petroleum products using infrared spectrum absorption, with automatic sample loading.',
    image: '/assets/images/agencies/u-therm/sulfur-analyzer-automatic-ir-yx-dl8802.webp',
    overview:
      'Applicable across electrical power, coal, commerce inspection, environmental protection, metallurgy, paper making, petrochemical and earth-probe industries, and by research institutions or quality-inspection organisations, to measure total sulphur content in coal, cinder, coke, catalyst, minerals, rock and petrochemicals. Testing follows GB/T 25214-2010 ("Determination of total sulfur in coal by infrared spectroscopy").',
    features: [
      'Automatic sample loading, testing and discarding until results are available, using the supplied feeding facility (Patent No. 2013200307699)',
      'Ultra-low-draft IR cell for reliability and precision',
      'Special gas dilution device expands the testing range without replacing the IR cell',
      'Built-in fault-tolerant diagnostics to help identify the source of a problem',
      'Separated feeding pipe and feeding pole for longer service life and easier maintenance',
      'Software can link to a laboratory management system for online data upload',
    ],
    variantColumns: ['Parameter', 'Specification'],
    variants: [
      ['Measurement range', '0.01% – 40% (expandable on request)'],
      ['Test method', 'Infrared spectrum absorption'],
      ['Sulphur measurement resolution', '0.001%'],
      ['Working furnace temperature', '1300°C'],
      ['Temperature control accuracy', '±1°C'],
      ['Sample weight', '300 ± 10 mg (coal, coke); 100 ± 10 mg (petroleum products)'],
      ['Sample feeding', 'Automatic sample sending and discarding'],
      ['Batch size', '12 samples per batch; samples can be added or replaced'],
      ['Single-sample analysis time', 'About 2 minutes'],
      ['Power', '≤4 kW, AC 220V ± 22V / 50Hz'],
      ['Dimensions', '670 × 580 × 720 mm'],
      ['Weight', '87 kg'],
    ],
    hasDetail: true,
  },
  {
    slug: 'total-sulfur-analyzer',
    name: 'Total Sulfur Analyzer (YX-DL)',
    group: 'coal-energy-testing',
    application: 'Determines sulphur content in coal, coke and related materials using a coulometry-based electrolytic cell.',
    image: '/assets/images/agencies/u-therm/sulfur-analyzer-total-yx-dl.webp',
    overview:
      'Applicable across electrical power, coal, commerce inspection, environmental protection, metallurgy, paper making, petrochemical and earth-probe industries, and by research institutions or quality-inspection organisations, to measure sulphur content in coal, cinder, coke, catalyst, minerals, rock and petrochemicals. The sample feeding device, electrical scale, vertical high-temperature cracking furnace, electrolytic cell, stirrer and gas purification system are integrated into a single housing.',
    features: [
      'Testing time around 5 minutes, automatically judged per sample; results corrected by software to be more accurate than the GB national-standard method',
      'Coulometry testing principle, shorter than Eschka or high-temperature-burn methods',
      'PID temperature control for accurate, fast temperature rise',
      'Contactless switches, overtemperature protection and electrolyte anti-backflow for safety',
      'Multi-point dynamic coefficient correction, automatically applied by software',
      'Automated temperature control, sample feeding, electrolysing and calculation, with automatic result storage and printing',
      'Software can link to a laboratory management system for online data upload',
    ],
    variantColumns: ['Parameter', 'Specification'],
    variants: [
      ['Furnace temperature', '1150°C'],
      ['Temperature controlling precision', '±2°C'],
      ['Sulphur testing resolution', '0.001%'],
      ['Sulphur testing range', '> 0.01%'],
      ['Testing time', '5 minutes per sample'],
      ['Sample weight', '45 mg – 100 mg'],
      ['Power', '≤3 kW, 220V / 50/60Hz'],
      ['Dimensions', '620 × 500 × 370 mm'],
      ['Weight', '46 kg'],
    ],
    hasDetail: true,
  },
  {
    slug: 'ash-fusion-tester',
    name: 'Ash Fusion Tester',
    group: 'coal-energy-testing',
    application: 'Assesses the fusion behaviour of coal ash under controlled heating.',
    image: '/assets/images/agencies/u-therm/p02-c3.jpg',
    hasDetail: false,
  },
  {
    slug: 'full-automatic-calorimeter',
    name: 'Automatic Calorimeter (YX-ZR)',
    group: 'coal-energy-testing',
    application: 'Determines the calorific value of coal and similar solid fuels to ASTM D240, ASTM D5865 and ISO 1928.',
    image: '/assets/images/agencies/u-therm/calorimeter-automatic-yx-zr.webp',
    overview:
      'Applicable across electrical power, coal, papermaking, petrochemical, cement, farming and medical research, and for instruction, to measure the calorific value of combustible materials. Conforms to ASTM D240, ASTM D5865 and ISO 1928.',
    features: [
      'CE certificated',
      'Semi-conductor water refrigeration system automatically balances the circulation system from the previous reading, keeping bucket water temperature constant for continuous testing',
      'No manual water measurement or temperature adjustment required between tests',
      'Advanced small oxygen-filling instrument with a low malfunction rate',
      'Probe-type electronic measuring cup for the inner-bucket water, with a repetition error of less than 0.5 g',
      'Auto-stop, auto-draining joints for changing bucket water',
      'USB control — one computer can control 1–4 calorimeter buckets or other instruments',
      'Full Windows support, with network data sharing to an electronic scale',
    ],
    variantColumns: ['Parameter', 'Specification'],
    variants: [
      ['Calorimeter type', 'Isoperibol'],
      ['Temperature range', '5°C – 40°C'],
      ['Temperature resolution', '0.0001°C'],
      ['Precision (Precision Mode)', 'RSD ≤ 0.1%'],
      ['Testing time (Precision Mode)', '8 minutes'],
      ['Power supply', '220V (110V custom-made), 50/60Hz'],
      ['Power', '≤1.5 kW'],
      ['Dimensions', '540 × 420 × 420 mm'],
      ['Weight', '45 kg'],
    ],
    hasDetail: true,
  },
  {
    slug: 'automatic-proximate-analyzer-tga',
    name: 'Automatic Proximate Analyzer (TGA)',
    group: 'coal-energy-testing',
    application: 'Performs proximate analysis, moisture, volatile matter, ash and fixed carbon, using thermogravimetric methods.',
    image: '/assets/images/agencies/u-therm/p06-c3.jpg',
    hasDetail: false,
  },

  // ---------- Sample Preparation and Laboratory Support ----------
  {
    slug: 'wet-coal-hammer-crusher',
    name: 'Wet Coal Hammer Crusher',
    group: 'sample-preparation',
    application: 'Reduces coal samples to a consistent particle size ahead of analysis.',
    image: '/assets/images/agencies/u-therm/p36-c3.jpg',
    hasDetail: false,
  },
  {
    slug: 'sealed-hammer-cutter-crusher',
    name: 'Sealed Hammer Cutter Crusher (With Splitting/Reduction Facility)',
    group: 'sample-preparation',
    application: 'A totally sealed, dust-free crusher for coal and similar materials, with tungsten-carbide-coated hammer cutters and an adjustable stainless-steel reduction/splitting stage.',
    image: '/assets/images/agencies/u-therm/crusher-sealed-hammer-cutter.webp',
    overview:
      'Developed to GB474 ("Preparation method of coal sample") and GB/T 18666 ("Commercial coal quality inspection and acceptance method"), for coal, electricity, metallurgy, chemical engineering, environmental protection, geology and scientific research applications.',
    features: [
      'Totally sealed, dust-free operation',
      'Crushing cavity in wear-resistant steel, protecting the sample from contamination and overheating',
      'Ni-WC35 nickel-based tungsten-carbide-coated hammer cutters, for high-strength and high-hardness materials such as coke, metal lump ore and pellets',
      'Symmetrical, cambered hammer design for a longer service life',
      'Crushes the full material section — no dead-end deposits in the cavity',
      'Classical reduction stage in adjustable stainless steel; high-moisture coal will not plug the system',
      'Rapid crushing, mixing and separation without moisture loss',
      'Convenient to operate, maintain and clean, with low operating noise',
      'All driving components have protective guarding to production safety requirements',
    ],
    variantColumns: ['Model', 'Feeding size', 'Output size', 'Reduction rate', 'Productivity', 'Motor power', 'Weight', 'Dimensions'],
    variants: [
      ['CSI-DS150', '≤150 mm', '<13, <6 (adjustable)', '1/2 – 1/8 (adjustable)', '3000 – 1800 kg/h', '5.5 kW + 0.75 kW', '550 kg', '1300 × 910 × 1650 mm'],
      ['CSI-DS80', '≤80 mm', '<6, <3 (adjustable)', '1/2 – 1/8 (adjustable)', '1800 – 1200 kg/h', '4 kW + 0.75 kW', '350 kg', '1000 × 850 × 1350 mm'],
    ],
    note: 'Rotor form: Ni-WC35 nickel-based tungsten-carbide-coated hammer cutter (both models). Working power: three-phase 380V (both models).',
    hasDetail: true,
  },
  {
    slug: 'sealed-hammer-crusher',
    name: 'Sealed Hammer Crusher (With Splitting/Reduction Facility)',
    group: 'sample-preparation',
    application: 'A totally sealed hammer crusher with full-width hammerheads and a four-series reduction stage, developed to the GB474 and GB/T 18666 coal-sampling standards.',
    image: '/assets/images/agencies/u-therm/crusher-sealed-hammer.webp',
    overview:
      'Improved on established sampling-equipment technology; tested to meet sampling-precision requirements with no deviation. Used across coal, power, metallurgical, manufacturing, environmental, geological and scientific-research departments.',
    features: [
      'Totally sealed, dust-free operation',
      'Crushing cavity in ZG45 steel, wear-resistant and protecting the sample from contamination and overheating',
      'Full-width hammerheads crush the complete material section — no dead-end deposits',
      'Classical four-series reduction stage in adjustable stainless steel; high-moisture coal will not plug the system',
      'Rapid crushing, mixing and separation without moisture loss',
      'Convenient to operate, maintain and clean, with low operating noise',
      'Bottom castors for easy repositioning',
      'All driving components have protective guarding to production safety requirements',
    ],
    variantColumns: ['Model', 'Feeding size', 'Output size', 'Reduction rate', 'Productivity', 'Motor power', 'Weight', 'Dimensions'],
    variants: [
      ['CSI-250×360B', '≤150 mm', '<13, <6, <3 mm (adjustable)', '1/2 – 1/8 (adjustable)', '1800 – 1200 kg/h', '4 kW + 0.75 kW', '380 kg', '1200 × 820 × 1470 mm'],
      ['CSI-180×150', '≤50 mm', '<6, <3, <1 mm (adjustable)', '1/2 – 1/8 (adjustable)', '600 – 300 kg/h', '1.5 kW + 0.75 kW', '260 kg', '770 × 800 × 1400 mm'],
    ],
    note: 'Working power: three-phase 380V (both models).',
    hasDetail: true,
  },
  {
    slug: 'sealed-jaw-crusher',
    name: 'Sealed Jaw Crusher (With Splitting/Reduction Facility)',
    group: 'sample-preparation',
    application: 'A totally sealed jaw crusher that completes crushing and reduction in one continuous, sealed operation for high-hardness or friable materials.',
    image: '/assets/images/agencies/u-therm/crusher-sealed-jaw.webp',
    overview:
      'Developed to GB474 and GB/T 18666, tested to meet sampling-precision requirements with no systematic deviation. Used across coal, electricity, metallurgy, chemical engineering, environmental protection, geology and scientific research applications.',
    features: [
      'Suited to materials of high broken hardness or friability',
      'Continuously completes crushing and reduction, avoiding manual-operation error',
      'Produces a typical, representative sample after reduction',
      'Totally sealed, dust-free operation',
      'Guarding on all moving parts, to safety and production requirements',
      'Works simply placed level on the ground — no fixing required',
    ],
    variantColumns: ['Model', 'Feeding size', 'Output size', 'Reduction rate', 'Productivity', 'Motor power', 'Weight', 'Dimensions'],
    variants: [
      ['CSI-S100×60', '≤60 mm', '≤13 – 3 mm', '1/2 – 1/8 (adjustable)', '200 – 500 kg/h', '1.5 kW + 0.75 kW', '300 kg', '950 × 550 × 1100 mm'],
      ['CSI-S150×125', '≤100 mm', '≤13 – 38 mm', '1/2 – 1/8 (adjustable)', '500 – 2000 kg/h', '4 kW + 0.75 kW', '450 kg', '1000 × 800 × 1400 mm'],
    ],
    hasDetail: true,
  },
  {
    slug: 'jaw-crusher',
    name: 'Jaw Crusher',
    group: 'sample-preparation',
    application: 'A conventional jaw crusher with feeding and output hoppers, for sample preparation of coal or other medium-intensity materials.',
    image: '/assets/images/agencies/u-therm/crusher-jaw-crusher.webp',
    overview:
      'Fitted with a feeding hopper so material is not spilt or lost, and an output hopper; output particle size is regulated via the output-mouth width. Reasonable structure, reliable performance, convenient adjustment, stable operation, low vibration and low noise. Used across coal, power, metallurgical, manufacturing, environmental, geological and scientific-research departments.',
    variantColumns: ['Model', 'Feeding mouth', 'Feeding size', 'Output size', 'Productivity', 'Motor', 'Weight', 'Dimensions'],
    variants: [
      ['CSI-100×60', '100 × 60 mm', '≤60 mm', '<3 – 13 mm (adjustable)', '200 – 500 kg/h', '1.5 kW', '130 kg', '700 × 380 × 580 mm'],
      ['CSI-150×125', '150 × 125 mm', '≤100 mm', '<10 – 40 mm (adjustable)', '500 – 2000 kg/h', '4 kW', '380 kg', '1000 × 500 × 850 mm'],
      ['CSI-150×250', '150 × 250 mm', '≤125 mm', '<10 – 40 mm (adjustable)', '1000 – 3000 kg/h', '5.5 kW', '500 kg', '1460 × 760 × 980 mm'],
      ['CSI-250×400', '250 × 400 mm', '≤210 mm', '<20 – 60 mm (adjustable)', '5 – 20 t/h', '15 kW', '3000 kg', '2300 × 1300 × 1300 mm'],
    ],
    note: 'Working power: three-phase 380V (all models).',
    hasDetail: true,
  },
  {
    slug: 'fast-compaction-sample-pulverizer',
    name: 'Fast Compaction Sample Pulverizer (Ring / Swing Mills)',
    group: 'sample-preparation',
    application: 'Smashes and grinds metal and non-metallic minerals to a uniform, fine particle size, ready for direct analysis and testing.',
    image: '/assets/images/agencies/u-therm/crusher-fast-compaction-pulverizer.webp',
    overview:
      'Specialised equipment for smashing and grinding metal and non-metallic minerals of a given hardness to a uniform, fine particle size, after which the sample can be analysed and tested directly.',
    features: [
      'Fast compaction device compresses the material hopper quickly, safely and reliably (CSI-F100A/B, F200A/B, F400A/B)',
      'Leak-proof grinding-hopper structure for dry or wet-process grinding, with no sample loss',
      'Fully sealed, electrostatically sprayed housing',
      'Digital display controls grinding time; purpose-made motor for a longer service life',
      'Vibration-absorbing door mat at the base — no fixing required',
      'The B-suffix models (F100B, F200B, F400B) include an industrial vacuum cleaner for efficient, low-noise dust removal',
    ],
    variantColumns: ['Model', 'Loaders', 'Sample capacity', 'Feed size', 'Output', 'Grinding period', 'Motor power', 'Hopper material'],
    variants: [
      ['CSI-F100A / F100B', '1', '150 g', '≤20 mm', '80–200 mesh', '< 2 min', '1.1 kW', 'High-manganese steel, chrome steel or tungsten carbide (optional)'],
      ['CSI-F200A / F200B', '2', '2 × 150 g', '≤20 mm', '80–200 mesh', '< 2 min', '1.1 kW', 'High-manganese steel, chrome steel or tungsten carbide (optional)'],
      ['CSI-F400A / F400B', '1', '400 g', '≤20 mm', '80–200 mesh', '< 2 min', '1.1 kW', 'High-manganese steel, chrome steel or tungsten carbide (optional)'],
    ],
    note: 'Power supply: 380V (all models). Dimensions: 570 × 520 × 890 mm (F100/F200 series), 590 × 670 × 970 mm (F400 series).',
    hasDetail: true,
  },
  {
    slug: 'electromagnetic-pulverisor',
    name: 'Electromagnetic Pulverisor (DF-4 / DF-3)',
    group: 'sample-preparation',
    application: 'An electromagnetic-vibration sample grinder that drives the vibrating tube directly (3,000 times/min) for fast, compact, low-noise, dust-free sample preparation.',
    image: '/assets/images/agencies/u-therm/electromagnetic-pulverisor.webp',
    overview:
      'Unlike traditional motor-driven sample-preparation grinders (disc grinders, eccentric vibration grinders), which have many transmission parts, a complex structure and generate noise and dust, the electromagnetic sample grinder operates on the theory of electromagnetic vibration, driving the vibrating tube directly to grind the material. It can replace various sample-preparation grinders and mortars for quickly preparing and analysing samples, and is used in laboratories across mining, building materials, cement, metallurgy, chemical, coal, food and other industries.',
    features: [
      'High efficiency, small size, light weight, no noise, no dust',
      'DF-4 (general type) handles samples of about 40–80 g per the national standard, 60 g recommended',
      'DF-3 (special/smaller type) handles 0–20 g per load, for smaller specimen quantities',
      'Grinding period of 0–5 minutes, typically no more than 2 minutes',
      'Material cups are matched to the sample type and do not need cleaning between grinds of the same specialised sample',
    ],
    variantColumns: ['Model', 'Sample load', 'Weight', 'Volume'],
    variants: [
      ['DF-4 (general type)', '40–80 g (60 g typical)', '18 kg', '22 × 25 × 25 cm'],
      ['DF-3 (special type)', '0–20 g', '7 kg', '18 × 18 × 16 cm'],
    ],
    note: 'Supply voltage 220V ± 10V, current 6A. Feeding material grading ≤15 mm; discharge grading –200 mesh (chemical analysis can proceed after screening). Source document heading reads "DF-4DF-4" — flagged for editorial confirmation, presented here as DF-4 / DF-3.',
    hasDetail: true,
  },

  // ---------- High-Temperature and General Laboratory Equipment ----------
  {
    slug: 'microwave-muffle-furnace',
    name: 'Microwave Muffle Furnace',
    group: 'high-temperature-general',
    application: 'A high-temperature furnace used for ashing and other high-temperature laboratory methods.',
    image: '/assets/images/agencies/u-therm/p08-c1.jpg',
    hasDetail: false,
  },
  {
    slug: 'wb-series-analytical-balance',
    name: 'WB Series 0.1 mg Analytical Balance',
    group: 'high-temperature-general',
    application: 'A precision analytical balance for laboratory mass measurement.',
    image: '/assets/images/agencies/u-therm/p14-c1.jpg',
    hasDetail: false,
  },
  {
    slug: 'program-control-chamber-electric-furnace',
    name: 'Program Control Chamber Electric Furnace (SXL range)',
    group: 'high-temperature-general',
    application: 'A 30-section programmable chamber furnace for element analysis, quenching/annealing/tempering of small steel parts, and high-temperature heating of metal and ceramics.',
    image: '/assets/images/agencies/u-therm/furnace-program-control-chamber.webp',
    overview:
      'Used across industrial mining enterprises, universities and scientific research units for element analysis; heating for the quenching, annealing and tempering of small steel pieces; and high-temperature heating such as the agglomeration, melting and analysis of metal and ceramic materials. The furnace door interior and body panel are in high-quality stainless steel for durability.',
    features: [
      '30-section programmable microcomputer control, able to set the rate of temperature rise, hold temperature and a multi-wave temperature curve',
      'Optional computer connection for monitoring and recording temperature data, so a test can be repeated exactly',
      'Electric-shock and leakage protection, plus two-level automatic overheat protection, for operator and instrument safety',
    ],
    variantColumns: ['Model', 'Working chamber (mm)', 'Rated temperature', 'Precision', 'Power', 'Voltage'],
    variants: [
      ['SXL-1002', '200 × 120 × 80', '1000°C', '±1°C', '2.5 kW', '220V'],
      ['SXL-1008', '300 × 200 × 120', '1000°C', '±1°C', '4 kW', '220V'],
      ['SXL-1016', '400 × 250 × 160', '1000°C', '±1°C', '8 kW', '380V'],
      ['SXL-1030', '500 × 300 × 200', '1000°C', '±1°C', '12 kW', '380V'],
      ['SXL-1202', '200 × 120 × 80', '1200°C', '±1°C', '2.5 kW', '220V'],
      ['SXL-1208', '300 × 200 × 120', '1200°C', '±1°C', '5 kW', '220V'],
      ['SXL-1216', '400 × 250 × 160', '1200°C', '±1°C', '10 kW', '380V'],
      ['SXL-1304', '250 × 150 × 100', '1300°C', '±1°C', '6 kW', '380V'],
      ['SXL-1313', '400 × 200 × 160', '1300°C', '±1°C', '10 kW', '380V'],
      ['SXL-1616', '200 × 150 × 150', '1600°C', '±1°C', '5 kW', '220V'],
    ],
    note: 'Power supply frequency: 50Hz (all models).',
    hasDetail: true,
  },
  {
    slug: 'mf1100-box-type-furnace',
    name: 'MF1100 Series Box-Type High-Temperature Furnace',
    group: 'high-temperature-general',
    application: 'A double-shell, ceramic-fibre box furnace with intelligent multi-stage program control, for electronic/structural ceramics, glass sintering, powder-metallurgy sintering and metal-parts heat treatment.',
    image: '/assets/images/agencies/u-therm/furnace-mf1100-box-type.webp',
    overview:
      'Rated temperatures of 1100°C, 1400°C, 1600°C and 1700°C are available across the wider MF1100 range (heating elements vary by rated temperature), suited to electronic and high-temperature structural ceramics, glass sintering and precision annealing, crystal precision annealing, ceramic glaze preparation, powder-metallurgy sintering, nanomaterials, and metal-parts quenching and related rapid-heating heat-treatment processes. Built using an international-process ceramic-fibre board furnace construction with a multistage intelligent program controller for the full high-temperature process.',
    features: [
      'Double-layer shell structure with fans arranged between the shells for fast temperature rise and a low furnace-shell surface temperature',
      'Hearth lined with high-quality imported alumina polycrystalline fibre vacuum-adsorption material (50% energy saving); Cantal resistance-wire heating element',
      'Artificial-intelligence temperature control with PID regulation, fuzzy control and self-tuning; 1°C display precision, ±5°C temperature stability, heating rate adjustable from 1–20°C/min',
    ],
    variantColumns: ['Model', 'Rated heating power', 'Voltage', 'Workroom size (D×W×H)', 'Highest / working temperature', 'Heating rate'],
    variants: [
      ['MF1100-30', '4 kW', '220V / 50–60Hz', '300 × 200 × 200 mm', '1100°C / 1000°C', '≤30°C/min'],
      ['MF1100-40', '9 kW', '220V / 50–60Hz', '400 × 300 × 300 mm', '1100°C / 1000°C', '≤30°C/min'],
      ['MF1100-50', '18 kW', '380V / 50–60Hz', '500 × 400 × 400 mm', '1100°C / 1000°C', '≤30°C/min'],
    ],
    note: 'Temperature uniformity ≤±5°C and temperature-control fluctuation ±1°C on all models; intelligent program fuzzy PID control throughout; resistance-wire (Cantal) heating element.',
    hasDetail: true,
  },
  {
    slug: 'stand-drying-air-circulation-oven',
    name: 'Stand-Drying and Air Circulation Oven (DGG Series)',
    group: 'high-temperature-general',
    application: 'An electrothermal, constant-temperature air-circulation drying oven for drying, curing, baking, wax melting and sterilising.',
    image: '/assets/images/agencies/u-therm/drying-oven-stand-air-circulation.webp',
    overview:
      'For laboratories in scientific research, specialist universities and colleges, and industrial and mining enterprises, covering testing and production applications including drying, solidifying, baking, wax melting and sterilising.',
    features: [
      'Body in high-quality cold-rolled steel plate with electrostatic powder spraying, for a hard, rust-resistant finish',
      'Working chamber in high-quality stainless steel sheet with rounded corners for easy cleaning',
      'Superfine glass-wool thermal insulation between the body and working chamber, for stable, accurate internal temperature',
      'Double-layer tempered-glass observation window, allowing the material to be seen clearly while retaining insulation',
      'Hot-air circulation channel for even temperature distribution and faster temperature rise, with an adjustable air outlet (connectable to ducting for odorous or toxic gases)',
      'Microcomputer intelligent digital temperature control with industrial PID self-adjustment and a four-digit double-LED display',
    ],
    variantColumns: ['Type', 'Temperature range', 'Working chamber (mm)'],
    variants: [
      ['DGG-9070A', 'Room temp +10 – 250°C', '400 × 350 × 500'],
      ['DGG-9140A', 'Room temp +10 – 250°C', '450 × 550 × 550'],
      ['DGG-9240A', 'Room temp +10 – 250°C', '500 × 600 × 750'],
      ['DGG-9420A', 'Room temp +10 – 250°C', '600 × 550 × 1300'],
      ['DGG-9620A', 'Room temp +10 – 250°C', '800 × 600 × 1300'],
      ['DGG-9920A', 'Room temp +10 – 250°C', '1000 × 600 × 1600'],
      ['DGG-9070B', 'Room temp +10 – 300°C', '400 × 350 × 500'],
      ['DGG-9140B', 'Room temp +10 – 300°C', '450 × 550 × 550'],
      ['DGG-9240B', 'Room temp +10 – 300°C', '500 × 600 × 750'],
      ['DGG-9420B', 'Room temp +10 – 300°C', '600 × 550 × 1300'],
      ['DGG-9620B', 'Room temp +10 – 300°C', '800 × 600 × 1300'],
    ],
    hasDetail: true,
  },
  {
    slug: 'automatic-program-control-oven',
    name: 'Automatic Program Control Oven (DGG-AD / BD Series)',
    group: 'high-temperature-general',
    application: 'A dynamic, program-controlled drying oven with intelligent control, ±1°C accuracy and multi-band programming.',
    image: '/assets/images/agencies/u-therm/drying-oven-automatic-program-control.webp',
    overview:
      'Builds on the Stand-Drying and Air Circulation Oven with an intelligent dynamic program-control system: microcomputer intelligent temperature control with self-tuning PID, double-glass observation windows, adjustable inlet/outlet air conditioning, a stainless-steel mirror interior and a timing controller.',
    variantColumns: ['Type', 'Temperature range', 'Working chamber (mm)'],
    variants: [
      ['DGG-9023AD', 'Room temp +10 – 250°C', '300 × 300 × 270'],
      ['DGG-9123AD', 'Room temp +10 – 250°C', '550 × 350 × 550'],
      ['DGG-9203AD', 'Room temp +10 – 250°C', '600 × 550 × 600'],
      ['DGG-9070AD', 'Room temp +10 – 250°C', '400 × 350 × 500'],
      ['DGG-9140AD', 'Room temp +10 – 250°C', '450 × 550 × 550'],
      ['DGG-9240AD', 'Room temp +10 – 250°C', '500 × 600 × 750'],
      ['DGG-9420AD', 'Room temp +10 – 250°C', '600 × 550 × 1300'],
      ['DGG-9620AD', 'Room temp +10 – 250°C', '800 × 600 × 1300'],
      ['DGG-9920AD', 'Room temp +10 – 250°C', '1000 × 600 × 1600'],
      ['DGG-9070BD', 'Room temp +10 – 300°C', '400 × 350 × 500'],
      ['DGG-9140BD', 'Room temp +10 – 300°C', '450 × 550 × 550'],
      ['DGG-9240BD', 'Room temp +10 – 300°C', '500 × 600 × 750'],
      ['DGG-9420BD', 'Room temp +10 – 300°C', '600 × 550 × 1300'],
      ['DGG-9620BD', 'Room temp +10 – 300°C', '800 × 600 × 1300'],
    ],
    hasDetail: true,
  },
  {
    slug: 'desiccator-ab-40em',
    name: 'Desiccator (AB-40EM)',
    group: 'high-temperature-general',
    application: 'An electronic dry-storage cabinet with condensing dehumidification and automatic humidity control, for protecting moisture-sensitive samples and equipment between use.',
    image: '/assets/images/agencies/u-therm/desiccator-ab-40em.webp',
    overview:
      'Uses a condensing drying system — the cold/hot characteristics of a condensing electronic chip draw humidity from the cabinet onto a cooling plate, where it is absorbed by a hygroscopic material and evaporated to achieve the drying effect.',
    features: [
      'Automatic humidity control, adjusting to a set target humidity',
      'Digital humidity display on the upper part of the cabinet',
      'Sliding push-pull partitions, adjustable in height',
      'Tempered-glass, keyed door',
      'Interior LED lighting',
    ],
    hasDetail: true,
  },
];

export function getUThermByGroup(groupSlug) {
  return UTHERM_EQUIPMENT.filter((e) => e.group === groupSlug);
}

export function getUThermProduct(slug) {
  return UTHERM_EQUIPMENT.find((e) => e.slug === slug);
}
