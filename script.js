
var counter = parseInt(document.querySelector("#counter").value);
var timerRunning = false;

function runTimer() {
    counter = counter - 1;
    console.log(counter);
    document.querySelector("#counter").value = counter;
    if (counter === 0) {
      clearInterval(runningTimer);
      document.querySelector("#counter").classList.add("fail");
    }


}

document.querySelector("#counter").addEventListener("click", function(e){
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
