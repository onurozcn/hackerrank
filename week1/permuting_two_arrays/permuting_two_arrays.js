function twoArrays(k, A, B) {
  A.sort((a, b) => a - b)
  B.sort((a, b) => b - a)
  let sum = 0
  for (let i = 0; i < A.length; i++) {
    sum = A[i] + B[i]

    if (sum < k) {
      return `NO`
    }
  }
  return `YES`
}
