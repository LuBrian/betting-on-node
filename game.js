var prompt = require('prompt');

var initial = 100;

var game = function() {
	if(initial >= 5) {
    console.log("You have $" + initial + " in this betting game!")
		console.log("Please enter your bet in this round! (a bet between $5 and $10): ")
    prompt.get(['bet'], function (err, result) {
      var bet = result.bet
      if(bet >= 5 && bet <= 10) {
        var generate_bet = function() {
          var num = Math.ceil(Math.random() * 10);

          console.log("Please give me your guess(number between 1 to 10) ");
          prompt.get(['guess'],function (err,result){
            var guess = result.guess;
            if( guess >0 && guess <11) {
              var compare = function() {
                if(guess == num) {
                  initial += bet * 2;
                  console.log("You are correct!")
                  game();
                } else if ( Math.abs(guess - num) == 1 ){
                  console.log("You are close!")
                  game();
                } else {
                  initial -= bet;
                  console.log('You are wrong!')
                  game();
                }
              }
              compare();
            } else {
              console.log("Please enter guess between 1 and 10");
              generate_bet();
            }
          });
        }
        generate_bet();
      } else {
        console.log("Please enter a bet between $5 and $10");
        game();
      };
    });
  } else {
    console.log("You have less than $5, can't continue the game!!");
  }
}
game();
