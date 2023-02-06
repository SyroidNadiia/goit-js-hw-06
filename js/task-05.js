const input = document.querySelector("input#name-input");
const nameLabel = document.querySelector("span#name-output");

input.addEventListener('input', onInputChange)

function onInputChange(event) {
    const nameEnteed = event.currentTarget.value.trim();
    nameLabel.textContent = nameEnteed === "" ? 'Anonymous' : nameEnteed;
}