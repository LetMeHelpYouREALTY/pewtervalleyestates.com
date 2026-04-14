"use client"

import { useEffect } from "react"
import { trackEvent } from "@/lib/analytics"

type Props = {
  pageTitle: string
}

export function PageViewTracker({ pageTitle }: Props) {
  useEffect(() => {
    trackEvent("page_view", {
      page_title: pageTitle,
      page_location: typeof window !== "undefined" ? window.location.href : "",
    })
  }, [pageTitle])

  return null
}
