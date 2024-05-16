
function getlocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(userLocation, errorHandling);
  }
}
function userLocation(pos) {
  latitude = pos.coords.latitude;
  longitude = pos.coords.longitude;
  var userLoc = new google.maps.LatLng(latitude, longitude), 
  risotto = new google.maps.LatLng(45.7816583, 9.2069505),
  tomkha = new google.maps.LatLng(15.8026401, 100.3773388), 
  carbonara = new google.maps.LatLng(41.904821, 12.498697), 
  dhal = new google.maps.LatLng(28.6139, 77.2090), 
  Options = {
    center: userLoc,
    zoom: 15,
    mapTypeControl: true,
  }, 
  map = new google.maps.Map(
    document.getElementById("map"),
    Options
  ), 
  markerUser = new google.maps.Marker({
    position: userLoc,
    map: map,
    title: "Your Location!",
  }), 
  markerRis = new google.maps.Marker({
    position: risotto,
    map: map,
    title: "Risotto's Birthplace!",
  }), 
  markerTom = new google.maps.Marker({
    position: tomkha,
    map: map,
    title: "Tom Kha's Birthplace!",
  }), 
  markerCarb = new google.maps.Marker({
    position: carbonara,
    map: map,
    title: "Carbonara's Birthplace!",
  }), 
  markerDhal = new google.maps.Marker({
    position: dhal,
    map: map,
    title: "Dhal's Birthplace!",
  });
}

function errorHandling(error) {
  if (error.TIMEOUT) 
  {
    result.innerHTML = "Attempt to retrieve location timed out.";
  }
  if (error.PERMISSION_DENIED) 
  {
    result.innerHTML = "Permission denied.";
  }
  if (error.UNKNOWN_ERROR) 
  {
    result.innerHTML = "Unknown error. Please try again later.";
  }
  if (error.POSITION_UNAVAILABLE) 
  {
    result.innerHTML = "Unable to retrieve current location.";
  }
}