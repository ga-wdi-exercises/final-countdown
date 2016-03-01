$(document).ready(function() {

// defining a variable to the counter
var counterID;

// defining a boolean variable to when counter is 'on'
var counterRunning = false;

// set counter to 1234
var counterValue = 10;
$("#counter").val(counterValue);

// function for decreasing counter
// added code so if counterValue is zero, counter stops
function countDown() {
  if (counterValue == 0) {
    clearInterval(counterID);
//turn counter value red when zero
    
  } else if (counterValue <= 10) {
      counterValue = counterValue - 1;
  }
    $("#counter").val(counterValue);
    console.log(counterValue);
}


// when counter is clicked, start countdown
$("#counter").click( function(event) {
  event.preventDefault();
// decrease counter by one second by calling countDown function here
// reassigns counterRunning to true to stop timer
    if (counterRunning == false) {
      counterID = setInterval(countDown, 500);
      counterRunning = true;
      console.log(counterValue);
      console.log("I got clicked!");
// stops counter and reassigns timerRunning to false to continue timer
    } else if (counterRunning == true) {
        clearInterval(counterID);
        counterRunning = false;
    }
});









});
