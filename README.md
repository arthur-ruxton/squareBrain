# General Assembly Software Engineering Immersive - Project 1
# [squareBrain()](arthur-ruxton.github.io/Maze-Game) :robot:
A maze game with three levels of complexity, which includes unique maze generation - achieved using an implementation / manipulation of the depth first search algorithm.

### Timeframe: 1 week
<details>
  <summary>Goals</summary>
  1. build a grid-based game using HTML, CSS and JavaScript. <br>
  2. Use CSS grid or for an added creative challenge, use HTML Canvas. <br>
  3. It can be a direct clone of, or inspired by, an existing game. <br>
  4. You should be able to win or lose and results should be displayed at the end.
</details>

<details>
 <summary>Overview :bulb:</summary>
  A labyrinth game with three levels of complexity, navigate through all three mazes to complete the game.
  <b>Collect golden nugs</b> to increase your score as you go, they’re rarer and more valuable on harder levels.
  Press start and an animated, randomised, <b>maze-generation</b> will begin, triggering a timer. <b>If time runs out</b>, it’s game over. 
  Closely observing the <b>animated path-finder algorithm</b> may help you solve the puzzle. 
  There are 'specialCells'. The program removes all walls of any specialCell as well as any wall touching it. This is done to ensure <b>multiple potential             routes</b> through each maze. 
</details>

<details>
  <summary>Tech :gear:</summary> 
    <h3>HTML - 8.1% :</h3>
    <ul>
      <li>div containing logo, start-button & time-bar. (should have been header in retrospect)</li>
      <li>div containing HTML canvas element, onto which the game is drawn with J.S logic.</li>
      <li>div containing end-game results - win / loss & score </li>
    </ul>
    <h3>CSS - 11.4% :</h3>
    <ul>
      <li>Positioning, fonts & colouring.</li>
      <li>Time bar which decreases as time runs out and turns red to warn you at 30% </li>
    </ul>
  <h3>JavaScript - 80.5% :</h3>
    <h4>App.js - controls game-play :</h4>
    <ul>
      <li>Controls the time element of the game.</li>
      <li>The spec for different levels of complexity.</li>
      <li>The Keyboard event listeners for player movement & level completion.</li>
      <li>Logic for collecting gold coins.</li>
      <li>Displaying the end-game results (involves clearing the canvas and removing event listeners.)</li>
    </ul>
    <h4>Maze-gen.js - controls maze generation :</h4>
    <ul>
      <li>Depth-first-search algorithm implementation.</li>
      <li>Animated drawing of a randomised maze every time it’s executed.</li>
      <li>
        Creates ‘special cells’ and removes all of their walls as it draws the cells - this logic ensures there are multiple potential routes through                       each maze.
      </li>
      <li>
        Creates ‘Value cells’ and draws gold coins into them, the size of the coin is based on the size of the cell which is determined by the number                       of rows and columns in the current grid - this varies depending on the level you are on.
      </li>
      <li>‘Current cell’ - this cell is highlighted which helps to visualise the process of the depth-first search and also represents the player.</li>
      <li>‘Finish Line’ - this cell is also highlighted with a different colour to indicate the finish line. </li>
    </ul>
</details>

<details>
  <summary>Approach :desktop_computer:</summary>
  <div>
    <h3>Beginning - planning :</h3>
    <p>
      From the get go I challenged myself to use HTML Canvas and JavaScript to generate a labyrinth based game. I broke down the plan into three main steps 1. maze       generation, 2. player movement & game-levels, 3. logic for scores, winning & losing. I aimed to spend roughly a third of the available time on each step,           allowing at least some time to style the project a bit at the end. 
    </p>
  </div>
  <div>
    <h3>Building features :</h3>
    <h4>Maze generation:</h4>
      <p>
        On the first night of the project, I stayed up until 3 am focussing on maze-generation processes in coding. It became clear that a depth first search               algorithm was an appropriate system. I took some time to understand what this algorithm was before finding a guide on implementing it in JavaScript. 
        A few challenges emerged at this point, I had my work cut out:
      </p>
      <p>
        1. The depth first search implementation only creates one single route through each maze. To make game play more interesting I would have to alter the                 system to remove extra cell walls - without breaking the algorithm. <em>This turned out to be difficult, the algorithm (and obviously the animation)                 ‘broke’ on multiple attempts. I was worried it wouldn’t be possible.</em> <br>
          Eventually, by defining ‘special cells’ and altering the algorithms instructions for drawing the maze onto the canvas, I was able to remove all walls of             some cells to create multiple routes through any maze generated. 
       </p>
      <p>
        2. I wanted three levels of complexity to the game - so I would have to re-trigger the process at a given moment (completion of a level) 
        The process would have to be different for each level (the maze should get more complex)
      </p>
      <p>
        3. To have a points system - I would have to introduce value cells into the algorithm so that as the maze was being drawn onto the canvas, ‘gold coins’             would be added into some cells. <br>
        There would have to be more value cells on levels with more rows and columns. Cells would be smaller on levels with more rows and columns, so the size               of the coins would have to be derived from the size of the cells containing them.
        <em>again this was much harder than expected, some of my attempts broke the algorithm and the animation of the maze-generation would stop half way                   through the process</em>
      </p>
      <p>Here's a code snippet in which I define 'special cells' - their walls are later removed in order to introduce multiple routes through mazes</p>
      <img src="https://user-images.githubusercontent.com/89402596/149627143-a7f87479-ca04-4dea-852f-c27c48e7e0b5.png" />
  </div>
  <div>
    <h4>Player movement & Game Levels:</h4>
    <p>
      This feature relies on keydown event-listeners and a switch statement that checks available movement options - for example if the ‘current cell’ has a right         wall set to ‘true’ and a bottom wall set to ‘false’, the player can move down into the neighbouring cell but cannot move right. This logic was actually             available as an extension to the depth first search implementation guide I found which was incredibly useful. <br>
      A keydown event listener and a callback function allows a user to generate the next level when they complete one. The parameters of each level are defined in       a switch statement. 
    </p>
    <p>A switch statement which defines the spec for different levels in the game - when ‘levelOne’ is completed, ‘levelTwo’ is generated. :</p>
    <img  src="https://user-images.githubusercontent.com/89402596/149627240-6e0a48bc-d809-4845-93b3-eafd7afd01c7.png" />
  </div>
  <div>
    <h4>Scores, winning & losing :</h4>
    <p>
      A function checks if the current cell is a value cell, if it is one, a callback function is executed which increases the total score using a number parameter,       the argument's value depends on the current level.
    </p>
    <p>
      I then set up a setTimeOut function which is triggered when the game begins, this function does a couple of things;
      <ul>
        <li>
          If less than 30% of the available time remains, it changes the time-bar-display colour from green to red as a visual indication that time is running out.
        </li>
         <li>
           If time runs out, it clears the canvas and displays the game-over screen and the players score.
        </li>
      </ul>
    </p>
    <p>
      If the player completes all three levels before the time-bar-display is empty, the game-complete screen is shown, along with the player’s score.
  </p>
  </div>
