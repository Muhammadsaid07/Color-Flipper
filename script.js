const body = document.body;

function setColor(color) {
    body.style.background = color; // Overwrites the gradient with a solid color
}

function randomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${red}, ${green}, ${blue})`;

    body.style.background = randomColor; // Applies random solid color
}
