
var value = parseInt($("#counter").val());
var Countingdown = false;
var timerID;
console.log(value);

function minusone(){
  $("#counter").val(value);
  if(value > 0){
    value = value - 1;
  }
  else if(value <= 0) {
      $("#counter").addClass("fail");
  }
    }

$("#counter").on("click" , function(evt){

evt.preventDefault();
if(Countingdown === false){
timerID = setInterval(minusone , 400)
Countingdown = true;
}
else if(Countingdown === true){
  clearInterval(timerID);
  Countingdown = false;
  $("#counter").val(10);
    $("#counter").removeClass("fail");
}


})
