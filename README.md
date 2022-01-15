# General Assembly - Project 1
# squareBrain() :robot:

A maze game with three levels of complexity, which includes unique maze generation - achieved using an implementation / manipulation of the depth first search algorithm.

The live site: [squareBrain](arthur-ruxton.github.io/Maze-Game)

### Timeframe: 1 week.

## Goals
1. build a grid-based game using HTML, CSS and JavaScript.
2. Use CSS grid or for an added creative challenge, use HTML Canvas. 
3. It can be a direct clone of, or inspired by, an existing game. 
4. You should be able to win or lose and results should be displayed at the end.

## Overview
Press start and an animated, randomised, **maze-generation** will begin, triggering a timer. **If time runs out**, it’s game over. 

Closely observing the **animated path-finder algorithm** may help you solve the puzzle. 
**squareBrain() has three levels of complexity**. Navigate through all three mazes to complete the game.
**Collect golden nugs** to increase your score as you go, they’re rarer and more valuable on harder levels.
There are 'specialCells'. The program removes all walls of any specialCell as well as any wall touching it. This is done to ensure **multiple potential routes, through each maze**. 

## Tech

###HTML - 8.1% & CSS - 11.4 %

###JavaScript - 80.5% : <br>
App.js - controls game-play: <br>
The **time element** of the game, the spec for **different levels** of complexity, the Keyboard event listeners for **player movement & level completion**, logic for **collecting gold nugs** & **displaying the end-game results** ( which involves clearing the canvas and removing event listeners.) <br>
Maze-gen.js - controls maze generation : <br>
**Depth-first-search algorithm** implementation / **Animated maze generation (randomised).** <br>
Creates ‘special cells’ and removes all of their walls as it draws the cells - this logic ensures there are **multiple potential routes through each maze**.  <br>
Creates ‘Value cells’ and draws gold nugs into them, **the size of the nug is based on the size of the cell which is determined by the number of rows and columns in the current grid - this varies depending on the level you are on**. <br>
‘Current cell’ - this cell is highlighted which helps to visualise the process of the depth-first search and also **represents the player**.  <br>
‘Finish Line’ - this cell is also highlighted with a different colour to indicate the finish line. 

## Approach
### Beginning / planning : 
My understanding of CSS grid and HTML Canvas was weak. I knew I wanted to create a maze based game. After some research, the prevailing established system I found for randomly generating mazes was to implement a depth first search algorithm. I watched some videos in which people used different technologies to do so but none of them were relevant to my knowledge of JavaScript and the task at hand -- Eventually I came across a video in which a programmer translates a python3 implementation into a JavaScript implementation - I decided to follow along. It took me until 3am to understand and mimic this implementation correctly.

### Middle - bulk of the project :
Afew problems emerged at this point, I had my work cut out: <br>
The depth first search implementation only creates one single route through each maze. To make game play more interesting I would have to alter the system to remove extra cell walls, without breaking the algorithm. 
  *This turned out to be difficult, the algorithm (and obviously the animation) ‘broke’ on multiple attempts. I was worried it wouldn’t be possible.* <br>
I wanted three levels of complexity to the game - so I would have to re-trigger the process at a given moment (completion of a level) 
The process would have to be different for each level (the maze should get more complex)<br>
To have a points system - I would have to introduce value cells into the algorithm so that as the maze was being drawn onto the canvas, ‘gold coins’ would be added into some cells. <br>
There would have to be more value cells on levels with more rows and columns. Cells would be smaller on levels with more rows and columns, so the size of the coins would have to be derived from the size of the cells containing them. <br>
  *again this was much harder than expected, some of my attempts broke the algorithm and the animation of the maze-generation would stop half way through the process.* <br>
There should be a time element so that a player loses the game if they fail to complete all of the levels.

### End - polishing & testing :
Once I had ticked the boxes from step 2 there were other features I wanted to include; <br>
1. Sound - I succeeded in doing this before my presentation but failed to get that version pushed to GitHub in time.
2. Animated time bar to show the user how much they had left. 
3. Display results. 
4. Write some CSS that would make the whole thing look nicer. 

## Code snippets
###Within the depth first search algorithm -  defining ‘special cells’ which have no walls:
<img width="924" alt="Screenshot 2022-01-15 at 14 10 24" src="https://user-images.githubusercontent.com/89402596/149624687-61555d46-ce99-4c10-9c3d-24f8e7d541b0.png"> <br>
###A switch statement which defines the spec for different levels in the game - when ‘levelOne’ is completed, ‘levelTwo’ is generated:
<img src="https://user-images.githubusercontent.com/89402596/149624735-d8d06dd8-75b6-45be-883b-8d55dfbdd9ee.png"/>

## Web site visuals:
###On page load
<img src=https://user-images.githubusercontent.com/89402596/149624832-2f8d7e72-bc66-409e-a4f0-ba90126de779.png /> <br>
###Maze Generation process:
<img src=https://user-images.githubusercontent.com/89402596/149624896-caaeb462-45a6-4e0d-8b97-102ffde3f9a4.png /> <br>
###Higher level:
<img src=https://user-images.githubusercontent.com/89402596/149624916-253faf79-e2ef-44f0-a727-b0236b73ef27.png /> <br>
###End of game screens:
<img src=https://user-images.githubusercontent.com/89402596/149624987-43f9640e-604a-4c4a-be0f-8177e03927e2.png />
<img src=https://user-images.githubusercontent.com/89402596/149625006-f85d5220-6419-4481-8c25-2bdaae42098d.png />

## Key learnings:
* Identify a relevant existing system for accomplishing a complex task - study it as you implement it - achieve a different goal by creatively adapting the system.
* Depth first search algorithm.
* Event Listeners.
* Timeouts.
* HTML Canvas. 
* Flexbox.
* General planning techniques for code based projects.

## Challenges & wins:
* Time management - packing as many features in as possible but making sure they all work effectively, removing the ones I couldn’t polish before deadline. 
* Adapting an existing implementation of a complex algorithm without breaking it (Introducing extra layers of complexity)
-- Ensuring there are multiple routes through the maze instead of just one.
--  The inclusion of ‘value cells’ which have coins in them.
-- Basing the size of the coins on the size of cells (which changes depending on the number of rows and columns on the level being played) and keeping the coins centred within the cells.

## Possible future improvements:
Add a replay button and sound effects, randomise coin placement. <br>
Include local storage to store high-score <br>
Introduce difficulty settings (reduce time limit) <br>
Make code ‘DRY’ & make design responsive (screen-size compatibility & maybe even touch screen). <br>
Translate into React.js - I’m certain this would present interesting challenges - (the maze generation in particular) 

## Bugs
If time runs out part way through the maze generation process of the second or third level, the process continues but the game over screen is displayed too - the game is not ended properly. <br>
I had to find work-arounds which were suboptimal in my opinion.  E.g. The value cells on each level are in fixed positions - when I randomised it, I broke the maze-generation and never discovered why. 


