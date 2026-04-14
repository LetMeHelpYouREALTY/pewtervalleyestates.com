/**
 * Generate marketing PNGs via OpenRouter (image-capable models).
 *
 * Required env:
 *   OPENROUTER_API_KEY  — from GitHub Actions secret or `.env.local` (never commit the key).
 *
 * Optional:
 *   OPENROUTER_IMAGE_MODEL — default: google/gemini-3.1-flash-image-preview
 *   OPENROUTER_HTTP_REFERER — sent as HTTP-Referer (OpenRouter recommends a site or repo URL)
 *   OPENROUTER_APP_TITLE     — sent as X-Title
 *
 * Usage:
 *   node scripts/generate-site-images.mjs
 *   pnpm run generate:images
 */

import { writeFileSync, mkdirSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, "..")
const publicDir = join(root, "public")

const MODEL =
  process.env.OPENROUTER_IMAGE_MODEL || "openai/gpt-5-image"
const API = "https://openrouter.ai/api/v1/chat/completions"

const OUT = {
  hero: join(publicDir, "images", "hero-marketing.png"),
  og: join(publicDir, "images", "og-marketing.png"),
  community: join(publicDir, "photos", "pewter-valley-community.png"),
}

const PROMPTS = {
  hero: `Professional editorial real estate photograph: single-story ranch-style home in a sunny Southwest US suburban neighborhood, desert-friendly landscaping, clear sky, warm light, wide angle. Photorealistic. No text, no logos, no people, no watermark.`,

  og: `Wide cinematic real estate banner: Las Vegas valley suburban residential scene at golden hour, rooftops and distant mountains, inviting mood for a property website. Photorealistic. No text, no logos, no people, no watermark.`,

  community: `Photorealistic residential street in a master-planned Southwest US community: ranch and single-story homes, sidewalks, trees, Nevada sunlight. No text, no logos, no people, no watermark.`,
}

function requireApiKey() {
  const key = process.env.OPENROUTER_API_KEY
  if (!key?.trim()) {
    console.error(
      "Missing OPENROUTER_API_KEY. Add it as a GitHub Actions secret or export it locally.",
    )
    process.exit(1)
  }
  return key.trim()
}

/**
 * @param {string} apiKey
 * @param {object} opts
 * @param {string} opts.prompt
 * @param {string} [opts.aspectRatio]
 * @param {string} [opts.imageSize]
 * @param {'both' | 'imageOnly'} opts.mode
 */
async function generateImage(apiKey, opts) {
  const modalities =
    opts.mode === "imageOnly" ? ["image"] : ["image", "text"]

  const body = {
    model: MODEL,
    messages: [{ role: "user", content: opts.prompt }],
    modalities,
    stream: false,
  }

  if (opts.aspectRatio) {
    body.image_config = {
      aspect_ratio: opts.aspectRatio,
      image_size: opts.imageSize || "2K",
    }
  }

  const headers = {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  }
  if (process.env.OPENROUTER_HTTP_REFERER) {
    headers["HTTP-Referer"] = process.env.OPENROUTER_HTTP_REFERER
  }
  if (process.env.OPENROUTER_APP_TITLE) {
    headers["X-Title"] = process.env.OPENROUTER_APP_TITLE
  }

  const res = await fetch(API, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  })

  const text = await res.text()
  let json
  try {
    json = JSON.parse(text)
  } catch {
    console.error("OpenRouter non-JSON response:", text.slice(0, 500))
    process.exit(1)
  }

  if (!res.ok) {
    console.error("OpenRouter error:", res.status, JSON.stringify(json, null, 2))
    process.exit(1)
  }

  const message = json?.choices?.[0]?.message
  const images = message?.images
  if (!images?.length) {
    console.error("No images in response:", JSON.stringify(json, null, 2))
    process.exit(1)
  }

  const first = images[0]
  const url =
    first?.image_url?.url ||
    first?.imageUrl?.url ||
    first?.url ||
    null
  if (!url || typeof url !== "string") {
    console.error("Could not parse image URL from:", JSON.stringify(first))
    process.exit(1)
  }

  const m = /^data:image\/(?:png|jpeg|jpg|webp);base64,(.+)$/i.exec(url)
  if (!m) {
    console.error("Expected base64 data URL, got:", url.slice(0, 80), "...")
    process.exit(1)
  }

  return Buffer.from(m[1], "base64")
}

function ensureDirs() {
  mkdirSync(dirname(OUT.hero), { recursive: true })
  mkdirSync(dirname(OUT.community), { recursive: true })
}

async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms))
}

async function main() {
  const apiKey = requireApiKey()
  console.log(`Model: ${MODEL}`)
  ensureDirs()

  console.log("Generating hero...")
  const heroBuf = await generateImage(apiKey, {
    prompt: PROMPTS.hero,
    aspectRatio: "16:9",
    imageSize: "2K",
    mode: "both",
  })
  writeFileSync(OUT.hero, heroBuf)
  console.log("Wrote", OUT.hero)

  await sleep(1500)

  console.log("Generating OG / social image...")
  const ogBuf = await generateImage(apiKey, {
    prompt: PROMPTS.og,
    aspectRatio: "16:9",
    imageSize: "2K",
    mode: "both",
  })
  writeFileSync(OUT.og, ogBuf)
  console.log("Wrote", OUT.og)

  await sleep(1500)

  console.log("Generating community photo...")
  const communityBuf = await generateImage(apiKey, {
    prompt: PROMPTS.community,
    aspectRatio: "16:9",
    imageSize: "2K",
    mode: "both",
  })
  writeFileSync(OUT.community, communityBuf)
  console.log("Wrote", OUT.community)

  console.log("Done.")
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
