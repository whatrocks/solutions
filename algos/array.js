const grid = new Array(4).fill(new Array(4).fill(0));

console.log(grid);

const mapped = grid.map(row=> row.map(item => 1));

console.log(mapped);
