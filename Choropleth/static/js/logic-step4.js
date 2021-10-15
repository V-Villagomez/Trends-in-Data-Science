var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// var url = "https://data.sfgov.org/resource/cuks-n6tp.json?$limit=10000";

// d3.json(url).then(function(response) {

//   console.log(response);

//   var heatArray = [];

//   for (var i = 0; i < response.length; i++) {
//     var location = response[i].location;

//     if (location) {
//       heatArray.push([location.coordinates[1], location.coordinates[0]]);
//     }
//   }

//   var heat = L.heatLayer(heatArray, {
//     radius: 20,
//     blur: 35
//   }).addTo(myMap);

// });
d3.csv("../data/data_final.csv").then((feature) => {
  console.log(feature);

  var heatArray =[];
  for (var i=0; i< feature.length; i++){
    heatArray.push([feature[i].latitude, feature[i].longitude]);
  }
    var heat = L.heatLayer(heatArray, {
      rdius: 20,
      blur: 35
  }).addTo(myMap);
  });