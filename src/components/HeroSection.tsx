"use client"

import Link from "next/link"
import { trackEvent } from "@/lib/analytics"
import styles from "./HeroSection.module.css"

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <img
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop&q=80"
          alt="Pewter Valley Estates - Beautiful Home Exterior"
          className={styles.heroImage}
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
        <div className={styles.heroOverlay} />
      </div>

      <div className={styles.heroContent}>
        <div className={styles.container}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Pewter Valley Estates Real Estate | Buy, Sell & Invest with{" "}
              <span className={styles.highlight}>Dr. Jan Duffy</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Expert real estate services for Pewter Valley Estates in Southwest Las Vegas (89183). Specializing in resale
              homes, market analysis, and investment properties. Located at Pyle Avenue and S Rancho Destino Rd.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>Homes Available</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>3-5</span>
                <span className={styles.statLabel}>Bedrooms</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>2-4</span>
                <span className={styles.statLabel}>Bathrooms</span>
              </div>
            </div>
            <div className={styles.heroActions}>
              <Link
                href="/richmond-demo"
                className={`${styles.ctaButton} ${styles.ctaPrimary}`}
                onClick={() => trackEvent("hero_cta_click", { action: "virtual_tour", section: "hero" })}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M21 12H9" />
                </svg>
                Take Virtual Tour
              </Link>
              <Link
                href="/contact"
                className={`${styles.ctaButton} ${styles.ctaSecondary}`}
                onClick={() => trackEvent("hero_cta_click", { action: "schedule_tour", section: "hero" })}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
                Schedule Tour
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator} aria-hidden>
        <div className={styles.scrollArrow} />
      </div>
    </section>
  )
}
