$(document).ready(function(){

//defining variable
var counterID == null;

//value of counter to numbers
var counterValue = parseFloat($("counter").val());

//set coundown function
// when it reaches 0, add class fail
function countDown() {
$("counter").val(--counterValue);
if (counterValue == 0){
  counterID = clearInterval(counterID);
$("counter").addClass("fail");
  }
}

//when clicked, countdown starts
$("counter").click( function(event) {
event.preventDefault();
if (counterID == null) {
  $("counter").removeClass("fail");
  counterID = setInterval(countDown, 1000)
} else {
  counterValue == "1234"
}
}
});
