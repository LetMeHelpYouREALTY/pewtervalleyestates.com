import { SITE_CONFIG } from "@/lib/site-contact"

/** Pewter Valley Estates — community within Silverado Ranch (89183). */
export const COMMUNITY = {
  name: "Pewter Valley Estates",
  areaLabel: "Silverado Ranch",
  city: SITE_CONFIG.address.city,
  stateAbbr: SITE_CONFIG.address.stateAbbr,
  zip: SITE_CONFIG.address.zipCode,
  /** Matches `SITE_CONFIG.coordinates` (Pyle Ave & S Rancho Destino Rd hub). */
  center: {
    lat: Number.parseFloat(SITE_CONFIG.coordinates.latitude),
    lng: Number.parseFloat(SITE_CONFIG.coordinates.longitude),
  },
  mapZoom: 14,
  searchRadiusMeters: 8000,
} as const

export type AmenityCategoryId =
  | "grocery"
  | "restaurants"
  | "cafes"
  | "parks"
  | "schools"
  | "healthcare"
  | "pharmacies"
  | "shopping"
  | "golf"
  | "fitness"
  | "parking"

export type AmenityCategory = {
  id: AmenityCategoryId
  label: string
  /** Google Places (New) primary types for `Place.searchNearby`. */
  placeTypes: string[]
  ariaLabel: string
}

/** Resale suburban community — groceries, parks, and schools before nightlife. */
export const AMENITY_CATEGORIES: AmenityCategory[] = [
  {
    id: "grocery",
    label: "Grocery",
    placeTypes: ["supermarket", "grocery_store"],
    ariaLabel: "Show grocery stores near Pewter Valley Estates",
  },
  {
    id: "parks",
    label: "Parks",
    placeTypes: ["park"],
    ariaLabel: "Show parks near Pewter Valley Estates",
  },
  {
    id: "restaurants",
    label: "Restaurants",
    placeTypes: ["restaurant"],
    ariaLabel: "Show restaurants near Pewter Valley Estates",
  },
  {
    id: "schools",
    label: "Schools",
    placeTypes: ["school", "primary_school", "secondary_school"],
    ariaLabel: "Show schools near Pewter Valley Estates",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    placeTypes: ["hospital", "doctor"],
    ariaLabel: "Show healthcare near Pewter Valley Estates",
  },
  {
    id: "pharmacies",
    label: "Pharmacies",
    placeTypes: ["pharmacy", "drugstore"],
    ariaLabel: "Show pharmacies near Pewter Valley Estates",
  },
  {
    id: "shopping",
    label: "Shopping",
    placeTypes: ["shopping_mall", "department_store"],
    ariaLabel: "Show shopping near Pewter Valley Estates",
  },
  {
    id: "cafes",
    label: "Cafes",
    placeTypes: ["cafe", "coffee_shop"],
    ariaLabel: "Show cafes near Pewter Valley Estates",
  },
  {
    id: "golf",
    label: "Golf",
    placeTypes: ["golf_course"],
    ariaLabel: "Show golf courses near Pewter Valley Estates",
  },
  {
    id: "fitness",
    label: "Fitness",
    placeTypes: ["gym", "fitness_center"],
    ariaLabel: "Show fitness centers near Pewter Valley Estates",
  },
  {
    id: "parking",
    label: "Parking",
    placeTypes: ["parking"],
    ariaLabel: "Show parking near Pewter Valley Estates",
  },
]

export const AMENITIES_PAGE_PATH = "/pewter-valley-estates/amenities" as const

export function getGoogleMapsApiKey(): string | undefined {
  return process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim() || undefined
}

export function getGoogleMapsMapId(): string | undefined {
  return process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID?.trim() || undefined
}
