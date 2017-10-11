let emailInput =
    document.getElementById("inputEmail");

emailInput.onfocus = function () {
    emailInput.placeholder = "username@gmail.com"
}

emailInput.onblur = function () {
    emailInput.placeholder = "Email"
}
//
let inputFullName =
    document.getElementById("inputFullName");

inputFullName.onfocus = function () {
    inputFullName.placeholder = "Dimitar Todorov Stoyanov"
}

inputFullName.onblur = function () {
    inputFullName.placeholder = "Full Name"
}
//
let inputPassword =
    document.getElementById("inputPassword");

inputPassword.onfocus = function () {
    inputPassword.placeholder = "Must be at least 8 symbols"
}

inputPassword.onblur = function () {
    inputPassword.placeholder = "Password"
}


