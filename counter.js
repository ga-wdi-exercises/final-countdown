/* We have a form with a starting value and an id of "counter"
   We need the timer to decrease at a constant rate
   We need a switch to toggle clicking on the timer
     This means that we will check WHETHER OR NOT a certain state persists
      The first click will initiate the countdown
      The second click will stop the countdown
   When the counter reaches '0', it will stop AND acquire a class of '.fail'
   When the counter is stopped (for any reason), the very next click will restart it from the beginning */

$(document).on("ready", function() {

  var counter = $("#counter");
  var defaultValue = counter.val("10");
  var numericalValue = parseInt(counter.val());
  var currentTimerID = null;

  function decreaseValue(){
    if (numericalValue > 0) {
      numericalValue -= 1;
      counter.val(numericalValue);
    } else if (numericalValue <= 0) {
      counter.addClass("fail");
    }
  };

/* - After the counter is clicked, every 1 second decrease the original value of the counter by 1 and replace the counter's text with the new value. When you click on the counter, stop the timer. If the counter reaches 0, the counter's text should turn red and the timer should stop. When you click on the timer once it is stopped, its value should go back to the original value and the timer should start again. */

  counter.click(function(evt) {
    evt.preventDefault();
    if (currentTimerID === null) {
      currentTimerID = setInterval(decreaseValue , 1000);
    } else if (currentTimerID != null) {
      clearInterval(currentTimerID);
      currentTimerID = null;
    }
  })







});
