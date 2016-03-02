//page loads with a timer of 1234.

//mouseover color effect - text opacity changes

//event listener - clicks- begins descending countdown

//if value is less than 0, stop

//text is red

//else reset

//event listener- click- pauses/stops the timer

//WHAT WE NEED FOR COUNTDOWN
//status: is running
//on click function: #counter
//set interval: speed, and function that descreases in time
//reset
//when time == 0, add class fail

//parsefloat adds a floating decimal. does both its job and parseInt

$(document).ready(function(){

  var counter = $("#counter")
  //var firstNum = parseInt.counter.val //parseInt ensures that .val returns a number, not a string
  //parse the value as an integer
  var firstNum = $("#counter").val()

  //need a state to compare things to for click function as learned in project 1 with adding an active class
  var isCountingDown = false;
  var timerId;
  //var default = 10;

  function minusOne(){
    counter.removeClass("fail")
    //$("#counter").removeClass("fail")
    $("#counter").prop("value", firstNum);
    //$("#counter").val(firstNum)

    //decrease original num by 1
    //on page load firstNum == 1234
    if(firstNum >  0){
      firstNum = firstNum-1;
    //if number is 0 or less than stop the timer
  }else if(firstNum <= 0){
    //if the couner reaches 0, counter's text should turn red
    counter.val("10")
    $("#counter").addClass("fail")
    console.log("addedFailOnClass") //we need to clearn the interval and re-set it back!!!
  }
}

$("#counter").on("click", function(evt){
  //console.log("first", timerId);
    evt.preventDefault(); //prevent default behavior
    if(isCountingDown == false) { //if the timer is not running, and there's a click
      timerId = setInterval(minusOne, 1000) //start the timer!
      console.log("second", timerId);
      isCountingDown = true //the next time the user clicks
    }else if (isCountingDown == true) {
      clearInterval(timerId)
      isCountingDown = false //change value back to false, so that another click will re-set the interval
      console.log(isCountingDown);
      //update the display with default
      //counter.val(firstNum)
    }else if(counter.val() <= 0) {
      console.log("timer0")
      $("#counter").removeClass("fail") //it's not executing! whyyyyyyy
      counter.val("10")
    }
  });
})
