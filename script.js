let numberOfSquares = 16;

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
            // let randoColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
            // styles.cssRules[6].style["backgroundColor"] = randoColor;
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

function sizeValidation(old_size) {
    new_size = prompt("Enter a number for the size of the grid:");
    console.log(Number.isInteger(parseInt(new_size)));
    if (new_size === null || new_size === '') {
        return -1;
    } else if (new_size <= 0) {
        alert("Please enter a value greater than 0");
        return sizeValidation(old_size)
    } else if (new_size > 100) {
        alert("Maximum size of 100");
        return sizeValidation(old_size)
    } else if (!Number.isInteger(parseFloat(new_size))) {
        alert("Please enter a whole number");
        return sizeValidation(old_size)
    }else {
        return new_size;
    }
}

const grid_button = document.querySelector("#grid_size");
let size;
grid_button.addEventListener("click", () => {
    // size = prompt("Enter a number for the size of the grid:");
    size = sizeValidation(numberOfSquares);
    if (size !== -1){
        clearArea(numberOfSquares);
        numberOfSquares = size;
        drawingArea(numberOfSquares);
    }
})

const clear_grid_btn = document.querySelector("#clear_grid");
clear_grid_btn.addEventListener("click", () => {
    clearArea(numberOfSquares);
    drawingArea(numberOfSquares);
})