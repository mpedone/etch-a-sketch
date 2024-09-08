const container = document.querySelector(".container");

let docFrag = document.createDocumentFragment();

for(let i = 0; i < 16; i++) {
    const square = document.createElement("div");
    square.classList.toggle("square");
    docFrag.appendChild(square);
} 

container.appendChild(docFrag); 