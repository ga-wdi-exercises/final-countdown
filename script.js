  $(document).ready(function(){
              $("#counter").val(1234);
              var firstNum = parseInt($("#counter").val());
              var isCountingDown = false;
              var timerId;
              function minusOne(){
                  console.log(firstNum)
                  $("#counter").val(firstNum);
                  //decrease original num by 1
                  if(firstNum >0){
                      firstNum=firstNum-1;
                  //If number is 0 or less then stop the timer.
                  }else if(firstNum <= 0){
                      // IF the counter reaches 0, the counter's text should turn red.
                      $("#counter").addClass("fail")
                      clearInterval(timerId);
                      isCountingDown = false;
                  }
              }
              $("#counter").click(function(evt){
                  //prevent form default of refreshing the page
                  evt.preventDefault();
                  //isCountingDown starts as false so this should run on first click
                  if(isCountingDown === false){
                      $("#counter").removeClass("fail")
                      firstNum = 1234;
                      $("#counter").val(firstNum);
                      //run the minusOne function every time amount.
                      timerId = setInterval(minusOne, 4);
                      //set isCountingDown to true so that on next click the elseif section will run
                      isCountingDown = true;
                  }else if (isCountingDown === true) {
                      //on the next click stop the timer
                      clearInterval(timerId);
                      //set boolean back to false
                      isCountingDown = false;
                      $("#counter").removeClass("fail")
                  }
              });
          })
