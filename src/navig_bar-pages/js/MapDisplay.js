import mapboxgl from 'mapbox-gl';
import React, { useRef, useEffect } from 'react';

mapboxgl.accessToken = 'pk.eyJ1IjoieW9nZXNod2FyaS12cyIsImEiOiJjbDMyeXdoMDAwcDlxM2Rxdm1xaDcwc3hmIn0.0hgbSnRUTvzE7SHrufaI0w'

const MapDisplay = () => {

    const mapContainerRef = useRef(null);

    useEffect(() => {

        const map = new mapboxgl.Map({
            container: mapContainerRef.current, // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [80.140021, 12.947441], // starting position [lng, lat]
            zoom: 17 // starting zoom
        });
        
        map.on('load', () => {
            Map.addLayer({
                id: 'terrain-data',
                type: 'line',
                source: {
                    type: 'vector',
                    url: 'mapbox://mapbox.mapbox-terrain-v2'
                },
                'source-layer': 'contour',
                layout: {
                    visibility: 'visible'
                },
                paint: {
                    'fill-color': 'rgba(61,153,80,0.55)'
                }
            })
        })
        
        return  () => map.remove(); 
    }, [])

    return (
        <div>
        <div ref={mapContainerRef} className="map-container" />
        </div>
        );


}


export default MapDisplay;