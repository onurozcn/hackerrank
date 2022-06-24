function miniMaxSum(arr) {
  let total = arr.reduce((a, b) => a + b, 0);
  console.log(`${total - Math.max(...arr)} ${total - Math.min(...arr)}`);
}
