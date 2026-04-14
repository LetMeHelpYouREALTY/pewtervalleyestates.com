"use client"

import { SITE_CONFIG } from "@/lib/site-contact"
import { trackEvent } from "@/lib/analytics"
import styles from "./NAPDisplay.module.css"

type Props = {
  showGoogleReviewsLink?: boolean
  showDirections?: boolean
  variant?: "default" | "compact" | "inline"
}

const mapDest = encodeURIComponent(
  `${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.city}, ${SITE_CONFIG.address.stateAbbr} ${SITE_CONFIG.address.zipCode}`,
)

export function NAPDisplay({
  showGoogleReviewsLink = true,
  showDirections = true,
  variant = "default",
}: Props) {
  const rootClass =
    variant === "compact" ? `${styles.napDisplay} ${styles.napCompact}` : variant === "inline" ? `${styles.napDisplay} ${styles.napInline}` : styles.napDisplay

  return (
    <div className={rootClass}>
      <div className={styles.napContent}>
        <div className={styles.napItem}>
          <div className={styles.napIcon} aria-hidden>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <div className={styles.napDetails}>
            <div className={styles.napLabel}>Address</div>
            <div className={styles.napValue}>
              {SITE_CONFIG.address.street}
              <br />
              {SITE_CONFIG.address.city}, {SITE_CONFIG.address.stateAbbr} {SITE_CONFIG.address.zipCode}
            </div>
          </div>
        </div>

        <div className={styles.napItem}>
          <div className={styles.napIcon} aria-hidden>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <div className={styles.napDetails}>
            <div className={styles.napLabel}>Phone</div>
            <div className={styles.napValue}>
              <a
                href={`tel:${SITE_CONFIG.phoneTel}`}
                onClick={() => trackEvent("phone_click", { phone_number: SITE_CONFIG.phone, section: "nap_display" })}
              >
                {SITE_CONFIG.phone}
              </a>
            </div>
          </div>
        </div>

        <div className={styles.napItem}>
          <div className={styles.napIcon} aria-hidden>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          <div className={styles.napDetails}>
            <div className={styles.napLabel}>Email</div>
            <div className={styles.napValue}>
              <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>
            </div>
          </div>
        </div>
      </div>

      {showDirections || showGoogleReviewsLink ? (
        <div className={styles.napActions}>
          {showDirections ? (
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${mapDest}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.napActionButton}
              onClick={() => trackEvent("directions_click", { address: SITE_CONFIG.address.street })}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              Directions
            </a>
          ) : null}
          {showGoogleReviewsLink && SITE_CONFIG.googleBusinessProfile ? (
            <a
              href={SITE_CONFIG.googleBusinessProfile}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.napActionButton}
              onClick={() => trackEvent("google_reviews_click", { source: "nap_display" })}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              View Google Reviews
            </a>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}
