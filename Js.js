$(document).ready(function(){

//HAD TO TIME BOX THIS ONE, WAS GETTING ERRORS ON MY RETURN STATEMENT, I THINK MY ORDER IS WAY OFF HERE, GONNA TACKLE THE NEXT ASSIGNMENT AND COME BACK TO IT TIME WILLING.

//set a variable time, then write function to make it countdown.
  var time = 0;
  var timer= setInterval(timer, 1000);

var countDown = function(){
  time = time - 1;
  if (time <= 0){
    clearInterval(timer);
    console.log("Time over");
  }

}
  //Prints the value 1234 to the page.
  var counter = $("#counter");
      console.log(counter.prop("value"));
      return counter.prop("value", "1234");

//create an event listener click that when clicked, it sets the timer counting down.
counter.on("click", countDown){
    console.log($(this));
  });
});
