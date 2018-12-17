// console.log("Start of Simon Says")

/* Declare variables that will be used in the project */

let selectGreen = document.getElementById('green')
let selectYellow = document.getElementById('yellow')
let selectRed = document.getElementById('red')
let selectBlue = document.getElementById('blue')
let selectScore = document.getElementById('score')
let flicker = document.getElementById('gameName')

let easy = 1500
let hard = 800
let god = 150
let difficulty = 1500
let playerScore = 0
let highScore = 0
let difficultyBackground

/* Setup empty arrays and establish the array for Random Colors to be chosen*/

let playerSequence = []
let cpuSequence = []
const cpuChoose = ['green', 'red', 'blue', 'yellow']
let randomColor

/* Add all audio files to the project and declare them as constants */

const audioStart = new Audio('../sounds/start.mp3')
const audioGreen = new Audio('../sounds/green_sound.mp3')
const audioYellow = new Audio('../sounds/yellow_sound.mp3')
const audioBlue = new Audio('../sounds/punch2.mp3')
const audioRed = new Audio('../sounds/punch1.mp3')
const gameEnd = new Audio('../sounds/you_lose.mp3')
const continueGame = new Audio('../sounds/ready_go.mp3')
const bgm = new Audio('../sounds/actionBGM.mp3')
const evilLaugh = new Audio('../sounds/evil_laugh.mp3')

/* Setup logic for choosing which difficulty the player wants */

document.getElementById('easy').onclick = function () {
    difficulty = easy
    difficultyBackground = this
    this.style.backgroundColor = 'red'
}
document.getElementById('hard').onclick = function () {
    difficulty = hard
    difficultyBackground = this
    this.style.backgroundColor = 'red'
}
document.getElementById('god').onclick = function () {
    difficulty = god
    difficultyBackground = this
    this.style.backgroundColor = 'red'
}

/* Start Game function. This is only called when the game is started
The pickRandomColor function is the main function of this program
 */

function startGame() {
    evilLaugh.pause()
    setInterval(function () {
        flicker.classList.add('blink-1')
    }, 1000)
    flicker.style.backgroundColor = 'red'
    document.getElementById('startGameButton').style.backgroundColor = "red"
    bgm.play()
    // console.log('Game has begun')
    playerSequence = []
    cpuSequence = []
    playerScore = 0
    selectScore.innerHTML = "CURRENT SCORE = 0"
    setTimeout(function () {
        audioStart.play()
    }, 3000)
    setTimeout(function () {
        pickRandomColor()
    }, 6000)
}

/* To start the game user click the start game button 
Once clicked, the game will tell the user the game has started */
let startButton = document.getElementById('startGameButton')
startButton.addEventListener('click', startGame)

/* This function controls when each div has its class toggled
to give it the effect of being selected. The function goes through
a loop and there is a setTimeout interval modified by the difficulty */

function toggleClass() {
    for (i = 0; i < cpuSequence.length; i++) {
        let selectRandom = document.getElementById(cpuSequence[i])
        // console.log(selectRandom)
        setTimeout(function () {
            // console.log(i)
            // console.log(selectRandom)
            selectRandom.classList.toggle('selected')
            setTimeout(function () {
                selectRandom.classList.toggle('selected')
            }, 300)
            if (selectRandom.getAttribute('data-color') === 'green') {
                audioGreen.play()
            } else if (selectRandom.getAttribute('data-color') === 'blue') {
                audioBlue.play()
            } else if (selectRandom.getAttribute('data-color') === 'red') {
                audioRed.play()
            } else if (selectRandom.getAttribute('data-color') === 'yellow') {
                audioYellow.play()
            }
        }, i * difficulty)
    }
}

/* Selects a random color from the original cpuChoose array */

function pickRandomColor() {
    randomColor = cpuChoose[Math.floor(Math.random() * cpuChoose.length)]
    cpuSequence.push(randomColor)
    // console.log('Random color selected is ' + randomColor)
    // console.log(index)
    setTimeout(function () {
        toggleClass()
    }, 1000)
}

/* Checks which button has been clicked and toggles the 'clicked' class
Based off of this class, it plays a specific audio file related to that class
Calls the compareSequences function at the end */

function buttonIsClicked() {
    let selectedButton = this
    selectedButton.classList.toggle('clicked')
    setTimeout(function () {
        selectedButton.classList.toggle('clicked')
    }, 500)
    if (this.getAttribute('data-color') === 'green') {
        audioGreen.play()
    } else if (this.getAttribute('data-color') === 'blue') {
        audioBlue.play()
    } else if (this.getAttribute('data-color') === 'red') {
        audioRed.play()
    } else if (this.getAttribute('data-color') === 'yellow') {
        audioYellow.play()
    }
    playerSequence.push(this.getAttribute('data-color'))
    compareSequences()
    // let check = compareSequences()
    // console.log('The check is ' + check)
}

/* Looks at each index of the cpuSequence and playerSequence array
If the values are equal it continues the loop until it reaches the
current total length of the array. If all values are equal at each index, 
a new round is started */

function compareSequences() {
    let nextLevel = false
    for (i = 0; i < playerSequence.length; i++) {
        if (cpuSequence[i] !== playerSequence[i]) {
            nextLevel = false
            // console.log("You picked incorrectly at step " + i)
            setTimeout(function () {
                checkHighScore()
                flicker.classList.remove('text-flicker-in-glow')
                flicker.style.backgroundColor = 'white'
                document.getElementById('startGameButton').style.backgroundColor = "white"
                gameEnd.play()
                bgm.pause()
                setTimeout(function () {
                    evilLaugh.play()
                }, 1500)
                selectScore.innerHTML = 'LOSER!! FINAL SCORE = ' + playerScore
                // alert('You lose, Press Start Game to play again')
            }, 1000)
            difficultyBackground.style.backgroundColor = "white"
        } else if (cpuSequence.length === playerSequence.length) {
            // console.log('Right answer')
            nextLevel = true
        }
    }
    if (nextLevel === true) {
        playerScore++
        checkHighScore()
        selectScore.innerHTML = 'CURRENT SCORE = ' + playerScore
        playerSequence = []
        setTimeout(function () {
            continueGame.play()
        }, 700)
        setTimeout(function () {
            pickRandomColor()
        }, 2500)
    }
}

/* Checks the playerScore and compares it to the highScore
If the highScore is smaller then it is replaced with the playerScore's value */

function checkHighScore() {
    if (playerScore >= highScore) {
        highScore = playerScore
        document.getElementById('highScore').innerHTML = 'HIGH SCORE = ' + highScore
    }
}

selectGreen.addEventListener('click', buttonIsClicked)
selectYellow.addEventListener('click', buttonIsClicked)
selectRed.addEventListener('click', buttonIsClicked)
selectBlue.addEventListener('click', buttonIsClicked)





