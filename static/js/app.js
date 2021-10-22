console.log("hello");
// Make the choropleth for the avg_salary nationwide
d3.csv("static/data/data_final.csv", function(rows) {
    console.log(rows);
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
        zmax: 150000,
        colorscale: [
            [0, 'rgb(242,240,247)'], [0.2, 'rgb(218,218,235)'],
            [0.4, 'rgb(188,189,220)'], [0.6, 'rgb(158,154,200)'],
            [0.8, 'rgb(117,107,177)'], [1, 'rgb(84,39,143)']
        ],
        colorbar: {
            title: 'Salary',
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

d3.csv("static/data/data_final.csv", function(feature) {

    feature2 = feature.filter(row => row["Founded"] != "NULL")
    
      
      var result = [];
      feature2.reduce(function(res, value) {
        if (!res[value.Founded]) {
          res[value.Founded] = { Founded: value.Founded, qty: 0 };
          result.push(res[value.Founded])
        }
        
            res[value.Founded].qty += 1 ;
        return res;
        
        
      }, {});
      result.sort( function(a,b){a["qty"] - b["qty"]}) ; 
      console.log(result)
      var trace2 = {
        x: result.map(row => row["Founded"]),
        y: result.map(row => row["qty"]),
        mode: 'markers',
        marker: {
            color: "orchid",
            opacity: [0.8]
            },
        type: 'bar'
        };
        var layout = {
            
            xaxis: {
              title: 'years',
            },
            yaxis: {
              
              title: 'Number of Jobs'
            },
            title:'Number of Jobs per Year Nationwide'
          };
    
    var scatterData = [trace2];
    Plotly.newPlot('scatter', scatterData, layout)



});




// Make a Histogram for each state showing Salary distribution
function init(){
    d3.csv("static/data/data_final.csv", function(feature) {
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
            marker: {
                color: "grey",
                opacity: [0.6]}
            
        };
        var data = [trace];
        Plotly.newPlot('myDiv', data);
    });
 
      
}

function optionChanged(dropdownvalue){ 
    console.log(dropdownvalue)
    d3.csv("static/data/data_final.csv", function(feature) {
        var state_salary = feature.filter(row => row["state"]== dropdownvalue)
        Plotly.restyle("myDiv", "x",[state_salary.map(row => row["avg_Salary"])]);
});
};

init();


  
