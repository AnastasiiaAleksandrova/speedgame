const lights = document.getElementsByClassName("light");

class Game {

  constructor(speed) {
    this.speed = speed;
    this.lights = lights;
    this.score = 0;
    this.interval = null;
    //this.blinkSpeed = 800;
  }

  play() {
    document.getElementById("score").innerHTML = `Your score is ${this.score}`
    this.interval = setInterval(this._blink, this.speed);
    this._increaseScore();
  }


  _blink() {
    let randomLight = lights[Math.floor(Math.random() * lights.length)];
    randomLight.style.backgroundColor = "blue";
    setTimeout(function() {
      randomLight.style.backgroundColor = "green";
    }, 800);
  }

  _increaseScore() {
    for (let i = 0; i < this.lights.length; i++) {
      this.lights[i].addEventListener("click", () => {
        if (this.lights[i].style.backgroundColor == "blue") {
          this.score++;
          this._increaseSpeed();
          document.getElementById("score").innerHTML = `Your score is ${this.score}`
        } 
        // else {
        //   this.stopGame();
        // }
      })
    }
  }

  _increaseSpeed() {
    if (this.speed > 800) {
      this.speed -= 10;
      console.log(this.speed);
    }
  }

  stopGame() {
    this._showEndWindow()
    clearInterval(this.interval);
    console.log("STOP")

  }

  _showEndWindow() {
    document.getElementById("cover").style.display = "block";
    document.getElementById("final_score").innerHTML = `Your final score is ${this.score}`;
    document.getElementById("end").style.display = "block";
  }
}


function onStartGameCallBack() {
  game = new Game(1000);
  game.play();
  document.getElementById("stop_button").addEventListener("click", () => {
    game.stopGame()
  });
}


document.getElementById("close").addEventListener("click",
  () => {
    document.getElementById("cover").style.display = "none";
    document.getElementById("end").style.display = "none";
  })
