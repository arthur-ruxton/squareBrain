/////////////////// - init game////////////////////

let newMaze;

// this will be true if the final level is completed and will clear the timer interval
let complete = false;
// score display
let score = 0;
let scoreDisplay = document.querySelector(".score-span");
scoreDisplay.innerText = score;
// time display
let timeBar = document.querySelector('.progress-value');
let timeBarVal = 480;
timeBar.style.width = `${timeBarVal}px`;

// end of game display set in game-over and game-complete functions
let endGameDisplay = document.querySelector('.end-game');
let endGameResult = document.querySelector('.end-game-result');
let endGameMessage = document.querySelector('.end-game-message');
let endGameScore = document.querySelector('.end-game-score');
let totalGameDiv = document.querySelector('.total-game-div');
/////////////////// start button ////////////////////
startButton = document.querySelector(".start-button");
document.querySelector(".start-button").addEventListener('click', () => {
  generateGame(800, 16, 16, 'levelOne', false);
  newMaze.valueCellmakerOne();
  removeButton();
  startTimer();
});

// removing start button 
function removeButton(){
  startButton.remove();
}
  
/////////////////// time limit ///////////////////
 function startTimer(){
  let time = 240;

   let timer = setInterval(() => {
     time--;
     timeBarVal -= 2;
     timeBar.style.width = `${timeBarVal}px`;
     if(time < 80){
      timeBar.style.backgroundColor = "#a15b43"
     }
     if(time === 0){
       clearInterval(timer);
       endGame("OVER", "#a15b43");
     } else if(complete === true){
      clearInterval(timer);
     }
   }, 1000);
 }

/////////////////// generate levels & add points ////////////////////

function generateGame(size, rows, columns, level) {
  newMaze  = new Maze(size, rows, columns, level);
  newMaze.setup();
  newMaze.draw();
  document.addEventListener("keydown", grabCoin);
  document.addEventListener("keydown", playerMoves);
  document.addEventListener("keydown", completeLevel);
 }

 // add and display points
function addPoints(points){
  score += points;
  scoreDisplay.innerText = score;
}

// grab coins on different levels
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
///////// - player movement & level completion logic ////////////////

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
        addPoints(70);
      }
      break;
    case "levelThree":
      if(currentCell.finishline && finishKey === "Enter"){
        complete = true;
        addPoints(90);
        scoreDisplay.innerText = score;
        endGame("COMPLETE", "#43a159");
      }
      break;  
    }
}

/////////////////////// finish game ////////////////////////

function endGame(outcome, color){
  clearCanvas();
  endGameDisplay.style.backgroundColor = color
  endGameResult.textContent = `GAME ${outcome}!`;
  endGameMessage.textContent = 'SCORE:';
  endGameScore.textContent = score;
  totalGameDiv.style.backgroundColor = "#9dd154";
}

function clearCanvas(){
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  document.removeEventListener("keydown", playerMoves);
  document.removeEventListener("keydown", completeLevel);
}
