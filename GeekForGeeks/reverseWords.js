const str = "   Hello World";

function reverseWords(s) {
  // code here
  const cleaned = s.trim().replace(/\s+/g, " ");
  const revStr = cleaned.split(" ").reverse().join(" ");
  return revStr;
}

console.log(reverseWords(str)); // Output: World Hello
