Given an integer array nums, find a 
subarray
 that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer. 

   var maxProduct = function(nums) {
     let maxSoFar = nums[0];
    let minSoFar = nums[0];
    let maxProduct = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const tempMax = maxSoFar;
        maxSoFar = Math.max(nums[i], Math.max(nums[i] * maxSoFar, nums[i] * minSoFar));
        minSoFar = Math.min(nums[i], Math.min(nums[i] * tempMax, nums[i] * minSoFar));
        maxProduct = Math.max(maxProduct, maxSoFar);
    }

    return maxProduct;
};
