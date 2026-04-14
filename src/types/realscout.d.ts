import type { DetailedHTMLProps, HTMLAttributes } from "react"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "realscout-office-listings": DetailedHTMLProps<
        HTMLAttributes<HTMLElement> & {
          "agent-encoded-id"?: string
          "sort-order"?: string
          "listing-status"?: string
          "property-types"?: string
        },
        HTMLElement
      >
    }
  }
}

export {}
