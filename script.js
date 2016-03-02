$(document).ready(function(){
  // counter.val(1234);


var time = 0;
var timer;
var runningTime = false;
var timeDefault = counter.val();
var counter= $("#counter");
var timerId;
____________________________________________________________
// a counter that countes down

// $("#counter").click(function(event){
  // event.preventDefault();
    // if

// }


function countDown (){
  $("#counter").click(function(event){
    event.preventDefault();
    if (theTimerisRunning === false){
      timerId= setInterval(countDown, 1000);
      theTimerisRunning = true;
    } else if (theTimerisRunning === true){
      clearInterval(timerId)
      theTimerisRunning= false;
        }

      }

    }

  }
  ________________________________________________________________
  // set click fucntion


  
});
