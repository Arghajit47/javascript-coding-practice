const dictionary = [
  "hack",
  "a",
  "rank",
  "khac",
  "ackh",
  "kran",
  "rankhacker",
  "a",
  "ab",
  "ba",
  "stairs",
  "raits",
];
const query = ["a", "nark", "bs", "hack", "stair"];

function areAnagrams(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  } else {
    return s1.split("").sort().join("") === s2.split("").sort().join("");
  }
}

var stringAnagrams = function (dictionary, query) {
  let result = [];
  for (let i = 0; i < query.length; i++) {
    let count = 0;
    for (let j = 0; j < dictionary.length; j++) {
      if (areAnagrams(query[i], dictionary[j])) {
        count++;
      }
    }
    result.push(count);
  }
  return result;
};

console.log(stringAnagrams(dictionary, query)); // [5, 0, 0, 1, 0]
