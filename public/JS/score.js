document.addEventListener("DOMContentLoaded", event => {
    let currentUser = localStorage.getItem('username');
    let finalScore = localStorage.getItem('finalscore');
    let final = document.getElementById('final');
    console.log(finalScore);
    if (finalScore >= 70) {
        final.innerHTML = "Hey " + currentUser + "! Your final score is " + finalScore
        + ". You Win!";
    }
    else {
        final.innerHTML = "Hey " + currentUser + "! Your final score is " + finalScore
        + ". You Lose!";
    }
})

function newGame() {
    window.location.href = "questions.html";
}
