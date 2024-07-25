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
  question.textContent = ranObj.question;

  let inputHTML = `<input type="text" id="answer" value="">`;
  inputElements.innerHTML = inputHTML;
}
    // event listner to reset game to any random quiz
randomWord();
resetBtn.addEventListener("click", randomWord);

function checkAnswer() {
    let userInput = document.querySelector("input").value.toLowerCase();
    let correctAnswer = currentWord.word.toLowerCase();

        // checking answer and called function to count scores
    if (userInput === correctAnswer) {
        alert("Correct! Welldone :D");
        countingrightscore();
    } else {
        alert("Incorrect. The correct answer is " + correctAnswer);
        countingwrongscore();
    }

    randomWord();
}
    // event listener for Enter key on keyboard
    inputElements.querySelector("input").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            checkAnswer();
       
    }
    });
    
submitBtn.addEventListener("click", checkAnswer);

    
function countingwrongscore() {
    let oldScore = parseInt(document.getElementById("wrong").innerText);
    document.getElementById("wrong").innerText = ++oldScore;
}

function countingrightscore() {
    let oldScore = parseInt(document.getElementById("correct").innerText);
    document.getElementById("correct").innerText = ++oldScore;
}
