import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
//import css from './MapWithMarker.module.css'
const position = [50.476640, 30.670757]; // Координаты точки

const MapWithMarker = () => {
  return (
    <MapContainer  center={position} zoom={13}  scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapWithMarker;