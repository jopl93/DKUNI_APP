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
                    title: 'Optag, BA (SDU)'
                    // margin: {
                    //   l: 40,
                    //   r: 40
                    // }
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
                    title: 'Optag, KA'
                    // margin: {
                    //   l: 40,
                    //   r: 40
                    // }
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
                    name: 'SDU',
                    type: 'scatter',
                    line: {color: '#a48c74'},
                };

                var trace2 = {
                    x: unpack(rows,"Aargang"),
                    y: unpack(rows,"AAU"),
                    xaxis: 'x2',
                    yaxis: 'y2',
                    name: 'AAU',
                    type: 'scatter',
                    line: {color: '#a48c74'},
                };


                var trace3 = {
                    x: unpack(rows,"Aargang"),
                    y: unpack(rows,"KU"),
                    xaxis: 'x3',
                    yaxis: 'y3',
                    name: 'KU',
                    type: 'scatter',
                    line: {color: '#a48c74'},
                };


                var trace4 = {
                    x: unpack(rows,"Aargang"),
                    y: unpack(rows,"AU"),
                    xaxis: 'x4',
                    yaxis: 'y4',
                    name: 'AU',
                    type: 'scatter',
                    line: {color: '#a48c74'},
                };


                var trace5 = {
                    x: unpack(rows,"Aargang"),
                    y: unpack(rows,"ITU"),
                    xaxis: 'x5',
                    yaxis: 'y5',
                    name: 'ITU',
                    type: 'scatter',
                    line: {color: '#a48c74'},
                };


                var trace6 = {
                    x: unpack(rows,"Aargang"),
                    y: unpack(rows,"CBS"),
                    xaxis: 'x6',
                    yaxis: 'y6',
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
                    y: unpack(rows,"RUC"),
                    xaxis: 'x8',
                    yaxis: 'y8',
                    name: 'RUC',
                    type: 'scatter',
                    line: {color: '#a48c74'},
                };

                var layout = {
                    title: 'Optag, KA',
                    // margin: {
                    //   l: 40,
                    //   r: 40
                    // }
                    grid: {rows:4, columns: 2, pattern: 'independent'}
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

