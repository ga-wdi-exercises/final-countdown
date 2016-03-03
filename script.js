$(document).ready(function(){

var counterID;
var $counter = $("#counter");
var counterValue = parseInt($counter.val());

function counDown() {
$counter.val(--counterValue);
console.log(counterValue);
if (counterValue == 0){
  counterID = clearInterval(counterID);
$counter.addClass("fail");
  }
}
