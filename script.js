$(document).ready(function(){

  counting();

  function counting(){
    var count;
    var timing;
    var startNum = 1234;
    var counter = $("#counter");
    $("#counter").val(startNum);

    $("#counter").click(function(evt){

      //start the decrease of the number
      if(!count){
        //stop page from reloading
        evt.preventDefault();

        //start counter
        count = setInterval(timer, 500);

        //counts down number
        function timer(){
          //console.log(startNum);
          startNum--;
          counter.val(startNum);

          // number == 0 part
          if( startNum === 0){

            //stop page from reloading
            evt.preventDefault();

            //set count equal to false
            count =  clearInterval(count);

            //set counter to red on 0
            counter.addClass("fail");

            timing = setInterval(showZero, 1000);

            function showZero(){
              console.log(startNum);

              startNum = 1;
              counter.removeClass("fail");
              timing =  clearInterval(timing);
              startNum = null;

              //restarts counter
              counting();
            }
          }
        }
      }
      else{
        //stop page from reloading
        evt.preventDefault();

        //set count equal to false
        count =  clearInterval(count);
      }

    });
  }
});
