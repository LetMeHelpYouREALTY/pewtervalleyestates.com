/**
 * Verified nearby places for static HTML, map fallback, and JSON-LD ItemList.
 * Only include businesses/locations with a published street address.
 */

export type CuratedPlace = {
  name: string
  address: string
  category: string
  schemaType:
    | "Restaurant"
    | "Park"
    | "Hospital"
    | "GolfCourse"
    | "School"
    | "Store"
    | "Pharmacy"
    | "Place"
  note?: string
}

export const CURATED_NEARBY_PLACES: CuratedPlace[] = [
  {
    name: "Sprouts Farmers Market (Silverado Ranch)",
    address: "1140 E Silverado Ranch Blvd, Las Vegas, NV 89183",
    category: "Grocery",
    schemaType: "Store",
  },
  {
    name: "Smith's Food and Drug",
    address: "9750 S Maryland Pkwy, Las Vegas, NV 89183",
    category: "Grocery",
    schemaType: "Store",
  },
  {
    name: "Somerset Hills Park",
    address: "6750 Casada Way, Las Vegas, NV 89183",
    category: "Parks & recreation",
    schemaType: "Park",
  },
  {
    name: "Goett Family Park",
    address: "7200 Goett Ave, Las Vegas, NV 89183",
    category: "Parks & recreation",
    schemaType: "Park",
  },
  {
    name: "Jimmy Pettyjohn Jr. Park",
    address: "7350 W Flamingo Rd, Las Vegas, NV 89147",
    category: "Parks & recreation",
    schemaType: "Park",
    note: "Southwest Las Vegas park referenced in local Pewter Valley context.",
  },
  {
    name: "Southern Highlands Golf Club",
    address: "9401 Williamsburg Plaza, Las Vegas, NV 89141",
    category: "Golf",
    schemaType: "GolfCourse",
  },
  {
    name: "St. Rose Dominican Hospital — Siena Campus",
    address: "3001 St Rose Pkwy, Henderson, NV 89052",
    category: "Healthcare",
    schemaType: "Hospital",
  },
  {
    name: "John C. Bass Elementary School",
    address: "9100 W Maule Ave, Las Vegas, NV 89148",
    category: "Schools",
    schemaType: "School",
    note: "Clark County School District — confirm attendance boundaries for a specific address.",
  },
  {
    name: "Charles A. Silvestri Junior High School",
    address: "9200 W Maule Ave, Las Vegas, NV 89148",
    category: "Schools",
    schemaType: "School",
    note: "Clark County School District — confirm attendance boundaries for a specific address.",
  },
  {
    name: "Liberty High School",
    address: "3700 Liberty Heights Ave, Henderson, NV 89014",
    category: "Schools",
    schemaType: "School",
    note: "Clark County School District — confirm attendance boundaries for a specific address.",
  },
]

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
      "Silverado Ranch Boulevard and the Maryland Parkway corridor put everyday dining within a short drive of Pewter Valley Estates. For groceries and quick meals, Sprouts Farmers Market at 1140 E Silverado Ranch Blvd and Smith's Food and Drug at 9750 S Maryland Pkwy are established neighborhood anchors in zip code 89183.",
      "Use the interactive map above to explore current restaurants and cafes by category. Hours and menus change — confirm details before you visit.",
    ],
  },
  {
    id: "parks",
    heading: "Parks & outdoor recreation",
    paragraphs: [
      "Clark County parks close to Pewter Valley Estates include Somerset Hills Park (6750 Casada Way) and Goett Family Park (7200 Goett Ave), both in the 89183 area. Jimmy Pettyjohn Jr. Park on W Flamingo Rd is another southwest valley option often cited for family recreation.",
      "Southern Highlands Golf Club (9401 Williamsburg Plaza) offers championship golf a few miles south for players who want a full-service course experience.",
    ],
  },
  {
    id: "healthcare",
    heading: "Healthcare & pharmacies",
    paragraphs: [
      "St. Rose Dominican Hospital — Siena Campus at 3001 St Rose Pkwy in Henderson provides full-service hospital care south of Silverado Ranch. Urgent care, primary care, and pharmacy options also cluster along St Rose Parkway and Maryland Parkway — filter the map for healthcare and pharmacies to see what is open now.",
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
      "Public schools serving much of southwest Silverado Ranch include John C. Bass Elementary (9100 W Maule Ave), Charles A. Silvestri Junior High (9200 W Maule Ave), and Liberty High School (3700 Liberty Heights Ave, Henderson). CCSD boundaries shift — verify the assigned school for any address you are considering before you write an offer.",
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
      "Sprouts Farmers Market at 1140 E Silverado Ranch Blvd and Smith's Food and Drug at 9750 S Maryland Pkwy are two established grocery options in the 89183 Silverado Ranch area, both within a short drive of Pewter Valley Estates.",
  },
  {
    question: "How far is Pewter Valley Estates from the Las Vegas Strip?",
    answer:
      "Most drivers reach the Strip resort corridor in roughly 15–25 minutes off-peak from Pewter Valley Estates, depending on route and traffic; rush-hour trips can take longer.",
  },
  {
    question: "Are there hospitals near Pewter Valley Estates?",
    answer:
      "St. Rose Dominican Hospital — Siena Campus at 3001 St Rose Pkwy in Henderson is a full-service hospital south of Silverado Ranch, typically reachable in about 10–15 minutes by car under normal conditions.",
  },
  {
    question: "Which parks are closest to Pewter Valley Estates?",
    answer:
      "Somerset Hills Park on Casada Way and Goett Family Park on Goett Avenue are Clark County parks in the immediate Silverado Ranch / 89183 area.",
  },
  {
    question: "What schools serve Pewter Valley Estates?",
    answer:
      "Many southwest Silverado Ranch addresses feed Clark County schools such as John C. Bass Elementary, Charles A. Silvestri Junior High, and Liberty High School — always confirm the assigned school for the exact property address before you buy.",
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
