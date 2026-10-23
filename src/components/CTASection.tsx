"use client"

import Link from "next/link"
import { CalendlyInlineWidget, CalendlyPopupLink } from "@/components/CalendlyWidgets"
import { trackEvent } from "@/lib/analytics"
import { SITE_CONFIG } from "@/lib/site-contact"
import styles from "./CTASection.module.css"

export function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.ctaContent}>
          <div className={styles.ctaText}>
            <h2 className={styles.ctaTitle}>Ready to Find Your Dream Home?</h2>
            <p className={styles.ctaSubtitle}>
              Join the growing community at Pewter Valley Estates. Limited homes available —
              don&apos;t miss your chance to own a piece of Las Vegas luxury.
            </p>
            <div className={styles.ctaFeatures}>
              <div className={styles.feature}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden
                >
                  <title>Checkmark</title>
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22,4 12,14.01 9,11.01" />
                </svg>
                <span>No Obligation Consultation</span>
              </div>
              <div className={styles.feature}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden
                >
                  <title>Checkmark</title>
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22,4 12,14.01 9,11.01" />
                </svg>
                <span>Flexible Financing Options</span>
              </div>
              <div className={styles.feature}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden
                >
                  <title>Checkmark</title>
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22,4 12,14.01 9,11.01" />
                </svg>
                <span>Move-In Ready Homes</span>
              </div>
            </div>
          </div>

          <div className={styles.ctaForm}>
            <div className={styles.formHeader}>
              <h3>Book Your Free Information Session</h3>
              <p>Schedule time to review floor plans, pricing, and community details</p>
            </div>
            <CalendlyInlineWidget title="Schedule your free consultation" />
            <div className={styles.formFooter}>
              <p>
                Booking through Calendly connects you directly with {SITE_CONFIG.name}.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ctaActions}>
          <a
            href={`tel:${SITE_CONFIG.phoneTel}`}
            className={`${styles.actionBtn} ${styles.primary}`}
            onClick={() => trackEvent("cta_click", { action: "phone", section: "final_cta" })}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <title>Call</title>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call {SITE_CONFIG.phone}
          </a>
          <Link
            href="/richmond-demo"
            className={`${styles.actionBtn} ${styles.secondary}`}
            onClick={() =>
              trackEvent("cta_click", { action: "virtual_tour", section: "final_cta" })
            }
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <title>Virtual tour</title>
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M21 12H9" />
            </svg>
            Take Virtual Tour
          </Link>
          <CalendlyPopupLink
            className={`${styles.actionBtn} ${styles.outline}`}
            label="Schedule Tour"
            url="https://calendly.com/drjanduffy/15min"
          />
          <Link
            href="/contact"
            className={`${styles.actionBtn} ${styles.outline}`}
            onClick={() => trackEvent("cta_click", { action: "schedule", section: "final_cta" })}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <title>Schedule tour</title>
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Contact Form
          </Link>
        </div>
      </div>
    </section>
  )
}
