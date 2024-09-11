# etch-a-sketch

Etch-a-Sketch project from The Odin Project Fundamentals course

## Laying Out The Grid

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

I added a button to allow the user to change the size of the grid. For it to work, I need the grid to refresh automatically, which means taking the code I've written and turning it into a function. It also means that the function needs to be called when the page first loads. I used DOMContentLoad at first:

```javascript
let numberOfSquares = 16;
document.addEventListener("DOMContentLoaded", drawingArea(numberOfSquares));
```

Then realized that it wasn't really necessary, and that I could just call the `drawingArea()` function directly. Next I will wire up the button to the function.

### Click to draw

I figured out the issue with clicking on a "pixel" - I'd had the code for that inside the listener for mouseenter. Once I separated them out into their own listener events, the clicking works WAY more smoothly.

### Resizing the grid

I added the button to trigger the prompt that allows the user to set the size of the grid. Next, I needed to find a way to clear the current grid and re-size it. I wrote the function `clearArea()` to remove all children of the container div. So, when the user enters a number and clicks ok/presses enter, that number is saved as `size`, `clearArea()` is called with the current size (`numberOfSquares`), then the new size is saved as `numberOfSquares`, and `drawingArea()` is called with `numberOfSquares`. This way, the current width of the drawing area is always saved in `numberOfSquares` and so whenever `clearArea()` is called, the correct values are passed in. I also added a button to just clear the area (it calls the clear and draw functions with the current width).

## Controlling the size

Next, I need to add some value-checking so that the user can't enter values less than 1 or greater than 100. I also want to have a condition for if the user cancels the prompt. All of these cause unwanted behaviors. At that point, I think the project will be done, and I can start tweaking it.
