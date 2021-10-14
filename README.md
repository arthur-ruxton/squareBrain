# Maze-Game

Building a simple game on top of a maze generated using the depth first search system.

# Up to date description

The start button now triggers a maze-generator. Once the maze has been generated you can use the four keys to navigate through it.
This button will dissapear after being pressed once.

There are 'specialCells'. The program removes all walls of any specialCell as well as any wall touching it.
This is done to increase the number of potential routes through the maze, adding a layer of complexity to the game ultimately.

Some cells are valueCells, these contain gold coins which increase your score. They are more rare and more valuable as the levels get harder. 

The game has three levels, each more complex than the last, the finish line is always the last cell (in the bottom right hand corner).
Completing each level increases your score by more as the levels get more difficult to complete.
When you reach the finish line you can press enter to generate the next level.

There is bar above the maze which indicates how much time you have remaining - it turns red when it reaches 30%.
If time runs out before you complete level three it's game over. 

When the game ends, your result is displayed.