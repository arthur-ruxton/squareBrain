# Maze-Game

Building a simple game on top of a maze generated using the depth first search system.

# Adding-functionality

The start button now triggers a maze-generator. Once the maze has been generated you can use the four keys to navigate through it.
This button will dissapear after being pressed once.

The game has three levels, each with more cells than the last, when you reach the finish line you press enter to generate the next level.

There are 'specialCells'. The program removes all walls of any specialCell as well as any wall touching it.
This is done to increase the number of potential routes through the maze, adding a layer of complexity to the game ultimately.

There is a 'Finnish Line', it is always the last cell in the maze.