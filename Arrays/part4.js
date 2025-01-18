const numbers = [10, 20, 30, 40, 50, 60, 70, 80];
const newArr = numbers.reduce((acc, current) => {
  console.log(acc);
  console.log(current);
  return current / acc;
});
console.log(newArr);

const filteredNumbers = numbers.filter((number) => {
  return number > 20 && number < 70;
});
console.log(filteredNumbers);
