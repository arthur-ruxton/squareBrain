// assigning the html canvas to a variable for access
// defining the drawing context of the canvas as two-dimentional
// generationComplete will only === true when backtracking is complete / this.stack is empty again.
let maze = document.querySelector(".canvas");
let context = maze.getContext("2d");
let generationComplete = false;

let currentCell;
 let specialCellOne;
 let specialCellTwo;
 let randRow = Math.floor(Math.random() * 3);
 let randCellInRow = Math.floor(Math.random() * 3)

//class for building the maze
class Maze {
  constructor(size, rows, columns) {
    this.size = size;
    this.columns = columns;
    this.rows = rows;
    this.grid = [];
    this.stack = [];
  }
// maze takes in size, rows and columns - setup loops through rows creating a cell instance for each column => pushes cells to grid array 
  setup() {
    for (let r = 0; r < this.rows; r++) {
      let row = [];
      for (let c = 0; c < this.columns; c++) {
        let cell = new Cell(r, c, this.grid, this.size);
        row.push(cell);
      }
      this.grid.push(row);
    }
    // where we start in the grid
    currentCell = this.grid[0][0];
     specialCellOne = this.grid[1][1];
     specialCellTwo = this.grid[randRow + 1][randCellInRow + 6];
  }

// this function will draw the grid in it's present state to the canvas
  draw() {
    maze.width = this.size;
    maze.height = this.size;
    maze.style.background = "black";
    // first cell has been visisted 
    currentCell.visited = true;
    // calling the show method on each cell in the 2d grid array 
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.columns; c++) {
        let grid = this.grid;
        grid[r][c].show(this.size, this.rows, this.columns);
      }
    }
// Selecting / highlighting a random unvisited neighbouring cell (now visited)
    let next = currentCell.checkNeighbours();
    if (next) {
      next.visited = true;
      // Add this cell to stack array for backtracking
      this.stack.push(currentCell);
      //highlight the current cell to illustrate what the algorithm is doing - columns is used to size the cell 
      currentCell.highlight(this.columns);
      // removeWalls compares the currentCell to the randomly chosen unvisited neighbour and removes relevant walls
      currentCell.removeWalls(currentCell, next);
      // we move into the randomly chosen unvisited neighbour and assign to currentCell to continue the process
      currentCell = next;
    // else if all cells have been visited start working backwords through the stack / maze highlighting as we go
    } else if (this.stack.length > 0) {
      let cell = this.stack.pop();
      currentCell = cell;
      currentCell.highlight(this.columns);
    }

    // if the stack has been emptied backtracking is complete, generationComplete = true => we can return from the draw function
    if (this.stack.length === 0) {
      generationComplete = true;
      return;
    }
    
    // recursively call the draw function until stack array is empty (backtracking complete / generation complete)
    window.requestAnimationFrame(() => {
      this.draw();
    });
  }
}

// class for building each cell within the maze
class Cell {
//rowNum and colNum are passed in to be used as coordinates for drawing process - useful when resizing the grid
  constructor(rowNum, colNum, parentGrid, parentSize) {
    this.rowNum = rowNum;
    this.colNum = colNum;
    this.visited = false;
    this.walls = {
      topWall: true,
      rightWall: true,
      bottomWall: true,
      leftWall: true,
    };
    // parentGrid is required in order to checkNeighbours 
    // parentSize is for defining scale
    this.parentGrid = parentGrid;
    this.parentSize = parentSize;
  }

