const mapboxgl = require('mapbox-gl');
const markerGenerator = require('./marker');

mapboxgl.accessToken =
  'pk.eyJ1IjoiZnJhbmNvbXQiLCJhIjoiY2s3dW90aHVzMWN3bDNtcDR0Njh4emVnbCJ9.YYzSmEhJtf5LqNgD6Zq3Fg';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

markerGenerator('activity', [-74.009151, 40.705086]).addTo(map);
