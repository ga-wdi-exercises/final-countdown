$(document).ready(function(){

  var counter = $("#counter");
  var timeDefault = counter.val();
  var time = 0;
  var isRunning = false;
  var timer;

  function decrement(){
    time = time - 1;
    if(time <= 0){
      clearInterval(timer);
      isRunning = false;
      counter.addClass("fail");
    }
    counter.val(time);
  }

  counter.click(function(evt){
    evt.preventDefault();
    if(isRunning === true){
      clearInterval(timer);
      isRunning = false;
    }
    else if(isRunning === false){
      isRunning = true;
      time = timeDefault;
      counter.removeClass("fail");
      timer = setInterval(decrement, 1);
    }
  });
});