  checkNeighbours() {
    let grid = this.parentGrid;
    let row = this.rowNum;
    let col = this.colNum;
    let neighbours = [];

    // these statements return undefined if we have reached the edge of the grid
    let topNeigbour = row !== 0 ? grid[row - 1][col] : undefined;
    let rightNeigbour = col !== grid.length - 1 ? grid[row][col + 1] : undefined;
    let bottomNeigbour = row !== grid.length - 1 ? grid[row + 1][col] : undefined;
    let leftNeigbour = col !== 0 ? grid[row][col - 1] : undefined;

    // these statements push unvisited neighbours to the neighbours array => so that a random neighbour can be selected
    if (topNeigbour && !topNeigbour.visited) neighbours.push(topNeigbour);
    if (rightNeigbour && !rightNeigbour.visited) neighbours.push(rightNeigbour);
    if (bottomNeigbour && !bottomNeigbour.visited) neighbours.push(bottomNeigbour);
    if (leftNeigbour && !leftNeigbour.visited) neighbours.push(leftNeigbour);

    // select a random unvisited neighbour from the neighbours array
    if (neighbours.length !== 0 && currentCell === specialCellOne) {
      specialCellOne.walls.topWall = false;
      specialCellOne.walls.rightWall = false;
      specialCellOne.walls.bottomWall = false;
      specialCellOne.walls.leftWall = false;
  
      topNeigbour.walls.bottomWall = false;
      rightNeigbour.walls.leftWall = false;
      bottomNeigbour.walls.topWall = false;
      leftNeigbour.walls.rightWall = false;
    } else if(neighbours.length !== 0 && currentCell === specialCellTwo){
      specialCellTwo.walls.topWall = false;
      specialCellTwo.walls.rightWall = false;
      specialCellTwo.walls.bottomWall = false;
      specialCellTwo.walls.leftWall = false;
  
      topNeigbour.walls.bottomWall = false;
      rightNeigbour.walls.leftWall = false;
      bottomNeigbour.walls.topWall = false;
      leftNeigbour.walls.rightWall = false;
    } else if (neighbours.length !== 0) {
    let random = Math.floor(Math.random() * neighbours.length);
    return neighbours[random];
  } else {
    return undefined;
  }
}

// the next 4 functions are called if the relevant walls are set to true in the cell constructor method 
  drawTopWall(x, y, size, columns, rows) {
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + size / columns, y);
    context.stroke();
  }

  drawRightWall(x, y, size, columns, rows) {
    context.beginPath();
    context.moveTo(x + size / columns, y);
    context.lineTo(x + size / columns, y + size / rows);
    context.stroke();
  }

  drawBottomWall(x, y, size, columns, rows) {
    context.beginPath();
    context.moveTo(x, y + size / rows);
    context.lineTo(x + size / columns, y + size / rows);
    context.stroke();
  }

  drawLeftWall(x, y, size, columns, rows) {
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x, y + size / rows);
    context.stroke();
  }

  // highlight the current cell using passed in columns argument to match scale
  // additions and subtractions size the highlighted area so as to avoid overlapping walls
  highlight(columns) {
    let x = (this.colNum * this.parentSize) / columns + 1;
    let y = (this.rowNum * this.parentSize) / columns + 1;
    context.fillStyle = "purple";
    context.fillRect(
      x,
      y,
      this.parentSize / columns - 3,
      this.parentSize / columns - 3
    );
  }

  // this wall remove all walls of
  // removeWallsOfSpecialCell(cell1){
  //   cell1.walls.leftWall = false;
  //   cell1.walls.rightWall = false;
  //   cell1.walls.rightWall = false;
  //   cell1.walls.leftWall = false;
  // }

  // in the cell class constructor => setting walls object properties to false depending on calculation below
  removeWalls(cell1, cell2) {
    // compare cells on the x axis (cerrent cell & randomly selected unvisited neighbouring cell)
    let x = cell1.colNum - cell2.colNum;
    if (x === 1) {
      cell1.walls.leftWall = false;
      cell2.walls.rightWall = false;
    } else if (x === -1) {
      cell1.walls.rightWall = false;
      cell2.walls.leftWall = false;
    }
   
    let y = cell1.rowNum - cell2.rowNum;

    // compare cells on the y axis (cerrent cell & randomly selected unvisited neighbouring cell)
    if (y === 1) {
      cell1.walls.topWall = false;
      cell2.walls.bottomWall = false;
    } else if (y === -1) {
      cell1.walls.bottomWall = false;
      cell2.walls.topWall = false;
    }
    
  }

  // when called this function draws the individual cell 
  show(size, rows, columns) {
    let x = (this.colNum * size) / columns;
    let y = (this.rowNum * size) / rows;
    context.strokeStyle = "white";
    context.fillStyle = "black";
    context.lineWidth = 2;
    if (this.walls.topWall) this.drawTopWall(x, y, size, columns, rows);
    if (this.walls.rightWall) this.drawRightWall(x, y, size, columns, rows);
    if (this.walls.bottomWall) this.drawBottomWall(x, y, size, columns, rows);
    if (this.walls.leftWall) this.drawLeftWall(x, y, size, columns, rows);
    if (this.visited) {
      context.fillRect(x + 1, y + 1, size / columns - 2, size / rows - 2);
    }
  }
}