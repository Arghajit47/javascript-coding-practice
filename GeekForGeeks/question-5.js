// Closest Strings

// Given a list of words followed by two words, the task to find the minimum distance between the given two words in the list of words

function shortestDistance(s, word1, word2) {
  //your code here
  let mindistance = Infinity;
  let index1 = -1; //index of first word
  let index2 = -1; //index of second word
  if (word1 === word2) return 0; // return 0 if both words are same

  for (let i = 0; i < s.length; i++) {
    if (s[i] === word1) {
      index1 = i;
    } else if (s[i] === word2) {
      index2 = i;
    }

    if (index1 !== -1 && index2 !== -1) {
      mindistance = Math.min(mindistance, Math.abs(index1 - index2)) || -1;
    }
  }
  return mindistance === Infinity ? -1 : mindistance;
}

const S = ["qz", "jm", "dv", "ejs", "of", "ejs", "qz"],
  word1 = "qz",
  word2 = "qz";

console.log(shortestDistance(S, word1, word2));
