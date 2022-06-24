function maxMin(k, arr) {
  arr.sort((a, b) => a - b)
  let min = arr[k - 1] - arr[0]
  for (let i = 1; i <= arr.length - k; i++) {
    let check = arr[k + i - 1] - arr[i]
    if (check < min) min = check
  }
  return min
}
