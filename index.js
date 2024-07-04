let count = 0;

const score = document.querySelector(".score");
const incrementButton = document.querySelector(".incrementButton");

score.innerHTML = count;

function increment() {
    count++;
    score.innerHTML = count;
};

countButton.addEventListener("click", increment);

