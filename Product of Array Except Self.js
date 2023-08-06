Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

function productExceptSelf(nums) {
  const n = nums.length;
  const result = new Array(n);
  
  // Calculate the left products for each element
  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    result[i] = leftProduct;
    leftProduct *= nums[i];
  }
  
  // Calculate the right products for each element and combine with left products
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }
  
  return result;
}

// Example usage:
const nums = [1, 2, 3, 4];
const answer = productExceptSelf(nums);
console.log(answer); // Output: [24, 12, 8, 6]
