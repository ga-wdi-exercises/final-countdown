$(document).ready(function(){
  $("#counter").click(function(evt) {
    evt.preventDefault();
  })
var countval = 1234;
var counter = setIntreval(timer,1000);

function timer(){
  count += 1;
  if(countval ===0){
    clearInterval(counter);
  }
})
})
  // var value = "1234"
  // var counter = $("#counter")
  // var timer =setIntreval(timer,1000)

  //   var timer = setInterval(function() {
  //
  //     var count = parseInt($("#counter").html());
  //       $("#counter").on("click", function(){
  //         if (count !== 0) {
  //           $("#counter").html("1234" - 1);
  //         } else {
  //           clearInterval(timer);
  //         }
  //       }, 1000);
  //       })
  //
  // });

//   var countdown =function(){
//     $('#counter').each(function() {
//       var count = parseInt($(this).html());
//       if (count!== 0){
//         $(this).html(count-1);
//       }
//     });
//   };
//   setInterval(countdown, 1000);
// })

  // $("#counter").on("click", function(){
  //   startTimer = setIntreval(1000);
  // });
  //
  //   this.counter.on("click", function(){
  //     stopTimer = clearInterval("#counter");
  //   });
  // clearInterval("#counter")
  //     }

// function Countdown() {
// value = count - 1;
// if (count<=0)
// {
//   this.css("color", "red")
//   clearInterval(counter);
//   return;
// }
// }



//
//   this.counter.on("click", function(){
//     stopTimer = clearInterval("#counter");
//   });
// clearInterval("#counter")
//     }
//   }
  //   this.css("color", "green")
  //   this.css("background-color", "white")
  //   this.addClass("greenified")
  //   return this
  // }

// var
// form
// #counter
//       #counter:focus
//       #counter:hover
//       #counter.fail
//timer
//
//
// on load, counter shows set at 1234
// on click start
// number decrease
// speed increases as time goes by
// onclick stop
// show number
// clear and restart at 1234
//
//
// var start
