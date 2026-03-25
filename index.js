const form = document.querySelector('#form');
const email = document.querySelector('#email');
const country = document.querySelector('#country');
const zip = document.querySelector('#zip');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const emailError = document.querySelector('#emailError');
const countryError = document.querySelector('#countryError');
const zipError = document.querySelector('#zipError');
const passwordError = document.querySelector('#passwordError');
const confirmPasswordError = document.querySelector('#confirmPasswordError');
email.addEventListener('blur', () => {
    email.classList.remove("hide");
    showEmailError();
});
email.addEventListener('input', () => {
    showEmailError();
});
function showEmailError() {
    emailError.classList.remove("show");
    email.setCustomValidity("");
    let message = "";
    if(email.validity.valueMissing) {
        message = "Email address is required";
        emailError.classList.add("show");
    }
    else if(email.validity.typeMismatch) {
        message = "Please enter a valid email address";
    }
    else {
        message = "";
        emailError.classList.remove("show");
    }
    
    email.setCustomValidity(message);
    emailError.textContent = message;
}
form.addEventListener('submit', (e) => {
    if(!email.checkValidity()) {
        showEmailError();
        e.preventDefault();
    }
});

zip.addEventListener('blur', () => {
    zip.classList.remove("hide");
    showZipError();
});
zip.addEventListener('input', () => {
    showZipError();
});
function showZipError() {
    zipError.classList.remove("show");
    zip.setCustomValidity("");
    let messsage = "";
    if(zip.validity.valueMissing) {
        message = "Zip Code is required";
        zipError.classList.add("show");
    }
    else if(zip.validity.patternMismatch) {
        message = "Please enter a valid Zip Code"
        zipError.classList.add("show");
    }
    else {
        message = "";
        zipError.classList.remove("show");
    }
    zip.setCustomValidity(message);
    zipError.textContent = message;
}