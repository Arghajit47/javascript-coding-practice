//  Divisible by 7

// Given an n-digit large number in form of string, check whether it is divisible by 7 or not. Print 1 if divisible by 7, otherwise 0.

function isdivisible7(num) {
  //your code here
  const number = parseInt(num);
  if (number % 7 == 0) {
    return 1;
  } else {
    return 0;
  }
}

function isDivisibleBy7(num) {
  let rem = 0;
  for (let i = 0; i < num.length; i++) {
    rem = (rem * 10 + parseInt(num[i])) % 7;
  }
  return rem === 0 ? true : false;
}

const num = "8955795758";

console.log(isdivisible7(num));
console.log(isDivisibleBy7(num));
