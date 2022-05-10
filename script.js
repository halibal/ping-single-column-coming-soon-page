const inputEmail = document.getElementById('inputEmail');
const warningText = document.querySelector('.warningText');
const inputAndButton = document.querySelector('.inputAndButton');
const btn = document.getElementById('btn');
const validMailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

inputEmail.addEventListener('input', validateEmail);

let validation = false

function validateEmail() {

    if (!inputEmail.value === '' || inputEmail.value.match(validMailFormat)) {
        inputEmail.style.borderColor = "var(--clr-pblue)";
        warningText.style.display = "none"
        validation = true;
        return validation;
    } else {
        inputEmail.style.borderColor = "var(--clr-lred)";
        warningText.style.display = "initial"
        validation = false;
        return validation;
    }
}

btn.addEventListener('click', sendEmail);

function sendEmail() {
    validateEmail()
    if (validation === true) {
        alert (`You've sucessfully subscribed to get notified!`)
        inputEmail.value = '';;
    } else {
        return validation;
    }
}