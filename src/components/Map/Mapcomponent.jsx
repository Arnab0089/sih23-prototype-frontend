import React, { useEffect } from 'react';

const MapComponent = () => {
  useEffect(() => {
    const loadMap = () => {
      if (!window.google) {
        // Google Maps API not loaded
        console.error('Google Maps API not loaded.');
        return;
      }

      // Load map
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 0, lng: 0 },
        zoom: 12,
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
      style={{ width: '100%', height: '300px' }}
      className="my-5"
    ></div>
  );
};

export default MapComponent;
