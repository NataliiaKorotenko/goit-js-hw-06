function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');

button.addEventListener('click', function() {
const body = document.querySelector('body');
const colorSpan = document.querySelector('.color');
const randomColor = getRandomHexColor();
body.style.backgroundColor = randomColor;
  colorSpan.innerHTML = randomColor;
});