
var counter = parseInt($("#counter").val());
var timerRunning = false;

function runTimer() {
    counter = counter - 1;
    $("#counter").val(counter);
    if (counter === 0) {
      clearInterval(runningTimer);
      $("#counter").addClass("fail");
    }
}

$("#counter").on("click", function(e){
    event.preventDefault();

      if(timerRunning === false){
        counter = 1234;
        $("#counter").removeClass("fail");
        runningTimer = setInterval(runTimer, 1);
        timerRunning = true;
      }
      else if(timerRunning === true){
        clearInterval(runningTimer);
        timerRunning = false;
      }
  });
