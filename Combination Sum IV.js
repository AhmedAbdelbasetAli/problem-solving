Given an array of distinct integers nums and a target integer target, return the number of possible combinations that add up to target.

The test cases are generated so that the answer can fit in a 32-bit integer.

ar combinationSum4 = function(nums, target) {
    const dp = new Array(target+1).fill(0);

    dp[0]=1

    for(let i = 1; i<=target; i++){
        for(const num of nums){
            if(i>=num){
                dp[i] += dp[i - num];
            }
        }
    }
    return dp[target]
};
