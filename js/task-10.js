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
    const div = document.createElement('div');
    div.setAttribute('style', `
      background-color: ${getRandomHexColor()};
      width: ${30 + i * 10}px;
      height: ${30 + i * 10}px;
      margin-right: 10px;
      margin-bottom: 10px;
    `);
    boxesContainer.appendChild(div);
  }
}

const destroyBoxes = () => {
  boxesContainer.innerHTML = '';
};