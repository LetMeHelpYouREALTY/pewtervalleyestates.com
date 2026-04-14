import type { Metadata } from "next"
import Link from "next/link"
import { Pathways } from "@/app/_components/Pathways"
import { CTASection } from "@/components/CTASection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { GoogleMap } from "@/components/GoogleMap"
import { GoogleReviews } from "@/components/GoogleReviews"
import { HeroSection } from "@/components/HeroSection"
import { JsonLd } from "@/components/JsonLd"
import { LeadCaptureForm } from "@/components/LeadCaptureForm"
import { NAPDisplay } from "@/components/NAPDisplay"
import { PageViewTracker } from "@/components/PageViewTracker"
import { RealScoutListings } from "@/components/RealScoutListings"
import { RelatedPages } from "@/components/RelatedPages"
import { StickyContactButton } from "@/components/StickyContactButton"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { buildPageMetadata } from "@/lib/metadata"
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateWebPageSchema,
} from "@/lib/schema"
import { SITE_CONFIG } from "@/lib/site-contact"
import styles from "./page.module.css"

const HOME_TITLE = SITE_CONFIG.businessName
const HOME_DESCRIPTION = `Expert real estate in Silverado Ranch (Henderson & Clark County). Pewter Valley Estates is a community within Silverado Ranch (89183)—Dr. Jan Duffy specializes in resale homes, market analysis, and investment properties. Call ${SITE_CONFIG.phone}.`

export const metadata: Metadata = buildPageMetadata({
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  path: "/",
  ogImagePath: "/og-image.jpg",
})

const faqData = [
  {
    question: "What is Pewter Valley Estates?",
    answer: `Pewter Valley Estates is a community within Silverado Ranch—a sold-out Richmond American master-planned pocket in Southwest Las Vegas (zip code 89183), at Pyle Avenue and S Rancho Destino Rd. It features ranch-style homes from 1,950 to 2,240 square feet with 3-4 bedrooms. The community is now in the resale market phase.`,
  },
  {
    question: "Who is Dr. Jan Duffy?",
    answer:
      "Dr. Jan Duffy is a specialized real estate agent focused on Silverado Ranch and Pewter Valley Estates (a community within Silverado Ranch), plus Southwest Las Vegas. With deep local market knowledge and expertise in resale transactions, market analysis, and investment properties, she helps buyers, sellers, and investors navigate neighborhood-specific dynamics.",
  },
  {
    question: "What types of homes are available in Pewter Valley Estates?",
    answer: `Pewter Valley Estates features ranch-style, single-story homes built by Richmond American Homes. Homes range from 1,950 to 2,240 square feet with 3-4 bedrooms. All homes feature modern floor plans, energy-efficient designs, and are situated on well-maintained lots in a quiet, family-friendly environment.`,
  },
  {
    question: "Where is Pewter Valley Estates located?",
    answer: `Pewter Valley Estates sits within Silverado Ranch in Southwest Las Vegas—Pyle Avenue and S Rancho Destino Rd, zip code 89183. The community offers easy access to I-15 and Las Vegas Boulevard, while maintaining a peaceful, rural-urban balance. Nearby amenities include Somerset Hills Park, Goett Family Park, Jimmy Pettyjohn Jr. Park, and the Southern Highlands Golf Club.`,
  },
  {
    question: "How can I buy or sell a home in Pewter Valley Estates?",
    answer: `Contact Dr. Jan Duffy at ${SITE_CONFIG.phone} for expert representation in buying or selling Pewter Valley Estates properties. Dr. Jan Duffy provides comprehensive services including market analysis, home valuations, buyer representation, seller marketing, and investment property consultation.`,
  },
  {
    question: "Does Dr. Jan Duffy serve Silverado Ranch and Henderson?",
    answer: `Yes. Silverado Ranch spans parts of Henderson and southeast Clark County (including 89123 and 89183). Pewter Valley Estates is a community within Silverado Ranch. Visit the Silverado Ranch page on this site for area context, then call ${SITE_CONFIG.phone} to align MLS search and tours to your commute, schools, and lifestyle priorities.`,
  },
]

