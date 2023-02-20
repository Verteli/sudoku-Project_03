//Part 1

let puzzle = [
  [
    [8, 9, 5, 7, 4, 2, 1, 3, 6],
    [2, 7, 1, 9, 6, 3, 4, 8, 5],
    [4, 6, 3, 5, 8, 1, 7, 9, 2],

    [9, 3, 4, 6, 1, 7, 2, 5, 8],
    [5, 1, 7, 2, 3, 8, 9, 6, 4],
    [6, 8, 2, 4, 5, 9, 3, 7, 1],

    [1, 5, 9, 8, 7, 4, 6, 2, 3],
    [7, 4, 6, 3, 2, 5, 8, 1, 9],
    [3, 2, 8, 1, 9, 6, 5, 4, 7],
  ],
];

// getRow: This function should accept two arguments: a sudoku grid (represented by an array of arrays) and a row index.
// The function should return an array containing the numbers in the specified row.

function getRow(grid, rowIdx) {
  return grid[rowIdx];
}

// getColumn: This function should accept a sudoku grid and a column index.
//The function should return an array containing the numbers in the specified column.

function getColumn(grid, colIdx) {
  const column = [];
  for (let rowIdx = 0; rowIdx < grid.length; rowIdx++) {
    column.push(puzzle[rowIdx][colIdx]);
  }
  return column;
}

// getSection: This function should accept three arguments: a sudoku grid, and an x and y coordinate for one of the puzzle's 3x3 subgrids.
//The function should return an array with all the numbers in the specified subgrid.

function getSection(grid, x, y) {
  x *= 3;
  y *= 3;

  const section = [];
  for (let row = x; row < x + 3; row++) {
    for (let col = y; row < y + 3; col++) {
      section.push(grid[row][col]);
    }
  }
  return section;
}

// PART 2

// write a function that will accept a subsection and check that it includes the numbers 1-9 (with no repeats).
//Write a function includes1to9 that accomplishes this.

function includes1to9(section) {
  for (let i = 1; i <= section.length; i++) {
    if (!section.includes(i)) {
      return false;
    }
  }
  return true;
}

function sudokuIsValid(puzzle) {
  const sectionsToCheck = [];
  for (let i = 0; i < puzzle.length; i++) {
    const currentRow = getRow(puzzle, i);
    const currentCol = getColumn(puzzle, i);
    sectionsToCheck.push(currentRow);
    sectionsToCheck.push(currentCol);
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const currentSection = getSection(puzzle, i, j);
      sectionsToCheck.push(currentSection);
    }
  }
  for (let i = 0; i < sectionsToCheck.length; i++) {
    if (!includes1to9(sectionsToCheck[i])) {
      return false;
    }
  }
  return true;
}

console.log(sudokuIsValid(puzzle));
