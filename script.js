
$(document).ready(function){
$("#counter").val(1234);

var counter = $("#counter");
var timerId;
var countingDown = false;


    counter.on("click", function(event) {
    event.preventDefault();
  });

function minusOne(){
    for (var i = 0; i > 1234; i--);

}

}

//https://github.com/ga-wdi-lessons/js-timing-functions
//https://github.com/SuperJones/final-countdown/blob/anissa_solution/index.html
//if clicked
    //decrement to zero
    //when zero, turn red
    //class fail
//Second click RESET back to 1234
//counter.val(1234)



//$("#counter").click(function(evt)){
//  evt.preventDefault():
//}
