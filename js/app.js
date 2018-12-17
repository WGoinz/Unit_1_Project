console.log("Start of Simon Says")

let selectGreen = document.getElementById('green')
let selectYellow = document.getElementById('yellow')
let selectRed = document.getElementById('red')
let selectBlue = document.getElementById('blue')


let playerScore = 0

let playerSequence = []
let cpuSequence = []
let cpuChoose = ['green', 'red', 'blue', 'yellow']
let randomColor

let soundSelect
const audioStart = new Audio('../sounds/start.mp3')
const audioGreen = new Audio('../sounds/green_sound.mp3')
const audioYellow = new Audio('../sounds/yellow_sound.mp3')
const audioBlue = new Audio('../sounds/blue_sound.wav')
const audioRed = new Audio('../sounds/red_sound.wav')
const gameEnd = new Audio('../sounds/failed_game3.wav')

function startGame() {
    playerSequence = []
    cpuSequence = []
    audioStart.play()
    setTimeout(function () {
        pickRandomColor()
    }, 3500)
}

function pickRandomColor() {
    console.log('Game has begun')
    randomColor = cpuChoose[Math.floor(Math.random() * cpuChoose.length)]
    cpuSequence.push(randomColor)
    console.log('Random color selected is ' + randomColor)
    for (i = 0; i < cpuSequence.length; i++) {
        let index = i
        setTimeout(function () {
            showSequence(index)
        }(i + 1) * 1500)
    }

}

function buttonIsClicked() {
    let selectedButton = this
    selectedButton.classList.toggle('clicked')
    setTimeout(function () {
        selectedButton.classList.toggle('clicked')
    }, 1000)
    playSound()
    playerSequence.push(this.getAttribute('data-color'))
    compareSequences()
    // let check = compareSequences()
    // console.log('The check is ' + check)
}

function compareSequences() {

    for (i = 0; i < playerSequence.length; i++) {
        if (cpuSequence[i] !== playerSequence[i]) {
            console.log("You picked incorrectly")
            setTimeout(function () {
                gameEnd.play()
                alert('You lose, Press Start Game to play again')
            }, 1000)
        } else if (cpuSequence.length === playerSequence.length) {
            console.log('Right answer')
            setTimeout(function () {
                pickRandomColor()
            }, 2000)
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

function showSequence(index) {
    let selectRandom = document.getElementById(cpuSequence[index])
    selectRandom.classList.toggle('selected')
    setTimeout(function () {
        selectRandom.classList.toggle('selected')
    }, 500)
    playSound()
    // console.log(selectRandom)
    // function addSelectedClass() {
    //     selectRandom.classList.add('selected')
    // }
    // let startInterval = setInterval(addSelectedClass, 500)
    // setTimeout(function () {
    //     clearInterval(startInterval)
    //     selectRandom.classList.remove('selected')
    // }, (i + 1) * 1000)

}


selectGreen.addEventListener('click', buttonIsClicked)
selectYellow.addEventListener('click', buttonIsClicked)
selectRed.addEventListener('click', buttonIsClicked)
selectBlue.addEventListener('click', buttonIsClicked)


/* To start the game user click the start game button 
Once clicked, the game will tell the user the game has started */
let startButton = document.getElementById('startGameButton')
startButton.addEventListener('click', startGame)