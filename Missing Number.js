Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

var missingNumber = function(nums) {
    nums.sort((a, b) => a - b); 
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i) {
            return i; // Return the missing number if it doesn't match the index
        }
    }
    
    return nums.length; // Return the last index if no missing number is found
};
 
