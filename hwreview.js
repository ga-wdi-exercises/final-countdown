$(document).ready(function(){
  var counter = $("#counter")
  var firstNum = parseInt(counter.val())
  /* use this is did not use var counter for the id #counter =$("#counter").prop("value"));*/
    //parse the value as an integer
    //$("#counter").val()

  //need a state to compare things to for click function as learned in project 1 with adding an active class

  var isCountingDown = false;
  var timerId;
  var default = 1234

  function minusOne(){
    $("#counter").removeClass("fail")
    $("#counter").prop("value", firstNum);
    //$("#counter").val(firstNum)
    //decrease original num by 1
    //on page load firstNum == 1234
    if (firstNum > 0) {
      firstNum = firstNum -1;
      //if number is 0 or less then stop the timer
    } else if (firstNum <= 0) {
      //if counter reaches 0 the counter's text should turn red.
      $("#counter").addClass("fail")
    }
  }

$("#counter").on("click", function(evt){
  // console.log("first", timerId);
      evt.preventDefault();
        if (isCountingDown == false) {
          timerId = setInterval(minusOne, 1000);
          console.log("second", timerId);
          isCountingDown == true;
        } else if (isCountingDown == true){
          clearInterval(timerId);
          isCountingDown = false;
        //update display with default
        // counter.val(firstNum)
      } else if (counter.val() <= 0){
        //if counter reaches 0, the counter's text should turn red
        counter.val("1234")
        $("#counter").removeClass("fail");
      }
    });
  })
//after the counter is clicked, every 1 second decrease the original value of the counter by 1 and replace the counter's text.

//change counter to red when it hits zero
//change back to green when reset ("#counter").addClass("fail") then ("#counter").removeClass("fail")
//.on("click", function() to reset automatically with removeClass when clicked after first click.)
