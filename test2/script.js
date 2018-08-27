// Get the signup modal
var modal = document.getElementById('modal');

// Get the button that opens the signup modal
var signupButton = document.getElementById("signup");

// Get the <span> element that closes the signup modal
var modalClose = document.getElementsByClassName("close")[0];

// Get the button that opens the login modal
var loginButton = document.getElementById("login");

var signupForm = document.getElementById("signupForm");

var loginForm = document.getElementById("loginForm");

var signupTab = document.getElementById("signupTab");

var loginTab = document.getElementById("loginTab");

// When the user clicks the button, open the modal 
signupButton.onclick = function () {
    modal.style.display = "block";
    signupForm.style.display = "block";
    loginTab.classList.add('unselected');
    signupTab.classList.remove('unselected');
}

// When the user clicks on <span> (x), close the modal
modalClose.onclick = function () {
    modal.style.display = "none";
    signupForm.style.display = "none";
    loginForm.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        signupForm.style.display = "none";
        loginForm.style.display = "none";
    }
}
// When the user clicks the button, open the modal 
loginButton.onclick = function () {
    modal.style.display = "block";
    loginForm.style.display = "block";
    signupTab.classList.add('unselected');
    loginTab.classList.remove('unselected');
}
// When the user clicks the tab, switch the form 
loginTab.onclick = function () {
    loginForm.style.display = "block";
    signupForm.style.display = "none";
    signupTab.classList.add('unselected');
    loginTab.classList.remove('unselected');
}
// When the user clicks the tab, switch the form
signupTab.onclick = function () {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
    signupTab.classList.remove('unselected');
    loginTab.classList.add('unselected');
}