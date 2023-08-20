Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.

 

Example 1:

Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.

var longestCommonSubsequence = function(text1, text2) {
    const m = text1.length;
    const n = text2.length;

    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
    
    for(let i = 0; i<m; i++){
        for(let j = 0; j<n; j++){
             if (text1[i] === text2[j]) {
            dp[i + 1][j + 1] = dp[i][j] + 1;
            } else {
            dp[i + 1][j + 1] = Math.max(dp[i][j + 1], dp[i + 1][j]);
            }
        }
    }
    return dp[m][n];
};
