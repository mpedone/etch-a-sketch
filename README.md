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

### Controlling the size

Next, I need to add some value-checking so that the user can't enter values less than 1 or greater than 100. I also want to have a condition for if the user cancels the prompt. All of these cause unwanted behaviors. At that point, I think the project will be done, and I can start tweaking it.

Added a function `sizeValidation()` that is called when the user clicks the "Set Screen Size" button. I used a recursive function to check the value entered, and an if statement in the eventhandler, so that if the user cancels or doesn't enter a number, the grid doesn't clear. If the value is 0 or negative, the function alerts the user, then calls itself to prompt the user for a value. If the value is greater than 100, it alerts that the max is 100, and calls itself. Finally, if the value entered is not a whole number... This got interesting. The result of the prompt is a string, and that gets passed back into the rest of the script as such, but I needed to check that it was a whole number in string form. Now, `isNaN()` is a great built-in function that will check the contents of a string, but it doesn't care about number type (float, int, etc), so "Four" would be caught, but "4.2" would not. So, I turned to `Number.isInteger()`, but obviously that needs a number object, meaning I had to convert the input.  `parseInt()` effectively rounds the number down, returning just the integer portion, so that would always return true. `parseFloat()`, however, returns the full float representation. Additionally, even if the integer is entered in float notation for some reason (i.e. 4.0), and `parseFloat()` returns it with that trailing 0, `Number.isInteger(n.0)` still evaluates to true. So, I to convert the input to float, and then check if it's an integer. If not, alert the user and ask for a whole number.

## Extra Credit

Okay, so I am going to (try) to go off-book a bit here. The Odin Project suggests as "extra credit" two challenges:

1. Randomize the colors, so that each square is a different color.
2. Tweak the opacity, so that each colored square starts at a low opacity and gets 10% darker each time it is colored.

I think that I will try to implement both of these. However, I want to make them both optional. I supposed I should get them working first.

### Random Colors

I have an idea about this, but it involves changing how my code works, which, honestly, is probably a good idea. Right now, I have two classes for the squares. One is the default, the other has a background color applied. When the square is changed, the color class is toggled (so, added if it wasn't there, removed if it was). I'm not sure, but I think I might need to break the color changing code out from the drawingArea() function, which, now that I think about it, makes some sense, as that function should simply set the drawing area, and not handle the colors. From there, I can work on changing the colors of individual squares.

Getting it to work took a bit. Adding a class to the div caused ALL of the colored squares to change at the same time, which is kind of a cool effect, but not what we were going for. Turns out, I needed to just set the style in-line. I created a random color generating function, then called that each time a square was to be colored so that it would select a random color and apply it to the background-color attribute in-line.

### Opacity

I added two variables, counter and opacity, so that I could track how often a square has been interacted with. As I have draw and erase functionality, I also needed to evaluate which was being done. So, a draw event increments the counter by 1, an erase event decrements it by one. Opacity is the counter multiplied by 0.1. I also added a check so that the counter would never actually go above 10 or less than 0, so that if one were to darken a square more than 10 times, erasing it would set the opacity to the correct value (i.e. if one interacted with a square 16 times, the counter would be at 16; if one then tried to decrease the opacity, the code would set the opacity to 15*0.1 = 1.5 instead of 9*0.1 = 0.9). I left the click functionality as changing the square to a random color (at the current opacity), because I don't really care for either the random colors or the opacity change, and will be removing all of that the next time I work on this project.

## Next Steps

1. ~I would like to strip out the random colors as well as the opacity, and get back to a single color with the style toggle.~
2. I would like to allow the user to select a color for the drawing.
   * There are a few ways I could do this.
     1. drop-down with set selections
     2. Fields to enter RGB values (maybe sliders/color selection?)
     3. Text prompt asking for RGB (or even Hex) values
3. Graphics
   * A "case" around the screen, simulating a toy
   * knobs at the bottom, as in a real Etch-A-Sketch
   * Move the controls to the bottom of the case, in between the knobs
4. I would like to be able to use the buttons to move the drawing, giving it the feel of a real E-A-S
5. Save functionality?

### Progress

I removed the random color functionality, as well as the opacity. I will be linking to this from my personal website, and will continue to work through the "next steps" section.
