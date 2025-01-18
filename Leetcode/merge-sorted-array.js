function merge(nums1, m, nums2, n) {
  updatedNum1 = nums1.slice(0, m);
  console.info(updatedNum1);
  updatedNum2 = nums2.slice(0, n);
  console.info(updatedNum2);
  const newNum = updatedNum1.concat(updatedNum2);
  nums1 = newNum.sort();
  console.log(nums1);
}

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;
merge(nums1, m, nums2, n);
