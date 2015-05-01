  var counter = document.getElementById("counter")
  var start = 0
  var counterValue = document.getElementById("counter").value
  var interval = setInterval( function(){
    console.log(counter.value)
  },1000);
// // 1. Print the current value of the counter to the console.
//     counter.addEventListener("click", function(event){
//       event.preventDefault()
//       console.log(counter.value)
//     })
// // // - After you load the page, every 1 second print "A second passed!" to the console.
// //
//     window.addEventListener("load", function(event){
//       console.log(counter.value)
//     })
// //
// // // - After the counter is clicked, print "I got clicked!" to the console.
// //
//     counter.addEventListener("click", function(event){
//       event.preventDefault()
//       console.log("I got clicked!")
//     })
// //
// // // - After the counter is clicked, every 1 second print "A second passed!" to the console.
//    counter.addEventListener("click", function(event){
//      event.preventDefault()
//      setInterval( function(){
//        console.log("A second passed")
//      },1000);
//    })
// //
// //
// // // - After the counter is clicked, every 1 second print the value of the counter to the console.
//     counter.addEventListener("click", function(event){
//       event.preventDefault()
//       setInterval( function(){
//         console.log(counter.value)
//       },1000);
//     })
// //
// //
// // // - After the counter is clicked, every 1 second decrease the original value of the counter by 1 and print the new value to the console.
//     counter.addEventListener("click", function(event){
//       event.preventDefault()
//       setInterval( function(){
//         console.log(counter.value -= 1)
//       },1000);
//     })
// //
// //
// // // - After the counter is clicked, every 1 second decrease the original value of the counter by 1 and replace the counter's text with the new value.
//     counter.addEventListener("click", function(event){
//       event.preventDefault()
//       setInterval( function(){
//         counter.value -= 1;
//         console.log(counter.value)
//       },1000);
//     })
//
//
// // // - After the counter is clicked, every 1 second decrease the original value of the counter by 1 and replace the counter's text with the new value. When you click on the counter, stop the timer.
//
          // **** See Below (worked on pause in last solution (too many examples used last one as working example))****
        // counter.addEventListener("click", function(pause){
//       event.preventDefault()
//       pageCounter = setInterval( function(){
//         counter.value -= 1;
//         console.log(counter.value)
//       },1000);
//     })
//
//     var pause = counter.addEventListener("click", function(event){
//       clearInterval( interval )
//     })
//
//
// // - After the counter is clicked, every 1 second decrease the original value of the counter by 1 and replace the counter's text with the new value. When you click on the counter, stop the timer. When you click on the counter again, continue the timer.
//
//
//
// // - After the counter is clicked, every 1 second decrease the original value of the counter by 1 and replace the counter's text with the new value. When you click on the counter, stop the timer. When you click on the counter again, continue the timer. If the counter reaches 0, the counter's text should turn red.
//
//   counter.addEventListener("click", function(pause){
//     event.preventDefault()
//     pageCounter = setInterval( function(){
//       counter.value -= 1;
//         if (counter.value < 0){
//           counter.style.color= "red";
//         }
          // else if(event)
          //   clearInterval( pageCounter )
//         console.log(counter.value)
//       },1000);
//     })
//
//     var pause = counter.addEventListener("click", function(event){
//       clearInterval( pageCounter )
//     })

// - After the counter is clicked, every 1 second decrease the original value of the counter by 1 and replace the counter's text with the new value. When you click on the counter, stop the timer. When you click on the counter again, continue the timer. If the counter reaches 0, the counter's text should turn red and the timer should stop.
  // counter.addEventListener("click", function(event){
  //   event.preventDefault()
  //   pageCounter = setInterval( function(){
  //     counter.value -= 1;
  //       if (counter.value == 0){
  //       counter.style.color= "red";
  //       clearInterval( pageCounter);
  //     }
  //       else if(event)
  //       clearInterval( pageCounter )
  //     console.log(counter.value)
  //   },1000);
  // })

// - After the counter is clicked, every 1 second decrease the original value of the counter by 1 and replace the counter's text with the new value. When you click on the counter, stop the timer. If the counter reaches 0, the counter's text should turn red and the timer should stop. When you click on the timer once it is stopped, its value should go back to the original value and the timer should start again.
