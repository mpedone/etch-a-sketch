# etch-a-sketch

Etch-a-Sketch project from The Odin Project Fundamentals course

## Next Steps

I need to adjust the way the squares are laid out, so that it can be a square.

I think the width of the container div should be set to a multiple of 16, as this will control how many columns will appear. Then, the stop condition of the for loop should be based on that, in that it should be the number of rows squared. Done and done. Had trouble getting this to work right with borders, then I remembered to change the page's box-sizing property to border-box. I had set a very light grey backround to see the squares with no border; having se the box-sizing, the squares can be shown with either the background-color or borders or both. I actually like it more without the borders.
