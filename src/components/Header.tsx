"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { SITE_CONFIG } from "@/lib/site-contact"
import styles from "./Header.module.css"

export function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const isActive = (path: string) => pathname === path
  const starts = (prefix: string) => pathname.startsWith(prefix)

  return (
    <header className={styles.siteHeader}>
      <div className={styles.headerContainer}>
        <Link href="/" className={styles.brand} onClick={() => setMobileOpen(false)}>
          <span className={styles.brandName}>{SITE_CONFIG.businessName}</span>
          <span className={styles.brandTagline}>Dr. Jan Duffy, Realtor</span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Main">
          <ul>
            <li className={isActive("/") ? styles.navItemActive : ""}>
              <Link href="/">Home</Link>
            </li>
            <li
              className={`${styles.hasDropdown} ${starts("/homes") || ["/buy-a-home", "/buyer-checklist", "/listings"].includes(pathname) ? styles.navItemActive : ""}`}
            >
              <Link href="/homes-for-sale">Buy</Link>
              <ul className={styles.dropdown}>
                <li>
                  <Link href="/homes-for-sale">Homes for Sale</Link>
                </li>
                <li>
                  <Link href="/buy-a-home">Buyer&apos;s Guide</Link>
                </li>
                <li>
                  <Link href="/buyer-checklist">Buyer Checklist</Link>
                </li>
                <li>
                  <Link href="/listings">All Listings</Link>
                </li>
                <li>
                  <Link href="/investment-properties">Investment Properties</Link>
                </li>
              </ul>
            </li>
            <li
              className={`${styles.hasDropdown} ${["/sell-your-home", "/home-valuation", "/selling-checklist", "/market-analysis"].includes(pathname) ? styles.navItemActive : ""}`}
            >
              <Link href="/sell-your-home">Sell</Link>
              <ul className={styles.dropdown}>
                <li>
                  <Link href="/sell-your-home">Sell Your Home</Link>
                </li>
                <li>
                  <Link href="/home-valuation">Free Home Valuation</Link>
                </li>
                <li>
                  <Link href="/market-analysis">Market Analysis</Link>
                </li>
                <li>
                  <Link href="/selling-checklist">Selling Checklist</Link>
                </li>
              </ul>
            </li>
            <li
              className={`${styles.hasDropdown} ${starts("/neighborhood") || starts("/pewter-valley-estates") || pathname === "/southwest-las-vegas" || starts("/silverado-ranch") || pathname === "/las-vegas-relocation-guide" ? styles.navItemActive : ""}`}
            >
              <Link href="/neighborhood">Areas</Link>
              <ul className={styles.dropdown}>
                <li>
                  <Link href="/neighborhood">Pewter Valley Estates</Link>
                </li>
                <li>
                  <Link href="/silverado-ranch">Silverado Ranch (Henderson)</Link>
                </li>
                <li>
                  <Link href="/southwest-las-vegas">Southwest Las Vegas</Link>
                </li>
                <li>
                  <Link href="/neighborhood-guide">Neighborhood Guide</Link>
                </li>
                <li>
                  <Link href="/photos">Community Photos</Link>
                </li>
                <li>
                  <Link href="/las-vegas-relocation-guide">Relocation Guide</Link>
                </li>
                <li>
                  <Link href="/pewter-valley-estates/amenities">Nearby amenities (Pewter)</Link>
                </li>
                <li>
                  <Link href="/silverado-ranch/getting-around">Commute &amp; transport</Link>
                </li>
                <li>
                  <Link href="/silverado-ranch/attractions">Attractions &amp; day trips</Link>
                </li>
                <li>
                  <Link href="/silverado-ranch/history">Silverado Ranch history</Link>
                </li>
              </ul>
            </li>
            <li
              className={
                isActive("/about") || isActive("/dr-jan-duffy") ? styles.navItemActive : ""
              }
            >
              <Link href="/about">About</Link>
            </li>
            <li className={isActive("/contact") ? styles.navItemActive : ""}>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <a href={`tel:${SITE_CONFIG.phoneTel}`} className={styles.headerCta}>
          <span className={styles.ctaIcon} aria-hidden>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <title>Call</title>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </span>
          <span className={styles.ctaText}>{SITE_CONFIG.phone}</span>
        </a>

        <button
          type="button"
          className={styles.mobileToggle}
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          <span className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ""}`} />
        </button>
      </div>

      {mobileOpen ? (
        <nav className={styles.mobileNav} aria-label="Mobile">
          <ul>
            <li>
              <Link href="/" onClick={() => setMobileOpen(false)}>
                Home
              </Link>
            </li>
            <li className={styles.mobileSection}>
              <span className={styles.sectionTitle}>Buy a Home</span>
              <ul>
                <li>
                  <Link href="/homes-for-sale" onClick={() => setMobileOpen(false)}>
                    Homes for Sale
                  </Link>
                </li>
                <li>
                  <Link href="/buy-a-home" onClick={() => setMobileOpen(false)}>
                    Buyer&apos;s Guide
                  </Link>
                </li>
                <li>
                  <Link href="/buyer-checklist" onClick={() => setMobileOpen(false)}>
                    Buyer Checklist
                  </Link>
                </li>
                <li>
                  <Link href="/listings" onClick={() => setMobileOpen(false)}>
                    All Listings
                  </Link>
                </li>
                <li>
                  <Link href="/investment-properties" onClick={() => setMobileOpen(false)}>
                    Investment Properties
                  </Link>
                </li>
              </ul>
            </li>
            <li className={styles.mobileSection}>
              <span className={styles.sectionTitle}>Sell Your Home</span>
              <ul>
                <li>
                  <Link href="/sell-your-home" onClick={() => setMobileOpen(false)}>
                    Sell Your Home
                  </Link>
                </li>
                <li>
                  <Link href="/selling-checklist" onClick={() => setMobileOpen(false)}>
                    Selling Checklist
                  </Link>
                </li>
                <li>
                  <Link href="/home-valuation" onClick={() => setMobileOpen(false)}>
                    Free Home Valuation
                  </Link>
                </li>
                <li>
                  <Link href="/market-analysis" onClick={() => setMobileOpen(false)}>
                    Market Analysis
                  </Link>
                </li>
              </ul>
            </li>
            <li className={styles.mobileSection}>
              <span className={styles.sectionTitle}>Explore Areas</span>
              <ul>
                <li>
                  <Link href="/neighborhood" onClick={() => setMobileOpen(false)}>
                    Pewter Valley Estates
                  </Link>
                </li>
                <li>
                  <Link href="/silverado-ranch" onClick={() => setMobileOpen(false)}>
                    Silverado Ranch (Henderson)
                  </Link>
                </li>
                <li>
                  <Link href="/southwest-las-vegas" onClick={() => setMobileOpen(false)}>
                    Southwest Las Vegas
                  </Link>
                </li>
                <li>
                  <Link href="/neighborhood-guide" onClick={() => setMobileOpen(false)}>
                    Neighborhood Guide
                  </Link>
                </li>
                <li>
                  <Link href="/las-vegas-relocation-guide" onClick={() => setMobileOpen(false)}>
                    Relocation Guide
                  </Link>
                </li>
                <li>
                  <Link href="/photos" onClick={() => setMobileOpen(false)}>
                    Community Photos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pewter-valley-estates/amenities"
                    onClick={() => setMobileOpen(false)}
                  >
                    Nearby amenities (Pewter)
                  </Link>
                </li>
                <li>
                  <Link href="/silverado-ranch/getting-around" onClick={() => setMobileOpen(false)}>
                    Commute &amp; transport
                  </Link>
                </li>
                <li>
                  <Link href="/silverado-ranch/attractions" onClick={() => setMobileOpen(false)}>
                    Attractions &amp; day trips
                  </Link>
                </li>
                <li>
                  <Link href="/silverado-ranch/history" onClick={() => setMobileOpen(false)}>
                    Silverado Ranch history
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/about" onClick={() => setMobileOpen(false)}>
                About Dr. Jan Duffy
              </Link>
            </li>
            <li>
              <Link href="/faq" onClick={() => setMobileOpen(false)}>
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
          <a
            href={`tel:${SITE_CONFIG.phoneTel}`}
            className={styles.mobileCta}
            onClick={() => setMobileOpen(false)}
          >
            <span className={styles.mobileCtaIcon} aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <title>Call</title>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>
            Call {SITE_CONFIG.phone}
          </a>
        </nav>
      ) : null}
    </header>
  )
}
