let numberOfSquares = 16;

drawingArea(numberOfSquares)

function drawingArea(columns) {
    const container = document.querySelector(".container");
    const styles = document.styleSheets[0];
    let containerWidth = parseInt(styles.cssRules[4].style["width"]);
    let boxStyles = document.styleSheets[0].cssRules[5].style;

    let boxSize = containerWidth/columns;
    boxStyles['width'] = boxStyles['height'] = `${boxSize}px`;

    for(let i=0; i<(columns**2); i++) {
        const square = document.createElement("div");
        square.classList.toggle("square");
        container.appendChild(square);
        square.addEventListener("mouseenter", (e) => {
            let keys = [];
            if (e.shiftKey) square.classList.add('purpleSquare');
            if (e.altKey) square.classList.remove('purpleSquare');
        square.addEventListener("click", () => {
            square.classList.toggle('purpleSquare');
        })
        });
    }
}
// const grid_button = document.querySelector("#grid_size");
// let size;
// grid_button.addEventListener("click", () => {
//     size = prompt("Enter a number for the size of the grid:");
//     console.log(size);
// })

// turn lines 1-22 into a function (take size as parameter)
// call this function on DOM load
// call this function when grid button clicked