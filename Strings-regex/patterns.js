const regexExample1 = /pattern/;
console.log(regexExample1.test("Have you got this pattern?"));

const regex_1 = /follow/;
const regex_2 = /Code/;
const string = "Follow Code";
console.log(regex_1.test(string));
console.log(regex_2.test(string));

function regexVowelMatch() {
  const regex = /[aeiou]/;
  console.log("Result started from here for Vowel Matching");
  console.log(regex.test("hello"));
  console.log(regex.test("wrld"));
}

function regexDigitMatch() {
  const regex = /[0-9]/;
  console.log("Result started from here for Digit Matching");
  console.log(regex.test("Hello12345"));
  console.log(regex.test("abc12de"));
  console.log(regex.test("Hello World!"));
}

regexVowelMatch();
regexDigitMatch();
