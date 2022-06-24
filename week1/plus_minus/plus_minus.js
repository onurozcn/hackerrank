function plusMinus(arr) {
  let positive = arr.filter((num) => num > 0).length
  let negative = arr.filter((num) => num < 0).length
  let zeros = arr.filter((num) => num === 0).length
  console.log((positive / arr.length).toFixed(6))
  console.log((negative / arr.length).toFixed(6))
  console.log((zeros / arr.length).toFixed(6))
}
