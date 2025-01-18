const fruits = ["apple", "orange", "banana"];
const storage = fruits.values();

for (const fruit of storage) {
  console.log(fruit);
  console.log(typeof fruit);
}

console.log("length of the array: " + fruits.length);
console.log("Reverse the array: " + fruits.reverse());
console.log("Sort Array: " + fruits.sort());
console.log("Element in Array: " + fruits.at(1) || fruits[1]);
console.log("Add an element to the array: " + fruits.push("cherry"), fruits);
console.log("Remove last element from Array: " + fruits.pop());
const str = fruits.join(", ");
const arrToString = fruits.toString();
console.log("Array join: " + str);
console.log("Array toString: " + arrToString);
const shiftFruits = fruits.shift();
console.log("Shifted Element: " + shiftFruits);
console.log("Shifted Array: " + fruits);
