// Get the modal
var modal = document.getElementById('modal');

// Get the button that opens the modal
var btn = document.getElementById("signup");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Get the modal
var modalLogin = document.getElementById('modalLogin');

// Get the button that opens the modal
var btnLogin = document.getElementById("login");

// Get the <span> element that closes the modal
var spanLogin = document.getElementsByClassName("closeLogin")[0];

// When the user clicks the button, open the modal 
btnLogin.onclick = function () {
    modalLogin.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
spanLogin.onclick = function () {
    modalLogin.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modalLogin) {
        modalLogin.style.display = "none";
    }
}