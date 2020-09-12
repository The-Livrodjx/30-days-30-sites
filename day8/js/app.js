var loginButton = document.getElementById("loginButton");
var registerButton = document.getElementById("registerButton");

loginButton.onclick = function(e) {
    setInterval(() => {
        e.preventDefault()
    }, 2000);
    document.querySelector("#flipper").classList.toggle("flip");
}

registerButton.onclick = function(e) {
    setInterval(() => {
        e.preventDefault()
    }, 2000);
    document.querySelector("#flipper").classList.toggle("flip");
}