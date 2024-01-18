let isFormValid = false;
let submittedEmail = '';

document.querySelector(`#newsletter-form`).addEventListener(`submit`, function(event) {

    event.preventDefault();

    if (isFormValid) {
        showAlert();
        document.querySelector(`.alert .submitted-email`).textContent = submittedEmail;
    }
});

// onFormSubmit = (event) => {
//     event.preventDefault();

//     if (isFormValid) {
//         showAlert();
//         document.querySelector(`.alert .submitted-email`).textContent = submittedEmail;
//     }
// }

emailValidation = (e) => {
    var re = /\S+@\S+\.\S+/;
    let elInputGroup = e.closest(`.input-group`);
    submittedEmail = e.value;

    if (!re.test(submittedEmail)) {
       if (!elInputGroup.classList.contains(`error`)) {
            elInputGroup.classList.add(`error`);
       }

       isFormValid = false;
    } else {
        if (elInputGroup.classList.contains(`error`)) {
            elInputGroup.classList.remove(`error`);
        }

        isFormValid = true;
    }
}

showAlert = () => {
    let elAlert = document.querySelector(`.alert-wrapper`);
    if (!elAlert.classList.contains(`shown`)) {
        elAlert.classList.add(`shown`);
        elAlert.classList.remove(`hidden`);
    }
}

hideAlert = () => {
    let elAlert = document.querySelector(`.alert-wrapper`);
    if (!elAlert.classList.contains(`hidden`)) {
        elAlert.classList.add(`hidden`);
        elAlert.classList.remove(`shown`);
    }
    resetForm();
}

resetForm = () => {
    submittedEmail = '';
    document.getElementById(`newsletter-form`).reset();
}