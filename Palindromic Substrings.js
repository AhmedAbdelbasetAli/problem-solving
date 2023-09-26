Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.

  var countSubstrings = function(s) {
    const n = s.length;
    let count = 0;

    // Create a 2D dp array to track palindromic substrings
    const dp = new Array(n).fill(false).map(() => new Array(n).fill(false));

    // All single characters are palindromes
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
        count++;
    }

    // Check for palindromes of length 2
    for (let i = 0; i < n - 1; i++) {
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
            count++;
        }
    }

    // Check for palindromes of length 3 or more
    for (let len = 3; len <= n; len++) {
        for (let i = 0; i < n - len + 1; i++) {
            const j = i + len - 1;
            if (s[i] === s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true;
                count++;
            }
        }
    }

    return count;
};
