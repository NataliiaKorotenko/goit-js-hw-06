function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.getElementById("validation-input");

inputEl.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
        if (inputEl.classList.contains("valid") || inputEl.classList.contains("invalid")) {
            inputEl.classList.remove("valid", "invalid") 
            inputEl.classList.add("valid")
        }
            inputEl.classList.add("valid")

    } else {
        if (inputEl.classList.contains("valid") || inputEl.classList.contains("invalid")) {
            inputEl.classList.remove("valid", "invalid") 
            inputEl.classList.add("invalid")
        }
            inputEl.classList.add("invalid")
    }
});