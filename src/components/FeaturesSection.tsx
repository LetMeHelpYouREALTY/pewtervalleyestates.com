"use client"

import { trackEvent } from "@/lib/analytics"
import styles from "./FeaturesSection.module.css"

const features = [
  {
    icon: "🏠",
    title: "Modern Home Designs",
    description: "Contemporary floor plans with open concepts, high ceilings, and premium finishes throughout.",
    highlight: "50+ Floor Plans",
  },
  {
    icon: "🏊‍♀️",
    title: "Resort-Style Amenities",
    description: "Community pool, fitness center, clubhouse, and walking trails for an active lifestyle.",
    highlight: "5-Star Amenities",
  },
  {
    icon: "📍",
    title: "Prime Las Vegas Location",
    description: "Convenient access to shopping, dining, entertainment, and major employment centers.",
    highlight: "15 Min to Strip",
  },
  {
    icon: "🌱",
    title: "Energy Efficient",
    description: "Built with the latest green technology to reduce utility costs and environmental impact.",
    highlight: "LEED Certified",
  },
  {
    icon: "🛡️",
    title: "10-Year Warranty",
    description: "Comprehensive warranty coverage on all major systems and structural components.",
    highlight: "Peace of Mind",
  },
  {
    icon: "💰",
    title: "Competitive Pricing",
    description: "Exceptional value with flexible financing options and special incentives available.",
    highlight: "From $350K",
  },
]

export function FeaturesSection() {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Why Choose Pewter Valley Estates?</h2>
          <p className={styles.sectionSubtitle}>
            Experience the perfect blend of luxury, comfort, and convenience in one of Las Vegas&apos; most desirable
            communities.
          </p>
        </div>
        <div className={styles.featuresGrid}>
          {features.map((feature) => (
            <div
              key={feature.title}
              className={styles.featureCard}
              role="button"
              tabIndex={0}
              onClick={() => trackEvent("feature_click", { feature: feature.title, section: "features" })}
              onKeyDown={(e) => {
                if (e.key === "Enter") trackEvent("feature_click", { feature: feature.title, section: "features" })
              }}
            >
              <div className={styles.featureIcon}>
                <span className={styles.iconEmoji}>{feature.icon}</span>
              </div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
                <div className={styles.featureHighlight}>{feature.highlight}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
