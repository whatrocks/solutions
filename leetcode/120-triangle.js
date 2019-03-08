/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  for (let rowIdx in triangle) {
    let row = triangle[rowIdx];
    for (let colIdx in row) {
      let currentVal = row[colIdx];
      let prevRowIdx = rowIdx - 1;
      if (prevRowIdx < 0) {
        break;
      }
      // leftColIdx
      let upLeftVal = colIdx - 1 > -1 ? triangle[prevRowIdx][colIdx - 1] : null;
      // rightIdx
      let upRightVal = triangle[prevRowIdx][colIdx]
        ? triangle[prevRowIdx][colIdx]
        : null;
      let currentSum = currentVal;
      if (upLeftVal === null) {
        currentSum += upRightVal;
      } else if (upRightVal === null) {
        currentSum += upLeftVal;
      } else {
        currentSum = Math.min(currentVal + upLeftVal, currentVal + upRightVal);
      }
      row[colIdx] = currentSum;
    }
  }
  return Math.min(...triangle[triangle.length - 1]);
};

console.log(minimumTotal([[7],[-5,9],[6,5,2],[-8,-2,-7,3],[-2,6,-6,-1,4]]));
