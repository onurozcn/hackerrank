function birthday(s, d, m) {
  let count = 0
  let newArr = s

  for (let i = 0; i < s.length; i++) {
    let sum = newArr.slice(i, m + i).reduce((a, b) => a + b, 0)
    if (sum === d) count++
  }
  return count
}
