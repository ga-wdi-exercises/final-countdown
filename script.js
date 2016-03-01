$(document).ready(function() {

// defining a variable to the timer
var timerID;

// defining a boolean variable to when timer is 'on'
var timerRunning = false;

// set counter to 1234
var counterValue = 1234;
$("#counter").val(counterValue);

// function for decreasing timer
function countDown() {
    counterValue = counterValue - 1;
    $("#counter").val(counterValue);
    console.log(counterValue);
}


// when counter is clicked, start countdown
$("#counter").click( function(event) {
  event.preventDefault();
// decrease timer by one second by calling countDown function here
// reassigns timerRunning to true to stop timer
    if (timerRunning == false) {
      timerID = setInterval(countDown, 10);
      timerRunning = true;
      console.log(counterValue);
      console.log("I got clicked!");
// stops timer and reassigns timerRunning to false to continue timer     
      } else if (timerRunning == true) {
        clearInterval(timerID);
        timerRunning = false;
        }
    });





// when counter is clicked, stop timer
// $("#counter").click(function() {
//   clearInterval(timerID);
// });









});
