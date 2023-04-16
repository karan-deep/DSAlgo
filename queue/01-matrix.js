// Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

// The distance between two adjacent cells is 1.

// Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
// Output: [[0,0,0],[0,1,0],[0,0,0]]

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const updateMatrix = function (mat) {
  const result = [];
  for (let index = 0; index < mat.length; index++) {
    result.push(new Array(mat[index].length));
  }
  const zeroes = findAllZeroes(mat);
  for (let r = 0; r < mat.length; r++) {
    for (let c = 0; c < mat[r].length; c++) {
      if (mat[r][c] === 1) result[r][c] = findNearestZero(r, c, zeroes);
      else result[r][c] = 0;
    }
  }
  return result;
};

const findAllZeroes = function (mat) {
  const zeroes = [];
  for (let r = 0; r < mat.length; r++) {
    for (let c = 0; c < mat[r].length; c++) {
      if (mat[r][c] === 0) zeroes.push([r, c]);
    }
  }
  return zeroes;
};

const findNearestZero = function (currentRow, currentColumn, zeroes) {
  let distance = Infinity;
  for (const [r, c] of zeroes) {
    let tempDistance = Math.ceil(
      Math.sqrt(Math.pow(currentRow - r, 2) + Math.pow(currentColumn - c, 2))
    );
    if (tempDistance < distance) distance = tempDistance;
  }
  return distance;
};

console.log(updateMatrix([[0], [0], [0], [0], [0]]));

console.log(
  updateMatrix([
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
  ])
);
