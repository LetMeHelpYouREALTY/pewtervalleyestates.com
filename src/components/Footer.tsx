import Link from "next/link"
import { SITE_CONFIG } from "@/lib/site-contact"
import styles from "./Footer.module.css"

const primaryLinks = [
  { label: "Buy a Home", href: "/buy-a-home" },
  { label: "Sell Your Home", href: "/sell-your-home" },
  { label: "Homes for Sale", href: "/homes-for-sale" },
  { label: "Home Valuation", href: "/home-valuation" },
  { label: "Active Listings", href: "/listings" },
]

const resourceLinks = [
  { label: "Neighborhood Guide", href: "/neighborhood-guide" },
  { label: "Neighborhood insights (89183)", href: "/neighborhood-insights" },
  { label: "Pewter: nearby amenities", href: "/pewter-valley-estates/amenities" },
  { label: "Silverado: commute & transport", href: "/silverado-ranch/getting-around" },
  { label: "Silverado Ranch (Henderson)", href: "/silverado-ranch" },
  { label: "Southwest Las Vegas", href: "/southwest-las-vegas" },
  { label: "Market Analysis", href: "/market-analysis" },
  { label: "Investment Properties", href: "/investment-properties" },
  { label: "FAQ", href: "/faq" },
]

const aboutLinks = [
  { label: "About Dr. Jan Duffy", href: "/about" },
  { label: "Buyer & Seller Services", href: "/buyer-seller-services" },
  { label: "Meet Your Realtor", href: "/dr-jan-duffy" },
  { label: "Google Reviews", href: "/google-reviews" },
  { label: "Contact", href: "/contact" },
  { label: "Virtual Tours", href: "/richmond-demo" },
]

const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.city}, ${SITE_CONFIG.address.stateAbbr} ${SITE_CONFIG.address.zipCode}`
)}`

export function Footer() {
  const year = new Date().getFullYear()
  const socialLinks = [
    { label: "Facebook", href: SITE_CONFIG.social.facebook },
    { label: "Instagram", href: SITE_CONFIG.social.instagram },
    { label: "LinkedIn", href: SITE_CONFIG.social.linkedin },
    { label: "Twitter", href: SITE_CONFIG.social.twitter },
  ].filter((l) => Boolean(l.href))

  return (
    <footer className={styles.siteFooter}>
      <div className={styles.footerCta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <div>
              <p className={styles.ctaEyebrow}>Luxury Las Vegas Real Estate</p>
              <h2>Ready to explore Silverado Ranch &amp; the Las Vegas Valley?</h2>
              <p>
                Schedule a private consultation with Dr. Jan Duffy and explore the most exclusive
                homes in Southwest Las Vegas.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <a
                href={`tel:${SITE_CONFIG.phoneTel}`}
                className={`${styles.ctaButton} ${styles.primary}`}
              >
                <span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden
                  >
                    <title>Call</title>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Call {SITE_CONFIG.phone}
                </span>
              </a>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.ctaButton} ${styles.outline}`}
              >
                <span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden
                  >
                    <title>Directions</title>
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Directions
                </span>
              </a>
              {SITE_CONFIG.googleReviewsUrl ? (
                <a
                  href={SITE_CONFIG.googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.ctaButton} ${styles.ghost}`}
                >
                  <span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden
                    >
                      <title>Google reviews</title>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    View Google Reviews
                  </span>
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerMain}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div className={styles.footerBrand}>
              <p className="footer-tagline">{SITE_CONFIG.businessName}</p>
              <h3>Dr. Jan Duffy | Luxury Real Estate Advisor</h3>
              <p className={styles.footerDescription}>
                Boutique representation for buyers, sellers, and investors seeking premium Southwest
                Las Vegas properties. Personal service, data-backed strategies, and unmatched
                neighborhood expertise.
              </p>
              <div className={styles.footerContact}>
                <div>
                  <span className={styles.contactLabel}>Visit</span>
                  <p>
                    {SITE_CONFIG.address.street}
                    <br />
                    {SITE_CONFIG.address.city}, {SITE_CONFIG.address.stateAbbr}{" "}
                    {SITE_CONFIG.address.zipCode}
                  </p>
                </div>
                <div>
                  <span className={styles.contactLabel}>Call</span>
                  <a href={`tel:${SITE_CONFIG.phoneTel}`}>{SITE_CONFIG.phone}</a>
                </div>
                <div>
                  <span className={styles.contactLabel}>Email</span>
                  <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>
                </div>
                <div>
                  <span className={styles.contactLabel}>Hours</span>
                  <p>Mon–Fri 9am‑6pm · Sat 10am‑4pm</p>
                </div>
              </div>
              <div className={styles.socialLinks}>
                {socialLinks.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className={styles.footerLinks}>
              <h4>Buy &amp; Sell</h4>
              <ul>
                {primaryLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.footerLinks}>
              <h4>Resources</h4>
              <ul>
                {resourceLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.footerLinks}>
              <h4>About</h4>
              <ul>
                {aboutLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.container}>
          <div className={styles.footerBottomContent}>
            <p>
              © {year} {SITE_CONFIG.businessName} · Las Vegas &amp; Henderson Real Estate
            </p>
            <p className="footer-legal">
              Nevada license {SITE_CONFIG.licenseNumber} · Equal Housing Opportunity ·{" "}
              {SITE_CONFIG.brokerage.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
