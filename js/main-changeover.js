jQuery(document).ready(function($) {

    $('#sec1').click(function() {
        $.scrollTo( '#treasure_hunt', 800  );
    });
    $('#sec2').click(function() {
        $.scrollTo( '#social_feed', 800  );
    });
    $('#sec3').click(function() {
    $.scrollTo( '#competition', 800  );
    });

});



// COUNTDOWN

var today = new Date();

/*var endofseason = new Date("September 30, 2015");
if (today >= endofseason) {document.getElementById("cunextseason").style.display = "block"}*/

var startEventDateWeek = new Date("May 26, 2016 00:00");
var endEventDateWeek = new Date ("November 02, 2016 00:00");




if ((today >= startEventDateWeek) && (today <= endEventDateWeek)) {
    document.getElementById("swap_comp").style.display = "block";
}




        
