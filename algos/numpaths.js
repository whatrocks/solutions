const numPathsDp = function (height, width) {
  const memo = Array.from(Array(height + 1)).map(() => Array.from(Array(width + 1)).map(() => 1));
  console.log(memo);
  for (let i = 1; i < memo.length; i++) {
    const row = memo[i];
    for (let j = 1; j < row.length; j++) {
      memo[i][j] = memo[i - 1][j] + memo[i][j -1]
    }
  }
  console.log(memo);
  return memo[height][width];
}

numPathsDp(10,10);
