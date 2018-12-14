console.log("Start of Simon Says")

let selectGreen = document.getElementById('green')
function addSelectedClass() {
    this.classList.add('selected')
}
selectGreen.addEventListener('click', addSelectedClass)