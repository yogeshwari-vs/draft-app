import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import firebase from 'firebase';
import { TextField, Button } from '@material-ui/core';


import fetchFakeData from './FetchFakeData';
import '../css/Map.css';

const Map = () => {
	return (
		<>
		<div>HELLOOOO!</div>
		</>
	)
}
// mapboxgl.accessToken = 'pk.eyJ1IjoieW9nZXNod2FyaS12cyIsImEiOiJjbDMyeXdoMDAwcDlxM2Rxdm1xaDcwc3hmIn0.0hgbSnRUTvzE7SHrufaI0w'

// const Map = new mapboxgl.Map({
// 	container: 'Map',
// 	style: 'mapbox://styles/mapbox/streets-v11',
// 	center: [80.140021, 12.947441], //starting point
// 	zoom: 12
// });

// const bounds = [
// 	[79.899021, 12.78321],
// 	[80.453212, 13.23143]
// ];

// Map.setMaxBounds(bounds);

// const start = [80.140021, 12.947441];

// //to make the api request and to add the resulting route as new layer


export default Map;
//=============================================================================================================================
// const Map = () => {

//   var userVar
//   var receiverLocation
//   var senderLocation
//   var status_robot
//   var receiverLocLongitude
//   var receiverLocLatitude
//   var senderLocLongitude
//   var senderLocLatitute
//   var receiverVar
//   var senderVar
//   var receiverLocation
//   var senderLocation

//   const userVarFunc = (userLocation) => {
//     if (userLocation === 'A'){
//       userVar = 0
//     }
//     else if (userLocation === 'B'){
//       userVar = 1
//     }
//     else if (userLocation === 'C'){
//       userVar = 2
//     }
//   }

//   const mapContainerRef = useRef(null);
//   var locationCoordLatitude = [80.140021, 80.139208, 80.141053]
//   var locationCoordLongitude = [12.948514, 12.947441, 12.948798]

//   // firebase.database().ref('/availability').on('value', (snap) =>{
// 	// 	status_robot = snap.val()
// 	// })
//   // console.log(status_robot, "in map")

//   // firebase.database().ref('/currentDelivery/Receiver/Location').on('value', (snap) =>{
// 	// 	receiverLocation = snap.val()
// 	// })

//   // firebase.database().ref('currentDelivery/Sender/Location').on('value', (snap) =>{
// 	// 	senderLocation = snap.val()
// 	// })

//   console.log('1:', senderLocation)
//   console.log('2:', receiverLocation)
  
//   senderVar = userVarFunc(senderLocation)
//   receiverVar = userVarFunc(receiverLocation)

//   senderLocLatitute = 80.139208//locationCoordLatitude[senderVar]
//   senderLocLongitude = 12.947441//locationCoordLongitude[senderVar]
//   receiverLocLatitude = 80.140021//locationCoordLatitude[receiverVar]
//   receiverLocLongitude = 12.948514//locationCoordLongitude[receiverVar]
//   // set the bounds of the map


//   var end = [receiverLocLatitude, receiverLocLongitude]
//     const map = new mapboxgl.Map({
//       container: mapContainerRef.current,
//       style: 'mapbox://styles/mapbox/streets-v11',
//       center: [82.139208, 14.947441],
//       zoom: 12.5,
//     });
//     const bounds = [
//       [-123.069003, 45.395273],
//       [-122.303707, 45.612333]
//     ];
//     map.setMaxBounds(bounds);
//     //onst start = [senderLocLatitute, senderLocLongitude]
//     const start = [-122.662323, 45.523751];
//     //----------------------------------------------------------------------------------------------

//     // create a function to make a directions request
//       async function getRoute(end) {
//         // make a directions request using cycling profile
//         // an arbitrary start will always be the same
//         // only the end or destination will change
//         const query = await fetch(
//           `https://api.mapbox.com/directions/v5/mapbox/cycling/${senderLocLatitute},${senderLocLongitude};${receiverLocLatitude},${receiverLocLongitude}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
//           { method: 'GET' }
//         );
//         const json = await query.json();
//         const data = json.routes[0];
//         const route = data.geometry.coordinates;
//         const geojson = {
//           type: 'Feature',
//           properties: {},
//           geometry: {
//             type: 'LineString',
//             coordinates: route
//           }
//         };
//         // if the route already exists on the map, we'll reset it using setData
//         if (map.getSource('route')) {
//           map.getSource('route').setData(geojson);
//         }
//         // otherwise, we'll make a new request
//         else {
//           map.addLayer({
//             id: 'route',
//             type: 'line',
//             source: {
//               type: 'geojson',
//               data: geojson
//             },
//             layout: {
//               'line-join': 'round',
//               'line-cap': 'round'
//             },
//             paint: {
//               'line-color': '#3887be',
//               'line-width': 5,
//               'line-opacity': 0.75
//             }
//           });
//         }
        // add turn instructions here at the end
      // }

      // map.on('load', () => {
      //   // make an initial directions request that
      //   // starts and ends at the same location
      //   getRoute(start);

      //   // Add starting point to the map
      //   map.addLayer({
      //     id: 'point',
      //     type: 'circle',
      //     source: {
      //       type: 'geojson',
      //       data: {
      //         type: 'FeatureCollection',
      //         features: [
      //           {
      //             type: 'Feature',
      //             properties: {},
      //             geometry: {
      //               type: 'Point',
      //               coordinates: start
      //             }
      //           }
      //         ]
      //       }
      //     },
      //     paint: {
      //       'circle-radius': 10,
      //       'circle-color': '#3887be'
      //     }
      //   });
      //   // this is where the code from the next step will go
      // });
    //----------------------------------------------------------------------------------------------
    // const geojson = {
    //   type: 'FeatureCollection',
    //   features: [
    //     {
    //       type: 'Feature',
    //       point: 'Start point',
    //       geometry: {
    //         type: 'Point',
    //         coordinates: route
    //       },
    //       properties: {
    //         title: 'Mapbox',
    //         description: 'Start point'
    //       }
    //     },
    //     {
    //       type: 'Feature',
    //       point: 'End point',
    //       geometry: {
    //         type: 'Point',
    //         coordinates: route
    //       },
    //       properties: {
    //         title: 'Mapbox',
    //         description: 'End point'
    //       }
    //     }
    //   ]
    // };
  // add markers to map
  // for (const feature of geojson.features) {
  //   if (feature.point === 'Start point')
  //   {
  //   const elcp = document.createElement('div');
  //   elcp.className = 'markerCp';
  //   new mapboxgl.Marker(elcp).setLngLat(feature.geometry.coordinates).addTo(map);
  //   }
    
  //   else 
  //   {
  //   const elep = document.createElement('div')
  //   elep.className = 'markerEp';
  //   new mapboxgl.Marker(elep).setLngLat(feature.geometry.coordinates).addTo(map);
  //   }
  // }


  //   // add navigation control (the +/- zoom buttons)
  //   map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

  //   return () => map.remove();
// eslint-disable-line react-hooks/exhaustive-deps

//   return (
//   <>

//   <div className="map-container" ref={mapContainerRef} />
//   </>
//   )};

// export default Map;


//=============================================================================================================================