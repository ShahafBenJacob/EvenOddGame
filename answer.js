class Player {
  constructor(name, score = 0) {
    this.name = name;
    this.score = score;
  }
}

class Game {
  constructor(numOfPlayers, numOfRounds, names) {
    this.numOfPlayers = numOfPlayers;
    this.numOfRounds = numOfRounds;
    this.names = names;
    this.playersLst = [];
  }

  playersDetails = () => {
    for (let i = 0; i < this.numOfPlayers; i++) {
      let name = this.names[i];
      this.playersLst.push(new Player(name));
    }
  };

  playGame = () => {
      let roundWinner = ""
      const player1 = game.playersLst[0]
      const player2 = game.playersLst[1]
    for (let i = 0; i < this.numOfRounds; i++) {
      const min = Math.ceil(-5);
      const max = Math.floor(13);
      const number = Math.floor(Math.random() * (max - min + 1)) + min;

      if (number % 2 == 0) {
        player1.score += 1;
        roundWinner = player1.name
      } else {
        player2.score += 1;
        roundWinner = player2.name
      }

      console.log(`Round #${i+1}, random number is ${number}, ${roundWinner} scored! \n Status: ${player1.name} ${player1.score}, ${player2.name} ${player2.score}`)

    }
    this.checkWin();
  };

  checkWin = () => {
    let win = 0;
    let winnerName = [""];
    for (let i = 0; i < this.numOfPlayers; i++) {
      if (this.playersLst[i].score > win) {
        win = this.playersLst[i].score
        winnerName = this.playersLst[i].name;
      }
    }
    console.log(`${winnerName} Wins!`)
  };
}

const names = ["shahaf", "rachel", "gal", "nissim", "ofek", "stav", "alona"];
const numOfPlayers = 2;
const numOfRounds = 7;

const game = new Game(numOfPlayers, numOfRounds, names);
game.playersDetails();
game.playGame();

