// Create a map object.
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});
// L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//       attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>"
// }).addTo(myMap)
// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);




 d3.csv("../../data/markerdata.csv").then((feature) => {
  console.log(feature);

//   var data = feature;
  var markerGroup = []
  for( var i=0; i < feature.length; i ++) {
    var marker = L.marker([feature[i].latitude, feature[i].longitude],
      title = feature[i].state)

      marker.bindPopup(`<h4>State :${feature[i].state}</h4>
                        <p>Rating : ${feature[i].Rating}</p>
                        <p> Average Salary: ${feature[i].avg_Salary}</p>
                        <p> Average Size: ${feature[i].avg_size}</p>
                        <p> Year Founded: ${feature[i].Founded}</p>
                        `)
    markerGroup.push(marker)
}

myMap.addLayer(L.layerGroup(markerGroup))
} );

