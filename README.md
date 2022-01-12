# General Assembly - Project 1
# squareBrain() :robot:

A maze game with three levels of complexity, which includes unique maze generation - achieved using an implementation / manipulation of the depth first search algorithm.

The live site: [squareBrain](arthur-ruxton.github.io/Maze-Game)

<details>
  <summary>Aim</summary>
  <ul>
    <li>In one week, build a grid-based game using HTML, CSS and JavaScript.</li>
    <li>Use CSS grid or for an added creative challenge, use HTML Canvas.</li>
    <li>It can be a direct clone of, or inspired by, an existing game.</li>
    <li>The game should include logic for losing and winning.</li>
    <li>The game result should be displayed.</li>
  </ul>
</details>

<details>
 <summary>squareBrain() - Overview.</summary>
  <ul>
    <li>
      Press start and an animated, somewhat randomized, <em>maze-generation</em> will begin, triggering a timer. Closely observing the <em>animated path-finder algorithm</em> may help you solve the puzzle. 
    </li>
    <li>
      squareBrain() has <em>three levels of complexity.</em> Navigate through all three mazes to complete the game.
    </li>
    <li>
      <em>Collect golden nugs</em> to increase your score as you go, they’re rarer and more valuable on harder levels.
    </li>
    <li>
      <em>If time runs out</em>, it’s game over. 
    </li>
    <li>
      There are 'specialCells'. The program removes all walls of any specialCell as well as any wall touching it. This is done to ensure <em>multiple potential</em> routes, through each maze. 
    </li>
  </ul>
</details>

<details>
  <summary>Tech</summary>
    <ul>
      <li>
        <details>
          <summary>HTML - 8.1% :</summary>
          <ul>
            <li>div containing logo, start-button & time-bar. (should have been header in retrospect)</li>
            <li>div containing HTML canvas element, onto which the game is drawn with J.S logic.</li>
            <li>div containing end-game results - win / loss & score </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>CSS - 11.4% :</summary>
          <ul>
            <li>Positioning, fonts & colouring.</li>
            <li>Time bar which decreases as time runs out and turns red to warn you at 30% </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>JavaScript - 80.5% :</summary>
          <ul>
            <li>
               <details>
                  <summary>App.js - controls game-play :</summary>
                  <ul>
                    <li>Controls the time element of the game.</li>
                    <li>The spec for different levels of complexity.</li>
                    <li>The Keyboard event listeners for player movement & level completion.</li>
                    <li>Logic for collecting gold coins.</li>
                    <li>Displaying the end-game results (involves clearing the canvas and removing event listeners.)</li>
                  </ul>
                </details>
            </li>
            <li>
              <details>
                <summary>Maze-gen.js - controls maze generation :</summary>
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
            </li>
          </ul>
        </details>
      </li>
    </ul>
</details>

<details>
  <summary>Approach</summary>
  <ul>
    <li>
      <details>
        <summary>Beginning - planning :</summary>
        <p>
          My understanding of CSS grid and HTML Canvas was weak. I knew I wanted to create a maze based game. After some research, the prevailing established                 system I found for randomly generating mazes was to implement a depth first search algorithm. I watched some videos in which people used different                 technologies to do so but none of them were relevant to my knowledge of JavaScript and the task at hand. 
        </p>
        <p>
          Eventually I came across a video in which a programmer translates a python3 implementation into a JavaScript implementation - I decided to follow along.           It took me until 3am to understand and write this implementation correctly.
        </p>
      </details>
    </li>
    <li>
      <details>
        <summary>Middle - bulk of the project :</summary>
        <p>Afew problems emerged at this point, I had my work cut out:</p>
        <ul>
          <li>
            The depth first search implementation only creates one single route through each maze. To make game play more interesting I would have to alter the                 system to remove extra cell walls - without breaking the algorithm. <em>This turned out to be difficult, the algorithm (and obviously the animation)               broke on multiple attempts. I was worried it wouldn’t be possible.</em>
            <img src=https://user-images.githubusercontent.com/89402596/149155026-a620a5c4-c875-4d56-b45b-87035bf49d5a.png />
          </li>
          <li>
            I wanted three levels of complexity to the game - so I would have to re-trigger the process at a given moment (completion of a level) 
            The process would have to be different for each level (the maze should get more complex)
            <img src=https://user-images.githubusercontent.com/89402596/149156197-c8cd614f-3212-49e6-881c-7f64215d3b27.png />
          </li>
          <li>
            To have a points system - I would have to introduce value cells into the algorithm so that as the maze was being drawn onto the canvas, ‘gold coins’               would be added into some cells.
            There would have to be more value cells on levels with more rows and columns. Cells would be smaller on levels with more rows and columns, so the size             of the coins would have to be derived from the size of the cells containing them.
            <em>again this was much harder than expected, some of my attempts broke the algorithm and the animation of the maze-generation would stop half way                 through the process</em>
          </li>
          <li>
            There should be a time element so that a player loses the game if they fail to complete all of the levels.
          </li>
        </ul> 
      </details>
    </li>
    <li>
      <details>
        <summary>End - polishing & testing :</summary>
        <p>Once I had ticked the boxes from step 2 there were other features I wanted to include;</p>
        <ul>
          <li>Sound - I succeeded in doing this before my presentation but failed to get that version pushed to github in time.</li>
          <li>Animated time bar to show the user how much they had left.</li>
          <li>Display results.</li>
          <li>Write some css that would make the whole thing look nicer.</li>
        </ul>
      </details>
    </li>
  </ul> 
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
  <summary>Key learnings</summary>
  <ul>
    <li>
      Identify a relevant existing system for accomplishing a complex task - study it as you implement it - achieve a different goal by creatively adapting the           system.
    </li>
    <li>Depth first search algorithm.</li>
    <li>Event Listeners.</li>
    <li>Timeouts.</li>
    <li>HTML Canvas.</li>
    <li>Flexbox</li>
    <li>General planning techniques for code based projects</li>
  </ul>
</details>

<details>
  <summary>Challenges & Wins</summary>
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
  <ul>
    <li>Make code ‘DRY’</li>
    <li>Replay button</li>
    <li>Randomise coin placement</li>
    <li>Sound effects</li>
    <li>Responsive design (screen-size compatibility & maybe even touch screen)</li>
    <li>Local storage to store high-score</li>
    <li>Difficulty settings (reduce time limit)</li>
    <li>Translate into React.js - I’m certain this would present interesting challenges - (the maze generation in particular)</li>
  </ul>
</details>

<details>
  <summary>Bugs</summary>
  <p>
    If time runs out part way through the maze generation process of the second or third level, the process continues but the game over screen is displayed too -       the game is not ended properly.
  </p>
  <p>
     I had to find work-arounds which were suboptimal in my opinion.  E.g. The value cells on each level are in fixed positions - when I randomised it, I broke the      maze-generation and never discovered why.
  </p>
  <p>
    You have to move through the square-brain maze collecting tokens (which are worth more on higher levels) - if you reach the finish line and press enter, a maze     of greater complexity will be generated. You have a time limit to complete three levels, if time runs out, you lose. There are always multiple routes through       every maze, which was a difficult effect to create but I did accomplish that in time for my presentation. 
  </p>
</details>





