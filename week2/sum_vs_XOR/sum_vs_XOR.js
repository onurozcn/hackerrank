function sumXor(n) {
  let bin = n.toString(2)
  let zero = 0
  for (let i = 0; i < bin.length; i++) {
    if (bin[i] == 0) zero++
    if (n === 0) zero = 0
  }
  return Math.pow(2, zero)
}
