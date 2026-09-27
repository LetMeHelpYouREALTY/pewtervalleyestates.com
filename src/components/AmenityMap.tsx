"use client"

import Link from "next/link"
import { useCallback, useEffect, useId, useRef, useState } from "react"
import {
  AMENITY_CATEGORIES,
  type AmenityCategoryId,
  COMMUNITY,
  getGoogleMapsApiKey,
  getGoogleMapsMapId,
} from "@/lib/amenities/community-config"
import { CURATED_NEARBY_PLACES } from "@/lib/amenities/curated-places"
import type {
  GoogleInfoWindow,
  GoogleMapInstance,
  GoogleMarker,
  PlacesLibrary,
} from "@/lib/amenities/google-maps.types"
import styles from "./AmenityMap.module.css"

const MAP_HEIGHT = "420px"
const SCRIPT_ID = "google-maps-js-api"

type Props = {
  /** Smaller heading when embedded on interior pages */
  variant?: "default" | "compact"
  /** Hide category intro copy */
  showIntro?: boolean
  /** Link to the full amenities guide */
  showPageLink?: boolean
}

function buildDirectionsUrl(lat: number, lng: number, label?: string) {
  const destination = label ? encodeURIComponent(label) : `${lat},${lng}`
  return `https://www.google.com/maps/dir/?api=1&destination=${destination}`
}

function buildEmbedUrl(lat: number, lng: number, zoom: number) {
  return `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`
}

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

