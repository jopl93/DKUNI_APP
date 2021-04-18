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
})