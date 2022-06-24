function getTotalX(a, b) {
  let result = 0
  let index = 1
  let newArrA = a.splice(1, a.length)
  while (a[0] * index <= b[0]) {
    if (
      newArrA.every((item) => (a[0] * index) % item === 0) &&
      b.every((item) => item % (a[0] * index) === 0)
    ) {
      result++
    }
    index++
  }
  return result
}
