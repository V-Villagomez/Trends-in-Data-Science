// from config import db_url;
// db_url = "postgresql://dauzivavcrjsot:2eb6527fd42b15514d612ed150b329e9601d0d8fbad490d583edc21e8365d877@ec2-3-226-165-74.compute-1.amazonaws.com:5432/dfh9j8gfut2e72"
d3.csv("../data/data_final.csv", function(err, rows){
      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
      }

      var data = [{
          type: 'choropleth',
          locationmode: 'USA-states',
          locations: unpack(rows, 'state'),
          z: unpack(rows, 'avg_Salary'),
          text: unpack(rows, 'state'),
          zmin: 0,
          zmax: 170000,
          colorscale: [
              [0, 'rgb(242,240,247)'], [10, 'rgb(218,218,235)'],
              [10, 'rgb(188,189,220)'], [15, 'rgb(158,154,200)'],
              [15, 'rgb(117,107,177)'], [20, 'rgb(84,39,143)']
          ],
          colorbar: {
              title: 'Average Salary',
              thickness: 1.0
          },
          marker: {
              line:{
                  color: 'rgb(255,255,255)',
                  width: 2
              }
          }
      }];


      var layout = {
          title: 'Data Science Jobs in USA',
          geo:{
              scope: 'usa',
              showlakes: true,
              lakecolor: 'rgb(255,255,255)'
          }
      };

      Plotly.newPlot("myDiv", data, layout, {showLink: false});
});

d3.csv('../data/data_final.csv', function(err, rows){
    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

    var data = [{
        type: 'choropleth',
        locationmode: 'USA-states',
        locations: unpack(rows, 'state'),
        z: unpack(rows, 'Rating'),
        text: unpack(rows, 'state'),
        zmin: 0,
        zmax: 5,
        colorscale: [
            [0, 'rgb(242,240,247)'], [0.2, 'rgb(218,218,235)'],
            [0.4, 'rgb(188,189,220)'], [0.6, 'rgb(158,154,200)'],
            [0.8, 'rgb(117,107,177)'], [1, 'rgb(84,39,143)']
        ],
        colorbar: {
            title: 'Rating',
            thickness: 1.0
        },
        marker: {
            line:{
                color: 'rgb(255,255,255)',
                width: 2
            }
        }
    }];


    var layout = {
        title: 'Data Science Jobs in USA',
        geo:{
            scope: 'usa',
            showlakes: true,
            lakecolor: 'rgb(255,255,255)'
        }
    };

    Plotly.newPlot("myDiv2", data, layout, {showLink: false});
});