import Link from "next/link"
import { SITE_CONFIG } from "@/lib/site-contact"
import styles from "./not-found.module.css"

export default function NotFound() {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <p className={styles.kicker}>404</p>
        <h1 className={styles.title}>Page not found</h1>
        <p className={styles.lead}>
          The page you are looking for may have moved. Start from the homepage or contact{" "}
          <a href={`tel:${SITE_CONFIG.phoneTel}`}>{SITE_CONFIG.phone}</a>.
        </p>
        <div className={styles.actions}>
          <Link href="/" className={styles.primary}>
            Go home
          </Link>
          <Link href="/contact" className={styles.secondary}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}
