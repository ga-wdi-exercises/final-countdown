counting = $("#counter");

var second = 200;

$("#counter").on("click", startingCountdown);

function startingCountdown(){
  console.log('haai');
  startInterval = window.setInterval(countingDown, 1000)

};

function countingDown(){
  // seconds = second -= 1;
  counting.val("do something");
  console.log('heyo');
  // if(seconds === 0){
  //   clearInterval(startInterval)
  // };
};



// omg
