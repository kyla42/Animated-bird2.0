const birdBtn = document.querySelector(".bird");
const movement = ["shake", "jump", "stretch1", "stretch2", "flower", "glasses", "forward", "sliding", "incline"];

const action = function() {
    for (let i = 0; i < movement.length; i++) {
        birdBtn.classList.remove(movement[i]);
    }

    const randomMove = movement[Math.floor(Math.random() * movement.length)];
    birdBtn.classList.add(randomMove);
}

birdBtn.addEventListener("click", action)
document.addEventListener("keydown", function(e) {
    console.log(e.key)
    if (e.key === "Enter") {
        action();
    }
})