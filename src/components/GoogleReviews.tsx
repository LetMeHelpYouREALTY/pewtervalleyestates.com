import { SITE_CONFIG } from "@/lib/site-contact"
import styles from "./GoogleReviews.module.css"

export function GoogleReviews() {
  return (
    <section className={styles.googleReviews}>
      <div className={styles.container}>
        <div className={styles.reviewsHeader}>
          <h2>Google Reviews</h2>
          <p>See what our clients say about working with Dr. Jan Duffy</p>
        </div>

        <div className={styles.reviewsActions}>
          <a
            href={SITE_CONFIG.googleReviewsUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.reviewButton} ${styles.primary}`}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Write a Review on Google
          </a>
          {SITE_CONFIG.googleBusinessProfile ? (
            <a
              href={SITE_CONFIG.googleBusinessProfile}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.reviewButton} ${styles.secondary}`}
            >
              View All Google Reviews
            </a>
          ) : null}
        </div>

        <div className={styles.reviewsPlaceholder}>
          <p>Reviews will be displayed here. Connect your Google Business Profile to show live reviews.</p>
        </div>
      </div>
    </section>
  )
}
