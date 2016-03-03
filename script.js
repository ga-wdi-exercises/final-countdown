// $(document).ready(console.log("Ready!"));
// var time = $("#counter");
// var hi = function() {
//   console.log("hi!");
// };
// console.log($("#counter").val());
// setTimeout(hi, 5000);  //When using setInterval and setTimeout, you have to pass a function as the first argument; that is, you cannot just put in "consol.log("hi")";



// .ready - waits until all HTML DOM elements are loaded before running script
// .prop - gets/sets properties (css?) of HTML elements


//- After you load the page, every 1 second print "A second passed!" to the console.

// - After the counter is clicked, every 1 second print "A second passed!" to the console.

// - After the counter is clicked, every 1 second print the value of the counter to the console.

// - After the counter is clicked, every 1 second decrease the original value of the counter by 1 and print the new value to the console.

// - After the counter is clicked, every 1 second decrease the original value of the counter by 1 and replace the counter's text with the new value.

// - Stop the timer.

var form = $("#counter");
var counter = parseInt(form.val());//If this is a string since it is in HTML, do we need a parseInt()?

//var decreaseValue = function() {  Trying .prop() instead. form.val() vs. prop("value")?
  //counter -=1;

var countdownValue = function () {
  console.log(counter);
};

var decreaseValue = function() {
  form.prop("value", counter -= 1);
};

form.on("click", function(evt) {     //You can also write this as form.onClick();  Should I not use an anonymous function?
  evt.preventDefault();
  if (counter = 1234) {
  setInterval(decreaseValue, 1000);
  }
  else if (counter < 1234) {
    clearInterval();
  }
  else if (counter = 0) {
    form.prop("value", 1234);
  }
});                                 //As long as you have your javascript script.js link in the body of the HTML doc, you should not have to include your entire code in a document.ready(function());


//When time = 0, class = fail.  This is based on HTML from solution as site runs.
//$("#counter").prop("value") = number from where counter starts countdown.

//
