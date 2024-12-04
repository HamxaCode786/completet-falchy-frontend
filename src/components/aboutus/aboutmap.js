
import React from 'react'
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// Fix for missing marker icons in Leaflet
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

const aboutusmap = () => {
    const position = [48.8584, 2.2945]; 

 
  return (
    <div className='map-section'>
      <p className='aboutus-info-subheading'>Our Location</p>  
      <div className='map-container'>
        
        <MapContainer center={position} zoom={13} className='map'>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              Contact us here!
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      </div>

  )
}

export default aboutusmap