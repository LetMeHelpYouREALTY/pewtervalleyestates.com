import Link from "next/link"
import { AmenityMap } from "@/components/AmenityMap"
import { AMENITIES_PAGE_PATH } from "@/lib/amenities/community-config"
import styles from "./AmenityMapSection.module.css"

type Props = {
  variant?: "default" | "compact"
  showFullPageLink?: boolean
}

export function AmenityMapSection({ variant = "default", showFullPageLink = true }: Props) {
  return (
    <div className={styles.wrap}>
      <AmenityMap variant={variant} showIntro={variant !== "compact"} showPageLink={false} />
      {showFullPageLink ? (
        <p className={styles.footerLink}>
          <Link href={AMENITIES_PAGE_PATH}>
            Nearby Amenities in Pewter Valley Estates — full guide
          </Link>
        </p>
      ) : null}
    </div>
  )
}
