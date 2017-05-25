// Here we call our variable map and add code to make it dynamic
var map;
// We write a function to init our map. Basically telling the map what it is
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
// Zoom is how close up the map will be, and lat and lng display where in the world we want our map to show
    zoom: 11,
    center: {lat: 40.7, lng: -74.0}
  });

  // This loads our geojson data on to the map!
  map.data.loadGeoJson(
      'https://data.cityofnewyork.us/resource/ffy6-kwxw.geojson');
      
  
}