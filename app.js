const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confPassword = document.getElementById("confPassword");

// Functions
function showFail(input, message) {
    // Displays an error message to the user based on the given parameter
    const formControl = input.parentElement;
    formControl.classList.add("fail");
    const small = formControl.querySelector("small");
    small.innerText = message;
}
function showSuccess(input) {
    // Displays an error message to the user based on the given parameter
    const formControl = input.parentElement;
    formControl.classList.remove("fail");
    formControl.classList.add("success");
}

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Event Listeners
form.addEventListener("submit", function(e) {
    e.preventDefault();
    if (username.value === "") {
        //TODO:
        showFail(username, "Username is requried")
    } else {
        showSuccess(username);
    }
    
    if (email.value === "") {
        //TODO:
        showFail(email, "Email is requried")
    } else if (!isValidEmail(email.value)) {
        showFail(email, "Please enter a valid email")
    }
    else {
        showSuccess(email);
    }

    if (password.value === "") {
        //TODO:
        showFail(password, "Password is requried")
    } else {
        showSuccess(password);
    }

    console.log(confPassword)

    if (confPassword.value === "") {
        //TODO:
        showFail(confPassword, "Password does not match")
    } else {
        showSuccess(confPassword);
    }
});