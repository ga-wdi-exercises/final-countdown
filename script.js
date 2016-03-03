$(document).ready(function() {
  $("title").html("AW Final Countdown")
  $("#counter").val("1234");

  var counterDefault =parseInt($("#counter").val());
  var theTimerIsRunning = false;
  var currentTimerId;

  function decrease(){
    if (counterDefault<=0){
      clearInterval(currentTimerId);
      console.log(currentTimerId);
      $("#counter").css("color","red");
      $("#counter").css("box-shadow","0px 0px 100px 0px red");
    }
    else{counterDefault--;
      $("#counter").val(counterDefault);
      console.log(counterDefault)
    }
  }

  function countdown(){
    $("#counter").click(function(event){
      event.preventDefault();
      if(theTimerIsRunning === false){
        currentTimerId = setInterval(decrease);
        theTimerIsRunning = true;
        console.log("hey");
      }
      else if(theTimerIsRunning === true){
        clearInterval(currentTimerId);
        theTimerIsRunning = false;
      }
    })

  })
}
countdown();
});
