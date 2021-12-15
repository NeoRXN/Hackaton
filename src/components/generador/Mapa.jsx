import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px',
    
};

const center = {
    lat: 10.388349,
    lng: -75.484475
};

function Mapa() {
    return (
    <div className='mapa'>
        <h3 className="titulo">Mapa</h3>
        <LoadScript
        googleMapsApiKey="AIzaSyCUvl6iuGKHgFcf3IfD7KhiFnO95VYr95I"
        >
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
        >
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
        </GoogleMap>
        </LoadScript>
    </div>
)
}

export default React.memo(Mapa)
