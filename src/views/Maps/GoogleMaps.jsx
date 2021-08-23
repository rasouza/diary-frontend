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

// reactstrap components
import { Card, CardBody, CardHeader, CardTitle, Row, Col } from 'reactstrap'

// core components
import PanelHeader from 'components/PanelHeader/PanelHeader'

const SatelliteMap = () => {
  const mapRef = React.useRef(null)
  React.useEffect(() => {
    const { google } = window
    let map = mapRef.current
    const lat = '40.748817'
    const lng = '-73.985428'
    const myLatlng = new google.maps.LatLng(lat, lng)
    const mapOptions = {
      zoom: 3,
      center: myLatlng,
      scrollwheel: false,
      mapTypeId: 'satellite'
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
  }, [])
  return (
    <>
      <div style={{ height: `280px` }} ref={mapRef} />
    </>
  )
}

const RegularMap = () => {
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
      scrollwheel: false
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
  }, [])
  return (
    <>
      <div style={{ height: `280px` }} ref={mapRef} />
    </>
  )
}

const CustomSkinMap = () => {
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
          stylers: [{ saturation: 43 }, { lightness: -11 }, { hue: '#0088ff' }]
        },
        {
          featureType: 'road',
          elementType: 'geometry.fill',
          stylers: [{ hue: '#ff0000' }, { saturation: -100 }, { lightness: 99 }]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#808080' }, { lightness: 54 }]
        },
        {
          featureType: 'landscape.man_made',
          elementType: 'geometry.fill',
          stylers: [{ color: '#ece2d9' }]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry.fill',
          stylers: [{ color: '#ccdca1' }]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#767676' }]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.stroke',
          stylers: [{ color: '#ffffff' }]
        },
        { featureType: 'poi', stylers: [{ visibility: 'off' }] },
        {
          featureType: 'landscape.natural',
          elementType: 'geometry.fill',
          stylers: [{ visibility: 'on' }, { color: '#b8cb93' }]
        },
        { featureType: 'poi.park', stylers: [{ visibility: 'on' }] },
        {
          featureType: 'poi.sports_complex',
          stylers: [{ visibility: 'on' }]
        },
        { featureType: 'poi.medical', stylers: [{ visibility: 'on' }] },
        {
          featureType: 'poi.business',
          stylers: [{ visibility: 'simplified' }]
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
      <div style={{ height: `280px` }} ref={mapRef} />
    </>
  )
}

function GoogleMaps() {
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col xs={12} md={12}>
            <Card>
              <CardBody>
                <SatelliteMap />
              </CardBody>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Regular Map</CardTitle>
              </CardHeader>
              <CardBody>
                <RegularMap />
              </CardBody>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Custom Skin & Settings Map</CardTitle>
              </CardHeader>
              <CardBody>
                <CustomSkinMap />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default GoogleMaps
