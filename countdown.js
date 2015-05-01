$(document).ready(function(){
  var input = document.getElementById('counter');
  var inputVal = $('input').val();
  var intervalID
  var clickID = 0

  input.addEventListener('click', playCountdown);

  function playCountdown(event){
    event.preventDefault();
    
    if (clickID === 0) {
      console.log("I got clicked");
      intervalID = setInterval(secondPassed, 1000);
      clickID++;     
    } else if (clickID === 1) {
      console.log("I got clicked");
      clearInterval(intervalID)
      clickID--;     
    };
  }

  function secondPassed() {
    if (inputVal === 0) {
      $('input').css("color", "red");
      clearInterval(intervalID);
    } else {
      inputVal--;
    };
      
    $('input').val(inputVal);
    console.log(inputVal);
  }

  function resetTimer() {
    if (inputVal === 0) {
      inputVal = 200;
      clearInterval(intervalID)
    };
  }


});
