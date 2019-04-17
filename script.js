const lights = document.getElementsByClassName("light");

class Game {

  constructor(speed) {
    this.speed = speed;
    this.lights = lights;
    this.score = 0;
    this.isGameOver = false;
  }


  _blink() {
    let randomLight = lights[Math.floor(Math.random() * lights.length)];
    randomLight.style.backgroundColor = "blue";
    setTimeout(function() {
      randomLight.style.backgroundColor = "green";
    }, 800);
  }

  play() {
    let change = setInterval(this._blink, this.speed);
    this.increaseScore();
    if (this.isGameOver) {
      clearInterval(change);
      console.log("over");
    }
  }

  increaseScore() {
    for (let i = 0; i < this.lights.length; i++) {
      this.lights[i].addEventListener("click", () => {
        if (this.lights[i].style.backgroundColor == "blue") {
          this.score++;
          document.getElementById("score").innerHTML = `Your score is ${this.score}`
          console.log(this.score);
        }
      })
    }
  }

  stopGame() {
    this.isGameOver = true;
    console.log("ololo");
    //document.getElementById("end").style.display = "block";
  }
}

let game = new Game(1000);

function onStartGameCallBack() {
  game = new Game(1000);
  game.play();
}

function onStopGameCallBack() {
  game.stopGame();

}