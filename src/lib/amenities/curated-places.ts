/**
 * Verified nearby places for static HTML, map fallback, and JSON-LD ItemList.
 * Street addresses verified against official source URLs (2026-09-27).
 */

import type { AmenityCategoryId } from "@/lib/amenities/community-config"

export type CuratedPlace = {
  name: string
  address: string
  category: string
  categoryId: AmenityCategoryId
  schemaType:
    | "Restaurant"
    | "Park"
    | "Hospital"
    | "GolfCourse"
    | "School"
    | "Store"
    | "Pharmacy"
    | "Place"
  sourceUrl: string
  note?: string
}

export const CURATED_NEARBY_PLACES: CuratedPlace[] = [
  {
    name: "Sprouts Farmers Market (Silverado Ranch)",
    address: "1140 E Silverado Ranch Blvd, Las Vegas, NV 89183",
    category: "Grocery",
    categoryId: "grocery",
    schemaType: "Store",
    sourceUrl: "https://www.sprouts.com/store/nv/las-vegas/silverado-ranch/",
  },
  {
    name: "Smith's Food and Drug (Silverado Ranch)",
    address: "9750 S Maryland Pkwy, Las Vegas, NV 89183",
    category: "Grocery",
    categoryId: "grocery",
    schemaType: "Store",
    sourceUrl: "https://www.smithsfoodanddrug.com/stores/grocery/nv/las-vegas/silverado-ranch/706/00394",
  },
  {
    name: "Silverado Ranch Park",
    address: "9855 Gilespie St, Las Vegas, NV 89183",
    category: "Parks & recreation",
    categoryId: "parks",
    schemaType: "Park",
    sourceUrl: "https://parkslocator.clarkcountynv.gov/Search/ParkDetail?parkId=16",
    note: "Clark County park with sports fields, skate park, dog park, and walking paths.",
  },
  {
    name: "Dignity Health — St. Rose Dominican Hospital, Siena Campus",
    address: "3001 St Rose Pkwy, Henderson, NV 89052",
    category: "Healthcare",
    categoryId: "healthcare",
    schemaType: "Hospital",
    sourceUrl: "https://www.dignityhealth.org/las-vegas/locations/siena",
  },
  {
    name: "John C. Bass Elementary School",
    address: "10377 Rancho Destino Rd, Las Vegas, NV 89183",
    category: "Schools",
    categoryId: "schools",
    schemaType: "School",
    sourceUrl: "https://sites.google.com/a/nv.ccsd.net/john-c-bass-elementary/home",
    note: "Clark County School District — confirm assigned schools for a specific address.",
  },
  {
    name: "Charles A. Silvestri Junior High School",
    address: "1055 Silverado Ranch Blvd, Las Vegas, NV 89183",
    category: "Schools",
    categoryId: "schools",
    schemaType: "School",
    sourceUrl: "https://www.silvestrijhs.org/",
    note: "Clark County School District — confirm assigned schools for a specific address.",
  },
  {
    name: "Liberty High School",
    address: "3700 Liberty Heights Ave, Henderson, NV 89052",
    category: "Schools",
    categoryId: "schools",
    schemaType: "School",
    sourceUrl: "https://www.libertyhighpatriots.com/",
    note: "Clark County School District — confirm assigned schools for a specific address.",
  },
]

export function curatedPlacesForCategory(categoryId: AmenityCategoryId): CuratedPlace[] {
  return CURATED_NEARBY_PLACES.filter((place) => place.categoryId === categoryId)
}

export type AmenityContentSection = {
  id: string
  heading: string
  paragraphs: string[]
}

