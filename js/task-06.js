const input = document.querySelector("#validation-input");

input.addEventListener('blur', onCheckingNumber);

function onCheckingNumber(event) {
    if (event.currentTarget.value.length >= input.getAttribute('data-length')) {
        input.classList.add("valid");
    }
    else {
        input.classList.add("invalid");
    };
}