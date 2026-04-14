"use client"

import { trackEvent } from "@/lib/analytics"
import styles from "./FeaturesSection.module.css"

const features = [
  {
    icon: "home",
    title: "Modern Home Designs",
    description:
      "Contemporary floor plans with open concepts, high ceilings, and premium finishes throughout.",
    highlight: "50+ Floor Plans",
  },
  {
    icon: "pool",
    title: "Resort-Style Amenities",
    description:
      "Community pool, fitness center, clubhouse, and walking trails for an active lifestyle.",
    highlight: "5-Star Amenities",
  },
  {
    icon: "mapPin",
    title: "Prime Las Vegas Location",
    description:
      "Convenient access to shopping, dining, entertainment, and major employment centers.",
    highlight: "15 Min to Strip",
  },
  {
    icon: "leaf",
    title: "Energy Efficient",
    description:
      "Built with the latest green technology to reduce utility costs and environmental impact.",
    highlight: "LEED Certified",
  },
  {
    icon: "shield",
    title: "10-Year Warranty",
    description: "Comprehensive warranty coverage on all major systems and structural components.",
    highlight: "Peace of Mind",
  },
  {
    icon: "dollar",
    title: "Competitive Pricing",
    description:
      "Exceptional value with flexible financing options and special incentives available.",
    highlight: "From $350K",
  },
]

function FeatureIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "home":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <title>Home</title>
          <path d="M3 11l9-8 9 8" />
          <path d="M5 10v10h14V10" />
          <path d="M9 20v-6h6v6" />
        </svg>
      )
    case "pool":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <title>Pool</title>
          <path d="M7 4v9" />
          <path d="M17 4v9" />
          <path d="M7 4h10" />
          <path d="M3 16c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2" />
          <path d="M3 20c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2" />
        </svg>
      )
    case "mapPin":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <title>Location</title>
          <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      )
    case "leaf":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <title>Energy efficient</title>
          <path d="M5 21c4-1 7-4 8-8" />
          <path d="M19 3C9 3 5 8 5 14c0 4 3 7 7 7 6 0 11-4 11-14V3h-4z" />
        </svg>
      )
    case "shield":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <title>Warranty</title>
          <path d="M12 3l8 4v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V7l8-4z" />
        </svg>
      )
    case "dollar":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <title>Pricing</title>
          <line x1="12" y1="2" x2="12" y2="22" />
          <path d="M17 6H9.5a3.5 3.5 0 0 0 0 7H14.5a3.5 3.5 0 0 1 0 7H7" />
        </svg>
      )
    default:
      return null
  }
}

export function FeaturesSection() {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Why Choose Pewter Valley Estates?</h2>
          <p className={styles.sectionSubtitle}>
            Experience the perfect blend of luxury, comfort, and convenience in one of Las
            Vegas&apos; most desirable communities.
          </p>
        </div>
        <div className={styles.featuresGrid}>
          {features.map((feature) => (
            <button
              type="button"
              key={feature.title}
              className={styles.featureCard}
              onClick={() =>
                trackEvent("feature_click", { feature: feature.title, section: "features" })
              }
            >
              <div className={styles.featureIcon}>
                <FeatureIcon icon={feature.icon} />
              </div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
                <div className={styles.featureHighlight}>{feature.highlight}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
