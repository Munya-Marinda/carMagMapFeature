function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(-33.932242, 18.495223),
    zoom: 12,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

  new google.maps.Marker({
    position: { lat: -33.932242, lng: 18.495223 },
    map,
    title: "After a long struggle...",
  });

  new google.maps.Marker({
    position: { lat: -33.9192994, lng: 18.3836213 },
    map,
    title: "After a long struggle...",
  });
}
