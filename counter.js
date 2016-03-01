/* We have a form with a starting value and an id of "counter"
   We need the timer to decrease at a constant rate
   We need a switch to toggle clicking on the timer
     This means that we will check WHETHER OR NOT a certain state persists
      The first click will initiate the countdown at a constant pace
      The second click will stop the countdown
   When the counter reaches '0', it will stop AND acquire a class of '.fail'
   When the counter is stopped (for any reason), the very next click will restart it from the beginning */

$(document).on("ready", function() {
  
});
