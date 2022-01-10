# General Assembly
# Project 1 - squareBrain() :robot:

A maze game with three levels of complexity, which includes unique maze generation - achieved using an implementation / manipulation of the depth first search algorithm.
arthur-ruxton.github.io/Maze-Game

<details>
  <summary>Aim</summary>
* In one week, build a grid-based game using HTML, CSS and JavaScript.
* Use CSS grid or for an added creative challenge, use HTML Canvas. 
* It can be a direct clone of, or inspired by, an existing game. 
* The game should include logic for losing and winning.
* The game result should be displayed.
</details>

<details>
# squareBrain() - Overview.
* Press start and an animated, somewhat randomized, __maze-generation__ will begin, triggering a timer. Closely observing the __animated path-finder algorithm__ may help you solve the puzzle. 
* __squareBrain() has three levels of complexity.__ Navigate through all three mazes to complete the game.
* __Collect golden nugs__ to increase your score as you go, they’re rarer and more valuable on harder levels.
* __If time runs out__, it’s game over. 
* There are 'specialCells'. The program removes all walls of any specialCell as well as any wall touching it. This is done to ensure __multiple potential__ routes, through each maze. 
</details>

<details>
# Tech
## HTML - 8.1% :
* div containing logo, start-button & time-bar. (should have been header in retrospect) 
* div containing HTML canvas element, onto which the game is drawn with J.S logic.
* div containing end-game results - win / loss & score 

## CSS - 11.4% :
* Positioning, fonts & colouring. 
* Time bar which decreases as time runs out and turns red to warn you at 30% 

## JavaScript - 80.5% :
### App.js - controls game-play :
* Controls the time element of the game. 
* The spec for different levels of complexity. 
* The Keyboard event listeners for player movement & level completion. 
* Logic for collecting gold coins. 
* Displaying the end-game results (involves clearing the canvas and removing event listeners.)
### Maze-gen.js - controls maze generation :
* Depth-first-search algorithm implementation.
* Animated drawing of a randomised maze every time it’s executed. 
* Creates ‘special cells’ and removes all of their walls as it draws the cells - this logic ensures there are multiple potential routes through each maze. 
* Creates ‘Value cells’ and draws gold coins into them, the size of the coin is based on the size of the cell which is determined by the number of rows and columns in the current grid - this varies depending on the level you are on.
* ‘Current cell’ - this cell is highlighted which helps to visualise the process of the depth-first search and also represents the player. 
* ‘Finish Line’ - this cell is also highlighted with a different colour to indicate the finish line. 
</details>

<details>
# Approach
## Beginning - planning :
My understanding of CSS grid and HTML Canvas was weak. I knew I wanted to create a maze based game. After some research, the prevailing established system I found for randomly generating mazes was to implement a depth first search algorithm. I watched some videos in which people used different technologies to do so but none of them were relevant to my knowledge of JavaScript and the task at hand. 
  Eventually I came across a video in which a programmer translates a python3 implementation into a JavaScript implementation - I decided to follow along. It took me until 3am to understand and write this implementation correctly.

## Middle - bulk of the project :
Afew problems emerged at this point, I had my work cut out: 
* The depth first search implementation only creates one single route through each maze. To make game play more interesting I would have to alter the system to remove extra cell walls - without breaking the algorithm . 
_This turned out to be difficult, the algorithm (and obviously the animation) broke on multiple attempts. I was worried it wouldn’t be possible._
* I wanted three levels of complexity to the game - so I would have to re-trigger the process at a given moment (completion of a level) 
The process would have to be different for each level (the maze should get more complex)
* To have a points system - I would have to introduce value cells into the algorithm so that as the maze was being drawn onto the canvas, ‘gold coins’ would be added into some cells.
    There would have to be more value cells on levels with more rows and columns. Cells would be smaller on levels with more rows and columns, so the size of the coins would have to be derived from the size of the cells containing them.
_again this was much harder than expected, some of my attempts broke the algorithm and the animation of the maze-generation would stop half way through the process_
* There should be a time element so that a player loses the game if they fail to complete all of the levels.

## End - polishing & testing :
Once I had ticked the boxes from step 2 there were other features I wanted to include;
* Sound - I succeeded in doing this before my presentation but failed to get that version pushed to github in time. 
* Animated time bar to show the user how much they had left. 
* Display results. 
* Write some css that would make the whole thing look nicer. 
</details>

<details>
# Visuals :
## on page load :
</details>

