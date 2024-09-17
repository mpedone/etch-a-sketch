let numberOfSquares = 16;

drawingArea(numberOfSquares)

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
    }
    colorSquare();
};

function clearArea(size) {
    const container = document.querySelector(".container");
    for(let i=0; i<(size**2); i++){
        container.removeChild(container.firstElementChild);
    };
};

function sizeValidation(old_size) {
    new_size = prompt("Enter a number for the size of the grid:", "1");
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
    };
};

function randomNumber() {
    return Math.floor(Math.random() * 255)
}

function randomColor() {
    return `rgb(${randomNumber()}, 
                ${randomNumber()}, 
                ${randomNumber()})`
};

function colorSquare(){
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        let counter = 0;
        let opacity = 1.0;
        square.addEventListener("mouseenter", (e) => {
            // if (e.shiftKey) square.style.backgroundColor = randomColor();
            if (e.shiftKey) {
                if (counter <= 10) {
                    ++counter;
                    opacity = 0.1 * counter;
                }
                if (opacity > 1.0) {
                    counter = 10;
                    square.style.backgroundColor = randomColor();
                } else {
                    square.style.cssText = 
                    `background-color: ${randomColor()}; 
                    opacity: ${opacity};`;
                }
            }
            if (e.altKey) {
                if (counter > 0){
                    --counter;
                    opacity = 0.1 * counter;
                }
                square.style.opacity = opacity;
            }
        });
        square.addEventListener("click", () => {
            square.style.backgroundColor = randomColor();
        });
    });
};

const grid_button = document.querySelector("#grid_size");
let size;
grid_button.addEventListener("click", () => {
    size = sizeValidation(numberOfSquares);
    if (size !== -1){
        clearArea(numberOfSquares);
        numberOfSquares = size;
        drawingArea(numberOfSquares);
    };
});

const clear_grid_btn = document.querySelector("#clear_grid");
clear_grid_btn.addEventListener("click", () => {
    clearArea(numberOfSquares);
    drawingArea(numberOfSquares);
});