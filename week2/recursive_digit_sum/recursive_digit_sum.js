function superDigit(n, k) {
    let sum = n.toString().split("").reduce((a,b)=> a+ Number(b),0) *k
    return sum >= 10 ? superDigit(sum,1) : sum
}
