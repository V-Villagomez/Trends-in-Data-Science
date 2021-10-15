var myMap = L.map("map", {
  center: [40.7128, -74.0059],
  zoom: 11
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);


d3.csv("static/data/data_final.csv", function(data) {
  for (var i = 0; i < data.length; i++) {
  console.log(data[i].latitude);
  console.log(data[i].longitude);
}
});