(function() {

  var score = [0,0];

  var scores = [];

  var bias = 0.5;

  function recordScore() {
    scores.push(score);
    score = [0,0];
  }

  function playPoint() {
    if (Math.random() >= bias) {
      score[1]++
    } else {
      score[0]++
    }
  };

  function playGame() {
    while ((score[0] < 21 && score[1] < 21) || Math.abs(score[1] - score[0]) < 2) {
      playPoint();
    }
    recordScore();
  }

  var Pong = {};

  Pong.playGames = function(n) {
    for (var i = 0; i < n; i++) {
      playGame();
    }
    return scores;
  }

  Pong.resetScores = function() { scores = []; };

  Pong.setBias = function(b) { bias = b; };

  window.Pong = Pong;

})()
