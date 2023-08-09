Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.

  var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1 ;
    let ans = nums[0];

    if(nums.length === 1){
        return ans;
    }

    while(left<=right){
        if(nums[left]<nums[right]){
            ans = Math.min(ans,nums[left])
        }
        let mid = Math.floor((left+right)/2);
        ans = Math.min(ans,nums[mid]);
        if(nums[left]<=nums[mid]){
            left=mid+1;
        }else{
            right = mid-1;
        }

    }
    return ans;
};