export const AMENITY_CONTENT_SECTIONS: AmenityContentSection[] = [
  {
    id: "dining",
    heading: "Dining near Pewter Valley Estates",
    paragraphs: [
      "Silverado Ranch Boulevard and the Maryland Parkway corridor put everyday dining within a short drive of Pewter Valley Estates. For groceries and quick meals, Sprouts Farmers Market at 1140 E Silverado Ranch Blvd and Smith's Food and Drug at 9750 S Maryland Pkwy are convenient stops for residents and buyers touring zip code 89183.",
      "Use the interactive map above to explore current restaurants and cafes by category. Hours and menus change — confirm details before you visit.",
    ],
  },
  {
    id: "parks",
    heading: "Parks & outdoor recreation",
    paragraphs: [
      "Silverado Ranch Park at 9855 Gilespie St is the main Clark County park serving the 89183 Silverado Ranch area, with sports fields, a skate park, dog areas, and walking paths.",
      "Use the map's parks filter for additional green space and recreation sites near your route.",
    ],
  },
  {
    id: "healthcare",
    heading: "Healthcare & pharmacies",
    paragraphs: [
      "Dignity Health St. Rose Dominican Hospital — Siena Campus at 3001 St Rose Pkwy in Henderson provides full-service hospital care south of Silverado Ranch. Urgent care, primary care, and pharmacy options also cluster along St Rose Parkway and Maryland Parkway — filter the map for healthcare and pharmacies to see what is open now.",
    ],
  },
  {
    id: "shopping",
    heading: "Shopping & daily errands",
    paragraphs: [
      "Day-to-day shopping runs through Silverado Ranch Boulevard and nearby centers along Maryland Parkway. Sprouts and Smith's cover most grocery needs; the map's shopping filter highlights larger retail nodes when you are planning a dedicated errand run.",
    ],
  },
  {
    id: "schools",
    heading: "Schools (Clark County School District)",
    paragraphs: [
      "Which CCSD schools are assigned to Pewter Valley Estates addresses? Verify with the CCSD Zoning Search before you rely on any school name in marketing materials. Nearby CCSD campuses often discussed for southwest Silverado Ranch include John C. Bass Elementary (10377 Rancho Destino Rd), Charles A. Silvestri Junior High (1055 Silverado Ranch Blvd), and Liberty High School (3700 Liberty Heights Ave, Henderson).",
    ],
  },
  {
    id: "commute",
    heading: "Commute & regional access (approximate drive times)",
    paragraphs: [
      "Pewter Valley Estates sits near Pyle Avenue and S Rancho Destino Rd with access to I-15 and the Las Vegas Beltway (I-215). Approximate off-peak drives: 15–25 minutes to the Las Vegas Strip resort corridor, 15–20 minutes to Harry Reid International Airport, and 20–30 minutes toward Downtown Summerlin depending on route and traffic.",
      "Peak commute windows can add significantly to these times — test your actual work route during the hours you drive most often.",
    ],
  },
]

export const AMENITIES_FAQ = [
  {
    question: "What grocery stores are near Pewter Valley Estates?",
    answer:
      "Sprouts Farmers Market at 1140 E Silverado Ranch Blvd and Smith's Food and Drug at 9750 S Maryland Pkwy are two grocery options in the 89183 Silverado Ranch area, both within a short drive of Pewter Valley Estates.",
  },
  {
    question: "How far is Pewter Valley Estates from the Las Vegas Strip?",
    answer:
      "Most drivers reach the Strip resort corridor in roughly 15–25 minutes off-peak from Pewter Valley Estates, depending on route and traffic; rush-hour trips can take longer.",
  },
  {
    question: "Are there hospitals near Pewter Valley Estates?",
    answer:
      "Dignity Health St. Rose Dominican Hospital — Siena Campus at 3001 St Rose Pkwy in Henderson is a full-service hospital south of Silverado Ranch, typically reachable in about 10–15 minutes by car under normal conditions.",
  },
  {
    question: "Which parks are closest to Pewter Valley Estates?",
    answer:
      "Silverado Ranch Park at 9855 Gilespie St is the primary Clark County park serving the 89183 Silverado Ranch area.",
  },
  {
    question: "What schools serve Pewter Valley Estates?",
    answer:
      "Which CCSD schools are assigned to Pewter Valley Estates addresses? Verify with the CCSD Zoning Search. Nearby CCSD campuses often referenced for southwest Silverado Ranch include John C. Bass Elementary, Charles A. Silvestri Junior High, and Liberty High School — always confirm the assigned school for the exact property address before you buy.",
  },
  {
    question: "How do I get to Harry Reid International Airport from Pewter Valley Estates?",
    answer:
      "Harry Reid International Airport is typically about 15–20 minutes by car off-peak via I-215 and the airport connectors; allow extra time during peak travel windows.",
  },
  {
    question: "Is Pewter Valley Estates in Las Vegas or Henderson?",
    answer:
      "Pewter Valley Estates is within the Silverado Ranch master-planned area in southwest Clark County (zip 89183), marketed with a Las Vegas mailing address while sitting near the Henderson border — your listing paperwork will show the precise jurisdiction.",
  },
  {
    question: "Who can help me compare homes near these amenities?",
    answer:
      "Dr. Jan Duffy focuses on Pewter Valley Estates and Silverado Ranch resale — call the office line on this site to align MLS search, tours, and neighborhood context to your amenity priorities.",
  },
] as const
