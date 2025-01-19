// Roman Number to Integer

// Given a string in Roman number format (s), your task is to convert it to an integer. Various symbols and their values are given below.
// Note: I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000

const s = "MCMIV";
function romanToDecimal(s) {
  // code here
  const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    const current = roman[s[i]];
    const next = roman[s[i + 1]];
    if (next && current < next) {
      total -= current;
    } else {
      total += current;
    }
  }
  return total;
}

console.log(romanToDecimal(s)); // Output: [ 'X', 'I', 'I' ]