</details>

<details>
  <summary>Visuals</summary>
  <p>On page load:</p>
  <img src=https://user-images.githubusercontent.com/89402596/148796281-52e9e273-9dd9-4505-b7b9-66143d8ec623.png />
  
  <p>Maze generation taking place (tiggered when user presses play):</p>
  <img src=https://user-images.githubusercontent.com/89402596/148796755-e09a2dc9-b7bb-4618-8e6d-f58858ff2fcf.png />
  
  <p>Harder level:</p>
  <img src=https://user-images.githubusercontent.com/89402596/148796857-6a99c168-1eb3-41a5-beae-f466729b0a76.png />
  
  <p>Game over:</p>
  <img src=https://user-images.githubusercontent.com/89402596/148796975-4aa20c91-6fba-42b7-a07d-af526f1176da.png />
  
  <p>Game complete:</p>
  <img src=https://user-images.githubusercontent.com/89402596/148797082-ad5208c2-f15f-4179-93f5-6c2078aa3103.png />
</details>

<details>
  <summary>Key learnings :open_book:</summary>
  <p>
    Identified a relevant existing system for accomplishing a complex task - studied it while implementing it  - achieved a different goal by creatively adapting       the system. On this project it was the depth first search algorithm. <br>
    Using event Listeners to trigger logic conditionally. <br>
    Timeouts. <br>
    HTML Canvas. <br>
    Flexbox, highly useful and versatile. <br>
    General planning techniques for code based projects.
  </p>
</details>

<details>
  <summary>Challenges & Wins :chart_with_upwards_trend:</summary>
  <ul>
    <li>
      Time management - packing as many features in as possible but making sure they all work effectively, removing the ones I couldn’t polish before deadline.         </li>
    <li>
      Adapting an existing implementation of a complex algorithm without breaking it (Introducing extra layers of complexity)
      <ul>
        <li>Ensuring there are multiple routes through the maze instead of just one.</li>
        <li>The inclusion of ‘value cells’ which have coins in them</li>
        <li>
          Basing the size of the coins on the size of cells (which changes depending on the number of rows and columns on the level being played) and keeping the           coins centered within the cells.
        </li>
      </ul>
      <img src=https://user-images.githubusercontent.com/89402596/149155437-0e59a997-0b21-4291-8515-1b4e0c8e55e9.png />
    </li>
  </ul>
</details>

<details>
  <summary>Possible future improvements</summary>
  <p>
    Add a replay button and sound effects, randomise coin placement. <br>
    Include local storage to store high-score. <br>
    Introduce difficulty settings (reduce time limit). <br>
    Make code ‘DRY’ & make design responsive (screen-size compatibility & maybe even touch screen). <br>
    Translate into React.js - I’m certain this would present interesting challenges - (the maze generation in particular) 
  </p>
</details>

<details>
  <summary>Bugs</summary>
  <p>
    If time runs out part way through the maze generation process of the second or third level, the process continues but the game over screen is displayed too -       the game is not ended properly.
     I had to find work-arounds which were suboptimal in my opinion.  E.g. The value cells on each level are in fixed positions - when I randomised it, I broke the      maze-generation and never discovered why.
    You have to move through the square-brain maze collecting tokens (which are worth more on higher levels) - if you reach the finish line and press enter, a maze     of greater complexity will be generated. You have a time limit to complete three levels, if time runs out, you lose. There are always multiple routes through       every maze, which was a difficult effect to create but I did accomplish that in time for my presentation. 
  </p>
</details>
