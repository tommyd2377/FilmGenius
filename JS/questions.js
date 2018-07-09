let shuffledAnswers = [];
let correctAnswer;
let results;
let score;

document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
    console.log(app);
    let currentUser = localStorage.getItem('username');
    let currentScore = localStorage.getItem('score');
    let welcome = document.getElementById('currentUser');
    console.log(currentScore);
    score = parseInt(currentScore);
    welcome.innerHTML = "Hey " + currentUser + "! Your current score is " + score;
    fetch('https://opentdb.com/api.php?amount=50&category=11')
      .then(function(response) {
        return response.json();
      }) 
      .then(function(myJson) {
        results = myJson.results;
            newQuestion();
      });
})

function clickA() {
    if (shuffledAnswers[0] === results[0].correct_answer) {
      answerCorrect();
  }
    else {
      console.log("incorrect");
      results.shift();
      newQuestion();
    }
  }
  function clickB() {
    if (shuffledAnswers[1] === results[0].correct_answer) {
      answerCorrect();
  }
    else {
      console.log("incorrect");
      results.shift();
      newQuestion();
    }
  }

  function clickC() {
    if (shuffledAnswers[2] === results[0].correct_answer) {
      answerCorrect();
  }
    else {
      console.log("incorrect");
      results.shift();
      newQuestion();
    }
  }

  function clickD() {
    if (shuffledAnswers[3] === results[0].correct_answer) {
      answerCorrect();
  }
    else {
      console.log("incorrect");
      results.shift();
      newQuestion();
    }
  }

  function newQuestion() {
    let random = Math.floor((Math.random() * 3));
    let correct = results[0].correct_answer;
    let incorrect = results[0].incorrect_answers;
      incorrect.splice(random, 0, correct);
    
    let question = document.getElementById('question');
    question.innerHTML = results[0].question;
    
    let A = document.getElementById('a');
    A.innerHTML = incorrect[0];
    
    let B = document.getElementById('b');
    B.innerHTML = incorrect[1];
    
    let C = document.getElementById('c');
    C.innerHTML = incorrect[2];
    
    let D = document.getElementById('d');
    D.innerHTML = incorrect[3];
    
    shuffledAnswers = incorrect;
    var timeleft = 10;
    var downloadTimer = setInterval(function(){
    
    document.getElementById("progressBar").value = 10 - --timeleft;
      if(timeleft <= 0)
        clearInterval(downloadTimer);
    }, 1000);
  }

  function answerCorrect() {
    const app = firebase.app();
    const db = app.firestore();
    console.log("correct");
    score += 10;
    let currentUser = localStorage.getItem('username');
    let welcome = document.getElementById('currentUser');
    db.collection("users").doc(currentUser).update({
      highScore: score
    })
      .then(function() {
        console.log("Document successfully written!");
      })
        .catch(function(error) {
        console.error("Error writing document: ", error);
        });
    
    console.log(score);
    welcome.innerHTML = "Hey " + currentUser + "! Your current score is " + score;
    results.shift();
    newQuestion();
  }