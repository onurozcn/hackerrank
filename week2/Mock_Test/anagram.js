function anagram(s) {
  let half = Math.floor(s.length / 2)
  let left = s.substring(0, half)
  let right = s.substring(half, s.length)
  let count = 0
  if (s.length % 2 !== 0) return -1

  for (let i = 0; i < left.length; i++) {
    right.includes(left[i]) ? (right = right.replace(left[i], "")) : count++
  }
  return count
}
