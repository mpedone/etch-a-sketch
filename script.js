const container = document.querySelector(".container");

for(let i=0; i<2500; i++) {
    const square = document.createElement("div");
    square.classList.toggle("square");
    container.appendChild(square);
}
