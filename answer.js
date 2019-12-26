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
    let roundWinner = "";
    const player1 = game.playersLst[0];
    const player2 = game.playersLst[1];
    for (let i = 0; i < this.numOfRounds; i++) {
      const min = Math.ceil(-5);
      const max = Math.floor(13);
      const number = Math.floor(Math.random() * (max - min + 1)) + min;

      if (number % 2 == 0) {
        player1.score += 1;
        roundWinner = player1.name;
      } else {
        player2.score += 1;
        roundWinner = player2.name;
      }

      console.log(
        `Round #${i +
          1}, random number is ${number}, ${roundWinner} scored! \n Status: ${
          player1.name
        } ${player1.score}, ${player2.name} ${player2.score}`
      );
    }
    this.checkWin();
  };

  checkWin = () => {
    let win = 0;
    let winnerName = [""];
    for (let i = 0; i < this.numOfPlayers; i++) {
      if (this.playersLst[i].score > win) {
        win = this.playersLst[i].score;
        winnerName = this.playersLst[i].name;
      }
    }
    console.log(`${winnerName} Wins!`);
  };
}

class Tournament extends Game {
  constructor(numOfPlayers, numOfRounds, names, playersLst) {
    super(numOfPlayers, numOfRounds, names, playersLst);
    this.pickedPlayers = [];
  }

  randomPickerPlayers = () => {
    this.pickedPlayers = [];
    let currnumber = -1;
    for (let i = 0; i < 3; i++) {
      const min = Math.ceil(0);
      const max = Math.floor(game.numOfPlayers-1);
      const number = Math.floor(Math.random() * (max - min + 1)) + min;
      if (number != currnumber) {
        if (this.pickedPlayers.length < 2){
        this.pickedPlayers.push(game.playersLst[number]);
      } 
      currnumber = number;

    }
    }
  };

  round = () => {
    const min = Math.ceil(-5);
    const max = Math.floor(13);
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    return number;
  };

  playGame = () => {
    for (let i = 0; i < game.numOfRounds; i++) {
      this.randomPickerPlayers();
      let roundWinner = "";
      let player1 = this.pickedPlayers[0];
      let player2 = this.pickedPlayers[1];
      let number = this.round();
      if (number % 2 == 0) {
        player1.score += 1;
        roundWinner = player1.name;
      } else {
        player2.score += 1;
        roundWinner = player2.name;
      }

      console.log(
        `Round #${i +
          1}, random number is ${number}, ${roundWinner} scored! \n Status: ${
          player1.name
        } ${player1.score}, ${player2.name} ${player2.score}`
      );
    }
    this.checkWin();
  };
}

const names = ["shahaf", "rachel", "gal", "nissim", "ofek", "stav", "alona"];
const numOfPlayers = 7;
const numOfRounds = 5;

const game = new Game(numOfPlayers, numOfRounds, names);
game.playersDetails();

const cont = new Tournament();
cont.playGame();
