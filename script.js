var game = {
  // timeCounter: $("#counter").val(),
  startGame: function() {
    $("#counter").click(this.playGame);
  },
  playGame: function() {
    event.preventDefault();

    var seconds = 1233;
    var second = 0;
    var interval;
    var self = game;

    self.interval = setInterval(function() {
      $("#counter").val(seconds - second);

      if (second >= seconds) {
        $("#counter").val(0).css("color", "red");
      };

      second++;

      console.log(second);
    }, 1);
  },
  newGame: function() {
    event.preventDefault();

    var value = this.value;

    console.log(value);
  }
}

game.startGame();
