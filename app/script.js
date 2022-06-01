const birdBtn = document.querySelector(".bird");
const movement = ["shake", "jump", "stretch1", "stretch2", "ribbon", "sliding", "incline", "glasses"];

birdBtn.addEventListener("click", function () {
    for (let i = 0; i < movement.length; i++) {
        birdBtn.classList.remove(movement[i]);
    }

    const randomMove = movement[Math.floor(Math.random() * movement.length)];
    birdBtn.classList.add(randomMove);
});