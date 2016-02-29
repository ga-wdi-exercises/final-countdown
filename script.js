$(document).ready(function() {
  var game = {
    counter: $("#counter"),
    seconds: 1233,
    second: 0,
    gameInProgress: false,
    currentValue: "",
    startGame: function() {
      this.counter.click(this.assessStatus);
    },
    playGame: function() {
      var interval;
      var self = game;

      self.interval = setInterval(function() {
        self.counter.val(self.seconds - self.second);
        self.currentValue = self.seconds - self.second;

        if (self.second >= self.seconds) {
          self.counter.val(0).css("color", "red");
        };

        self.second++;

        console.log(self.currentValue);
      }, 1);

      this.gameInProgress = true;
    },
    assessStatus: function() {
      event.preventDefault();

      var self = game;

      if (self.gameInProgress) {
        self.counter.val(self.currentValue);
        self.gameInProgress = false;
      } else {
        self.playGame();
      }
    }
  }

  game.startGame();
});
