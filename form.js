const textarea = document.getElementById('request');

const formErrors = [];

textarea.addEventListener('input', function () {
    const maxLength = parseInt(textarea.getAttribute('maxlength'));
    const currentLength = textarea.value.length;

    const infoMessage = document.querySelector('#request + .info-message');

    if (currentLength >= maxLength * 0.75 && currentLength < maxLength) {
        infoMessage.textContent = `You have ${maxLength - currentLength} characters remaining (warning)`;
        infoMessage.style.color = 'orange'; 
    } else if (currentLength >= maxLength) {
        infoMessage.textContent = `You have reached the character limit (${maxLength} characters)`;
        infoMessage.style.color = 'red'; 
    } else {
        infoMessage.textContent = `You have ${maxLength - currentLength} characters remaining`;
        infoMessage.style.color = ''; 
    }
});

function updateFormErrorsField() {
    const formErrorsField = document.getElementById('form-errors');
    formErrorsField.value = JSON.stringify(formErrors);
}

function addErrorToFormErrors(field) {
    const fieldName = field.id || field.name;
    const errorData = {
        field: fieldName,
        error: 'Illegal character entered!'
    };
    formErrors.push(errorData);
    updateFormErrorsField();
}

function handleInput(event) {
    const field = event.target;
    const pattern = new RegExp(field.getAttribute('pattern'));

    if (pattern.test(field.value)) {
        field.classList.remove('error-state-field'); 
        hideErrorMessage(field); 
    } else {
        field.classList.add('error-state-field'); 
        showErrorMessage(field); 
        addErrorToFormErrors(field); 
        setTimeout(() => hideErrorMessage(field), 3000); 
    }
}

function showErrorMessage(field) {
    const errorMessage = field.parentElement.querySelector('.error-message');
    errorMessage.textContent = 'Illegal character entered!';
    errorMessage.style.opacity = '1';
}

function hideErrorMessage(field) {
    const errorMessage = field.parentElement.querySelector('.error-message');
    errorMessage.style.opacity = '0';
}

const textInputs = document.querySelectorAll('input[type="text"], input[type="email"], textarea');

textInputs.forEach(input => {
    input.addEventListener('input', handleInput);
});