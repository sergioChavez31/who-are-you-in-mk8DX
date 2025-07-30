function lights() {
    alert("I don't have the budget for that...")
}
function camera() {
    alert("This is ALSO not in the budget...")
}
function play() {
    alert("Nope. No games this time...")
}
document.getElementById('lights').addEventListener("click", lights)
document.getElementById('camera').addEventListener("click", camera)
document.getElementById('play').addEventListener("click", play)