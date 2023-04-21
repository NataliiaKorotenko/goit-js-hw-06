const fontSizeControl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');
fontSizeControl.addEventListener('input', function() {
    const sizeControl = `${fontSizeControl.value}px`;

textEl.style.fontSize = sizeControl;
});
