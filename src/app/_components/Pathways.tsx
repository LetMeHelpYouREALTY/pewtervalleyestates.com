"use client"

import Link from "next/link"
import { trackEvent } from "@/lib/analytics"
import { SITE_CONFIG } from "@/lib/site-contact"
import styles from "../page.module.css"

function handleCtaClick(action: string, type: "buyer" | "seller") {
  trackEvent("homepage_cta_click", {
    action,
    type,
    location: "pathways",
  })
}

export function Pathways() {
  return (
    <section className={styles.pathways}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Choose Your Path</h2>
        <div className={styles.buyerSellerSplit}>
          <div className={styles.pathCard}>
            <div className={styles.pathIcon} aria-hidden>
              🏠
            </div>
            <h3 className={styles.pathHeading}>I Want to Buy a Home</h3>
            <p className={styles.pathDescription}>
              Get instant access to all available homes in Pewter Valley Estates. Expert guidance from search to closing.
            </p>
            <ul className={styles.pathBenefits}>
              <li>✓ Access to all MLS listings</li>
              <li>✓ Free home search &amp; alerts</li>
              <li>✓ Expert negotiation</li>
              <li>✓ Full buyer representation</li>
            </ul>
            <div className={styles.pathCtas}>
              <Link
                href="/homes-for-sale"
                className={styles.ctaPrimary}
                onClick={() => handleCtaClick("view_homes", "buyer")}
              >
                View Available Homes
              </Link>
              <a
                href={`tel:${SITE_CONFIG.phoneTel}`}
                className={styles.ctaPhone}
                onClick={() => handleCtaClick("phone", "buyer")}
              >
                📞 Call {SITE_CONFIG.phone}
              </a>
            </div>
          </div>

          <div className={styles.pathCard}>
            <div className={styles.pathIcon} aria-hidden>
              💰
            </div>
            <h3 className={styles.pathHeading}>I Want to Sell My Home</h3>
            <p className={styles.pathDescription}>
              Get a free home valuation and expert marketing to sell faster and for more money.
            </p>
            <ul className={styles.pathBenefits}>
              <li>✓ Free home valuation</li>
              <li>✓ Professional marketing</li>
              <li>✓ Expert pricing strategy</li>
              <li>✓ Faster sales, higher prices</li>
            </ul>
            <div className={styles.pathCtas}>
              <Link
                href="/home-valuation"
                className={styles.ctaPrimary}
                onClick={() => handleCtaClick("valuation", "seller")}
              >
                Get Free Valuation
              </Link>
              <a
                href={`tel:${SITE_CONFIG.phoneTel}`}
                className={styles.ctaPhone}
                onClick={() => handleCtaClick("phone", "seller")}
              >
                📞 Call {SITE_CONFIG.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
