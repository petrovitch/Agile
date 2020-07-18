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

// Solution
for (var i = 0; i < 5; i++){
	$("#" + i.toString()).dblclick(function(){
		$("#" + i.toString()).hide();
	});
}
	
	$("#0").contextmenu(function(){
		$("#0").hide();
	});
	
	$("#1").contextmenu(function(){
		$("#1").hide();
	});
	
	$("#2").contextmenu(function(){
		$("#2").hide();
	});
});
