const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingridientsEL = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
  const itemOfIngridientsEL = document.createElement('li');
  itemOfIngridientsEL.classList.add('item');
  itemOfIngridientsEL.textContent = ingredient;
  return itemOfIngridientsEL;
})

ingridientsEL.append(...elements);