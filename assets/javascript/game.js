
$(document).ready(function(){
    var win = 0, losses = 0;
    
    var adding = 0;

//where your cumulative gem additions are displayed on screen
$("#add").text(adding);

// generating number from 19-120;
var compGen = Math.floor(Math.random()*101)+19;

// displaying the random number between 19 -120
$("#numgen").text(compGen); 



// generating numbers for each gem
    var gem1 = Math.floor(Math.random()*12)+1;
    var gem2 = Math.floor(Math.random()*12)+1;
    var gem3 = Math.floor(Math.random()*12)+1;
    var gem4 = Math.floor(Math.random()*12)+1;
    console.log(gem1, gem2, gem3, gem4);
// ---------------------------RESET---------------------------
    function reset() {
    adding = 0;

//where your cumulative gem additions are displayed on screen
$("#add").text(adding);

// generating number from 19-120;
 compGen = Math.floor(Math.random()*101)+19;

// displaying the random number between 19 -120
$("#numgen").text(compGen); 



// generating numbers for each gem
     gem1 = Math.floor(Math.random()*12)+1;
     gem2 = Math.floor(Math.random()*12)+1;
     gem3 = Math.floor(Math.random()*12)+1;
     gem4 = Math.floor(Math.random()*12)+1;
     console.log(gem1, gem2, gem3, gem4);
    }

    $(".row").on("click", "#img1", function(){
        adding += gem1;
        $("#add").text(adding);
        if (adding === compGen) {
            wins();
        } else if (adding>compGen) {
            lose();
        }
    }).on("click", "#img2", function () {
        adding += gem2;
        $("#add").text(adding);
        if (adding === compGen) {
            wins();
        } else if (adding>compGen) {
            lose();
        }
    }).on("click", "#img3", function () {
        adding += gem3;
        $("#add").text(adding);
        if (adding === compGen) {
            wins();
        } else if (adding>compGen) {
            lose();
        }
    }).on("click", "#img4", function () {
        adding += gem4;
        $("#add").text(adding);
        if (adding === compGen) {
            wins();
        } else if (adding>compGen) {
            lose();
        }
    })

function wins() {
        win++;
        $("#win").text(win);
        adding=0;
        reset();
    }
    
function lose() {
    losses++;
    $("#losses").text(losses);
    adding=0;
    reset();
}

    // click on gem and added to the total gembox
    // $("#img1").on("click", function() {
    //     adding += gem1;
    //     console.log(adding);
    // });

    // either equaled to the generated number from the top or passed it

    //add 1 either wins or losses

    //reset the game

// adding numbers to the greenbox





});