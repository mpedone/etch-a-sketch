let numberOfSquares = 24;

drawingArea(numberOfSquares)
// document.addEventListener("DOMContentLoaded", drawingArea(numberOfSquares));

function drawingArea(columns) {
    const container = document.querySelector(".container");
    const styles = document.styleSheets[0];
    let containerWidth = parseInt(styles.cssRules[4].style["width"]);
    let boxStyles = styles.cssRules[5].style;

    let boxSize = containerWidth/columns;
    boxStyles['width'] = boxStyles['height'] = `${boxSize}px`;

    for(let i=0; i<(columns**2); i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
        square.addEventListener("mouseenter", (e) => {
            let keys = [];
            if (e.shiftKey) square.classList.add('purpleSquare');
            if (e.altKey) square.classList.remove('purpleSquare');
        });
        square.addEventListener("click", () => {
            square.classList.toggle('purpleSquare');
        });
    }
}

function clearArea(size) {
    const container = document.querySelector(".container");
    for(let i=0; i<(size**2); i++){
        container.removeChild(container.firstElementChild);
    }
}

const grid_button = document.querySelector("#grid_size");
let size;
grid_button.addEventListener("click", () => {
    size = prompt("Enter a number for the size of the grid:");
    clearArea(numberOfSquares);
    numberOfSquares = size;
    drawingArea(numberOfSquares);
})

const clear_grid_btn = document.querySelector("#clear_grid");
clear_grid_btn.addEventListener("click", () => {
    clearArea(numberOfSquares);
    drawingArea(numberOfSquares);
})