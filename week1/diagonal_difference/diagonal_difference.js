function diagonalDifference(arr) {
  let topToBottom = 0;
  let bottomToTop = 0;
  let arrlength = arr.length;
  for (let i = 0; i < arrlength; i++) {
    topToBottom += arr[i][i];
    bottomToTop += arr[arrlength - 1 - i][i];
  }
  return Math.abs(topToBottom - bottomToTop);
}
