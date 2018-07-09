document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
    console.log(app);
})

function setUsername() {
    const app = firebase.app();
    const db = app.firestore();
    let username = document.getElementById('username').value;
    console.log(username);
    db.collection("users").doc(username).set({
        username: (username),
        highScore: 0
    })
    .then(function() {
        console.log("Document successfully written!");
        window.location.href = "Pages/questions.html";
        localStorage.setItem('username', (username));
        localStorage.setItem('score', 0);
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
}

