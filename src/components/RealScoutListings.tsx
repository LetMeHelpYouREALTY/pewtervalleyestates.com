"use client"

import Script from "next/script"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { trackEvent } from "@/lib/analytics"
import styles from "./RealScoutListings.module.css"

const AGENT = "QWdlbnQtMjI1MDUw"

export function RealScoutListings() {
  const hostRef = useRef<HTMLDivElement>(null)
  const [scriptReady, setScriptReady] = useState(false)

  useEffect(() => {
    if (!scriptReady) return

    trackEvent("realscout_widget_loaded", {
      agent_id: AGENT,
      listing_status: "For Sale",
      property_types: "SFR,MF,TC",
    })

    function onListingClick(e: Event) {
      const ce = e as CustomEvent
      trackEvent("realscout_listing_click", {
        listing_id: (ce.detail as { listingId?: string })?.listingId ?? "unknown",
        agent_id: AGENT,
      })
    }
    function onListingView(e: Event) {
      const ce = e as CustomEvent
      trackEvent("realscout_listing_view", {
        listing_id: (ce.detail as { listingId?: string })?.listingId ?? "unknown",
        agent_id: AGENT,
      })
    }
    document.addEventListener("realscout-listing-click", onListingClick)
    document.addEventListener("realscout-listing-view", onListingView)

    const host = hostRef.current
    if (!host) {
      return () => {
        document.removeEventListener("realscout-listing-click", onListingClick)
        document.removeEventListener("realscout-listing-view", onListingView)
      }
    }

    host.replaceChildren()

    const el = document.createElement("realscout-office-listings")
    el.setAttribute("agent-encoded-id", AGENT)
    el.setAttribute("sort-order", "STATUS_AND_SIGNIFICANT_CHANGE")
    el.setAttribute("listing-status", "For Sale")
    el.setAttribute("property-types", "SFR,MF,TC")
    el.className = styles.realscoutWidget
    host.appendChild(el)

    return () => {
      document.removeEventListener("realscout-listing-click", onListingClick)
      document.removeEventListener("realscout-listing-view", onListingView)
      try {
        host.removeChild(el)
      } catch {
        /* ignore */
      }
    }
  }, [scriptReady])

  return (
    <>
      <Script
        src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
        strategy="afterInteractive"
        onLoad={() => setScriptReady(true)}
      />
      <section className={styles.realscoutSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Live MLS Listings | Pewter Valley Estates &amp; Southwest Las Vegas</h2>
            <p>
              Real-time property search with expert guidance from Dr. Jan Duffy. Updated every 15 minutes with the
              latest homes in zip code 89183.
            </p>
          </div>
          <div className={styles.realscoutContainer}>
            <div ref={hostRef} className={styles.realscoutHost} />
          </div>
          <div className={styles.realscoutFooter}>
            <p>
              <strong>Need help finding the perfect home?</strong>{" "}
              <Link href="/contact" className={styles.contactLink}>
                Contact Dr. Jan Duffy
              </Link>{" "}
              for personalized assistance.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
