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

async function startGame() {
    await audioStart.play()
    pickRandomColor()
}

function pickRandomColor() {
    console.log('Game has begun')
    randomColor = cpuChoose[Math.floor(Math.random() * cpuChoose.length)]
    cpuSequence.push(randomColor)
    console.log('Random color selected is ' + randomColor)

}

function buttonIsClicked() {
    let selectedButton = this
    function addSelectedClass() {
        selectedButton.classList.add('clicked')
    }
    let buttonInterval = setInterval(() => {
        addSelectedClass()
    }, 100);
    setTimeout(function () {
        clearInterval(buttonInterval)
        selectedButton.classList.remove('clicked')
    }, 200)
    playerSequence.push(this.getAttribute('data-color'))
    let check = compareSequences(playerSequence, cpuSequence)
    console.log('The check is ' + check)
}

function compareSequences() {

    for (i = 0; i < playerSequence.length; i++) {
        if (cpuSequence[i] !== playerSequence[i]) {
            console.log("You picked incorrectly")
        } else if (cpuSequence.length === playerSequence.length) {
            console.log('Right answer')
            pickRandomColor()
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

function showSequence() {
    for (i = 0; i < cpuSequence.length; i++) {
        let selectRandom = document.getElementById(cpuSequence[i])
        setTimeout(function () {
            // console.log(selectRandom)
            function addSelectedClass() {
                selectRandom.classList.add('selected')
            }
            let startInterval = setInterval(addSelectedClass, 500)
            setTimeout(function () {
                clearInterval(startInterval)
                selectRandom.classList.remove('selected')
            }, (i + 1) * 1000)
        }, 1000)
    }
}

selectGreen.addEventListener('click', buttonIsClicked)
selectYellow.addEventListener('click', buttonIsClicked)
selectRed.addEventListener('click', buttonIsClicked)
selectBlue.addEventListener('click', buttonIsClicked)


/* To start the game user click the start game button 
Once clicked, the game will tell the user the game has started */
let startButton = document.getElementById('startGameButton')
startButton.addEventListener('click', startGame)