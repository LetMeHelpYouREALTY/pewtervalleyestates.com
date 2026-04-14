/**
 * Single source of truth for NAP and site identity — align with Google Business Profile.
 */

export const SITE_CONFIG = {
  name: "Dr. Jan Duffy",
  businessName: "Silverado Ranch | Homes by Dr. Jan Duffy",
  tagline: "Homes by Dr. Jan Duffy",
  description:
    "Silverado Ranch real estate in Henderson and Clark County—including Pewter Valley Estates, a community within Silverado Ranch (89183). Dr. Jan Duffy helps buyers and sellers with MLS-backed search, pricing, and neighborhood context.",
  url: "https://www.pewtervalleyestates.com",
  logo: "https://www.pewtervalleyestates.com/logo.png",
  phone: "702 500-1955",
  phoneFormatted: "+1-702-500-1955",
  phoneTel: "+17025001955",
  email: "DrDuffy@PewterValleyEstates.com",
  address: {
    street: "Pyle Avenue and, S Rancho Destino Rd",
    city: "Las Vegas",
    state: "Nevada",
    stateAbbr: "NV",
    zipCode: "89183",
    country: "United States",
    countryCode: "US",
  },
  coordinates: {
    latitude: "36.0694",
    longitude: "-115.2408",
  },
  googleBusinessProfile: "https://g.page/r/YOUR_GBP_ID",
  googleReviewsUrl: "https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID",
  social: {
    facebook: "https://facebook.com/pewtervalleyestates",
    twitter: "https://twitter.com/pewtervalleyestates",
    instagram: "https://instagram.com/pewtervalleyestates",
    linkedin: "https://linkedin.com/company/pewtervalleyestates",
  },
} as const

export type SiteConfig = typeof SITE_CONFIG
