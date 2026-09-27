import path from "node:path"
import { fileURLToPath } from "node:url"
import type { NextConfig } from "next"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "www.pewtervalleyestates.com", pathname: "/**" },
      { protocol: "https", hostname: "d1buiexcd5gara.cloudfront.net", pathname: "/**" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/amenities",
        destination: "/pewter-valley-estates/amenities",
        permanent: true,
      },
      {
        source: "/nearby-amenities",
        destination: "/pewter-valley-estates/amenities",
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/:path*.(woff|woff2|ttf|otf)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/:path*.(png|jpg|jpeg|gif|webp|avif|svg|ico)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" },
        ],
      },
    ]
  },
}

export default nextConfig
