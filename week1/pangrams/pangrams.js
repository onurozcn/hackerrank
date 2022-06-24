function pangrams(s) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let strToLower = s.toLowerCase()
  for (let i = 0; i < alphabet.length; i++) {
    if (!strToLower.includes(alphabet[i])) {
      return "not pangram"
    }
  }
  return "pangram"
}
