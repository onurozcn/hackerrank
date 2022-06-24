function dynamicArray(n, queries) {
  let lastAnswer = 0;
  let answers = [];
  let arr = []; //2 dimensional array
  for (let i = 0; i < n; i++) arr[i] = [];

  for (let i = 0; i < queries.length; i++) {
    let q = queries[i][0]
    let x = queries[i][1]
    let y = queries[i][2]
    let idx = (x ^ lastAnswer) % n
    if (q === 1) {
      arr[idx].push(y)
    } else if (q === 2) {
      lastAnswer = arr[idx][y % arr[idx].length]
      answers.push(lastAnswer)
    }
  }
  return answers
}
