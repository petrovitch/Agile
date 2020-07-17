$(document).ready(function() {
    var max = 15 * 60;
    var count = 0;
    var checked = 0;
    var percentage = 0;
    var d = new Date();
    var n = d.getDate();
	var refreshHour = 8;
	var refreshMinute = 45;

    function clock() { // We create a new Date object and assign it to a variable called "time".
        var time = new Date(),

            // Access the "getHours" method on the Date object with the dot accessor.
            hours = time.getHours(),

            // Access the "getMinutes" method with the dot accessor.
            minutes = time.getMinutes(),

            seconds = time.getSeconds();

        document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);

        function harold(standIn) {
            if (standIn < 10) {
                standIn = '0' + standIn
            }
            return standIn;
        }
    }

	// Run
    setInterval(clock, 1000);
	
	$("#0").contextmenu(function(){
		$("#0").hide();
	});
	
	$("#1").contextmenu(function(){
		$("#1").hide();
	});
	
	$("#2").contextmenu(function(){
		$("#2").hide();
	});
	
	$("#3").contextmenu(function(){
		$("#3").hide();
	});
	
	$("#4").contextmenu(function(){
		$("#4").hide();
	});
	
	$("#5").contextmenu(function(){
		$("#5").hide();
	});
	
	$("#6").contextmenu(function(){
		$("#6").hide();
	});
	
	$("#7").contextmenu(function(){
		$("#7").hide();
	});
	
	$("#8").contextmenu(function(){
		$("#8").hide();
	});
	
	$("#9").contextmenu(function(){
		$("#9").hide();
	});
	
	$("#10").contextmenu(function(){
		$("#10").hide();
	});
	
	$("#11").contextmenu(function(){
		$("#11").hide();
	});
	
	$("#12").contextmenu(function(){
		$("#12").hide();
	});
	
	$("#13").contextmenu(function(){
		$("#13").hide();
	});
	
	$("#14").contextmenu(function(){
		$("#14").hide();
	});
	
});
