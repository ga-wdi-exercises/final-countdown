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



var oneSecond = function () {
  console.log("A second passed!");
};

setInterval(oneSecond, 1000);

//- After the counter is clicked, print "I got clicked!" to the console.

var form = $("#counter");

form.on("click", function(evt) {
  evt.preventDefault();
  console.log("I got clicked!");
});                                 //As long as you have your javascript script.js link in the body of the HTML doc, you should not have to include your entire code in a document.ready(function());
