//initiate game
const game = () => {
    let playerScore = 0;
    let compScore = 0;
    const play = document.querySelector('.match button');
    const match = document.querySelector('.match');

    play.addEventListener('click', () => {
        play();
    });
};

//Play game 
const play = () => {
    const options = document.querySelector('.options button');
    const player = document.querySelector('.you');
    const computer = document.querySelector('.Computer');
    //randomly generate the computer's options
    const compOptions = ['Rock', 'Paper', 'Scissors'];
    for(var i=0; i < compOptions.length; i++) {
        var self = compOptions[i];
        self.addEventListener("click", function(event) {
        event.preventDefault();
        compPlay(this);
        }, false());
    }

    const compPlay = () => {
            const random = Math.floor(Math.random()*3);
            //math.random generates a number between 0 and 1 so we multiply the result by 3
            //math.floor() rounds down the generated number
            const compChoice = compOptions[random];
            scores(this.textContent, compChoice);
            //update hand images
            player.src = `./Rock-Paper-Scissors/${this.textContent}.png`;
            comp.src = `./Rock-Paper-Scissors/${compChoice}.png`;
        };
}

//update scores


//track scores
const scores = (playerChoice, compChoice) => {
    const winner = document.querySelector('.start');
    if(playerChoice === compChoice) {
        winner.textContent = "Draw. Play again";
        return;
    }
    //check for rock
    if(playerChoice === 'Rock'){
        if(compChoice === 'scissors') {
            winner.textContent = "You won!";
            return;
        }
        else {
            winner.textContent = "You lose! The computer won!";
            return;
            }
        }

    //check for paper
    if(playerChoice === 'Paper'){
        if(compChoice === 'scissors') {
            winner.textContent = "You lose! The computer won!";
            return;
        }
        else {
            winner.textContent = "You won!";
            return;
            }
        }

    //check for scissors
    if(playerChoice === 'Scissors'){
        if(compChoice === 'rock') {
            winner.textContent = "You lose! The computer won!";
            return;
        }
        else {
            winner.textContent = "You won!";
            return;
            }
        }
    }
//call functions
play();
scores();