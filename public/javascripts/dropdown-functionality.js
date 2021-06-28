$(document).ready(function(){
    
    //If OptagBA is chosen, then show radioButtons
    $("#choiceOfGraphs").change( function(){
        console.log(this.value);
        if(this.value=="OptagBA"){
            $("#radioButtons").show();
        }
    });

    //Check value from radio buttons
    $("input[name=hoved_fag]").change(function(){

        var radioButton = $("input[name=hoved_fag]:checked").val();

        //Humaniora
        if(radioButton=="huma"){

            $("#myDiv").css("height","1000px"); //Extra height is added to the div to make room for this plot

            //Which file to extract the data from
            d3.csv("./files/Optag_BA_humaniorer.csv", function(err, rows){
        
                function unpack(rows, key){
                    return rows.map(function(row) {return row [key]; });
                }
        
                var trace1 = {
                    x: unpack(rows,"Aargang"),
                    y: unpack(rows,"Sektor"),
                    name: 'SEKTOR',
                    type: 'scatter',
                    line: {color: '#a48c74'},
                };

                var trace2 = {
                    x: unpack(rows,"Aargang"),
                    y: unpack(rows,"AU"),
                    xaxis: 'x2',
                    yaxis: 'y2',
                    name: 'AU',
                    type: 'scatter',
                    line: {color: '#a48c74'},
                };

                var trace3 = {
                    x: unpack(rows,"Aargang"),
                    y: unpack(rows,"CBS"),
                    xaxis: 'x3',
                    yaxis: 'y3',
                    name: 'CBS',
                    type: 'scatter',
                    line: {color: '#a48c74'},
                };

                var trace4 = {
                    x: unpack(rows,"Aargang"),
                    y: unpack(rows,"KU"),
                    xaxis: 'x4',
                    yaxis: 'y4',
                    name: 'KU',
                    type: 'scatter',
                    line: {color: '#a48c74'},
                };

                var trace5 = {
                    x: unpack(rows,"Aargang"),
                    y: unpack(rows,"RUC"),
                    xaxis: 'x5',
                    yaxis: 'y5',
                    name: 'RUC',
                    type: 'scatter',
                    line: {color: '#a48c74'},
                };

                var trace6 = {
                    x: unpack(rows,"Aargang"),
                    y: unpack(rows,"SDU"),
                    xaxis: 'x6',
                    yaxis: 'y6',
                    name: 'SDU',
                    type: 'scatter',
                    line: {color: '#a48c74'},
                };

                var trace7 = {
                    x: unpack(rows,"Aargang"),
                    y: unpack(rows,"AAU"),
                    xaxis: 'x7',
                    yaxis: 'y7',
                    name: 'AAU',
                    type: 'scatter',
                    line: {color: '#a48c74'},
                };
                
                //What data (plots) to add
                var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7];

                //The layout of the plots
                var layout = {
                    title: 'Studerende optaget på bacheloren',
                    yaxis: //y-axis for the first subplot
                        {rangemode: 'tozero',
                            title: {text: 'Studerende'}
                        },
                    yaxis2: //y-axis for the second subplot
                        {rangemode: 'tozero',
                            title: {text: 'Studerende'}
                        },
                    yaxis3: 
                        {rangemode: 'tozero',
                            title: {text: 'Studerende'}
                    },
                    yaxis4:     
                        {rangemode: 'tozero',
                            title: {text: 'Studerende'}
                        },
                    yaxis5: 
                        {rangemode: 'tozero',
                            title: {text: 'Studerende'}
                        },
                    yaxis6: 
                        {rangemode: 'tozero',
                            title: {text: 'Studerende'}
                        },
                    xaxis7: {title: {text: 'År'}}, //x-axis for the last subplot
                    yaxis7: 
                        {rangemode: 'tozero',
                            title: {text: 'Studerende'}
                        },
                    showlegend: false,
                    annotations: [ //Titles for the subplots
                        {
                            x: 2013.5,
                            y: 11000,
                            xref: 'x', //The x-axis of the first subplot
                            yref: 'y',
                            text: '<b>SEKTOR</b>',
                            showarrow: false,
                            borderwidth: 6,

                        },
                        {
                            x: 2013.5,
                            y: 2500,
                            xref: 'x2', //The x-axis of the second subplot 
                            yref: 'y2',
                            text: '<b>AU</b>', 
                            showarrow: false,
                            borderwidth: 6,

                        },
                        {
                            x: 2013.5,
                            y: 800,
                            xref: 'x3',
                            yref: 'y3',
                            text: '<b>CBS</b>',
                            showarrow: false,
                            borderwidth: 6,

                        },
                        {
                            x: 2013.5,
                            y: 3000,
                            xref: 'x4',
                            yref: 'y4',
                            text: '<b>KU</b>',
                            showarrow: false,
                            borderwidth: 6,

                        },
                        {
                            x: 2013.5,
                            y: 1000,
                            xref: 'x5',
                            yref: 'y5',
                            text: '<b>RUC</b>',
                            showarrow: false,
                            borderwidth: 6,

                        },
                        {
                            x: 2013.5,
                            y: 2500,
                            xref: 'x6',
                            yref: 'y6',
                            text: '<b>SDU</b>',
                            showarrow: false,
                            borderwidth: 6,

                        },
                        {
                            x: 2013.5,
                            y: 2000,
                            xref: 'x7',
                            yref: 'y7',
                            text: '<b>AAU</b>',
                            showarrow: false,
                            borderwidth: 6,

                        }

                    ],

                    grid: {rows: 7, columns: 1, pattern: 'independent'},
                };
        
                //Construction of the plot
                Plotly.newPlot('myDiv', data, layout, {staticPlot: true});
            })



        } else if(radioButton=="samf"){ //Samfundsvidenskab

            $("#myDiv").css("height","1000px"); //Extra height is added to the div to make room for this plot

                //Which file to extract the data from
                d3.csv("./files/Optag_BA_samfund.csv", function(err, rows){
            
                    function unpack(rows, key){
                        return rows.map(function(row) {return row [key]; });
                    }
            
                    var trace1 = {
                        x: unpack(rows,"Aargang"),
                        y: unpack(rows,"Sektor"),
                        name: 'SEKTOR',
                        type: 'scatter',
                        line: {color: '#a48c74'},
                    };

                    var trace2 = {
                        x: unpack(rows,"Aargang"),
                        y: unpack(rows,"AU"),
                        xaxis: 'x2',
                        yaxis: 'y2',
                        name: 'AU',
                        type: 'scatter',
                        line: {color: '#a48c74'},
                    };

                    var trace3 = {
                        x: unpack(rows,"Aargang"),
                        y: unpack(rows,"CBS"),
                        xaxis: 'x3',
                        yaxis: 'y3',
                        name: 'CBS',
                        type: 'scatter',
                        line: {color: '#a48c74'},
                    };

                    var trace4 = {
                        x: unpack(rows,"Aargang"),
                        y: unpack(rows,"KU"),
                        xaxis: 'x4',
                        yaxis: 'y4',
                        name: 'KU',
                        type: 'scatter',
                        line: {color: '#a48c74'},
                    };

                    var trace5 = {
                        x: unpack(rows,"Aargang"),
                        y: unpack(rows,"RUC"),
                        xaxis: 'x5',
                        yaxis: 'y5',
                        name: 'RUC',
                        type: 'scatter',
                        line: {color: '#a48c74'},
                    };

                    var trace6 = {
                        x: unpack(rows,"Aargang"),
                        y: unpack(rows,"SDU"),
                        xaxis: 'x6',
                        yaxis: 'y6',
                        name: 'SDU',
                        type: 'scatter',
                        line: {color: '#a48c74'},
                    };

                    var trace7 = {
                        x: unpack(rows,"Aargang"),
                        y: unpack(rows,"AAU"),
                        xaxis: 'x7',
                        yaxis: 'y7',
                        name: 'AAU',
                        type: 'scatter',
                        line: {color: '#a48c74'},
                    };
                    
                    //What data (plots) to add
                    var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7];

                    //The layout of the plots
                    var layout = {
                        title: 'Studerende optaget på bacheloren',
                        yaxis: //y-axis for the first subplot
                            {rangemode: 'tozero',
                                title: {text: 'Studerende'}
                            },
                        yaxis2: //y-axis for the second subplot
                            {rangemode: 'tozero',
                                title: {text: 'Studerende'}
                            },
                        yaxis3: 
                            {rangemode: 'tozero',
                                title: {text: 'Studerende'}
                        },
                        yaxis4: 
                            {rangemode: 'tozero',
                                title: {text: 'Studerende'}
                            },
                        yaxis5: 
                            {rangemode: 'tozero',
                                title: {text: 'Studerende'}
                            },
                        yaxis6: 
                            {rangemode: 'tozero',
                                title: {text: 'Studerende'}
                            },
                        xaxis7: {title: {text: 'År'}}, //x-axis for the last subplot
                        yaxis7: 
                            {rangemode: 'tozero',
                                title: {text: 'Studerende'}
                            },
                        showlegend: false,
                        annotations: [ //Titles for the subplots
                            {
                                x: 2013.5,
                                y: 15000,
                                xref: 'x', //The x-axis of the first subplot
                                yref: 'y',
                                text: '<b>SEKTOR</b>',
                                showarrow: false,
                                borderwidth: 6,

                            },
                            {
                                x: 2013.5,
                                y: 4000,
                                xref: 'x2', //The x-axis of the second subplot 
                                yref: 'y2',
                                text: '<b>AU</b>', 
                                showarrow: false,
                                borderwidth: 6,

                            },
                            {
                                x: 2013.5,
                                y: 3000,
                                xref: 'x3',
                                yref: 'y3',
                                text: '<b>CBS</b>',
                                showarrow: false,
                                borderwidth: 6,

                            },
                            {
                                x: 2013.5,
                                y: 3000,
                                xref: 'x4',
                                yref: 'y4',
                                text: '<b>KU</b>',
                                showarrow: false,
                                borderwidth: 6,

                            },
                            {
                                x: 2013.5,
                                y: 1000,
                                xref: 'x5',
                                yref: 'y5',
                                text: '<b>RUC</b>',
                                showarrow: false,
                                borderwidth: 6,

                            },
                            {
                                x: 2013.5,
                                y: 3000,
                                xref: 'x6',
                                yref: 'y6',
                                text: '<b>SDU</b>',
                                showarrow: false,
                                borderwidth: 6,

                            },
                            {
                                x: 2013.5,
                                y: 2000,
                                xref: 'x7',
                                yref: 'y7',
                                text: '<b>AAU</b>',
                                showarrow: false,
                                borderwidth: 6,

                            }

                        ],

                        grid: {rows: 7, columns: 1, pattern: 'independent'},
                    };
            
                    //Construction of the plot
                    Plotly.newPlot('myDiv', data, layout, {staticPlot: true});
                })
        } else if(radioButton=="sund"){ //Sundhedsvidenskab

            $("#myDiv").css("height","800px"); //Extra height is added to the div to make room for this plot
    
                //Which file to extract the data from
                d3.csv("./files/Optag_BA_sundhed.csv", function(err, rows){
                    
                    function unpack(rows, key){
                        return rows.map(function(row) {return row [key]; });
                    }
                    
                    var trace1 = {
                        x: unpack(rows,"Aargang"),
                        y: unpack(rows,"Sektor"),
                        name: 'SEKTOR',
                        type: 'scatter',
                        line: {color: '#a48c74'},
                    };

                    var trace2 = {
                        x: unpack(rows,"Aargang"),
                        y: unpack(rows,"AU"),
                        xaxis: 'x2',
                        yaxis: 'y2',
                        name: 'AU',
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
                        y: unpack(rows,"SDU"),
                        xaxis: 'x4',
                        yaxis: 'y4',
                        name: 'SDU',
                        type: 'scatter',
                        line: {color: '#a48c74'},
                    };

                    var trace5 = {
                        x: unpack(rows,"Aargang"),
                        y: unpack(rows,"AAU"),
                        xaxis: 'x5',
                        yaxis: 'y5',
                        name: 'AAU',
                        type: 'scatter',
                        line: {color: '#a48c74'},
                    };
                    
                    //What data (plots) to add
                    var data = [trace1, trace2, trace3, trace4, trace5];

                    //The layout of the plots
                    var layout = {
                        title: 'Studerende optaget på bacheloren',
                        yaxis: //y-axis for the first subplot
                            {rangemode: 'tozero',
                                title: {text: 'Studerende'}
                            },
                        yaxis2: //y-axis for the second subplot
                            {rangemode: 'tozero',
                                title: {text: 'Studerende'}
                            },
                        yaxis3: 
                            {rangemode: 'tozero',
                                title: {text: 'Studerende'}
                        },
                        yaxis4: 
                            {rangemode: 'tozero',
                                title: {text: 'Studerende'}
                            },
                        xaxis5: {title: {text: 'År'}}, //x-axis for the last subplot
                        yaxis5: 
                            {rangemode: 'tozero',
                                title: {text: 'Studerende'}
                            },
                        showlegend: false,
                        annotations: [ //Titles for the subplots
                            {
                                x: 2013.5,
                                y: 6000,
                                xref: 'x', //The x-axis of the first subplot
                                yref: 'y',
                                text: '<b>SEKTOR</b>',
                                showarrow: false,
                                borderwidth: 6,

                            },
                            {
                                x: 2013.5,
                                y: 1500,
                                xref: 'x2', //The x-axis of the second subplot 
                                yref: 'y2',
                                text: '<b>AU</b>', 
                                showarrow: false,
                                borderwidth: 6,

                            },
                            {
                                x: 2013.5,
                                y: 2000,
                                xref: 'x3',
                                yref: 'y3',
                                text: '<b>CBS</b>',
                                showarrow: false,
                                borderwidth: 6,

                            },
                            {
                                x: 2013.5,
                                y: 1500,
                                xref: 'x4',
                                yref: 'y4',
                                text: '<b>KU</b>',
                                showarrow: false,
                                borderwidth: 6,

                            },
                            {
                                x: 2013.5,
                                y: 1000,
                                xref: 'x5',
                                yref: 'y5',
                                text: '<b>RUC</b>',
                                showarrow: false,
                                borderwidth: 6,

                            }
                        ],

                        grid: {rows: 5, columns: 1, pattern: 'independent'},
                    };
            
                    //Construction of the plot
                    Plotly.newPlot('myDiv', data, layout, {staticPlot: true});
                })

            } if(radioButton=="nattek"){ //Teknik og Naturvidenskab

                $("#myDiv").css("height","1000px"); //Extra height is added to the div to make room for this plot
    
                //Which file to extract the data from
                d3.csv("./files/Optag_BA_NatTek.csv", function(err, rows){
            
                    function unpack(rows, key){
                        return rows.map(function(row) {return row [key]; });
                    }
            
                    var trace1 = {
                        x: unpack(rows,"Aargang"),
                        y: unpack(rows,"Sektor"),
                        name: 'SEKTOR',
                        type: 'scatter',
                        line: {color: '#a48c74'},
                    };
    
                    var trace2 = {
                        x: unpack(rows,"Aargang"),
                        y: unpack(rows,"AU"),
                        xaxis: 'x2',
                        yaxis: 'y2',
                        name: 'AU',
                        type: 'scatter',
                        line: {color: '#a48c74'},
                    };
    
                    var trace3 = {
                        x: unpack(rows,"Aargang"),
                        y: unpack(rows,"DTU"),
                        xaxis: 'x3',
                        yaxis: 'y3',
                        name: 'DTU',
                        type: 'scatter',
                        line: {color: '#a48c74'},
                    };
    
                    var trace4 = {
                        x: unpack(rows,"Aargang"),
                        y: unpack(rows,"ITU"),
                        xaxis: 'x4',
                        yaxis: 'y4',
                        name: 'ITU',
                        type: 'scatter',
                        line: {color: '#a48c74'},
                    };
    
                    var trace5 = {
                        x: unpack(rows,"Aargang"),
                        y: unpack(rows,"KU"),
                        xaxis: 'x5',
                        yaxis: 'y5',
                        name: 'KU',
                        type: 'scatter',
                        line: {color: '#a48c74'},
                    };
    
                    var trace6 = {
                        x: unpack(rows,"Aargang"),
                        y: unpack(rows,"RUC"),
                        xaxis: 'x6',
                        yaxis: 'y6',
                        name: 'RUC',
                        type: 'scatter',
                        line: {color: '#a48c74'},
                    };
    
                    var trace7 = {
                        x: unpack(rows,"Aargang"),
                        y: unpack(rows,"SDU"),
                        xaxis: 'x7',
                        yaxis: 'y7',
                        name: 'SDU',
                        type: 'scatter',
                        line: {color: '#a48c74'},
                    };

                    var trace8 = {
                        x: unpack(rows,"Aargang"),
                        y: unpack(rows,"AAU"),
                        xaxis: 'x8',
                        yaxis: 'y8',
                        name: 'AAU',
                        type: 'scatter',
                        line: {color: '#a48c74'},
                    };
                    
                    //What data (plots) to add
                    var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8];
    
                    //The layout of the plots
                    var layout = {
                        title: 'Studerende optaget på bacheloren',
                        yaxis: //y-axis for the first subplot
                            {rangemode: 'tozero',
                                title: {text: 'Studerende'}
                            },
                        yaxis2: //y-axis for the second subplot
                            {rangemode: 'tozero',
                                title: {text: 'Studerende'}
                            },
                        yaxis3: 
                            {rangemode: 'tozero',
                                title: {text: 'Studerende'}
                        },
                        yaxis4: 
                            {rangemode: 'tozero',
                                title: {text: 'Studerende'}
                            },
                        yaxis5: 
                            {rangemode: 'tozero',
                                title: {text: 'Studerende'}
                            },
                        yaxis6: 
                            {rangemode: 'tozero',
                                title: {text: 'Studerende'}
                            },
                        yaxis7: 
                        {rangemode: 'tozero',
                            title: {text: 'Studerende'}
                        },
                        xaxis8: {title: {text: 'År'}}, //x-axis for the last subplot
                        yaxis8: 
                            {rangemode: 'tozero',
                                title: {text: 'Studerende'}
                            },
                        showlegend: false,
                        annotations: [ //Titles for the subplots
                            {
                                x: 2013.5,
                                y: 15000,
                                xref: 'x', //The x-axis of the first subplot
                                yref: 'y',
                                text: '<b>SEKTOR</b>',
                                showarrow: false,
                                borderwidth: 6,
    
                            },
                            {
                                x: 2013.5,
                                y: 3000,
                                xref: 'x2', //The x-axis of the second subplot 
                                yref: 'y2',
                                text: '<b>AU</b>', 
                                showarrow: false,
                                borderwidth: 6,
    
                            },
                            {
                                x: 2013.5,
                                y: 3000,
                                xref: 'x3',
                                yref: 'y3',
                                text: '<b>DTU</b>',
                                showarrow: false,
                                borderwidth: 6,
    
                            },
                            {
                                x: 2013.5,
                                y: 1000,
                                xref: 'x4',
                                yref: 'y4',
                                text: '<b>ITU</b>',
                                showarrow: false,
                                borderwidth: 6,
    
                            },
                            {
                                x: 2013.5,
                                y: 3000,
                                xref: 'x5',
                                yref: 'y5',
                                text: '<b>KU</b>',
                                showarrow: false,
                                borderwidth: 6,
    
                            },
                            {
                                x: 2013.5,
                                y: 1000,
                                xref: 'x6',
                                yref: 'y6',
                                text: '<b>RUC</b>',
                                showarrow: false,
                                borderwidth: 6,
    
                            },
                            {
                                x: 2013.5,
                                y: 2000,
                                xref: 'x7',
                                yref: 'y7',
                                text: '<b>SDU</b>',
                                showarrow: false,
                                borderwidth: 6,
    
                            },
                            {
                                x: 2013.5,
                                y: 3000,
                                xref: 'x8',
                                yref: 'y8',
                                text: '<b>AAU</b>',
                                showarrow: false,
                                borderwidth: 6,
    
                            }
    
                        ],
    
                        grid: {rows: 8, columns: 1, pattern: 'independent'},
                    };
            
                    //Construction of the plot
                    Plotly.newPlot('myDiv', data, layout, {staticPlot: true});
                })
            } else {
                $('#myDiv').empty();
            }
        });
})

