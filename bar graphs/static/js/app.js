// Make the Costume Funnel Graph for the desing of the page:
// d3.csv("../../data/markerdata.csv").then((feature) => {

//     var gd = document.getElementById('bubble');

//     var data = [{type: 'funnel',
//              y: ["NY","DE", "CA", "NJ", "AZ", "TX", "PA", "OH","IL", "FL"],
//              x: [135677, 133550, 133371, 118688, 97349, 96186, 94676, 94093,
//                 85004,77348 ],
//              hoverinfo: 'percent total+x', opacity: 0.65, marker: {color: ["59D4E8", "DDB6C6", "A696C8", "67EACA", "94D2E6"],
//              line: {"width": [4, 2, 2, 3, 1, 1], color: ["3E4E88", "606470", "3E4E88", "606470", "3E4E88"]}},
//              connector: {line: {color: "royalblue", dash: "dot", width: 3}}}];

//     var layout = {margin: {l: 100}, width: 600, height: 500}

//         Plotly.newPlot('bubble', data, layout);


// });
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

    Plotly.newPlot("bubble", data, layout, {showLink: false});
});



// Make a scatter plot demonstrating the salary over the years and the increase in data science jobs

d3.csv("../../data/data_final.csv").then((feature) => {

    var trace2 = {
        x: feature.map(row => row["Founded"]),
        y: feature.map(row => row["avg_Salary"]),
        mode: 'markers',
        marker: {
            color: "orchid",
            opacity: [0.4]
        //     size: [40, 60, 80, 100]
            },
        type: 'scatter'
        };
    
    var scatterData = [trace2];
    Plotly.newPlot('scatter', scatterData)


});




// Make a Histogram for each state showing Salary distribution
function init(){
    d3.csv("../../data/data_final.csv").then((feature) => {
        console.log(feature)
        
    
        var selector = d3.select("#selDataset"); 
        let unique = [...new Set(feature.map(row => row["state"]))];
        console.log(unique);
        unique.forEach((row) => {
            selector
              .append("option")
              .text(row)
              .property("value", row);
          });
       
    
        
        var state = unique[0];
        
        var state_salary = feature.filter(row => row["state"]== state);
        
          

    
        var trace = {
            x: state_salary.map(row => row["avg_Salary"]),
            type: 'histogram',
            
        };
        var data = [trace];
        Plotly.newPlot('myDiv', data);
    });
 
      
}

function optionChanged(dropdownvalue){ 
    console.log(dropdownvalue)
    d3.csv("../../data/data_final.csv").then((feature) => {
        var state_salary = feature.filter(row => row["state"]== dropdownvalue)
        Plotly.restyle("myDiv", "x",[state_salary.map(row => row["avg_Salary"])]);
});
};

init();


  
