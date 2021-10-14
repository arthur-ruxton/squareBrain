/////////////////// - init game - add points ////////////////////

let newMaze;
let score = 0;
let scoreDisplay = document.querySelector(".score-span");
startButton = document.querySelector(".start-button");
document.querySelector(".start-button").addEventListener('click', () => {
  generateGame(800, 16, 16, 'levelOne');
  newMaze.valueCellmakerOne();
  removeButton();
});
document.addEventListener("keydown", playerMoves);
document.addEventListener("keydown", completeLevel);

// removing the start button 
function removeButton(){
  startButton.remove();
}

// when called this function will
function addPoints(points){
  score += points;
  scoreDisplay.innerText = score;
}

// this allows you to generate different levels 
function generateGame(size, rows, columns, level) {
  newMaze  = new Maze(size, rows, columns, level);
  newMaze.setup();
  newMaze.draw();
  document.addEventListener("keydown", grabCoin);
 }

/////////////////// - player movement & level completion logic /////////////////////////////

function playerMoves(e) {
//if generationComplete is false return
  if (!generationComplete) return;
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
// check if relevant wall is false before allowing player to pass through
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

// logic for generating next level
function completeLevel(e){
  let finishKey = e.key;
  let level = newMaze.level;

  switch(level){
    case "levelOne":
      if(currentCell.finishline && finishKey === "Enter"){
        generateGame(800, 20, 20, "levelTwo");
        newMaze.valueCellmakerTwo();
        addPoints(50);
      }
      break;
    case "levelTwo":
      if(currentCell.finishline && finishKey === "Enter"){
        generateGame(800, 25, 25, "levelThree");
        newMaze.valueCellmakerThree();
        addPoints(100);
      }
      break;
    case "levelThree":
      if(currentCell.finishline && finishKey === "Enter"){
        addPoints(150);
        scoreDisplay.innerText = score;
        complete()
      }
      break;  
    }
}

function grabCoin(e){
  let finishKey = e.key;
  let level = newMaze.level;

  switch(level){
    case "levelOne":
      if(currentCell.valueCell){
        addPoints(10);
        currentCell.valueCell = false;
      }
      break;
     case "levelTwo":
       if(currentCell.valueCell){
        addPoints(15);
        currentCell.valueCell = false;
       }
       break;
     case "levelThree":
       if(currentCell.valueCell){
        addPoints(20);
        currentCell.valueCell = false;
     }
  }
}

function complete(){
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  maze.style.background = "none";
  gameDiv.style.display = "none";
}