export function AmenityMap({ variant = "default", showIntro = true, showPageLink = true }: Props) {
  const apiKey = getGoogleMapsApiKey()
  const mapId = getGoogleMapsMapId()
  const sectionRef = useRef<HTMLElement>(null)
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<GoogleMapInstance | null>(null)
  const communityMarkerRef = useRef<GoogleMarker | null>(null)
  const placeMarkersRef = useRef<GoogleMarker[]>([])
  const infoWindowRef = useRef<GoogleInfoWindow | null>(null)
  const mapInitializedRef = useRef(false)

  const [shouldLoad, setShouldLoad] = useState(false)
  const [activeCategory, setActiveCategory] = useState<AmenityCategoryId>("grocery")
  const [useFallback, setUseFallback] = useState(!apiKey)
  const [loadError, setLoadError] = useState<string | null>(null)
  const [isSearching, setIsSearching] = useState(false)

  const filterGroupId = useId()

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: "120px", threshold: 0.1 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const clearPlaceMarkers = useCallback(() => {
    for (const marker of placeMarkersRef.current) {
      marker.setMap(null)
    }
    placeMarkersRef.current = []
  }, [])

  const showPlaceInfo = useCallback(
    (
      name: string,
      address: string,
      rating: number | undefined,
      lat: number,
      lng: number,
      anchor?: GoogleMarker
    ) => {
      const google = window.google
      const map = mapRef.current
      if (!google || !map) return
      const ratingLine =
        typeof rating === "number" && rating > 0
          ? `<p>Rating: ${rating.toFixed(1)} / 5 (Google)</p>`
          : ""
      const directions = buildDirectionsUrl(lat, lng, `${name}, ${address}`)
      infoWindowRef.current?.close()
      infoWindowRef.current = new google.maps.InfoWindow({
        content: `<div>
          <strong>${escapeHtml(name)}</strong>
          ${ratingLine}
          <p>${escapeHtml(address)}</p>
          <a href="${directions}" target="_blank" rel="noopener noreferrer">Directions</a>
        </div>`,
      })
      infoWindowRef.current.open({ map, anchor })
    },
    []
  )

  const searchCategory = useCallback(
    async (categoryId: AmenityCategoryId) => {
      const google = window.google
      const map = mapRef.current
      if (!google || !map) return

      const category = AMENITY_CATEGORIES.find((c) => c.id === categoryId)
      if (!category) return

      setIsSearching(true)
      clearPlaceMarkers()

      try {
        const placesLib = (await google.maps.importLibrary("places")) as PlacesLibrary
        const { places } = await placesLib.Place.searchNearby({
          fields: ["displayName", "formattedAddress", "location", "rating"],
          locationRestriction: {
            center: COMMUNITY.center,
            radius: COMMUNITY.searchRadiusMeters,
          },
          includedPrimaryTypes: category.placeTypes,
          maxResultCount: 12,
        })

        for (const place of places) {
          const lat = place.location?.lat()
          const lng = place.location?.lng()
          if (lat == null || lng == null) continue
          const name =
            typeof place.displayName === "string"
              ? place.displayName
              : ((place.displayName as { text?: string } | undefined)?.text ?? "Place")
          const address = place.formattedAddress ?? ""
          const marker = new google.maps.Marker({
            map,
            position: { lat, lng },
            title: name,
          })
          marker.addListener("click", () => {
            showPlaceInfo(name, address, place.rating, lat, lng, marker)
          })
          placeMarkersRef.current.push(marker)
        }
      } catch {
        setUseFallback(true)
        setLoadError(
          "Interactive places search is unavailable. Showing the map embed and curated list."
        )
      } finally {
        setIsSearching(false)
      }
    },
    [clearPlaceMarkers, showPlaceInfo]
  )

  const initInteractiveMap = useCallback(async () => {
    const google = window.google
    const container = mapContainerRef.current
    if (!google || !container || mapInitializedRef.current) return

    mapInitializedRef.current = true
    const map = new google.maps.Map(container, {
      center: COMMUNITY.center,
      zoom: COMMUNITY.mapZoom,
      mapId: mapId || undefined,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: true,
    })
    mapRef.current = map

    communityMarkerRef.current = new google.maps.Marker({
      map,
      position: COMMUNITY.center,
      title: COMMUNITY.name,
      label: { text: "★", color: "#1e3a8a" },
    })

    const communityMarker = communityMarkerRef.current
    communityMarker.addListener("click", () => {
      showPlaceInfo(
        COMMUNITY.name,
        `${COMMUNITY.areaLabel}, ${COMMUNITY.city}, ${COMMUNITY.stateAbbr} ${COMMUNITY.zip}`,
        undefined,
        COMMUNITY.center.lat,
        COMMUNITY.center.lng,
        communityMarker
      )
    })

    await searchCategory(activeCategory)
  }, [activeCategory, mapId, searchCategory, showPlaceInfo])

  useEffect(() => {
    if (!shouldLoad || useFallback || !apiKey) return

    const loadScript = () =>
      new Promise<void>((resolve, reject) => {
        if (window.google?.maps) {
          resolve()
          return
        }
        const existing = document.getElementById(SCRIPT_ID)
        if (existing) {
          const waitForGoogle = () => {
            if (window.google?.maps) resolve()
            else window.setTimeout(waitForGoogle, 100)
          }
          waitForGoogle()
          return
        }
        window.__amenityMapInit = () => resolve()
        const script = document.createElement("script")
        script.id = SCRIPT_ID
        script.async = true
        script.defer = true
        script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&libraries=places,marker&loading=async&callback=__amenityMapInit`
        script.onerror = () => reject(new Error("Maps script failed to load"))
        document.head.appendChild(script)
      })

    loadScript()
      .then(() => initInteractiveMap())
      .catch(() => {
        setUseFallback(true)
        setLoadError("Could not load Google Maps. Showing the embed and curated list.")
      })
  }, [shouldLoad, useFallback, apiKey, initInteractiveMap])

  useEffect(() => {
    if (useFallback || !mapInitializedRef.current) return
    searchCategory(activeCategory)
  }, [activeCategory, searchCategory, useFallback])

  const heading =
    variant === "compact" ? `What's nearby ${COMMUNITY.name}` : `Life near ${COMMUNITY.name}`

  return (
    <section ref={sectionRef} className={styles.section} aria-labelledby="amenity-map-heading">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="amenity-map-heading">{heading}</h2>
          {showIntro ? (
            <p>
              Explore dining, groceries, parks, schools, and services around {COMMUNITY.name} in{" "}
              {COMMUNITY.areaLabel} ({COMMUNITY.zip}). Filter the map, then open the full amenities
              guide for drive-time context and FAQs.
            </p>
          ) : null}
        </header>

        {!useFallback && apiKey ? (
          <div
            className={styles.filters}
            role="tablist"
            aria-label="Amenity categories near Pewter Valley Estates"
          >
            {AMENITY_CATEGORIES.map((cat) => {
              const selected = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  id={`${filterGroupId}-${cat.id}`}
                  aria-selected={selected}
                  aria-controls="amenity-map-canvas"
                  className={selected ? styles.chipActive : styles.chip}
                  aria-label={cat.ariaLabel}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>
        ) : null}

        {loadError ? <p className={styles.notice}>{loadError}</p> : null}

        <section
          id="amenity-map-canvas"
          className={styles.mapShell}
          style={{ minHeight: MAP_HEIGHT }}
          aria-label="Map of nearby amenities"
        >
          {useFallback || !apiKey ? (
            <iframe
              title={`Map centered on ${COMMUNITY.name}, ${COMMUNITY.city}`}
              src={buildEmbedUrl(COMMUNITY.center.lat, COMMUNITY.center.lng, COMMUNITY.mapZoom)}
              loading="lazy"
              className={styles.mapIframe}
              style={{ height: MAP_HEIGHT }}
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <div
              ref={mapContainerRef}
              className={styles.mapCanvas}
              style={{ height: MAP_HEIGHT }}
              aria-busy={isSearching}
            />
          )}
        </section>

        <section className={styles.staticList} aria-labelledby="curated-amenities-heading">
          <h3 id="curated-amenities-heading">Featured nearby places</h3>
          <ul>
            {CURATED_NEARBY_PLACES.map((place) => (
              <li key={`${place.name}-${place.address}`}>
                <strong>{place.name}</strong>
                <span className={styles.placeMeta}>{place.category}</span>
                <address>{place.address}</address>
                {place.note ? <p className={styles.placeNote}>{place.note}</p> : null}
              </li>
            ))}
          </ul>
        </section>

        {showPageLink ? (
          <p className={styles.fullPageLink}>
            <Link href="/pewter-valley-estates/amenities">
              View the full Nearby Amenities guide →
            </Link>
          </p>
        ) : null}
      </div>
    </section>
  )
}
