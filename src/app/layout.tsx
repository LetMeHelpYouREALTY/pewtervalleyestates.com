import type { Metadata } from "next"
import Script from "next/script"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { JsonLd } from "@/components/JsonLd"
import { GA_MEASUREMENT_ID } from "@/lib/analytics"
import { generateLocalBusinessSchema, generateOrganizationSchema } from "@/lib/schema"
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
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: SITE_CONFIG.businessName }],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const org = generateOrganizationSchema()
  const agent = generateLocalBusinessSchema()

  return (
    <html lang="en">
      <body>
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
        <Providers>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
