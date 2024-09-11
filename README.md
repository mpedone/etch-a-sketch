# etch-a-sketch

Etch-a-Sketch project from The Odin Project Fundamentals course

## Next Steps

I need to adjust the way the squares are laid out, so that it can be a square.

I think the width of the container div should be set to a multiple of 16, as this will control how many columns will appear. Then, the stop condition of the for loop should be based on that, in that it should be the number of rows squared. Done and done. Had trouble getting this to work right with borders, then I remembered to change the page's box-sizing property to border-box. I had set a very light grey backround to see the squares with no border; having se the box-sizing, the squares can be shown with either the background-color or borders or both. I actually like it more without the borders.

## Reading Comprehension is Tough

So, I thought I was supposed to set up a grid of 16px x 16px squares, but I was actually supposed to create a 16x16 grid of squares that fill the space. The solution will be similar, but I will need to rework some things. Also, this highlights the dangers of coding before planning (a trap I fall into following projects like this - they've done the planning already, but I still need to make sure that I understand everything before starting).

Also, the hover should leave the "pixel" shaded in that color, which I think means I will have to use javascript rather than css to do that.

## Fixing the squares

I've reworked the javascript to set the boxes. I found a way to get the dimensions from the css file, modify them, and then pass the new files back. The box width/height (as they are the same) are just the containerWidth (obtained from the css) divided by the number of squares. I've left the for statement the same, meaning my grid will always be a square, but I think that could be changed relatively easily.

## Fixing the hover

Added code to the for loop for event listeners. I used "mouseenter" to handle the color change when the cursor passes over a square, but I didn't love that it is instantaneous, as it just leads to scribbles, so I used modifier keys to give the user some control. To "draw", hold down the shift key. To erase, hold down the alt/option key. I also added a click listener to give very fine control, but this actually doesn't work as well, I think because the mouseenter listener conflicts a little bit. I think you have to enter the "pixel", and then click for it to work. But, it does turn the "pixel" on AND off, so that's nice. This allowed me to remove the :hover css style.

## The grid size button

I added a button to allow the user to change the size of the grid. For it to work, I need the grid to refresh automatically, which means taking the code I've written and turning it into a function. It als means that the function needs to be called when the page first loads. I used DOMContentLoad at first: 

```javascript
let numberOfSquares = 16;
document.addEventListener("DOMContentLoaded", drawingArea(containerWidth));
```
And then realized that it wasn't really necessary, and that I could jsut call the drawingArea function directly. Next I will wire up the button to the function.
