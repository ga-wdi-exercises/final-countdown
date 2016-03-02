
var counter = parseInt($("#counter").val());
var timerRunning = false;

function runTimer() {
    counter = counter - 1;
    console.log(counter);
    $("#counter").val(counter);
    if (counter === 0) {
      clearInterval(runningTimer);
      $("#counter").addClass("fail");
    }
}

$("#counter").on("click", function(e){
    event.preventDefault();

      if(timerRunning === false){
        runningTimer = setInterval(runTimer, 100);
        timerRunning = true;
      }
      else if(timerRunning === true){
        clearInterval(runningTimer);
        timerRunning = false;
      }
  });
