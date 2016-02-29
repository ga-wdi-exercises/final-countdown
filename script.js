$(document).ready(function(){

  var counter = $("#counter").attr("value")

  var myInterval = 0;

  function startLoop() {
    myInterval = setInterval( doSomething(), 1000 );  // run
  }
  function doSomething() {
    console.log(counter)
  }

  startLoop();
})
