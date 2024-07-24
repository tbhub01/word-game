let inputElements = document.querySelector(".data");
let resetBtn = document.querySelector(".btn-reset");
let submitBtn = document.querySelector(".btn-answer");
let question = document.querySelector(".question span");
let currentWord;
let currentCount = 0;
let wrongCount = 0;

function randomWord() {
    // getting random word objects from the wordList questions 
  let ranObj = wordList[Math.floor(Math.random() * wordList.length)];
  console.log(ranObj);

  currentWord = ranObj;
  question.innerText = ranObj.question;

  let inputHTML = `<input type="text" id="answer" value="">`;
  inputElements.innerHTML = inputHTML;
}

randomWord();
resetBtn.addEventListener("click", randomWord);

function checkAnswer() {
    let userAnswer = document.getElementById("answer").value.toLowerCase();
    let correctAnswer = currentWord.word.toLowerCase();

    if (userAnswer === correctAnswer) {
        alert("Correct!");
        correctCount++;
        document.getElementById("correct").innerText = correctCount;
    } else {
        alert("Incorrect. The correct answer is " + correctAnswer);
        wrongCount++;
        document.getElementById("wrong").innerText = wrongCount;
    }

    randomWord();
}

submitBtn.addEventListener("click", checkAnswer);
