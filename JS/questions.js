document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
    console.log(app);
    let currentUser = localStorage.getItem('username');
    console.log(currentUser);
    let welcome = document.getElementById('currentUser');
    welcome.innerHTML = "Welcome " + currentUser + "!";
})