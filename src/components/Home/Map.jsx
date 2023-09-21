import GoogleMapReact from "google-map-react";
import React, { useState, useEffect } from "react";
import reactIcon from "./../../assets/react.svg";

export default function Map() {
  const [scale, setScale] = useState(1);
  const [zoom, setZoom] = useState(11);
  const defaultProps = {
    center: {
      lat: 22.572646,
      lng: 88.363895,
    },
    zoom: 11,
  };

  const handleClick = ({ x, y, lat, lng, event }) => {
    console.log(x, y, lat, lng, event);
  };

  const handleChange = (e) => {
    console.log(e);
  };

  return (
    <div className="w-full h-full">
      <GoogleMapReact
        onClick={handleClick}
        onChange={handleChange}
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker1 scale={1.5} lat={22.572646} lng={88.363895} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}

function Marker1({ scale }) {
  return (
    <>
      <div
        className=" bg-[#ff000044] rounded-full relative "
        style={{ width: `${scale * 50}px`, height: `${scale * 50}px` }}
      >
        <div className="h-2 w-2 bg-red-800 rounded-full absolute top-[50%] left-[50%] "></div>
        <div className="h-2 w-2 bg-red-800 rounded-full top-4 left-3 absolute "></div>
        <div className="h-2 w-2 bg-red-800 rounded-full bottom-3 left-5 absolute "></div>
      </div>
    </>
  );
}
