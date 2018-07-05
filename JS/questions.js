document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
    console.log(app);
    let currentUser = localStorage.getItem('username');
    console.log(currentUser);
    let welcome = document.getElementById('currentUser');
    welcome.innerHTML = "Welcome " + currentUser + "!";
    fetch('https://opentdb.com/api.php?amount=50&category=11')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
      let random = Math.floor((Math.random() * 3));
      let correct = myJson.results[0].correct_answer;
      let incorrect = myJson.results[0].incorrect_answers;
      incorrect.splice(random, 0, correct);
      console.log(random);
      console.log(incorrect[0]);
      let question = document.getElementById('question');
      question.innerHTML = myJson.results[0].question;
      let A = document.getElementById('a');
      A.innerHTML = incorrect[0];
      let B = document.getElementById('b');
      B.innerHTML = incorrect[1];
      let C = document.getElementById('c');
      C.innerHTML = incorrect[2];
      let D = document.getElementById('d');
      D.innerHTML = incorrect[3];
      console.log(myJson.results);
  });
})