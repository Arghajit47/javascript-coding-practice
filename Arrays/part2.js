let options = ["options1", "options2", "options3", "options4"];
options.forEach(function (option) {
  console.log(option);
});

const array = ["options1", "options2", "options3"];
let fruits = ["Apple", "Orange"];
array.unshift(fruits);
array.concat(fruits);
console.log(`Concat: ${array}`);
console.log("Flat to Infinity: " + array.flat(Infinity));
console.log(options.splice(2, 2, fruits));
console.log("Updated Options: " + options);
