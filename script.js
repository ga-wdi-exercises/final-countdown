//page load
$(document).ready(function() {
  $("title").html("final countdown")
//place the value of the counter into the HTML
  $("#counter").val("1234");

//that value becomes the default
//
  var counterDefault = parseInt($("#counter").val());
  var timerRunning = false;
  var currentTimer;

//function decrease
  function decrease() {
//if the value of counterDefault is less than or equal to 0, the current timer is "cleared" (meaning the text becomes red to indicate loss)
    if(counterDefault <= 0) {
      clearInterval(currentTimer);
//coloring the counter
    $("#counter").css("color", "red");
    $("#counter").css("box-shadow", "0px 0px 100px 0px red");
    }
//subtracts 1 from the value of class "#counter"
    else{counterDefault--;
    $("#counter").val(counterDefault);
  }
}
//function countdown
  function countdown() {
//assigns a click event to the counter
    $("#counter").click(function(evt) {
//still confused about the prevent default, but I know it prevents the browser from having to be refreshed after every click event
      evt.preventDefault();
//if the timer is NOT currently running
      if(timerRunning === false) {
//run the function descrease on the currentTimer UNTIL...
        currentTimer = setInterval(decrease);
//the timer IS currently running...so STOP running that decrease function
        timerRunning = true;
      }
//if the timer IS currently running
      else if(timerRunning === true) {
//
        clearInterval(currentTimer);
        timerRunning = false;
      }
    })
  })
}
countDown();
});
