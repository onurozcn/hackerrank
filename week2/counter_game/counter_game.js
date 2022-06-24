function counterGame(n) {
  let winner = 0;
  while (n > 1) {
    winner++;
    n = isItPower(n) ? n / 2 : reduceToLower(n);
  }
  return winner % 2 ? "Louise" : "Richard";
}
function isItPower(n) {
  let num = 0
  for (let i = 0; num <= n; i++) {
    num = Math.pow(2, i)
    if (num === n) return true;
  }
  return false
}
function reduceToLower(n) {
  let count = 0
  while (Math.pow(2, count) <= n) {
    count++
  }
  return n - Math.pow(2, count - 1)
}
