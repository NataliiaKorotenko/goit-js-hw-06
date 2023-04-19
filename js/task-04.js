let counterValue = 0;
const counterSpan = document.getElementById('value');
const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');

btnDecrement.addEventListener('click', () => {
    counterValue -= 1;
    counterSpan.textContent = counterValue;
});

btnIncrement.addEventListener('click', () => {
    counterValue += 1;
    counterSpan.textContent = counterValue;
});

