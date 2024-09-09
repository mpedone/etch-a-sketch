const container = document.querySelector(".container");

let numberOfSquares = 60;
container.setAttribute("style", `width: ${numberOfSquares*16}px`);

for(let i=0; i<(numberOfSquares**2); i++) {
    const square = document.createElement("div");
    square.classList.toggle("square");
    container.appendChild(square);
}
