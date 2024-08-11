
// You should implement your task here.

module.exports = function towelSort(matrix) {
  const newMatrix = []
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0)
      for (let j = 0; j < matrix[i].length; j++) {
        newMatrix.push(matrix[i][j])
      } else {
      matrix[i].reverse();
      for (let j = 0; j < matrix[i].length; j++) {
        newMatrix.push(matrix[i][j])
      }
    }
  }
  return newMatrix
}
