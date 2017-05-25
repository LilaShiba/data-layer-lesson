var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: {lat: 40.7, lng: -74.0}
  });

  // NOTE: This uses cross-domain XHR, and may not work on older browsers.
  map.data.loadGeoJson(
      'https://data.cityofnewyork.us/resource/ffy6-kwxw.geojson');
}