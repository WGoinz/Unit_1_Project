console.log("Start of Simon Says")

// let selectGreen = document.getElementById('green')
// let selectYellow = document.getElementById('yellow')
// let selectRed = document.getElementById('red')
// let selectBlue = document.getElementById('blue')

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
    let selectRandom = document.getElementById(randomColor)
    function addSelectedClass() {
        selectRandom.classList.add('selected')
    }
    function removeSelectedClass() {
        selectRandom.classList.remove('selected')
    }
    let startInterval = setInterval(addSelectedClass, 500)
    let stopInterval = clearInterval(startInterval)
    // selectRandom.classList.add('selected')
    // selectRandom.classList.remove('selected')
    console.log(randomColor)
    console.log(cpuSequence)
    return randomColor

}

// function addSelectedClass() {
//     this.classList.add('selected')
// }
// selectGreen.addEventListener('click', addSelectedClass)
// selectYellow.addEventListener('click', addSelectedClass)
// selectRed.addEventListener('click', addSelectedClass)
// selectBlue.addEventListener('click', addSelectedClass)


/* To start the game user click the start game button 
Once clicked, the game will tell the user the game has started */
let startButton = document.getElementById('startGameButton')
startButton.addEventListener('click', pickRandomColor)