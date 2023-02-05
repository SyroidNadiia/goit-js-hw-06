const input = document.querySelector("input#name-input");
const nameLabel = document.querySelector("span#name-output");

input.addEventListener('input', onInputChange)

function onInputChange(event) {
    nameLabel.textContent = event.currentTarget.value;
}