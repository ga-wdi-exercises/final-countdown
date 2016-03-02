$(document).ready(function() {
  $("title").html("AW Final Countdown")
  $("#counter").val("1234");

// var counter =$("#counter");
var counterDefault =parseInt($("#counter").val());
var theTimerIsRunning = false;
var currentTimerId;

function decrease(){
  counterDefault--
  $("#counter").val(counterDefault);
}

function countdown(){
  $("#counter").click(function(event){
      event.preventDefault();
      console.log("Adrian")
    if(theTimerIsRunning === false){
      currentTimerId = setInterval(decrease,1000);
      theTimerIsRunning = true;
    }
    else if(theTimerIsRunning === true){
      clearInterval(currentTimerId);
      theTimerIsRunning = false;
    }
  })
}
countdown();
});
