const input = document.querySelector("#validation-input");

input.addEventListener('blur', onCheckingNumber);

function onCheckingNumber(event) {
    input.classList.remove("valid", "invalid");
    if (event.currentTarget.value.length === Number(input.getAttribute('data-length'))) {
        input.classList.add("valid");
    }
    else {
        input.classList.add("invalid");
    };
}