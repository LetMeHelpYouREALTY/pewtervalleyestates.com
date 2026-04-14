/**
 * Hyper-local SEO constants — Silverado Ranch / Pewter Valley Estates (89183).
 * Ported from legacy `seo.js` for reuse in content and future rich pages.
 */

export const SILVERADO_RANCH = {
  name: "Silverado Ranch",
  city: "Henderson",
  county: "Clark County",
  state: "Nevada",
  zips: ["89123", "89183"],
  summary:
    "Silverado Ranch is a master-planned area in the southeast Las Vegas Valley (developer American West; roots in the 1990s) with 20+ subdivisions spanning parts of Henderson and Clark County. Pewter Valley Estates is a community within Silverado Ranch (89183). Housing runs from condos and townhomes to single-family and custom estates, with mature lots and strong freeway access toward I-15 and I-215.",
  marketSnapshotIllustrative: {
    averageValueDisplay: "$476,563",
    avgPricePerSqFtDisplay: "$269",
    homesForSaleDisplay: "391",
    footnote:
      "Illustrative figures from public market overviews; inventory, prices, and $/sf change daily. Ask Dr. Jan Duffy for a current MLS snapshot on the homes you care about.",
  },
  masterPlan: {
    developer: "American West",
    era: "1990s",
    subdivisionsPlus: "20+",
    housingTypes: ["Condos", "Townhomes", "Detached single-family homes", "Custom estates"],
  },
  access: {
    freeways: ["I-15", "I-215"],
    stripMilesApprox: 10,
    positioning:
      "Central location between Henderson and Las Vegas—buyers often cite freeway access and a short drive to major retail, dining, and the Las Vegas Strip.",
  },
  priceBandsIllustrative: [
    { label: "Condos & townhomes", range: "$209,000–$529,000" },
    { label: "Single-family (incl. Spanish Mission & ranch styles, 2–5 beds)", range: "$300,000–$630,000" },
    { label: "Mid-sized estates", range: "$630,000–$1.5 million" },
    { label: "Large estates (about five- to ten-bedroom)", range: "up to about $3.75 million" },
  ],
  schoolsReference: {
    district: "Clark County School District",
    examples: ["John C. Bass Elementary School", "Charles A. Silvestri Junior High School", "Liberty High School"],
    programsNote:
      "Liberty High offers dual-enrollment coursework with Nevada State College for students on an education pathway. The University of Nevada, Reno Extension is a short drive north of much of the area—confirm programs, boundaries, and ratings with CCSD and school sites before you buy.",
  },
} as const

export const NEIGHBORHOOD_KEYWORDS = [
  "Las Vegas new homes",
  "Pewter Valley Estates",
  "Richmond American Homes Las Vegas",
  "Las Vegas real estate",
  "Nevada new construction",
  "Las Vegas home builder",
  "Summerlin new homes",
  "Henderson new homes",
  "North Las Vegas homes",
  "Las Vegas master planned community",
  "Las Vegas resort style living",
  "Las Vegas family homes",
  "Las Vegas luxury homes",
  "Las Vegas modern homes",
  "Las Vegas energy efficient homes",
  "Silverado Ranch Henderson NV",
  "Pewter Valley Estates Silverado Ranch",
  "Silverado Ranch real estate",
  "Henderson NV 89123 homes",
  "Clark County NV 89183 real estate",
  "suburban homes Henderson Las Vegas",
] as const

export const PROPERTY_FEATURES = [
  "3-5 bedrooms",
  "2-4 bathrooms",
  "2-3 car garage",
  "Open floor plans",
  "Energy efficient",
  "Smart home ready",
  "Resort-style amenities",
  "Community pool",
  "Walking trails",
  "Parks and playgrounds",
] as const
