/*!

=========================================================
* Now UI Dashboard PRO React - v1.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react'

const MapWrapper = () => {
  const mapRef = React.useRef(null)
  React.useEffect(() => {
    const { google } = window
    let map = mapRef.current
    const lat = '40.748817'
    const lng = '-73.985428'
    const myLatlng = new google.maps.LatLng(lat, lng)
    const mapOptions = {
      zoom: 13,
      center: myLatlng,
      scrollwheel: false,
      zoomControl: true,
      styles: [
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{ color: '#e9e9e9' }, { lightness: 17 }]
        },
        {
          featureType: 'landscape',
          elementType: 'geometry',
          stylers: [{ color: '#f5f5f5' }, { lightness: 20 }]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.fill',
          stylers: [{ color: '#ffffff' }, { lightness: 17 }]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#ffffff' }, { lightness: 29 }, { weight: 0.2 }]
        },
        {
          featureType: 'road.arterial',
          elementType: 'geometry',
          stylers: [{ color: '#ffffff' }, { lightness: 18 }]
        },
        {
          featureType: 'road.local',
          elementType: 'geometry',
          stylers: [{ color: '#ffffff' }, { lightness: 16 }]
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [{ color: '#f5f5f5' }, { lightness: 21 }]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{ color: '#dedede' }, { lightness: 21 }]
        },
        {
          elementType: 'labels.text.stroke',
          stylers: [
            { visibility: 'on' },
            { color: '#ffffff' },
            { lightness: 16 }
          ]
        },
        {
          elementType: 'labels.text.fill',
          stylers: [{ saturation: 36 }, { color: '#333333' }, { lightness: 40 }]
        },
        { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{ color: '#f2f2f2' }, { lightness: 19 }]
        },
        {
          featureType: 'administrative',
          elementType: 'geometry.fill',
          stylers: [{ color: '#fefefe' }, { lightness: 20 }]
        },
        {
          featureType: 'administrative',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#fefefe' }, { lightness: 17 }, { weight: 1.2 }]
        }
      ]
    }

    map = new google.maps.Map(map, mapOptions)

    const marker = new google.maps.Marker({
      position: myLatlng,
      map,
      animation: google.maps.Animation.DROP,
      title: 'Now UI Dashboard PRO React!'
    })

    const contentString =
      '<div class="info-window-content"><h2>Now UI Dashboard PRO React</h2>' +
      '<p>A premium Admin for React, Reactstrap, and React Hooks.</p></div>'

    const infowindow = new google.maps.InfoWindow({
      content: contentString
    })

    google.maps.event.addListener(marker, 'click', () => {
      infowindow.open(map, marker)
    })
  })
  return (
    <>
      <div style={{ height: `100%` }} ref={mapRef} />
    </>
  )
}

function FullScreenMap() {
  return (
    <div id="map" style={{ position: 'relative', overflow: 'hidden' }}>
      <MapWrapper />
    </div>
  )
}

export default FullScreenMap