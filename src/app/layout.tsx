import type { Metadata } from "next"
import Script from "next/script"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { JsonLd } from "@/components/JsonLd"
import { GA_MEASUREMENT_ID } from "@/lib/analytics"
import { MARKETING_IMAGES } from "@/lib/marketing-images"
import {
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/lib/schema"
import { SITE_CONFIG } from "@/lib/site-contact"
import { Providers } from "./providers"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.businessName,
    template: `%s | ${SITE_CONFIG.businessName}`,
  },
  description: SITE_CONFIG.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.businessName,
    title: SITE_CONFIG.businessName,
    description: SITE_CONFIG.description,
    images: [
      {
        url: MARKETING_IMAGES.og,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.businessName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.businessName,
    description: SITE_CONFIG.description,
    images: [MARKETING_IMAGES.og],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const org = generateOrganizationSchema()
  const agent = generateLocalBusinessSchema()
  const website = generateWebSiteSchema()

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://em.realscout.com" />
        <link rel="preconnect" href="https://www.realscout.com" />
        <link
          rel="preload"
          href="https://assets.calendly.com/assets/external/widget.css"
          as="style"
        />
        <noscript>
          <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
        </noscript>
      </head>
      <body>
        <JsonLd data={website} />
        <JsonLd data={org} />
        <JsonLd data={agent} />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true });
`}
        </Script>
        <Script id="calendly-css-load" strategy="afterInteractive">
          {`
(function () {
  var href = "https://assets.calendly.com/assets/external/widget.css";
  var existing = document.querySelector('link[data-calendly-css="true"]');
  if (existing) return;
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  link.setAttribute("data-calendly-css", "true");
  document.head.appendChild(link);
})();
`}
        </Script>
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
        <Providers>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
