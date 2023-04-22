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

  if (isNaN(amount) || amount < 1 || amount > 100) {
    alert('Введіть коректне число від 1 до 100');
    return;
  }

  boxesContainer.textContent = '';

  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    div.style.marginRight = '10px';
    div.style.marginBottom = '10px';
    boxesContainer.appendChild(div);
  }
}

const destroyBoxes = () => {

  boxesContainer.textContent = '';
};