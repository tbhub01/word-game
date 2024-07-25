let inputElements = document.querySelector(".data");
let resetBtn = document.querySelector(".btn-reset");
let submitBtn = document.querySelector(".btn-answer");
let question = document.querySelector(".question span");

let gameState = {
    currentWord: null,
    currentCount: 0,
    wrongCount: 0,
    timeLeft: 20,
};
let timerInterval;

function randomWord() {
    // getting random word objects from the wordList questions 
    gameState.currentWord = wordList[Math.floor(Math.random() * wordList.length)];
    question.textContent = gameState.currentWord.question;

    inputElements.innerHTML = '<input type="text" id="answer" value="">';

    resetTimer();
}
 
  function resetTimer() {
    clearInterval(timerInterval);
    
  }
    //time left countdown
    timerInterval = setInterval(() => {
    timeLeft -= 1;
    document.getElementById("time-left").innerText = timeLeft.toString();
    if (timeLeft <= 0) {
    alert("Time up. Game Over! Your final score is " + (currentCount - wrongCount));
    location.reload(); // reload the page to restart game
    }
    }, 1000);
 

    // event listner to reset game to any random word and score count to zero
    randomWord();
    resetBtn.addEventListener("click", function() {
    currentCount = 0;
    wrongCount = 0;
    document.getElementById("correct").innerText = "0";
    document.getElementById("wrong").innerText = "0";
    document.getElementById("time-left").innerText = "20";
    randomWord();
    
});
function resetGame() {
    // Stop the timer
    clearInterval(timerInterval);
     timeLeft = 20;
    currentWord = null;
    currentCount = 0;
    wrongCount = 0;
       
  }

function checkAnswer() {
    let userInput = document.querySelector("input").value.trim().toLowerCase();
    let correctAnswer = currentWord.word.toLowerCase();

        // checking answer and called function to count scores
    if (userInput === correctAnswer) {
        alert("Correct! Welldone :D");
        countingrightscore();
        clearInterval(timerInterval); 
        timeLeft = 10; 
        randomWord(); 
    } else {
        alert("Incorrect. The correct answer is " + correctAnswer);
        countingwrongscore();
         if(timeLeft <= 0){
            alert("Time is up. Game Over! Your final score is "+(currentCount-wrongCount));
          location.reload(); // reload the page to restart game 
        }
    }
        // updates the time left on display
        document.getElementById("time-left").innerText = timeLeft.toString();

    randomWord();
}
    // event listener for Enter key on keyboard
    inputElements.querySelector("input").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            checkAnswer();
            clearInterval(timerInterval); // stop timer when Enter key is clicked
       
    }
    });
    
    // event listener to check answer
    submitBtn.addEventListener("click", checkAnswer);

    
function countingwrongscore() {
    let oldScore = parseInt(document.getElementById("wrong").innerText);
    document.getElementById("wrong").innerText = ++oldScore;
}

function countingrightscore() {
    let oldScore = parseInt(document.getElementById("correct").innerText);
    document.getElementById("correct").innerText = ++oldScore;
}


