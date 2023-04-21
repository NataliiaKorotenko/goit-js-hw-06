const input = document.querySelector('validation-input');

input.addEventListener('blur', () => {
  const inputLength = input.value.length;
  const quantityLength = parseInt(input.dataset.length);

    if (inputLength === quantityLength) {
        input.classList.remove('invalid');
        input.classList.add('valid');
      } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
    });