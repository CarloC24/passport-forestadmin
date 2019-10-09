const express = require('express');
const requireAll = require('require-all');

const app = express();

requireAll({
  dirname: __dirname + '/middlewares',
  recursive: true,
  resolve: Module => new Module(app),
});

mapboxgl.accessToken = '<your access token here>';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/light-v10',
center: [-90.96, -0.47],
zoom: 8
});

map.on('load', function () {
// Add a symbol layer.
map.addLayer({
"id": "symbols",
"type": "symbol",
"source": {
"type": "geojson",
"data": {
"type": "FeatureCollection",
"features": [
{
"type": "Feature",
"properties": {},
"geometry": {
"type": "Point",
"coordinates": [
-91.395263671875,
-0.9145729757782163

]
}
},
{
"type": "Feature",
"properties": {},
"geometry": {
"type": "Point",
"coordinates": [
-90.32958984375,
-0.6344474832838974
]
}
},
{
"type": "Feature",
"properties": {},
"geometry": {
"type": "Point",
"coordinates": [
-91.34033203125,
0.01647949196029245
]
}
}
]
}
},
"layout": {
"icon-image": "rocket-15"
}
});

// Center the map on the coordinates of any clicked symbol from the 'symbols' layer.
map.on('click', 'symbols', function (e) {
map.flyTo({center: e.features[0].geometry.coordinates});
});

// Change the cursor to a pointer when the it enters a feature in the 'symbols' layer.
map.on('mouseenter', 'symbols', function () {
map.getCanvas().style.cursor = 'pointer';
});

// Change it back to a pointer when it leaves.
map.on('mouseleave', 'symbols', function () {
map.getCanvas().style.cursor = '';
});
});

module.exports = app;
