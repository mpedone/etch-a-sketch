const container = document.querySelector(".container");
const styles = document.styleSheets[0];
let containerWidth = parseInt(document.styleSheets[0].cssRules[2].style["width"]);
let boxStyles = document.styleSheets[0].cssRules[3].style;

let numberOfSquares = 24;
let boxSize = containerWidth/numberOfSquares;
boxStyles['width'] = boxStyles['height'] = `${boxSize}px`;

for(let i=0; i<(numberOfSquares**2); i++) {
    const square = document.createElement("div");
    square.classList.toggle("square");
    container.appendChild(square);
}
