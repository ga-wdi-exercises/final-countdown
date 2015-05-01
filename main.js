$(document).ready(function(){
  var counter = 200
  var countdown
  // var countdown = setInterval(function(){
  //   console.log(counter)
  //   counter++
  // }, 1000)
  function startCountdown(){
    countdown  = setInterval(function(){
      $("#counter")[0].value = "" + counter
        counter--
      }, 1000)
  }

  $("#counter").on("click", setInterval(function(){
    $("#counter")[0].value = "" + counter
      counter--
    }, 1000))



    // $("#counter").on('click', pauseTimer )
    //   function pauseTimer(){
    //     clearInterval(intervalCount)
    // }


})
