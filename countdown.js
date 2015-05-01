var countdown = document.getElementById("counter")
var starting_point = countdown.value
var sec_start = 0;

countdown.addEventListener("click", function(event){
	event.preventDefault();
	
	var counting = setInterval( function(){
		display.innerHTML = starting_point;
		sec_start ++;
	},1000);
}



