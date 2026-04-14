import { SITE_CONFIG } from "./site-contact"

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

export const GA_MEASUREMENT_ID =
  typeof process !== "undefined" && process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
    ? process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
    : "G-YB0SCBWM09"

export function trackPageView(url: string, title: string) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_title: title || document.title,
    page_location: url || window.location.href,
  })
}

export function trackEvent(eventName: string, parameters: Record<string, unknown> = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return
  window.gtag("event", eventName, { ...parameters, site: SITE_CONFIG.url })
}
