import { SITE_CONFIG } from "./site-contact"

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: SITE_CONFIG.name,
    alternateName: `${SITE_CONFIG.businessName}; Pewter Valley Estates Las Vegas`,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    logo: SITE_CONFIG.logo,
    image: `${SITE_CONFIG.url}/images/community-hero.jpg`,
    telephone: SITE_CONFIG.phoneFormatted,
    email: SITE_CONFIG.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.stateAbbr,
      postalCode: SITE_CONFIG.address.zipCode,
      addressCountry: SITE_CONFIG.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.coordinates.latitude,
      longitude: SITE_CONFIG.coordinates.longitude,
    },
    areaServed: [
      { "@type": "City", name: "Las Vegas", containedInPlace: { "@type": "State", name: "Nevada" } },
      { "@type": "City", name: "Henderson" },
      { "@type": "City", name: "Summerlin" },
      {
        "@type": "Place",
        name: "Silverado Ranch",
        description:
          "Suburban neighborhood in Henderson and southeast Clark County, Nevada (89123, 89183). Pewter Valley Estates is a community within Silverado Ranch.",
      },
    ],
    serviceType: [
      "New Home Sales",
      "Real Estate Consultation",
      "Property Tours",
      "Home Buying Assistance",
      "Home Selling Assistance",
    ],
    openingHours: ["Mo-Fr 09:00-18:00", "Sa 10:00-16:00"],
    priceRange: "$$",
    sameAs: Object.values(SITE_CONFIG.social),
  }
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.businessName,
    alternateName: "Dr. Jan Duffy · Pewter Valley Estates Las Vegas",
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    logo: SITE_CONFIG.logo,
    foundingDate: "2024",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.stateAbbr,
      postalCode: SITE_CONFIG.address.zipCode,
      addressCountry: SITE_CONFIG.address.countryCode,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE_CONFIG.phone,
      contactType: "sales",
      areaServed: "Las Vegas, NV",
      availableLanguage: ["English", "Spanish"],
    },
    sameAs: Object.values(SITE_CONFIG.social),
    parentOrganization: {
      "@type": "Organization",
      name: "Richmond American Homes",
      url: "https://www.richmondamerican.com",
    },
  }
}

export function generateWebPageSchema(title: string, description: string, path = "") {
  const pageUrl = path ? `${SITE_CONFIG.url}${path}` : SITE_CONFIG.url
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: pageUrl,
    mainEntity: {
      "@type": "RealEstateAgent",
      name: SITE_CONFIG.name,
      description:
        "Las Vegas Real Estate Agent specializing in luxury homes and investment properties",
      url: SITE_CONFIG.url,
      telephone: SITE_CONFIG.phoneTel,
      email: SITE_CONFIG.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE_CONFIG.address.street,
        addressRegion: "Nevada",
        addressCountry: "United States",
      },
      areaServed: [
        "Las Vegas",
        "Henderson",
        "Summerlin",
        "Green Valley",
        "Anthem",
        "Inspirada",
        "Mountain's Edge",
        "Silverado Ranch",
      ],
      serviceType: "Real Estate Sales",
    },
  }
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[],
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
  faqs: { question: string; answer: string }[],
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
