$(document).ready(function(){
  var formField = $("#counter")
  var startingValue = formField.val()
  var seconds;
  var countingDown = false;

  if(countingDown){
    formField.on("click", pauseCountDown)
  }
  else{
    if (startingValue === 0){
      formField.val(startingValue)
    }
      formField.on("click", startCountDown)
  }

  function startCountDown(){
    countingDown = true
    seconds = setInterval(tick, 1000)
  }

  function tick() {
    var currentValue = formField.val()
    currentValue--
    formField.val(currentValue)
    if(currentValue === 0){
      formField.css("color","red")
      pauseCountDown()
    }
  }

  function pauseCountDown(){
    clearInterval(seconds)
    countingDown = false
  }

})
