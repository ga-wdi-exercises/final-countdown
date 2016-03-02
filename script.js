// $(document).ready(function(){


// var counter = $("#counter").attr("value");

var counter = parseInt(document.querySelector("#counter").value);




// function runTimer() {
//   setInterval(function() {
//     counter = counter - 1;
//     console.log(counter);
//     document.querySelector("#counter").value = counter;
//   }, 1000);
// }
// runTimer();



function runTimer() {
    counter = counter - 1;
    console.log(counter);
    document.querySelector("#counter").value = counter;
}



document.querySelector("#counter").addEventListener("click", function(e){
  e.preventDefault();
  // clearInterval(counter);
  // counter = counter;
  setInterval(runTimer(), 1000);
});






// }); // end document ready function
