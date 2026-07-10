if(coordinates[0]){
  const map = L.map("map").setView(
    [coordinates[1], coordinates[0]], // Leaflet uses [lat, lng]
    13
);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

L.marker([coordinates[1], coordinates[0]])
    .addTo(map)
    .bindPopup(title)
    .openPopup();
}
else{
  var map = L.map("map").setView([30.7415, 76.7681], 13);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
}