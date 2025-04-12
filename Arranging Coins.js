/* You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

Given the integer n, return the number of complete rows of the staircase you will build.

 

Example 1:


Input: n = 5
Output: 2
Explanation: Because the 3rd row is incomplete, we return 2.
Example 2:


Input: n = 8
Output: 3
Explanation: Because the 4th row is incomplete, we return 3.
 

Constraints:

1 <= n <= 231 - 1 */ 

function arrangeCoins(n) {
    return Math.floor((-1 + Math.sqrt(1 + 8 * n)) / 2);
}

// Test cases
console.log(arrangeCoins(5)); // Output: 2
console.log(arrangeCoins(8)); // Output: 3
console.log(arrangeCoins(1)); // Output: 1
console.log(arrangeCoins(1804289383)); // Output: 60070
