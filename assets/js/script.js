let inputs = document.querySelector(".data"),
resetBtn = document.querySelector(".btn-reset");
submitBtn = document.querySelector(".btn-answer");
question = document.querySelector(".question span"),

/* getting random words from wordList*/
function randomWord() {
    let ranObj = wordList[Math.floor(Math.random() * wordList.length)];
    //random word objects
    let word = ranObj.word;
    console.log(ranObj);

    question.innerText = ranObj.question;

    let html ="";
    for (let i = 0; i < word.length; i++) {
        html += `<input type = "text" disabled>`;
    }
    inputs.innerHTML = html;
}
    resetBtn.addEventListener("click", randomWord);