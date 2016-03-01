$(document).ready(function() {


$("#counter").click( function(event) {
  event.preventDefault();
  var counterValue = $("#counter").val();
  setInterval( function() {
    console.log(counterValue);}, 1000);
  console.log("I got clicked!");
});











});
