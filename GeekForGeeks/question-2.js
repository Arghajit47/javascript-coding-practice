// Longest Common Prefix of Strings

// Given an array of strings arr[]. Return the longest common prefix among each and every strings present in the array. If there's no prefix common in all the strings, return "".

const arr = ["geeksforgeeks", "geeks", "geek", "geezer"];

function longestCommonPrefix(strs) {
  // code here
  if (strs.length === 0) return ""; // Edge case: Empty array
  let prefix = strs[0]; // Start with the first string as the initial prefix

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1); // Shorten the prefix
      if (prefix === "") return ""; // No common prefix
    }
  }

  return prefix;
}

console.log(longestCommonPrefix(arr));
