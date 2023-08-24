You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

  var rob = function(nums) {
     const robRange = (start, end) => {
        let prevMax = 0;
        let currMax = 0;

        for (let i = start; i <= end; i++) {
            const temp = currMax;
            currMax = Math.max(currMax, prevMax + nums[i]);
            prevMax = temp;
        }

        return currMax;
    };

    const n = nums.length;

    if (n === 1) {
        return nums[0];
    } else if (n === 2) {
        return Math.max(nums[0], nums[1]);
    } else {
        return Math.max(robRange(0, n - 2), robRange(1, n - 1));
    }
    
};
