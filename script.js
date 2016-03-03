$(document).ready(function(){
$("#counter").val("1234");

var counterValue = parseInt($("#counter").val());
var timer = false;
var timerId;

function countdown(){
  if (counterValue <=0){
    clearInterval(timerId);
    $("#counter").css("color","red");
  }
  else{counterValue--;
  $("#counter").val(counterValue);
  }
}
function countdownClick(){
  $("#counter").click(function(evt){
    evt.preventDefault();
    if(timer === false){
      timerId = setIntreval(countdown);
      timer = true;
    }
    else if (timer === true){
      clearInterval(timerId);
      timer= false;
    }
  })
})
countdownClick();
}
