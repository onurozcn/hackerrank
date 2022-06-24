function pageCount(n, p) {
  var fromStart = Math.floor(p / 2)
//   console.log("fromStart : " + fromStart)
  var fromEnd = Math.floor(n / 2 - fromStart)
 // console.log("fromEnd : " + fromEnd)

  return Math.min(fromStart, fromEnd)
}
