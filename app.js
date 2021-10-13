// initialize game
let newMaze;
// let complete = document.querySelector(".complete");
// start button triggers maze-gen functionality
startButton = document.querySelector(".start-button");
document.querySelector(".start-button").addEventListener('click', () => {
  generateGame();
  removeButton();
});
// DOM listens for keydown events, call playerMoves
document.addEventListener("keydown", playMoves);

function removeButton(){
  startButton.remove();
}

function generateGame() {
  newMaze = new Maze(800, 16, 16);
    newMaze.setup();
    newMaze.draw();
   }

function playMoves(e) {
//if generationComplete is false return.
  if (generationComplete === false) return;
// else keyPressed = the keydown event key
  let keyPressed = e.key;
// then locate the current position assign to variables for future manipulation
  let row = currentCell.rowNum;
  let col = currentCell.colNum;

// One case for each of the four arrow keys
  switch (keyPressed) {
    case "ArrowUp":
// check if relevant wall is false before allowing player to pass through
      if (currentCell.walls.topWall === false) {
// alter the position of currentCell and highlight only the relevant cell as player moves
        let next = newMaze.grid[row - 1][col];
        currentCell = next;
        newMaze.draw();
        currentCell.highlight(newMaze.columns);
      }
      break;

    case "ArrowRight":
// check if relevant wall is false before allowing player to pass through
      if (currentCell.walls.rightWall === false) {
// alter the position of currentCell and highlight only the relevant cell as player moves
        let next = newMaze.grid[row][col + 1];
        currentCell = next;
        newMaze.draw();
        currentCell.highlight(newMaze.columns);
      }
      break;

    case "ArrowDown":
// check if relevant wall is false before allowing player to pass through
      if (currentCell.walls.bottomWall === false) {
// alter the position of currentCell and highlight only the relevant cell as player moves
        let next = newMaze.grid[row + 1][col];
        currentCell = next;
        newMaze.draw();
        currentCell.highlight(newMaze.columns);
      }
      break;

    case "ArrowLeft":
// check if relevant wall is false before allowing player to pass through
      if (currentCell.walls.leftWall === false) {
// alter the position of currentCell and highlight only the relevant cell as player moves
        let next = newMaze.grid[row][col - 1];
        currentCell = next;
        newMaze.draw();
        currentCell.highlight(newMaze.columns);
      }
      break;
  }
}
