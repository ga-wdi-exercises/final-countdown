$(document).ready(function(){



var currentValue = document.querySelector("#counter").value
var counter = document.querySelector("#counter")

function startCounter(){
  counter.value = currentValue +-1;
}


// 1. Print the current value of the counter to the console.
var currentValue = document.querySelector("#counter").value
// - After you load the page, every 1 second print "A second passed!" to the console.
//does this have to be global variable?
myVar = setInterval(function () {console.log("A second passed!")}, 1000);

// - After the counter is clicked, print "I got clicked!" to the console.
counter.addEventListener("click", function(event){
  console.log("I got clicked!")
})
// - After the counter is clicked, every 1 second print "A second passed!" to the console.
counter.addEventListener("click", function(event){
  myVar;
})

//OR

$(counter).on("click", function(){
  setInterval(function () {console.log("A second passed!")}, 1000);
  //myVar
})

// - After the counter is clicked, every 1 second print the value of the counter to the console.
$(counter).on("click", function(){
  setTimeout(function(){console.log(counter.value)}, 1000);
})


// - After the counter is clicked, every 1 second decrease the original value of the counter by 1 and print the new value to the console.
function startCounter(){
  counter.value = currentValue +-1;
}

$(counter).on("click", function(){
  setTimeout(startCounter, 1000);
})
// - After the counter is clicked, every 1 second decrease the original value of the counter by 1 and replace the counter's text with the new value.


// - After the counter is clicked, every 1 second decrease the original value of the counter by 1 and replace the counter's text with the new value. When you click on the counter, stop the timer.
myVar = setInterval(function () {console.log("A second passed!")}, 1000);

$(counter).on("click", function(){
  setTimeout(startCounter, 1000);
  clearTimeout(myVar)
})


})

// - After the counter is clicked, every 1 second decrease the original value of the counter by 1 and replace the counter's text with the new value. When you click on the counter, stop the timer. When you click on the counter again, continue the timer.

// - After the counter is clicked, every 1 second decrease the original value of the counter by 1 and replace the counter's text with the new value. When you click on the counter, stop the timer. When you click on the counter again, continue the timer. If the counter reaches 0, the counter's text should turn red.
// - After the counter is clicked, every 1 second decrease the original value of the counter by 1 and replace the counter's text with the new value. When you click on the counter, stop the timer. When you click on the counter again, continue the timer. If the counter reaches 0, the counter's text should turn red and the timer should stop.
// - After the counter is clicked, every 1 second decrease the original value of the counter by 1 and replace the counter's text with the new value. When you click on the counter, stop the timer. If the counter reaches 0, the counter's text should turn red and the timer should stop. When you click on the timer once it is stopped, its value should go back to the original value and the timer should start again.
