import { SITE_CONFIG } from "@/lib/site-contact"
import styles from "./GoogleMap.module.css"

type Props = {
  height?: string
  width?: string
  zoom?: number
}

export function GoogleMap({ height = "400px", width = "100%", zoom = 15 }: Props) {
  const mapAddress = `${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.city}, ${SITE_CONFIG.address.stateAbbr} ${SITE_CONFIG.address.zipCode}`
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(mapAddress)}&output=embed&zoom=${zoom}`
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapAddress)}`

  return (
    <section className={styles.googleMapSection}>
      <div className={styles.container}>
        <div className={styles.mapHeader}>
          <h2>Find Us</h2>
          <p>Visit our location in Las Vegas, Nevada</p>
        </div>

        <div className={styles.mapContainer}>
          <iframe
            src={mapUrl}
            width={width}
            height={height}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Pewter Valley Estates Location"
            className={styles.mapIframe}
          />
        </div>

        <div className={styles.mapActions}>
          <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className={styles.mapButton}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Get Directions
          </a>
          <a href={`tel:${SITE_CONFIG.phoneTel}`} className={styles.mapButton}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call {SITE_CONFIG.phone}
          </a>
        </div>

        <div className={styles.addressInfo}>
          <div className={styles.addressCard}>
            <h3>Address</h3>
            <p>
              {SITE_CONFIG.address.street}
              <br />
              {SITE_CONFIG.address.city}, {SITE_CONFIG.address.stateAbbr} {SITE_CONFIG.address.zipCode}
            </p>
          </div>
          <div className={styles.addressCard}>
            <h3>Phone</h3>
            <p>
              <a href={`tel:${SITE_CONFIG.phoneTel}`}>{SITE_CONFIG.phone}</a>
            </p>
          </div>
          <div className={styles.addressCard}>
            <h3>Email</h3>
            <p>
              <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
