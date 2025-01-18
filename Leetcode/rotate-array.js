const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

function rotate(nums, k) {
  for (var i = 0; i < k; i++) {
    let last = nums.pop();
    nums.unshift(last);
  }
  return nums;
}
console.log(rotate(nums, k));
