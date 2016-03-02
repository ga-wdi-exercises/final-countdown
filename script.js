$(document).ready(function() {

  $("#counter").val("1234");

var counter =$("#counter");
var counterDefault =parseInt($("#counter").val());
var theTimerIsRunning = false;
var time = 0
var timerId;

function countdown(){
  $("#counter").click(function(event){
    event.preventDefault();
    if(theTimerIsRunning===false){
      timerId= setInterval(countdown,1000);
      theTimerIsRunning = true;
    }else if(theTimerIsRunning === true){
      clearInterval(timerId)
      theTimerIsRunning = false;
    }})}

});
