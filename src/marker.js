const mapboxgl = require('mapbox-gl');

module.exports = function(type, coords) {
  if (type === 'hotel') {
    console.log('hotel');

    const marker = document.createElement('div');
    marker.style.height = '25px';
    marker.style.width = '25px';
    marker.style.backgroundImage = 'url(http://i.imgur.com/D9574Cu.png)';

    return new mapboxgl.Marker(marker).setLngLat(coords);
  } else if (type === 'activity') {
    console.log('activity');
    const marker = document.createElement('div');
    marker.style.height = '25px';
    marker.style.width = '25px';
    marker.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';

    return new mapboxgl.Marker(marker).setLngLat(coords);
  } else if (type === 'restaurant') {
    console.log('food');
    const marker = document.createElement('div');
    marker.style.height = '25px';
    marker.style.width = '25px';
    marker.style.backgroundImage = 'url(http://i.imgur.com/cqR6pUI.png)';

    return new mapboxgl.Marker(marker).setLngLat(coords);
  }
};
