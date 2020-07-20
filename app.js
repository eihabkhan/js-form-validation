const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confPassword = document.getElementById("password confirmation");

// FUNCTIONS
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

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(input.value.trim()).toLowerCase())) {
        showSuccess(input);
    } else {
        showFail(input, "Email is not valid");
    }
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkRequired(inputs) {
    inputs.forEach(function(input){
        if (input.value.trim() === ""){
            showFail(input, `${getFieldName(input)} is required`)
        } else {
            showSuccess(input);
        }
    });
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showFail(input, `${getFieldName(input)} should be at least ${min} characters`);
    } else if(input.value.length > min) {
        showFail(input, `${getFieldName(input)} should be no more than ${max} characters long`);
    } else {
        showSuccess(input);
    }
}

function checkPasswordMatch(inputA,inputB) {
    if(inputA.value !== inputB.value) {
        showFail(inputB, "Passwords don't match")
    } else {
        showSuccess(inputA)
        showSuccess(inputB)
    }
}


// EVENT LISTENERS
form.addEventListener("submit", function(e) {
    e.preventDefault();
    checkRequired([username, email, password, confPassword]);
    checkLength(username, 3, 15);
    checkLength(password, 8, 25);
    checkEmail(email)
    checkPasswordMatch(password, confPassword)
});