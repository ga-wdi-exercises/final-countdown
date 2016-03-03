$(document).ready(function() {
  $("#counter").val("1234");

// var counter =$("#counter");
var counterDefault =parseInt($("#counter").val());
var theTimerIsRunning = false;
var currentTimerId;

function decrease(){
  counterDefault--;
  $("#counter").val(counterDefault);
}

function countdown(){
  $("#counter").click(function(event){
      event.preventDefault();
    if(theTimerIsRunning === false){
      currentTimerId = setInterval(decrease);
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
