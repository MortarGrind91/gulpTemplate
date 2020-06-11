var map, infoWindow;

function initMap() {
  let centerLatLng = new google.maps.LatLng(48.3918, 35.0519);
  var mapOptions = {
    center: centerLatLng,
    zoom: 14,
    scrollwheel: false
  };

  map = new google.maps.Map(document.getElementById("map"), mapOptions);
  infoWindow = new google.maps.InfoWindow();

  var markers = [];

  var latLng = new google.maps.LatLng(48.3918, 35.0519);
  var marker = addMarker(latLng, '+38095249-35-74', 'г. Днепр, ул. Аэропортовская, 51', 'belife.ukraine@gmail.com');
  markers.push(marker);
}

google.maps.event.addDomListener(window, "load", initMap);

function addMarker(latLng, phone, address, email) {
  var marker = new google.maps.Marker({
    position: latLng,
    map: map,
    icon: "../img/map-marker.png"
  });

  google.maps.event.addListener(marker, "click", function () {
    infoWindow.close();
    var contentString = `
    <div class="map-info">
      <div class="map-title">${address}</div>
      <div class="map-phone">${phone}</div>
      <div class="map-email">${email}</div>
    </div>
    `;
    infoWindow.setContent(contentString);
    infoWindow.open(map, marker);
  });

  return marker;
}