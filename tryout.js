//page load
 $(document).ready(function(){
   $("title").html("final countdown")
//set the counter's default number to 1234
   $("#counter").val("1234");

 var counterDefault = parseInt($("#counter").val());
 var firstNum = $("#counter").val()
 var timerRunning = false;
 var timerId;


   function minusOne(){
      $("#counter").removeClass("fail")
      $("#counter").prop("value", firstNum);
//decrease original num by 1
      if(firstNum >  0){
        firstNum = firstNum-1;
      }else if(firstNum <= 0){
//if the couner is less than or equal to 0, turn the text RED
      counterDefault.val("1234")
//adds the class FAIL to indicate you FAILED the game
      $("#counter").addClass("fail")
    }
  }
//adds a click event to the counter
  $("#counter").on("click", function(evt){
//prevents the default behavior of the click event
      evt.preventDefault();
//if the timer is NOT running...
      if(timerRunning == false) {
//START THE TIMER until the timerRunning is TRUE....
        timerId = setInterval(minusOne, 1000)
//or the next time the user clicks
        timerRunning = true
//else if the timer IS CURRENTLY running...
      }else if (timerRunning == true) {
//clear the timer
        clearInterval(timerId)
//change the value back to false, so that another click will re-set the interval
        timerRunning = false
//if the counterDefault value is less than or equal to 0
      }else if(counterDefault.val() <= 0) {
//remove the class fail
        $("#counter").removeClass("fail") //it's not executing! whyyyyyyy
        counterDefault.val("1234")
      }
    });
 })
