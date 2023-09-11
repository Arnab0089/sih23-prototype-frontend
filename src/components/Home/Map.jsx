import GoogleMapReact from "google-map-react";

export default function Map() {
  const defaultProps = {
    center: {
      lat: 22.572646,
      lng: 88.363895,
    },
    zoom: 11,
  };

  return (
    <div className="w-full h-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      ></GoogleMapReact>
    </div>
  );
}
