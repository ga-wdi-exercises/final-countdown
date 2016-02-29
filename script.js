$(document).ready(function() {
  var game = {
    counter: $("#counter"),
    gameInProgress: false,
    interval: "",
    // currentValue: "",
    startGame: function() {
      this.counter.click(this.assessStatus);
    },
    playGame: function() {
      var self = game;
      var seconds = 1233;
      var second = 0;

      self.interval = setInterval(function() {
        self.counter.val(seconds - second);

        if (second >= seconds) {
          self.counter.val(0).css("color", "red");
        };

        second++;
      }, 1);

      this.gameInProgress = true;
    },
    assessStatus: function() {
      event.preventDefault();

      var self = game;

      if (self.gameInProgress) {
        clearInterval(self.interval)
        self.gameInProgress = false;
      } else {
        self.playGame();
      }
    }
  }

  game.startGame();
});
