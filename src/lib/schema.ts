import { MARKETING_IMAGES } from "./marketing-images"
import { SITE_CONFIG } from "./site-contact"

const primaryImageUrls = [
  `${SITE_CONFIG.url}${MARKETING_IMAGES.hero}`,
  `${SITE_CONFIG.url}${MARKETING_IMAGES.community}`,
]

function canonicalPageUrl(path = "") {
  if (!path) return `${SITE_CONFIG.url}/`
  return `${SITE_CONFIG.url}${path}`
}

function postalAddress() {
  return {
    "@type": "PostalAddress" as const,
    streetAddress: SITE_CONFIG.address.street,
    addressLocality: SITE_CONFIG.address.city,
    addressRegion: SITE_CONFIG.address.stateAbbr,
    postalCode: SITE_CONFIG.address.zipCode,
    addressCountry: SITE_CONFIG.address.countryCode,
  }
}

function brokerageOffice() {
  return {
    "@type": "RealEstateOffice" as const,
    name: SITE_CONFIG.brokerage.name,
    url: SITE_CONFIG.brokerage.url,
  }
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${SITE_CONFIG.url}/#agent`,
    name: SITE_CONFIG.name,
    alternateName: `${SITE_CONFIG.businessName}; Pewter Valley Estates · Silverado Ranch`,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    logo: SITE_CONFIG.logo,
    image: primaryImageUrls,
    telephone: SITE_CONFIG.phoneFormatted,
    email: SITE_CONFIG.email,
    identifier: SITE_CONFIG.licenseNumber,
    address: postalAddress(),
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.coordinates.latitude,
      longitude: SITE_CONFIG.coordinates.longitude,
    },
    worksFor: brokerageOffice(),
    areaServed: [
      {
        "@type": "City",
        name: "Las Vegas",
        containedInPlace: { "@type": "State", name: "Nevada" },
      },
      { "@type": "City", name: "Henderson" },
      {
        "@type": "Place",
        name: "Silverado Ranch",
        description:
          "Master-planned area in southeast Clark County (89123, 89183). Pewter Valley Estates is a community within Silverado Ranch.",
      },
    ],
    serviceType: [
      "Residential buyer representation",
      "Residential seller representation",
      "MLS-backed home search",
      "Pricing and market analysis",
      "Investment property consultation",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    priceRange: "$$",
    sameAs: Object.values(SITE_CONFIG.social).filter(Boolean),
  }
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.url}/#website`,
    name: SITE_CONFIG.businessName,
    url: SITE_CONFIG.url,
    publisher: { "@id": `${SITE_CONFIG.url}/#organization` },
    inLanguage: "en-US",
  }
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.businessName,
    alternateName: "Dr. Jan Duffy · Pewter Valley Estates · Silverado Ranch",
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    logo: SITE_CONFIG.logo,
    image: primaryImageUrls,
    address: postalAddress(),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE_CONFIG.phoneFormatted,
      contactType: "customer service",
      areaServed: ["Las Vegas NV", "Henderson NV", "Clark County NV"],
      availableLanguage: ["English", "Spanish"],
    },
    parentOrganization: brokerageOffice(),
    sameAs: Object.values(SITE_CONFIG.social).filter(Boolean),
  }
}

export function generateWebPageSchema(title: string, description: string, path = "") {
  const pageUrl = canonicalPageUrl(path)
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    name: title,
    description,
    url: pageUrl,
    isPartOf: { "@id": `${SITE_CONFIG.url}/#website` },
    about: { "@id": `${SITE_CONFIG.url}/#agent` },
    mainEntity: {
      "@type": "RealEstateAgent",
      "@id": `${SITE_CONFIG.url}/#agent`,
      name: SITE_CONFIG.name,
      description: SITE_CONFIG.description,
      url: SITE_CONFIG.url,
      telephone: SITE_CONFIG.phoneFormatted,
      email: SITE_CONFIG.email,
      identifier: SITE_CONFIG.licenseNumber,
      address: postalAddress(),
      worksFor: brokerageOffice(),
      areaServed: [
        { "@type": "City", name: "Las Vegas" },
        { "@type": "City", name: "Henderson" },
        { "@type": "AdministrativeArea", name: "Clark County" },
        {
          "@type": "Place",
          name: "Silverado Ranch",
        },
      ],
      serviceType: [
        "Residential real estate sales",
        "Buyer representation",
        "Seller representation",
        "Market analysis",
      ],
    },
  }
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}
