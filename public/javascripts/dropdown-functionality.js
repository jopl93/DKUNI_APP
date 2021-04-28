$(document).ready(function(){
    
    $("#choiceOfGraphs").change( function(){
        console.log(this.value);
        if(this.value=="OptagBA"){
            d3.csv("./images/SDU_optag_bachelorer.csv", function(err, rows){
        
                function unpack(rows, key){
                    return rows.map(function(row) {return row [key]; });
                }
        
                var trace1 = {
                    x: unpack(rows,"Aargang"),
                    y: unpack(rows,"Antal"),
                    name: 'SDU',
                    type: 'scatter',
                    line: {color: '#a48c74'},
                };

                var layout = {
                    title: 'Optag, BA (SDU)',
                    xaxis: {title: {text: 'År'}},
                    yaxis: 
                        {rangemode: 'tozero',
                        title: {text: 'Studerende'}
                        },
                    margin: {
                        l: 50,
                        r: 50
                         }
                }
        
                var data = [trace1];

                var defaultPlotlyConfiguration = { modeBarButtonsToRemove: ['sendDataToCloud', 'autoScale2d', 'lasso2d', 'select2d'], displaylogo: false, showTips: true };
        
                Plotly.newPlot('myDiv', data, layout,defaultPlotlyConfiguration);
            })
        } else {
            $('#myDiv').empty();
        }
    }
    );


    $("#choiceOfGraphs").change( function(){
        console.log(this.value);
        if(this.value=="OptagKA"){
            // $('#myDiv').show();
            d3.csv("./images/ny_optag_kandidater.csv", function(err, rows){
        
                function unpack(rows, key){
                    return rows.map(function(row) {return row [key]; });
                }
        
                var trace1 = {
                    x: unpack(rows,"Aargang"),
                    y: unpack(rows,"SDU"),
                    name: 'SDU',
                    type: 'scatter',
                    line: {color: '#a48c74'},
                };

                var trace2 = {
                    x: unpack(rows,"Aargang"),
                    y: unpack(rows,"AAU"),
                    name: 'AAU',
                    type: 'scatter',
                    line: {color: '#a48c74'},
                };


                var trace3 = {
                    x: unpack(rows,"Aargang"),
                    y: unpack(rows,"KU"),
                    name: 'KU',
                    type: 'scatter',
                    line: {color: '#a48c74'},
                };


                var trace4 = {
                    x: unpack(rows,"Aargang"),
                    y: unpack(rows,"AU"),
                    name: 'AU',
                    type: 'scatter',
                    line: {color: '#a48c74'},
                };


                var trace5 = {
                    x: unpack(rows,"Aargang"),
                    y: unpack(rows,"ITU"),
                    name: 'ITU',
                    type: 'scatter',
                    line: {color: '#a48c74'},
                };


                var trace6 = {
                    x: unpack(rows,"Aargang"),
                    y: unpack(rows,"CBS"),
                    name: 'CBS',
                    type: 'scatter',
                    line: {color: '#a48c74'},
                };


                var trace7 = {
                    x: unpack(rows,"Aargang"),
                    y: unpack(rows,"DTU"),
                    name: 'DTU',
                    type: 'scatter',
                    line: {color: '#a48c74'},
                };

                var trace8 = {
                    x: unpack(rows,"Aargang"),
                    y: unpack(rows,"RUC"),
                    name: 'RUC',
                    type: 'scatter',
                    line: {color: '#a48c74'},
                };

                var layout = {
                    title: 'Optag, KA',
                    xaxis: {title: {text: 'År'}},
                    yaxis: {title: {text: 'Studerende'}, rangemode: 'tozero'}, 
                    margin: {
                      l: 50,
                      r: 50,
                    }
                }
        
                var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8];

                var defaultPlotlyConfiguration = { modeBarButtonsToRemove: ['sendDataToCloud', 'autoScale2d', 'lasso2d', 'select2d'], displaylogo: false, showTips: true };
        
                Plotly.newPlot('myDiv', data, layout,defaultPlotlyConfiguration);
            })
        } else {
            // $('#graph').attr("src","");
            $('#myDiv').empty();
        }
    }
    );

    $("#choiceOfGraphs").change( function(){
        console.log(this.value);
        if(this.value=="Produktion, BA"){
            // $('#myDiv').show();
            d3.csv("./images/ny_optag_kandidater.csv", function(err, rows){
        
                function unpack(rows, key){
                    return rows.map(function(row) {return row [key]; });
                }
        
                var trace1 = {
                    x: unpack(rows,"Aargang"),
                    y: unpack(rows,"SDU"),
                    xaxis: 'x7',
                    yaxis: 'y',
                    name: 'SDU',
                    type: 'scatter',
                    line: {color: '#a48c74'},
                };

                var trace2 = {
                    x: unpack(rows,"Aargang"),
                    y: unpack(rows,"AAU"),
                    xaxis: 'x8',
                    yaxis: 'y',
                    name: 'AAU',
                    type: 'scatter',
                    line: {color: '#a48c74'},
                };


                var trace3 = {
                    x: unpack(rows,"Aargang"),
                    y: unpack(rows,"RUC"),
                    xaxis: 'x7',
                    yaxis: 'y3',
                    name: 'RUC',
                    type: 'scatter',
                    line: {color: '#a48c74'},
                };


                var trace4 = {
                    x: unpack(rows,"Aargang"),
                    y: unpack(rows,"AU"),
                    xaxis: 'x8',
                    yaxis: 'y3',
                    name: 'AU',
                    type: 'scatter',
                    line: {color: '#a48c74'},
                };


                var trace5 = {
                    x: unpack(rows,"Aargang"),
                    y: unpack(rows,"ITU"),
                    xaxis: 'x7',
                    yaxis: 'y5',
                    name: 'ITU',
                    type: 'scatter',
                    line: {color: '#a48c74'}, 
                };


                var trace6 = {
                    x: unpack(rows,"Aargang"),
                    y: unpack(rows,"CBS"),
                    xaxis: 'x8',
                    yaxis: 'y5',
                    name: 'CBS',
                    type: 'scatter',
                    line: {color: '#a48c74'},
                };


                var trace7 = {
                    x: unpack(rows,"Aargang"),
                    y: unpack(rows,"DTU"),
                    xaxis: 'x7',
                    yaxis: 'y7',
                    name: 'DTU',
                    type: 'scatter',
                    line: {color: '#a48c74'},
                };

                var trace8 = {
                    x: unpack(rows,"Aargang"),
                    y: unpack(rows,"KU"),
                    xaxis: 'x8',
                    yaxis: 'y7',
                    name: 'KU',
                    type: 'scatter',
                    line: {color: '#a48c74'},
                };

                var layout = {
                    title: 'Optag, KA',
                    margin: {
                    l: 33,
                    r: 33
                    },
                    yaxis: {range: [0,6500]},
                    yaxis3: {range: [0,6500]},
                    yaxis5: {range: [0,6500]},
                    yaxis7: {range: [0,6500]},
                    grid: {rows:4, columns: 2, subplots:[['x7y','x8y'], ['x7y3','x8y3'], ['x7y5','x8y5'], ['x7y7','x8y7'] ]},

                }
        
                var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8];

                var defaultPlotlyConfiguration = { modeBarButtonsToRemove: ['sendDataToCloud', 'autoScale2d', 'lasso2d', 'select2d'], displaylogo: false, showTips: true };
        
                Plotly.newPlot('myDiv', data, layout,defaultPlotlyConfiguration);
            })
        } else {
            // $('#graph').attr("src","");
            $('#myDiv').empty();
        }
    }
    );

    
})

