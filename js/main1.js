// COUNTDOWN

var today = new Date();

/*var endofseason = new Date("September 30, 2015");
if (today >= endofseason) {document.getElementById("cunextseason").style.display = "block"}*/

var startEventDate = new Date("September 25, 2015 14:45"); // time is optional
var endEventDate = new Date ("October 12, 2015 00:00");
if ((today >= startEventDate)  && (today <=endEventDate)) {document.getElementById("competition-1").style.display = "block"}
var startEventDate = new Date("October 12, 2015 00:00");
var endEventDate = new Date ("November 02, 2015 00:00");
if ((today >= startEventDate)  && (today <=endEventDate)) {document.getElementById("competition-2").style.display = "block"}