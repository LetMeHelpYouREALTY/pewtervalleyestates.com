import type { Metadata } from "next"
import Link from "next/link"
import { AmenityMap } from "@/components/AmenityMap"
import { CTASection } from "@/components/CTASection"
import { JsonLd } from "@/components/JsonLd"
import { NAPDisplay } from "@/components/NAPDisplay"
import { PageViewTracker } from "@/components/PageViewTracker"
import { RelatedPages } from "@/components/RelatedPages"
import { AMENITIES_PAGE_PATH, COMMUNITY } from "@/lib/amenities/community-config"
import {
  AMENITIES_FAQ,
  AMENITY_CONTENT_SECTIONS,
  CURATED_NEARBY_PLACES,
} from "@/lib/amenities/curated-places"
import { buildPageMetadata, DEFAULT_OG_IMAGE_PATH } from "@/lib/metadata"
import {
  generateBreadcrumbSchema,
  generateCommunityPlaceSchema,
  generateCuratedPlacesItemListSchema,
  generateFAQSchema,
  generateWebPageSchema,
} from "@/lib/schema"
import { SITE_CONFIG } from "@/lib/site-contact"
import styles from "./page.module.css"

const TITLE = `Nearby Amenities in Pewter Valley Estates, Las Vegas | ${SITE_CONFIG.businessName}`
const DESCRIPTION = `Interactive map and local guide to groceries, parks, schools, healthcare, and dining near Pewter Valley Estates in Silverado Ranch (89183). Hyperlocal context from ${SITE_CONFIG.name}. Call ${SITE_CONFIG.phone}.`

export const metadata: Metadata = buildPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: AMENITIES_PAGE_PATH,
  ogImagePath: DEFAULT_OG_IMAGE_PATH,
})

export default function NearbyAmenitiesPage() {
  const webPage = generateWebPageSchema(TITLE, DESCRIPTION, AMENITIES_PAGE_PATH)
  const crumbs = generateBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Pewter Valley Estates", url: `${SITE_CONFIG.url}/neighborhood` },
    { name: "Nearby Amenities", url: `${SITE_CONFIG.url}${AMENITIES_PAGE_PATH}` },
  ])
  const faqSchema = generateFAQSchema([...AMENITIES_FAQ])
  const communityPlace = generateCommunityPlaceSchema()
  const itemList = generateCuratedPlacesItemListSchema(CURATED_NEARBY_PLACES)

  return (
    <div className={styles.wrap}>
      <JsonLd data={webPage} />
      <JsonLd data={crumbs} />
      <JsonLd data={faqSchema} />
      <JsonLd data={communityPlace} />
      <JsonLd data={itemList} />
      <PageViewTracker pageTitle="Nearby Amenities" />

      <div className={styles.container}>
        <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/neighborhood">Pewter Valley Estates</Link>
            </li>
            <li aria-current="page">Nearby Amenities</li>
          </ol>
        </nav>

        <article>
          <h1 className={styles.h1}>
            Nearby Amenities in {COMMUNITY.name}, {COMMUNITY.city}
          </h1>
          <p className={styles.lead}>
            Pewter Valley Estates sits in Silverado Ranch (zip {COMMUNITY.zip}) at Pyle Avenue and S
            Rancho Destino Rd. Use the map to explore current restaurants, groceries, parks,
            schools, and services — then read the category notes below for drive-time context buyers
            ask about most often.
          </p>

          <NAPDisplay showGoogleReviewsLink showDirections variant="compact" />

          <AmenityMap variant="default" showIntro={false} showPageLink={false} />

          {AMENITY_CONTENT_SECTIONS.map((section) => (
            <section key={section.id} className={styles.contentBlock} aria-labelledby={section.id}>
              <h2 id={section.id}>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}

          <section className={styles.faqSection} aria-labelledby="amenities-faq">
            <h2 id="amenities-faq">Nearby amenities FAQ</h2>
            {AMENITIES_FAQ.map((faq) => (
              <details key={faq.question} className={styles.faqItem}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </section>

          <section className={styles.trust} aria-labelledby="agent-trust">
            <h2 id="agent-trust">Your hyperlocal REALTOR for {COMMUNITY.name}</h2>
            <p>
              {SITE_CONFIG.name} represents buyers and sellers in Pewter Valley Estates and
              Silverado Ranch with MLS-backed search, pricing, and neighborhood context. Nevada
              license {SITE_CONFIG.licenseNumber} · {SITE_CONFIG.brokerage.name}.
            </p>
            <p>
              Call <a href={`tel:${SITE_CONFIG.phoneTel}`}>{SITE_CONFIG.phone}</a> or email{" "}
              <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a> to align tours to the
              amenities that matter most to you.
            </p>
          </section>
        </article>

        <RelatedPages currentPage={AMENITIES_PAGE_PATH} />
      </div>

      <CTASection />
    </div>
  )
}
