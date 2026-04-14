import { SITE_CONFIG } from "./site-contact"

export type MarketingPage = {
  title: string
  description: string
  h1: string
  paragraphs: string[]
}

/** Path keys without leading slash (e.g. `silverado-ranch/history`). */
export const MARKETING_PAGES: Record<string, MarketingPage> = {
  "homes-for-sale": {
    title: `Homes for Sale | ${SITE_CONFIG.businessName}`,
    description: `Browse MLS-backed homes for sale in Silverado Ranch, Pewter Valley Estates, and Southwest Las Vegas (89183). Expert buyer guidance from Dr. Jan Duffy. Call ${SITE_CONFIG.phone}.`,
    h1: "Homes for Sale in Silverado Ranch & Pewter Valley Estates",
    paragraphs: [
      "Use the live search tools on this site to explore current inventory, then align tours to your commute, schools, and lifestyle priorities.",
      "Dr. Jan Duffy provides buyer representation from search through closing, including negotiation support and neighborhood context across Henderson and Clark County.",
    ],
  },
  "buy-a-home": {
    title: `Buyer’s Guide | ${SITE_CONFIG.businessName}`,
    description: `Step-by-step buyer guidance for Silverado Ranch and Southwest Las Vegas—including Pewter Valley Estates (89183). Call ${SITE_CONFIG.phone}.`,
    h1: "Buy a Home in Southwest Las Vegas with Confidence",
    paragraphs: [
      "Buying a home is easier when you understand financing timelines, inspections, and how offers are evaluated in a competitive resale market.",
      "Dr. Jan Duffy helps you translate MLS data into a practical plan: neighborhoods, property condition, and pricing strategy aligned to your goals.",
    ],
  },
  "buyer-checklist": {
    title: `Buyer Checklist | ${SITE_CONFIG.businessName}`,
    description: `A practical buyer checklist for Las Vegas and Henderson—including Silverado Ranch and Pewter Valley Estates. Questions? Call ${SITE_CONFIG.phone}.`,
    h1: "Home Buyer Checklist",
    paragraphs: [
      "Use this page as a lightweight roadmap: budget, pre-approval, search criteria, tours, offer strategy, due diligence, and closing preparation.",
      "If you want a personalized checklist for Pewter Valley Estates or nearby pockets, reach out for a short consultation.",
    ],
  },
  listings: {
    title: `All Listings | ${SITE_CONFIG.businessName}`,
    description: `View listings and market context for Silverado Ranch, Pewter Valley Estates, and surrounding Las Vegas communities. Call ${SITE_CONFIG.phone}.`,
    h1: "Browse Listings",
    paragraphs: [
      "This hub connects you to MLS-driven search while keeping local context for Silverado Ranch and the broader Southwest Las Vegas market.",
      "For a curated short list based on your must-haves, contact Dr. Jan Duffy for a buyer strategy session.",
    ],
  },
  "investment-properties": {
    title: `Investment Properties | ${SITE_CONFIG.businessName}`,
    description: `Investment real estate in Las Vegas and Henderson—including Silverado Ranch and resale opportunities near Pewter Valley Estates. Call ${SITE_CONFIG.phone}.`,
    h1: "Investment Properties in Las Vegas & Henderson",
    paragraphs: [
      "Investors benefit from clear rent comps, HOA constraints, and realistic renovation timelines—especially in established neighborhoods with stable demand drivers.",
      "Dr. Jan Duffy can help you compare scenarios and connect you with trusted local vendors when needed. This is not tax or legal advice; consult licensed professionals for those topics.",
    ],
  },
  "sell-your-home": {
    title: `Sell Your Home | ${SITE_CONFIG.businessName}`,
    description: `Sell your Silverado Ranch or Southwest Las Vegas home with a pricing and marketing plan aligned to today’s buyer behavior. Call ${SITE_CONFIG.phone}.`,
    h1: "Sell Your Home with a Clear Plan",
    paragraphs: [
      "Selling starts with accurate pricing, strong presentation, and a marketing plan designed for how buyers search online.",
      "Dr. Jan Duffy supports sellers with preparation guidance, listing strategy, negotiation, and a communication cadence you can count on.",
    ],
  },
  "home-valuation": {
    title: `Free Home Valuation | ${SITE_CONFIG.businessName}`,
    description: `Request a home valuation for Silverado Ranch, Pewter Valley Estates, and Southwest Las Vegas. Call ${SITE_CONFIG.phone}.`,
    h1: "Home Valuation Request",
    paragraphs: [
      "A valuation should combine recent comparable sales, current competition, and the specifics that make your home stand out.",
      "Share a few details and Dr. Jan Duffy will follow up with a thoughtful range and next steps—without pressure.",
    ],
  },
  "market-analysis": {
    title: `Market Analysis | ${SITE_CONFIG.businessName}`,
    description: `Neighborhood-level market context for Silverado Ranch, Pewter Valley Estates, and Southwest Las Vegas. Call ${SITE_CONFIG.phone}.`,
    h1: "Local Market Analysis",
    paragraphs: [
      "Market analysis is most useful when it connects trends to your exact segment: price band, floor plan, and condition.",
      "Use this page as a starting point, then request a tailored snapshot for your address and timeline.",
    ],
  },
  "selling-checklist": {
    title: `Selling Checklist | ${SITE_CONFIG.businessName}`,
    description: `A seller checklist for Las Vegas and Henderson—including Silverado Ranch and Pewter Valley Estates. Call ${SITE_CONFIG.phone}.`,
    h1: "Home Selling Checklist",
    paragraphs: [
      "From pre-list repairs to disclosure preparation, a checklist keeps the process organized and reduces surprises.",
      "If you want a customized timeline for your property, reach out to align photography, listing date, and showing strategy.",
    ],
  },
  neighborhood: {
    title: `Pewter Valley Estates Neighborhood | ${SITE_CONFIG.businessName}`,
    description: `Neighborhood overview for Pewter Valley Estates within Silverado Ranch—89183 ranch-style resale homes near Pyle Avenue & S Rancho Destino Rd. Call ${SITE_CONFIG.phone}.`,
    h1: "Pewter Valley Estates Neighborhood Overview",
    paragraphs: [
      "Pewter Valley Estates is a community within Silverado Ranch, known for ranch-style homes and a quiet residential feel with convenient access to major corridors.",
      "This page highlights what buyers and sellers should know about location, typical product, and how to search effectively in the resale market.",
    ],
  },
  "southwest-las-vegas": {
    title: `Southwest Las Vegas | ${SITE_CONFIG.businessName}`,
    description: `Southwest Las Vegas real estate context—including Silverado Ranch and zip code 89183. Local guidance from Dr. Jan Duffy. Call ${SITE_CONFIG.phone}.`,
    h1: "Southwest Las Vegas Real Estate",
    paragraphs: [
      "Southwest Las Vegas includes a mix of established neighborhoods, newer pockets, and strong commute access depending on your daily route.",
      "If you are comparing areas, Dr. Jan Duffy can help you weigh tradeoffs using real listings—not generic market clichés.",
    ],
  },
  "silverado-ranch": {
    title: `Silverado Ranch (Henderson & Clark County) | ${SITE_CONFIG.businessName}`,
    description: `Silverado Ranch area guide: Pewter Valley Estates sits within Silverado Ranch in Southwest Las Vegas (89183). Call ${SITE_CONFIG.phone}.`,
    h1: "Silverado Ranch Area Guide",
    paragraphs: [
      "Silverado Ranch spans parts of Henderson and southeast Clark County, with multiple zip codes and a wide range of housing styles.",
      "Pewter Valley Estates is a community within Silverado Ranch—use this page for area context, then dive into neighborhood-specific pages for details.",
    ],
  },
  "silverado-ranch/history": {
    title: `Silverado Ranch History | ${SITE_CONFIG.businessName}`,
    description: `History and development context for Silverado Ranch—including Pewter Valley Estates and surrounding pockets. Call ${SITE_CONFIG.phone}.`,
    h1: "Silverado Ranch History",
    paragraphs: [
      "Understanding how a community evolved helps buyers interpret HOA structures, builder patterns, and typical maintenance profiles.",
      "For sourcing specifics on your target tract, ask Dr. Jan Duffy for MLS-backed details tied to your search.",
    ],
  },
  "silverado-ranch/getting-around": {
    title: `Getting Around Silverado Ranch | ${SITE_CONFIG.businessName}`,
    description: `Commute and mobility notes for Silverado Ranch and nearby Southwest Las Vegas neighborhoods—including 89183. Call ${SITE_CONFIG.phone}.`,
    h1: "Getting Around Silverado Ranch",
    paragraphs: [
      "Practical commuting depends on your work location, school routes, and the time of day you travel most often.",
      "Use this overview as a conversation starter—then validate drive times for your exact schedule.",
    ],
  },
  "silverado-ranch/attractions": {
    title: `Silverado Ranch Attractions | ${SITE_CONFIG.businessName}`,
    description: `Parks, dining, and recreation near Silverado Ranch and Pewter Valley Estates—Southwest Las Vegas. Call ${SITE_CONFIG.phone}.`,
    h1: "Things to Do Near Silverado Ranch",
    paragraphs: [
      "Local parks and recreation options can matter as much as the home itself—especially for families prioritizing outdoor space and weekend routines.",
      "Ask Dr. Jan Duffy for a neighborhood tour plan that matches your lifestyle checklist.",
    ],
  },
  "pewter-valley-estates/amenities": {
    title: `Pewter Valley Estates Amenities | ${SITE_CONFIG.businessName}`,
    description: `Amenities and lifestyle context for Pewter Valley Estates—Silverado Ranch / Southwest Las Vegas (89183). Call ${SITE_CONFIG.phone}.`,
    h1: "Pewter Valley Estates Amenities",
    paragraphs: [
      "Community amenities vary by tract and HOA—confirm what applies to a specific address during due diligence.",
      "Dr. Jan Duffy can help you compare homes with a consistent checklist so you are evaluating apples-to-apples.",
    ],
  },
  "neighborhood-guide": {
    title: `Neighborhood Guide | ${SITE_CONFIG.businessName}`,
    description: `Neighborhood guide for Silverado Ranch, Pewter Valley Estates, and Southwest Las Vegas. Call ${SITE_CONFIG.phone}.`,
    h1: "Neighborhood Guide",
    paragraphs: [
      "Choosing a neighborhood is about fit: schools, commute, daily conveniences, and the home styles available in your budget.",
      "Start with the hubs on this site, then request a curated short list based on your non‑negotiables.",
    ],
  },
  photos: {
    title: `Community Photos | ${SITE_CONFIG.businessName}`,
    description: `Photo gallery and community visuals for Pewter Valley Estates and Silverado Ranch—Southwest Las Vegas. Call ${SITE_CONFIG.phone}.`,
    h1: "Community Photos",
    paragraphs: [
      "Photos help you understand street character, landscaping, and the overall feel of a community—especially when you are relocating from out of town.",
      "For the most current view of a property, schedule a showing and confirm details in person.",
    ],
  },
  "las-vegas-relocation-guide": {
    title: `Las Vegas Relocation Guide | ${SITE_CONFIG.businessName}`,
    description: `Relocation tips for moving to Las Vegas and Henderson—including Silverado Ranch and Pewter Valley Estates. Call ${SITE_CONFIG.phone}.`,
    h1: "Las Vegas Relocation Guide",
    paragraphs: [
      "Relocation works best with a timeline: financing, home search, inspections, and closing aligned to your move date.",
      "Dr. Jan Duffy helps relocating buyers narrow neighborhoods quickly using real listings and honest local context.",
    ],
  },
  about: {
    title: `About Dr. Jan Duffy | ${SITE_CONFIG.businessName}`,
    description: `About Dr. Jan Duffy—Silverado Ranch, Henderson, and Las Vegas Valley real estate, including Pewter Valley Estates. Call ${SITE_CONFIG.phone}.`,
    h1: "About Dr. Jan Duffy",
    paragraphs: [
      "Dr. Jan Duffy focuses on clear communication, neighborhood-level expertise, and a process that keeps you informed at every step.",
      "Whether you are buying or selling, you deserve representation that respects your goals and timeline.",
    ],
  },
  "richmond-demo": {
    title: `Richmond American Homes | ${SITE_CONFIG.businessName}`,
    description: `Richmond American Homes context for Pewter Valley Estates—resale-focused guidance in Silverado Ranch / 89183. Call ${SITE_CONFIG.phone}.`,
    h1: "Richmond American Homes in Pewter Valley Estates",
    paragraphs: [
      "Pewter Valley Estates includes Richmond American product that is now primarily resale-driven.",
      "If you are comparing similar floor plans, ask for a targeted comp analysis tied to condition, upgrades, and lot variables.",
    ],
  },
  "dr-jan-duffy": {
    title: `Dr. Jan Duffy | ${SITE_CONFIG.businessName}`,
    description: `Work with Dr. Jan Duffy for Silverado Ranch and Pewter Valley Estates real estate—buying, selling, and local market guidance. Call ${SITE_CONFIG.phone}.`,
    h1: "Dr. Jan Duffy",
    paragraphs: [
      "This page is a quick hub for Dr. Jan Duffy’s services, contact options, and how to get started with a search or listing plan.",
      "Prefer phone? Call the office line for the fastest routing on active listing questions.",
    ],
  },
  "google-reviews": {
    title: `Google Reviews | ${SITE_CONFIG.businessName}`,
    description: `Read and leave Google reviews for Dr. Jan Duffy—Silverado Ranch and Pewter Valley Estates real estate. Call ${SITE_CONFIG.phone}.`,
    h1: "Google Reviews",
    paragraphs: [
      "Client feedback helps future buyers and sellers understand what it is like to work together on real transactions.",
      "If you had a great experience, consider leaving a review— it also helps others find trustworthy local representation.",
    ],
  },
  faq: {
    title: `FAQ | ${SITE_CONFIG.businessName}`,
    description: `Frequently asked questions about Pewter Valley Estates, Silverado Ranch, and Southwest Las Vegas real estate. Call ${SITE_CONFIG.phone}.`,
    h1: "Frequently Asked Questions",
    paragraphs: [
      "These answers are for general education; every transaction has unique facts. For advice tailored to your situation, reach out directly.",
      "For property-specific guidance, a short call can save time and reduce avoidable mistakes.",
    ],
  },
}

export function segmentsToKey(segments: string[]): string {
  return segments.join("/")
}

export function getMarketingPage(segments: string[]): MarketingPage | undefined {
  const key = segmentsToKey(segments)
  return MARKETING_PAGES[key]
}

export function allMarketingPathSegments(): string[][] {
  return Object.keys(MARKETING_PAGES).map((key) => key.split("/").filter(Boolean))
}
