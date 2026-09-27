"use client"

import Link from "next/link"
import { useCallback, useEffect, useId, useRef, useState, type MutableRefObject } from "react"
import {
  AMENITY_CATEGORIES,
  type AmenityCategoryId,
  COMMUNITY,
  getGoogleMapsApiKey,
  getGoogleMapsMapId,
} from "@/lib/amenities/community-config"
import {
  CURATED_NEARBY_PLACES,
  curatedPlacesForCategory,
  type CuratedPlace,
} from "@/lib/amenities/curated-places"
import { loadGoogleMaps, mapsAuthFailed } from "@/lib/amenities/load-google-maps"
import { searchCategory } from "@/lib/amenities/search-nearby"
import styles from "./AmenityMap.module.css"

const MAP_HEIGHT = "420px"

type Props = {
  variant?: "default" | "compact"
  showIntro?: boolean
  showPageLink?: boolean
}

function buildDirectionsUrl(lat: number, lng: number, label?: string) {
  const destination = label ? encodeURIComponent(label) : `${lat},${lng}`
  return `https://www.google.com/maps/dir/?api=1&destination=${destination}`
}

function buildEmbedUrl(lat: number, lng: number, zoom: number) {
  return `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`
}

function placeDisplayName(place: google.maps.places.Place): string {
  const name = place.displayName
  if (!name) return "Place"
  if (typeof name === "string") return name
  const text = (name as { text?: string }).text
  return text ?? "Place"
}

function openPlaceInfoWindow(
  map: google.maps.Map,
  infoWindowRef: MutableRefObject<google.maps.InfoWindow | null>,
  name: string,
  address: string,
  lat: number,
  lng: number,
  anchor?: google.maps.MVCObject
) {
  const root = document.createElement("div")
  const title = document.createElement("strong")
  title.textContent = name
  root.appendChild(title)

  const addr = document.createElement("p")
  addr.textContent = address
  root.appendChild(addr)

  const link = document.createElement("a")
  link.href = buildDirectionsUrl(lat, lng, `${name}, ${address}`)
  link.target = "_blank"
  link.rel = "noopener noreferrer"
  link.textContent = "Directions"
  root.appendChild(link)

  infoWindowRef.current?.close()
  infoWindowRef.current = new google.maps.InfoWindow({ content: root })
  infoWindowRef.current.open({ map, anchor })
}

