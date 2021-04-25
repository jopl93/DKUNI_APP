$(document).ready(function(){
    $("#choiceOfGraphs").change( function(){
        console.log(this.value);
        if(this.value=="OptagBA"){
            $('#graph').attr("src", "./images/sektor_optag_bach_2019.png").show();
        } else {
            $('#graph').attr("src","");
            $('#graph').hide();
        }
    }
    );


    $("#choiceOfGraphs").change( function(){
        console.log(this.value);
        if(this.value=="OptagKA"){
            // $('#myDiv').show();
            d3.csv("./images/SDU_optag_kandidater.csv", function(err, rows){
        
                function unpack(rows, key){
                    return rows.map(function(row) {return row [key]; });
                }
        
            var trace1 = {
                x: unpack(rows,"Aargang"),
                y: unpack(rows,"Antal"),
                type: 'scatter',
                line: {color: '#a48c74'}
            }
        
            var data = [trace1];
        
            Plotly.newPlot('myDiv', data);
            })
        } else {
            // $('#graph').attr("src","");
            $('#myDiv').empty();
        }
    }
    );

    
})

