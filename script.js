$(document).ready(function() {

// defining a variable to the counter
var counterID;
var $counter = $("#counter");

// defining variable for value of counter set in HTML
var counterValue = parseInt($counter.val());

// function for decreasing counter
// added code so if counterValue is zero, counter stops, resets to 200 upon click
function countDown() {
  // this is same as counterValue = counterValue - 1;
  $counter.val(--counterValue);
  console.log(counterValue);
  if (counterValue == 0) {
    counterID = clearInterval(counterID);
    // counterValue = 200;
    // turn counter red when counter hits zero
    $counter.addClass("fail");
  }
}


// when counter is clicked, start countdown
$counter.click( function(event) {
  event.preventDefault();
// decrease counter by one second upon click by calling countDown function here
// counterID here is 'falsey', so jump to 'else'
    if (counterID) {
      counterID = clearInterval(counterID);
    } else {
// resets counter to 200 when clicked again
      counterValue = 200;
// removes .fail class to turn counter back to green when counter restarts
      $counter.removeClass("fail");
      counterID = setInterval(countDown, 10);
      console.log(counterValue);
      console.log("I got clicked!");
    }
});









});
