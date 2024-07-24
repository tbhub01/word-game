let inputElements = document.querySelector(".data");
let resetBtn = document.querySelector(".btn-reset");
let submitBtn = document.querySelector(".btn-answer");
let question = document.querySelector(".question span");
let currentWord;

function randomWord() {
    // getting random word objects from the wordList questions 
  let ranObj = wordList[Math.floor(Math.random() * wordList.length)];
  console.log(ranObj);

  currentWord = ranObj;
  question.innerText = ranObj.question;

  let inputHTML = Array.from({ length: ranObj.word.length }, () => `<input type="text" disabled>`).join("");
  inputElements.innerHTML = inputHTML;
}

randomWord();
resetBtn.addEventListener("click", randomWord);

