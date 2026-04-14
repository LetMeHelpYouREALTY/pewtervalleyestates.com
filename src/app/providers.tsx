"use client"

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { useEffect } from "react"
import { CalendlyBadge } from "@/components/CalendlyWidgets"
import { ServiceWorkerCleanup } from "@/components/ServiceWorkerCleanup"

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const nav = performance.getEntriesByType("navigation")[0] as
      | PerformanceNavigationTiming
      | undefined
    const preconnectLinks = Array.from(document.querySelectorAll('link[rel="preconnect"]')).map(
      (node) => node.getAttribute("href")
    )
    const calendlyCssAtBoot = Boolean(
      document.querySelector('link[href*="assets.calendly.com/assets/external/widget.css"]')
    )

    // #region agent log
    fetch("http://127.0.0.1:7392/ingest/ac9e1676-d46e-4669-a606-bb52bb5efc78", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "096335" },
      body: JSON.stringify({
        sessionId: "096335",
        runId: "pre-fix",
        hypothesisId: "H1",
        location: "src/app/providers.tsx:14",
        message: "bootstrap_third_party_and_preconnect_state",
        data: {
          domInteractive: nav?.domInteractive ?? null,
          responseEnd: nav?.responseEnd ?? null,
          preconnectLinks,
          calendlyCssAtBoot,
        },
        timestamp: Date.now(),
      }),
    }).catch(() => {})
    // #endregion

    requestAnimationFrame(() => {
      const heroTitle = document.querySelector("h1")
      const paintEntries = performance
        .getEntriesByType("paint")
        .map((entry) => ({ name: entry.name, startTime: entry.startTime }))

      // #region agent log
      fetch("http://127.0.0.1:7392/ingest/ac9e1676-d46e-4669-a606-bb52bb5efc78", {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "096335" },
        body: JSON.stringify({
          sessionId: "096335",
          runId: "pre-fix",
          hypothesisId: "H3",
          location: "src/app/providers.tsx:46",
          message: "first_frame_paint_and_hero_presence",
          data: {
            heroTitleFound: Boolean(heroTitle),
            heroTextLength: heroTitle?.textContent?.length ?? 0,
            paintEntries,
          },
          timestamp: Date.now(),
        }),
      }).catch(() => {})
      // #endregion
    })
  }, [])

  return (
    <>
      <ServiceWorkerCleanup />
      <CalendlyBadge />
      {children}
      <Analytics />
      <SpeedInsights />
    </>
  )
}
