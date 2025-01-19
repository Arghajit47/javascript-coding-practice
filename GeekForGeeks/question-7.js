function encryptString(S) {
  //your code here
  let counter = 1;
  let char = S[0];
  let result = "";
  for (var i = 1; i < S.length; i++) {
    if (S[i] === char) {
      counter++;
    } else {
      result = result + `${char}${counter.toString(16)}`;
      counter = 1;
      char = S[i];
    }
  }
  result = result + `${char}${counter.toString(16)}`;
  return result.split("").reverse().join("");
}

S = "aaaaaaaaaaa";

console.log(encryptString(S)); // "a11" = "ab" => "ba"
