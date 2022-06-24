function gridChallenge(grid) {
  let newArr = grid.map((serial) => [...serial].sort())
  let col = newArr.length
  let row = newArr[0].length
  console.log(newArr)
  for (let i = 0; i < col - 1; i++) {
    for (let j = 0; j < row; j++) {
      if (newArr[i][j] > newArr[i + 1][j]) {
        return "NO"
      }
    }
  }
  return "YES"
  // console.log(newArr)
}