export function AmenityMap({ variant = "default", showIntro = true, showPageLink = true }: Props) {
  const apiKey = getGoogleMapsApiKey()
  const mapId = getGoogleMapsMapId()
  const sectionRef = useRef<HTMLElement>(null)
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<google.maps.Map | null>(null)
  const communityMarkerRef = useRef<google.maps.Marker | null>(null)
  const placeMarkersRef = useRef<google.maps.Marker[]>([])
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null)
  const mapInitializedRef = useRef(false)

  const [shouldLoad, setShouldLoad] = useState(false)
  const [activeCategory, setActiveCategory] = useState<AmenityCategoryId>("grocery")
  const [useFallback, setUseFallback] = useState(!apiKey || mapsAuthFailed)
  const [loadError, setLoadError] = useState<string | null>(null)
  const [isSearching, setIsSearching] = useState(false)
  const [categorySearchFailed, setCategorySearchFailed] = useState(false)

  const filterGroupId = useId()

  const enterFallback = useCallback((message: string) => {
    setUseFallback(true)
    setLoadError(message)
    mapInitializedRef.current = false
    mapRef.current = null
    for (const marker of placeMarkersRef.current) {
      marker.setMap(null)
    }
    placeMarkersRef.current = []
    communityMarkerRef.current?.setMap(null)
    communityMarkerRef.current = null
    infoWindowRef.current?.close()
    infoWindowRef.current = null
  }, [])

  useEffect(() => {
    const onAuthFailure = () => enterFallback("Map authentication failed. Showing the embed and curated list.")
    window.addEventListener("gmaps:auth-failure", onAuthFailure)
    return () => window.removeEventListener("gmaps:auth-failure", onAuthFailure)
  }, [enterFallback])

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

  const runCategorySearch = useCallback(
    async (categoryId: AmenityCategoryId) => {
      const map = mapRef.current
      if (!map) return

      const category = AMENITY_CATEGORIES.find((c) => c.id === categoryId)
      if (!category) return

      setIsSearching(true)
      setCategorySearchFailed(false)
      clearPlaceMarkers()

      try {
        const places = await searchCategory(
          COMMUNITY.center,
          categoryId,
          category.placeTypes
        )

        for (const place of places) {
          const loc = place.location
          if (!loc) continue
          const lat = loc.lat()
          const lng = loc.lng()
          const name = placeDisplayName(place)
          const address = place.formattedAddress ?? ""
          const marker = new google.maps.Marker({
            map,
            position: { lat, lng },
            title: name,
          })
          marker.addListener("click", () => {
            openPlaceInfoWindow(map, infoWindowRef, name, address, lat, lng, marker)
          })
          placeMarkersRef.current.push(marker)
        }
      } catch {
        setCategorySearchFailed(true)
      } finally {
        setIsSearching(false)
      }
    },
    [clearPlaceMarkers]
  )

  const initInteractiveMap = useCallback(async () => {
    const container = mapContainerRef.current
    if (!container || mapInitializedRef.current) return
    if (mapsAuthFailed) {
      enterFallback("Map authentication failed. Showing the embed and curated list.")
      return
    }

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
      openPlaceInfoWindow(
        map,
        infoWindowRef,
        COMMUNITY.name,
        `${COMMUNITY.areaLabel}, ${COMMUNITY.city}, ${COMMUNITY.stateAbbr} ${COMMUNITY.zip}`,
        COMMUNITY.center.lat,
        COMMUNITY.center.lng,
        communityMarker
      )
    })

    await runCategorySearch(activeCategory)
  }, [activeCategory, enterFallback, mapId, runCategorySearch])

  useEffect(() => {
    if (!shouldLoad || useFallback || !apiKey) return
    if (mapsAuthFailed) {
      enterFallback("Map authentication failed. Showing the embed and curated list.")
      return
    }

    loadGoogleMaps(apiKey)
      .then(() => initInteractiveMap())
      .catch(() => {
        enterFallback("Could not load Google Maps. Showing the embed and curated list.")
      })
  }, [shouldLoad, useFallback, apiKey, initInteractiveMap, enterFallback])

  useEffect(() => {
    if (useFallback || !mapInitializedRef.current) return
    runCategorySearch(activeCategory)
  }, [activeCategory, runCategorySearch, useFallback])

  const heading =
    variant === "compact" ? `What's nearby ${COMMUNITY.name}` : `Life near ${COMMUNITY.name}`

  const listPlaces: CuratedPlace[] = useFallback
    ? CURATED_NEARBY_PLACES
    : categorySearchFailed
      ? curatedPlacesForCategory(activeCategory)
      : curatedPlacesForCategory(activeCategory).length > 0
        ? curatedPlacesForCategory(activeCategory)
        : CURATED_NEARBY_PLACES

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
        {categorySearchFailed && !useFallback ? (
          <p className={styles.notice}>
            Live places search is unavailable for this category. Showing verified nearby picks below.
          </p>
        ) : null}

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
          {listPlaces.length === 0 ? (
            <p>Use the map filters to explore places in this category.</p>
          ) : (
            <ul>
              {listPlaces.map((place) => (
                <li key={`${place.name}-${place.address}`}>
                  <strong>{place.name}</strong>
                  <span className={styles.placeMeta}>{place.category}</span>
                  <address>{place.address}</address>
                  {place.note ? <p className={styles.placeNote}>{place.note}</p> : null}
                </li>
              ))}
            </ul>
          )}
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
