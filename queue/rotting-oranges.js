// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

// Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4

/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = function (grid) {
  let a = -1,
    b = -1,
    result = 0;
  outer: for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 2) {
        a = i;
        b = j;
        break outer;
      }
    }
  }
  result = makeRotten(a, b, result, grid);
  return findFresh(grid, result);
};

function findFresh(grid, result) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) return -1;
    }
  }
  return result;
}

function makeRotten(a, b, result, grid) {
  let rotten = false;
  //top
  if (grid[a - 1] && grid[a - 1][b] && grid[a - 1][b] === 1)
    (grid[a - 1][b] = 2),
      ((rotten = true), (result = makeRotten(a - 1, b, result, grid)));
  //right
  if (grid[a] && grid[a][b + 1] && grid[a][b + 1] === 1)
    (grid[a][b + 1] = 2),
      ((rotten = true), (result = makeRotten(a, b + 1, result, grid)));
  //bottom
  if (grid[a + 1] && grid[a + 1][b] && grid[a + 1][b] === 1)
    (grid[a + 1][b] = 2),
      ((rotten = true), (result = makeRotten(a + 1, b, result, grid)));
  //left
  if (grid[a] && grid[a][b - 1] && grid[a][b - 1] === 1)
    (grid[a][b - 1] = 2),
      ((rotten = true), (result = makeRotten(a, b - 1, result, grid)));
  if (rotten) result++;
  return result;
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRottingOptimized = function (grid) {
  const rows = grid.length,
    cols = grid[0].length,
    directions = [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1],
    ];
  let queueRotten = [],
    minute = 0,
    fresh = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) queueRotten.push([r, c]);
      else if (grid[r][c] === 1) fresh++;
    }
  }

  while (fresh && queueRotten.length) {
    const next = [];
    minute++;
    for (let [r, c] of queueRotten) {
      for (let i = 0; i < directions.length; i++) {
        const x = r + directions[i][0],
          y = c + directions[i][1];

        if (x < rows && x >= 0 && y < cols && y >= 0 && grid[x][y] === 1) {
          fresh--;
          grid[x][y] = 2;
          next.push([x, y]);
        }
      }
    }
    queueRotten = next;
  }
  return !fresh ? minute : -1;
};

console.log(
  orangesRottingOptimized([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 2],
  ])
);

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
);

console.log(
  orangesRotting([
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1],
  ])
);

console.log(
  orangesRottingOptimized([
    [2, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ])
);
