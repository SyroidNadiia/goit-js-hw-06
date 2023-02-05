function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('[type=number]');
const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('div#boxes');

btnCreateEl.addEventListener('click', createBoxes);
btnDestroyEl.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const listItems = [];
  
  amount = Number(inputEl.value);
  listItems.length = amount;
  listItems.fill("");

  listItems.map((newElement, index) => {
    listItems.forEach((el) => {
      newElement = document.createElement('div');
      newElement.style.width = 30 + index * 10 + 'px';
      newElement.style.height = 30 + index * 10 + 'px';
      newElement.style.backgroundColor = getRandomHexColor();
    });
    listItems.push(newElement);
  });

  return boxesEl.append(...listItems);
  };


function destroyBoxes() {
  boxesEl.innerHTML = "";
  inputEl.value = "";
};


