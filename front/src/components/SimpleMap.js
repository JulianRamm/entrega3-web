import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
// import MarkerExample from './marker_example.jsx';

const AnyReactComponent = ({ text }) => (
  <div>
    <i className="fas fa-map-marker marker fa-2x"></i>
  </div>
);

const SimpleMap = () => {
  const markers = [];

  let items = [];

  const [mapMarkers, setMapMarkers] = useState([]);

  /**
   * constante con la llave para Google maps
   */

  const mapsKey = "AIzaSyDWDt2-VHy5BZHqJKI5c6tmcaNJVrm6U8c";

  const [center, setCenter] = useState({ lat: 4.539202, lng: -74.109463 });

  const defaultProps = {
    zoom: 14,
  };

  navigator.geolocation.getCurrentPosition((position) => {
    let newCenter = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setCenter(newCenter);
  });

  for (var i = 0; i < markers.length; i++) {
    items.push(
      <AnyReactComponent
        lat={markers[i].lat}
        lng={markers[i].lng}
        text={markers[i].text}
      />
    );
  }

  function convertItems(array) {
    for (var i = 0; i < array.length; i++) {
      items.push(
        <AnyReactComponent
          lat={array[i].lat}
          lng={array[i].lng}
          text={array[i].text}
        />
      );
    }
    setMapMarkers(items);
  }

  useEffect(() => {
    let newMarkers = fetch("api/locations/").then((res) => {
      res.json().then((json) => {
        let newMarkers = [];
        console.log(json);
        for (let marker of json) {
          let newMaker = {
            text: marker.nombre,
            lat: marker.latitud,
            lng: marker.longitud,
          };
          newMarkers.push(newMaker);
        }
        items = [];
        convertItems(newMarkers);
      });
    });
  }, []);

  return (
    // Important! Always set the container height explicitly
    <div className="row justify-content-center">
      <h3>
        Encuentra todas las donaciones cercanas a las que puedes realizar esta
        donación
      </h3>
      <div style={{ height: "500px", width: "60%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: mapsKey }}
          defaultCenter={center}
          defaultZoom={defaultProps.zoom}
        >
          {mapMarkers}
        </GoogleMapReact>
      </div>
    </div>
  );
  
};

export default SimpleMap;
