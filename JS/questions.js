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
    score = currentScore;
    welcome.innerHTML = "Hey " + currentUser + "! Your current score is " + score;
    score = currentScore;
    fetch('https://opentdb.com/api.php?amount=50&category=11')
      .then(function(response) {
        return response.json();
      }) 
      .then(function(myJson) {
        results = myJson.results;
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
      });
})

function clickA() {
    if (shuffledAnswers[0] === results[0].correct_answer) {
      console.log("correct");
      let currentUser = localStorage.getItem('username');
    let welcome = document.getElementById('currentUser');
      score += 10;
      welcome.innerHTML = "Hey " + currentUser + "! Your current score is " + score;
      results.shift();
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
  }
    else {
      console.log("incorrect");
      results.shift();
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
    }
  }
  function clickB() {
    if (shuffledAnswers[1] === results[0].correct_answer) {
      console.log("correct");
      let currentUser = localStorage.getItem('username');
    let welcome = document.getElementById('currentUser');
      score += 10;
      welcome.innerHTML = "Hey " + currentUser + "! Your current score is " + score;
      results.shift();
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
  }
    else {
      console.log("incorrect");
      results.shift();
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
    }
  }

  function clickC() {
    if (shuffledAnswers[2] === results[0].correct_answer) {
      console.log("correct");
      let currentUser = localStorage.getItem('username');
      let welcome = document.getElementById('currentUser');
      score += 10;
      welcome.innerHTML = "Hey " + currentUser + "! Your current score is " + score;
      results.shift();
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
  }
    else {
      console.log("incorrect");
      results.shift();
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
    }
  }

  function clickD() {
    if (shuffledAnswers[3] === results[0].correct_answer) {
      console.log("correct");
      score += 10;
      welcome.innerHTML = "Hey " + currentUser + "! Your current score is " + score;
      results.shift();
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
  }
    else {
      console.log("incorrect");
      results.shift();
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
    }
  }