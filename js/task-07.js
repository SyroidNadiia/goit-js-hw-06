const input = document.querySelector("input#font-size-control");
const text = document.querySelector("span#text");

input.addEventListener('input', toChangeStyle);

function toChangeStyle(event) {
    const value = event.currentTarget.value;
    console.log(event.currentTarget.value);
    text.style.fontSize = `${value}px`;
}