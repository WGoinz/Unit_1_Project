console.log("Start of Simon Says")

let selectGreen = document.getElementById('green')
let selectYellow = document.getElementById('yellow')
let selectRed = document.getElementById('red')
let selectBlue = document.getElementById('blue')

let playerScore = 0
let cpuScore = 0

let playerSequence = []
let playerChoose = []
let cpuSequence = []
let cpuChoose = ['green', 'red', 'blue', 'yellow']
let randomColor

function pickRandomColor() {
    console.log('Game has begun')
    randomColor = cpuChoose[Math.floor(Math.random() * cpuChoose.length)]
    cpuSequence.push(randomColor)
    console.log(randomColor)
    console.log(cpuSequence)
    showSequence()

    return randomColor
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
    }, 800)
    playerSequence.push(this.getAttribute('data-color'))
    compareSequences()
}

function compareSequences() {
    console.log(playerSequence)
    console.log(cpuSequence)
    for (i = 0; i < cpuSequence.length; i++)
        if (playerSequence[i] === cpuSequence[i]) {
            playerScore++
            console.log('The score is' + playerScore)
            pickRandomColor()
        } else {
            alert('not equal')
            playerSequence = []
            cpuSequence = []
            pickRandomColor()
        }
}

function showSequence() {
    for (i = 0; i < cpuSequence.length; i++) {
        let selectRandom = document.getElementById(cpuSequence[i])
        function addSelectedClass() {
            selectRandom.classList.add('selected')
        }
        let startInterval = setInterval(addSelectedClass, 1000)
        setTimeout(function () {
            clearInterval(startInterval)
            selectRandom.classList.remove('selected')
        }, 2000)
    }

}

selectGreen.addEventListener('click', buttonIsClicked)
selectYellow.addEventListener('click', buttonIsClicked)
selectRed.addEventListener('click', buttonIsClicked)
selectBlue.addEventListener('click', buttonIsClicked)


/* To start the game user click the start game button 
Once clicked, the game will tell the user the game has started */
let startButton = document.getElementById('startGameButton')
startButton.addEventListener('click', pickRandomColor)