import 'leaflet/dist/leaflet.css';
import './map.scss';

const L =require ('leaflet');

import { standard_osm } from './layers/control-layers'
import { dynamicMarker } from './controls/markers';
import { imgIcon } from './controls/icons/imgIcon';


export var map = L.map('map', {
    center: [10.4893298,-75.1226869], //7.905739, -72.511281
    zoom: 13,
    layers: [standard_osm]
});

L.control.zoom({position: 'topright'}).addTo(map); 

// scale control
new L.control.scale({imperial: false}).addTo(map)

dynamicMarker(imgIcon('https://cdn-icons-png.flaticon.com/512/684/684908.png',[18,18] ),[10.4893298,-75.1226869],0).addTo(map);

