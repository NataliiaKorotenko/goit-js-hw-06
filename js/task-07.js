const fontSizeControl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');

function setFontSize() {
    const sizeControl = `${fontSizeControl.value}px`;
    textEl.style.fontSize = sizeControl;
  }

fontSizeControl.addEventListener('input', setFontSize); 

window.addEventListener('load', setFontSize);

