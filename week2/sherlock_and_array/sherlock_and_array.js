
function balancedSums(arr) {
    let sum = arr.reduce((a, b) => a + b, 0);
    let left = 0
    for (let i = 0; i < arr.length; i++) {
        sum -= arr[i]
        if (sum === left) {
            return "YES"
        }
        left += arr[i]
    }
    return "NO"
}