export default function HomePage() {
  const webPage = generateWebPageSchema(HOME_TITLE, HOME_DESCRIPTION, "")
  const breadcrumbs = generateBreadcrumbSchema([{ name: "Home", url: SITE_CONFIG.url }])
  const faqSchema = generateFAQSchema(faqData)

  return (
    <div className={styles.homepage}>
      <JsonLd data={webPage} />
      <JsonLd data={breadcrumbs} />
      <JsonLd data={faqSchema} />
      <PageViewTracker pageTitle="Homepage" />

      <HeroSection />

      <section className={styles.quickLead}>
        <div className={styles.container}>
          <div className={styles.leadGrid}>
            <div className={styles.leadFormCard}>
              <h3>Get Instant Access to New Listings</h3>
              <p>Be the first to know when new homes hit the market</p>
              <LeadCaptureForm formType="buyer" title="" subtitle="" />
            </div>
            <div className={styles.leadFormCard}>
              <h3>Get Your Home&apos;s Value Instantly</h3>
              <p>See what your home is worth in today&apos;s market</p>
              <LeadCaptureForm formType="valuation" title="" subtitle="" />
            </div>
          </div>
        </div>
      </section>

      <Pathways />

      <TestimonialsSection />
      <GoogleReviews />

      <FeaturesSection />

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.contentMain}>
              <NAPDisplay showGoogleReviewsLink showDirections />

              <h3>Pewter Valley Estates: Your Next Home Awaits</h3>
              <p>
                Located at Pyle Avenue and S Rancho Destino Rd in zip code 89183, Pewter Valley Estates offers ranch-style
                homes from 1,950-2,240 sq ft with 3-4 bedrooms. Built by Richmond American Homes, this sold-out community
                is now in the resale phase, offering exceptional opportunities for buyers and sellers.
              </p>

              <h3>What Makes This Community Special</h3>
              <p>
                Family-friendly environment, proximity to parks (Somerset Hills Park, Goett Family Park), easy I-15 access,
                and quiet residential streets. Perfect for first-time buyers, growing families, and those seeking
                single-story living.
              </p>
            </div>

            <aside className={styles.contentSidebar}>
              <div className={styles.quickStats}>
                <h3>Community Quick Facts</h3>
                <ul>
                  <li>
                    <strong>Location:</strong> Pyle Ave &amp; S Rancho Destino Rd
                  </li>
                  <li>
                    <strong>Zip Code:</strong> 89183
                  </li>
                  <li>
                    <strong>Builder:</strong> Richmond American Homes
                  </li>
                  <li>
                    <strong>Home Styles:</strong> Ranch-style, Single-story
                  </li>
                  <li>
                    <strong>Square Footage:</strong> 1,950-2,240 sq ft
                  </li>
                  <li>
                    <strong>Bedrooms:</strong> 3-4
                  </li>
                  <li>
                    <strong>Price Range:</strong> $450,000-$650,000
                  </li>
                  <li>
                    <strong>Market Status:</strong> Resale
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.currentPropertyListings}>
        <div className={styles.container}>
          <div className={styles.listingsSectionHeader}>
            <h2>Current Property Listings</h2>
            <p className={styles.listingsSubtitle}>Browse our available homes in Las Vegas and surrounding areas</p>
          </div>

          <div className={styles.listingsCardsGrid}>
            <div className={styles.listingsCard}>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h3>Featured Properties</h3>
              <p>Discover your dream home with our curated selection of available properties.</p>
              <ul className={styles.propertiesFeatures}>
                <li>Modern new construction homes</li>
                <li>3 Bedrooms, 2 Bathrooms</li>
                <li>Resort-style amenities</li>
                <li>Prime Las Vegas locations</li>
              </ul>
              <Link href="/homes-for-sale" className={`${styles.cardButton} ${styles.cardButtonPrimary}`}>
                View All Listings
              </Link>
            </div>

            <div className={styles.listingsCard}>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3>Contact Dr. Jan Duffy</h3>
              <p>Your trusted real estate agent for Las Vegas properties.</p>
              <div className={styles.contactInfo}>
                <p className={styles.contactItem}>
                  <strong>Phone:</strong>
                  <a href={`tel:${SITE_CONFIG.phoneTel}`}>{SITE_CONFIG.phone}</a>
                </p>
                <p className={styles.contactItem}>
                  <strong>Email:</strong>
                  <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>
                </p>
              </div>
              <Link href="/contact" className={`${styles.cardButton} ${styles.cardButtonSecondary}`}>
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <RealScoutListings />

      <section className={styles.services}>
        <div className={styles.container}>
          <h2>Complete Real Estate Services for Buyers &amp; Sellers</h2>

          <div className={styles.servicesSplit}>
            <div className={`${styles.servicesColumn} ${styles.buyerServices}`}>
              <h3>For Home Buyers</h3>
              <div className={styles.serviceList}>
                <div className={styles.serviceItem}>
                  <span className={styles.check}>✓</span>
                  <div>
                    <strong>Free Home Search &amp; Alerts</strong>
                    <p>Get instant notifications when new homes match your criteria</p>
                  </div>
                </div>
                <div className={styles.serviceItem}>
                  <span className={styles.check}>✓</span>
                  <div>
                    <strong>Expert Negotiation</strong>
                    <p>Save thousands with proven negotiation strategies</p>
                  </div>
                </div>
                <div className={styles.serviceItem}>
                  <span className={styles.check}>✓</span>
                  <div>
                    <strong>Full Buyer Representation</strong>
                    <p>From search to closing, we handle everything</p>
                  </div>
                </div>
              </div>
              <Link href="/buy-a-home" className={styles.serviceCta}>
                Start Your Home Search →
              </Link>
            </div>

            <div className={`${styles.servicesColumn} ${styles.sellerServices}`}>
              <h3>For Home Sellers</h3>
              <div className={styles.serviceList}>
                <div className={styles.serviceItem}>
                  <span className={styles.check}>✓</span>
                  <div>
                    <strong>Free Home Valuation</strong>
                    <p>Know your home&apos;s true market value instantly</p>
                  </div>
                </div>
                <div className={styles.serviceItem}>
                  <span className={styles.check}>✓</span>
                  <div>
                    <strong>Professional Marketing</strong>
                    <p>Professional photos, staging, and multi-channel promotion</p>
                  </div>
                </div>
                <div className={styles.serviceItem}>
                  <span className={styles.check}>✓</span>
                  <div>
                    <strong>Strategic Pricing</strong>
                    <p>Data-driven pricing to sell faster for more money</p>
                  </div>
                </div>
              </div>
              <Link href="/sell-your-home" className={styles.serviceCta}>
                Get Your Free Valuation →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.mapSection}>
        <GoogleMap />
      </section>

      <RelatedPages currentPage="/" />

      <CTASection />
      <StickyContactButton />
    </div>
  )
}
