/** Minimal Google Maps typings for amenity map (avoid bundling @types/google.maps). */

export type GoogleMapsLatLng = { lat: number; lng: number }

export type GoogleMapsApi = {
  maps: {
    Map: new (
      el: HTMLElement,
      opts: {
        center: GoogleMapsLatLng
        zoom: number
        mapId?: string
        mapTypeControl?: boolean
        streetViewControl?: boolean
        fullscreenControl?: boolean
      }
    ) => GoogleMapInstance
    InfoWindow: new (opts?: { content?: string }) => GoogleInfoWindow
    Marker: new (opts: {
      map: GoogleMapInstance
      position: GoogleMapsLatLng
      title?: string
      label?: string | { text: string; color?: string }
    }) => GoogleMarker
    importLibrary: (name: "places" | "maps" | "marker") => Promise<unknown>
  }
}

export type GoogleMapInstance = {
  setCenter: (c: GoogleMapsLatLng) => void
  setZoom: (z: number) => void
}

export type GoogleInfoWindow = {
  open: (opts: { map: GoogleMapInstance; anchor?: GoogleMarker }) => void
  close: () => void
}

export type GoogleMarker = {
  setMap: (map: GoogleMapInstance | null) => void
  addListener: (event: string, handler: () => void) => void
}

export type PlaceSearchResult = {
  displayName?: string
  formattedAddress?: string
  rating?: number
  location?: { lat: () => number; lng: () => number }
  id?: string
}

export type PlacesLibrary = {
  Place: {
    searchNearby: (request: {
      fields: string[]
      locationRestriction: {
        center: GoogleMapsLatLng
        radius: number
      }
      includedPrimaryTypes?: string[]
      maxResultCount?: number
    }) => Promise<{ places: PlaceSearchResult[] }>
  }
}

declare global {
  interface Window {
    google?: GoogleMapsApi
    __amenityMapInit?: () => void
  }
}
