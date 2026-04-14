import Link from "next/link"
import { pageRelationships } from "@/lib/related-pages-data"
import styles from "./RelatedPages.module.css"

type Props = {
  currentPage: string
  variant?: "default" | "compact" | "sidebar"
}

export function RelatedPages({ currentPage, variant = "default" }: Props) {
  const data = pageRelationships[currentPage] ?? pageRelationships["/"]
  const relatedPages = data?.related ?? []

  if (relatedPages.length === 0) return null

  const variantClass = variant === "compact" ? styles.compact : variant === "sidebar" ? styles.sidebar : ""

  return (
    <section className={`${styles.relatedPages} ${variantClass}`.trim()}>
      <div className={styles.relatedContainer}>
        <h3 className={styles.relatedTitle}>Explore More</h3>
        <div className={styles.relatedGrid}>
          {relatedPages.map((page) => (
            <Link key={page.href} href={page.href} className={styles.relatedCard}>
              <span className={styles.relatedLabel}>{page.label}</span>
              <span className={styles.relatedDescription}>{page.description}</span>
              <span className={styles.relatedArrow} aria-hidden>
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
