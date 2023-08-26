There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 * 109.

var uniquePaths = function(m, n) {
    const totalMoves = m + n - 2; // Total number of moves needed
    const movesDown = m - 1; // Number of moves down

    // Calculate binomial coefficient (totalMoves choose movesDown)
    let result = 1;
    for (let i = 1; i <= movesDown; i++) {
        result *= (totalMoves - movesDown + i) / i;
    }

    return Math.round(result);
};
