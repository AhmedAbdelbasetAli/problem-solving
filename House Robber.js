You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

  var rob = function(nums) {
   if (nums.length === 0) {
        return 0;
    }

    const dp = new Array(nums.length + 1).fill(0);

    dp[1] = nums[0]; // Base case: If there's only one house, rob that house

    for (let i = 2; i <= nums.length; i++) {
        // The maximum amount that can be robbed at the current house is either:
        // 1. The amount robbed at the previous house (dp[i-1])
        // 2. The amount robbed two houses ago plus the current house (dp[i-2] + nums[i-1])
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
    }

    return dp[nums.length];
};
