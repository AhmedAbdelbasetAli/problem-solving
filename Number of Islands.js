Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

  var numIslands = function(grid) {
    if (!grid || grid.length === 0) {
        return 0;
    }
    
    const rows = grid.length;
    const cols = grid[0].length;
    let count = 0;
    
    const dfs = (row, col) => {
        if (
            row < 0 || row >= rows ||
            col < 0 || col >= cols ||
            grid[row][col] === '0'
        ) {
            return;
        }
        
        grid[row][col] = '0'; // Mark as visited
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        for (const [dx, dy] of directions) {
            dfs(row + dx, col + dy);
        }
    };
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === '1') {
                count++;
                dfs(row, col);
            }
        }
    }
    
    return count;
};
