function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const span = document.querySelector("span.color");
const button = document.querySelector("button.change-color");

button.addEventListener('click', toDeriveColor);

function toDeriveColor() {
  document.body.style.color = getRandomHexColor();
  span.textContent = document.body.style.color;
}
