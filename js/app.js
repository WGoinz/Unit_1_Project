console.log("Start of Simon Says")

let selectGreen = document.getElementById('green')
let selectYellow = document.getElementById('yellow')
let selectRed = document.getElementById('red')
let selectBlue = document.getElementById('blue')
let selectScore = document.getElementById('score')



let playerScore = 0

let playerSequence = []
let cpuSequence = []
let cpuChoose = ['green', 'red', 'blue', 'yellow']
let randomColor


const audioStart = new Audio('../sounds/start.mp3')
const audioGreen = new Audio('../sounds/green_sound.mp3')
const audioYellow = new Audio('../sounds/yellow_sound.mp3')
const audioBlue = new Audio('../sounds/punch2.mp3')
const audioRed = new Audio('../sounds/punch1.mp3')
const gameEnd = new Audio('../sounds/you_lose.mp3')
const continueGame = new Audio('../sounds/replay.mp3')

function startGame() {
    console.log('Game has begun')
    playerSequence = []
    cpuSequence = []
    selectScore.innerHTML = "CURRENT SCORE = 0"
    audioStart.play()
    setTimeout(function () {
        pickRandomColor()
    }, 3000)
}

function toggleClass() {
    for (i = 0; i < cpuSequence.length; i++) {
        let selectRandom = document.getElementById(cpuSequence[i])
        // console.log(selectRandom)

        setTimeout(function () {
            console.log(i)

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
        }, i * 800)
    }
}

function pickRandomColor() {
    randomColor = cpuChoose[Math.floor(Math.random() * cpuChoose.length)]
    cpuSequence.push(randomColor)
    console.log('Random color selected is ' + randomColor)
    // console.log(index)
    setTimeout(function () {
        toggleClass()
    }, 1000)

}

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

function compareSequences() {
    for (i = 0; i < playerSequence.length; i++) {
        if (cpuSequence[i] !== playerSequence[i]) {
            console.log("You picked incorrectly at step " + i)
            setTimeout(function () {
                gameEnd.play()
                selectScore.innerHTML = 'YOU FAIL: SCORE = 0'
                // alert('You lose, Press Start Game to play again')
            }, 1000)
            // setTimeout(function () {
            //     continueGame.play()
            //     let playAgain = prompt('Would you like to play again?')
            // }, 2000)
        } else if (cpuSequence.length === playerSequence.length) {
            console.log('Right answer')
            playerScore++
            selectScore.innerHTML = 'CURRENT SCORE = ' + playerScore
            playerSequence = []
            setTimeout(function () {
                pickRandomColor()
            }, 1500)
        }
    }
}

function playSound() {
    if (randomColor === 'green') {
        audioGreen.play()
    } else if (randomColor === 'red') {
        audioRed.play()
    } else if (randomColor === 'blue') {
        audioBlue.play()
    } else {
        audioYellow.play()
    }

}

// function showSequence(index) {
//     let selectRandom = document.getElementById(cpuSequence[index])
//     selectRandom.classList.toggle('selected')
//     setTimeout(function () {
//         selectRandom.classList.toggle('selected')
//     }, 500)
//     playSound()
// console.log(selectRandom)
// function addSelectedClass() {
//     selectRandom.classList.add('selected')
// }
// let startInterval = setInterval(addSelectedClass, 500)
// setTimeout(function () {
//     clearInterval(startInterval)
//     selectRandom.classList.remove('selected')
// }, (i + 1) * 1000)

// }


selectGreen.addEventListener('click', buttonIsClicked)
selectYellow.addEventListener('click', buttonIsClicked)
selectRed.addEventListener('click', buttonIsClicked)
selectBlue.addEventListener('click', buttonIsClicked)


/* To start the game user click the start game button 
Once clicked, the game will tell the user the game has started */
let startButton = document.getElementById('startGameButton')
startButton.addEventListener('click', startGame)
