const myObj = { a: 1, b: 2, c: 3, d: 4 };
const keysArray = Object.keys(myObj);
const valuesArray = Object.values(myObj);
console.log(keysArray, valuesArray);

const squaredNumbers = valuesArray.map((number) => {
  return number * number;
});
console.log(squaredNumbers);
