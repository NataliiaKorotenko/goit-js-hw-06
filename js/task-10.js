function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputAmount = document.getElementById('inputAmount');
const btnCreate = document.getElementById('btnCreate');
const btnDestroy = document.getElementById('btnDestroy');
const boxesContainer = document.getElementById('boxes');

btnCreate.addEventListener('click', () => createBoxes(inputAmount.value));
btnDestroy.addEventListener('click', destroyBoxes);

const createBoxes = (amount) => {
  for (let i = 0; i < amount; i++) {
    const { style } = boxesContainer.appendChild(document.createElement('div'));
    style.backgroundColor = getRandomHexColor();
    style.width = `${30 + i * 10}px`;
    style.height = `${30 + i * 10}px`;
    style.marginRight = '10px';
    style.marginBottom = '10px';
  }
}

const destroyBoxes = () => {
  boxesContainer.innerHTML = '';
};