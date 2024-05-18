const colorButton = document.getElementById('colorButton');
const body = document.body;

const colors = ['#ff6347', '#ffa07a', '#ffff00', '#00ff00', '#00ffff', '#0000ff'];

let currentColorIndex = 0;

colorButton.addEventListener('click', function() {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    body.style.backgroundColor = colors[currentColorIndex];
});
