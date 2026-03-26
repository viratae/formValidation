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
        emailError.classList.add("show");
    }
    else {
        message = "";
        emailError.classList.remove("show");
    }
    
    email.setCustomValidity(message);
    emailError.textContent = message;
}

zip.addEventListener('input', () => {
    showZipError();
});
function showZipError() {
    zipError.classList.remove("show");
    zip.setCustomValidity("");
    let message = "";
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
country.addEventListener('input', () => {
    showCountryError();
});
function showCountryError() {
    countryError.classList.remove("show");
    country.setCustomValidity("");
    let message = "";
    if(country.validity.valueMissing) {
        message = "Country is required";
        countryError.classList.add("show");
    }
    else if(country.validity.patternMismatch || country.validity.tooShort) {
        message = "Please enter a valid country"
        countryError.classList.add("show");
    }
    else {
        message = "";
        countryError.classList.remove("show");
    }
    country.setCustomValidity(message);
    countryError.textContent = message;
}
password.addEventListener('input', () => {
    showPasswordError();
});
function showPasswordError() {
    passwordError.classList.remove("show");
    password.setCustomValidity("");
    let message = "";
    if(password.validity.valueMissing) {
        message = "Password is required"
        passwordError.classList.add("show");
    }
    else if(password.validity.tooShort) {
        message = "Passwords must be at least 5 characters";
        passwordError.classList.add("show");
    }
    else if(password.validity.tooLong) {
        message = "Passwords must be 16 characters or less";
        passwordError.classList.add("show");
    }
    else if(password.validity.patternMismatch) {
        message = "Passwords must have at least 1 capital letter, 1 lowercase letter, 1 number, and 1 special character";
        passwordError.classList.add("show");
    }
    else {
        message = "";
        passwordError.classList.remove("show");
    }
    password.setCustomValidity(message);
    passwordError.textContent = message;
}
confirmPassword.addEventListener('input', () => {
    showConfirmPasswordError();
});
function showConfirmPasswordError() {
    confirmPasswordError.classList.remove("show");
    confirmPassword.setCustomValidity("");
    let message = "";
    if(confirmPassword.validity.valueMissing) {
        message = "You must confirm your password";
        confirmPasswordError.classList.add("show");
    }
    else if(confirmPassword.value !== password.value) {
        message = "Passwords must match";
        confirmPasswordError.classList.add("show");
    }
    else {
        message = "";
        confirmPassword.classList.remove("show");
    }
    confirmPassword.setCustomValidity(message);
    confirmPasswordError.textContent = message;
}
form.addEventListener('submit', (e) => {
    if(!email.checkValidity()) {
        showEmailError();
        e.preventDefault();
    }
    if(!zip.checkValidity()) {
        showZipError();
        e.preventDefault();
    }
    if(!country.checkValidity()) {
        showCountryError();
        e.preventDefault();
    }
    if(!password.checkValidity()) {
        showPasswordError();
        e.preventDefault();
    }
    if(!confirmPassword.checkValidity()) {
        showConfirmPasswordError();
        e.preventDefault();
    }
    if(email.checkValidity() && zip.checkValidity() && country.checkValidity() && password.checkValidity() && confirmPassword.checkValidity()) {
        const modalContent = document.querySelector('.modalContent');
        modalContent.style.backgroundColor = "#9ec48c";
        e.preventDefault();
    }
});