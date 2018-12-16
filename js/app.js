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
let runStatus


function pickRandomColor() {
    console.log('Game has begun')
    randomColor = cpuChoose[Math.floor(Math.random() * cpuChoose.length)]
    cpuSequence.push(randomColor)
    console.log('Random color selected is ' + randomColor)
    // console.log(cpuSequence)
    showSequence()
}

async function pickAgain() {
    await showSequence()
    pickRandomColor()
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

function compareSequences(player, cpu) {
    if (player.length != cpu.length) {
        return runStatus = false
    }
    for (i = 0; i < player.length; i++) {
        let sequenceName = player[i]
        if (player[sequenceName] !== cpu[sequenceName]) {
            return runStatus = false
        }
    }
    return runStatus = true
    console.log(runStatus)
}



// function isEquivalent(a, b) {
//     // Create arrays of property names
//     var aProps = Object.getOwnPropertyNames(a);
//     var bProps = Object.getOwnPropertyNames(b);

//     // If number of properties is different,
//     // objects are not equivalent
//     if (aProps.length != bProps.length) {
//         return false;
//     }

//     for (var i = 0; i < aProps.length; i++) {
//         var propName = aProps[i];

//         // If values of same property are not equal,
//         // objects are not equivalent
//         if (a[propName] !== b[propName]) {
//             return false;
//         }
//     }

//     // If we made it this far, objects
//     // are considered equivalent
//     return true;
// }


function showSequence() {
    for (i = 0; i < cpuSequence.length; i++) {
        let selectRandom = document.getElementById(cpuSequence[i])
        // console.log(selectRandom)
        function addSelectedClass() {
            selectRandom.classList.add('selected')
        }
        let startInterval = setInterval(addSelectedClass, 500)
        setTimeout(function () {
            clearInterval(startInterval)
            selectRandom.classList.remove('selected')
        }, (i + 1) * 1000)
    }
    // for (var i = 1; i <= 10; i++) {
    //     (function (index) {
    //         setTimeout(function () { alert(index); }, i * 1000);
    //     })(i);
    // }

}

selectGreen.addEventListener('click', buttonIsClicked)
selectYellow.addEventListener('click', buttonIsClicked)
selectRed.addEventListener('click', buttonIsClicked)
selectBlue.addEventListener('click', buttonIsClicked)


/* To start the game user click the start game button 
Once clicked, the game will tell the user the game has started */
let startButton = document.getElementById('startGameButton')
startButton.addEventListener('click', pickRandomColor)