import React, { useEffect, useRef } from 'react';
import { MarkerClusterer } from '@googlemaps/markerclusterer';

const locations = [
  ['Park Street', 22.5526, 88.3521],
  ['Salt Lake', 22.5726, 88.3639],
  ['New Town', 22.5895, 88.4769],
  ['Howrah', 22.5958, 88.2636],
  ['Garia', 22.4674, 88.3883],
  ['Behala', 22.4982, 88.3115],
  ['Tollygunge', 22.4982, 88.3115],
  ['Ballygunge', 21.5556, 88.3619],
  ['Ballygunge', 22.5176, 86.3619],
  ['Ballygunge', 22.5169, 88.3619],
  ['Ballygunge', 22.5176, 87.3619],
  ['Ballygunge', 22.5176, 88.3419],
  ['Ballygunge', 22.4176, 88.3619],
  ['Ballygunge', 22.5176, 88.3219],
  ['Ballygunge', 23.5176, 88.1519],
];

const MapComponent = () => {
  const mapRef = useRef(null);
  useEffect(() => {
    const loadMap = async () => {
      if (!window.google) {
        // Google Maps API not loaded
        console.error('Google Maps API not loaded.');
        return;
      }

      // Import libraries from Google Maps API
      const { Map, InfoWindow } = await google.maps.importLibrary('maps');
      const { AdvancedMarkerElement, PinElement } =
        await google.maps.importLibrary('marker');

      // Load map
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 22.572646, lng: 88.363895 },
        zoom: 10,
      });
      const infoWindow = new google.maps.InfoWindow({
        content: '',
        disableAutoPan: true,
      });

      // Add markers for locations
      const labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

      const markers = locations.map(([title, lat, lng], i) => {
        const label = labels[i % labels.length];
        const pinGlyph = new google.maps.marker.PinElement({
          glyph: label,
          glyphColor: 'white',
        });

        const marker = new window.google.maps.Marker({
          position: { lat, lng },
          map,
          title,
          label: { text: label, color: 'white' },
          icon: pinGlyph,
        });
        marker.addListener('click', () => {
          infoWindow.setContent(lat + ', ' + lng);
          infoWindow.open(map, marker);
        });
        return marker;
      });
      // console.log(markers, 'markers');
      // Cluster markers
      const markerCluster = new MarkerClusterer({
        markers,
        map,
      });

      // Get user's current location
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            const userLatLng = { lat: latitude, lng: longitude };

            // Set map center to user's current location
            map.setCenter(userLatLng);

            // Add a marker for the user's location
            new window.google.maps.Marker({
              position: userLatLng,
              map: map,
              title: 'Your Location',
            });
          },
          (error) => {
            console.error('Error getting the user location:', error);
          },
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };

    if (!window.google) {
      // Load Google Maps API script
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAo1-lE5BG9ak2jynJ0BQ6XID366-FmdCA&libraries=places`;
      script.defer = true;
      script.async = true;
      script.onload = loadMap;
      document.head.appendChild(script);
    } else {
      loadMap();
    }
  }, []);

  return (
    <div
      id="map"
      ref={mapRef}
      style={{ width: '100%', height: '300px' }}
      className="my-5"
    ></div>
  );
};

export default MapComponent;
