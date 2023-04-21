const inputText = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
  const inputLength = inputText.value.length;
  const quantityLength = parseInt(inputText.dataset.length);

    if (inputLength === quantityLength) {
      inputText.classList.remove('invalid');
      inputText.classList.add('valid');
      } else {
        inputText.classList.remove('valid');
        inputText.classList.add('invalid');
    }
    });