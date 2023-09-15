Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

 var exist = function(board, word) {
    const m = board.length;
    const n = board[0].length;
    
    // Helper function to perform DFS
    function dfs(i, j, k) {
        if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[k]) {
            return false;
        }
        if (k === word.length - 1) {
            return true;
        }
        
        const tmp = board[i][j];
        board[i][j] = '#'; // Mark the cell as visited
        
        // Explore adjacent cells
        const found = (
            dfs(i + 1, j, k + 1) ||
            dfs(i - 1, j, k + 1) ||
            dfs(i, j + 1, k + 1) ||
            dfs(i, j - 1, k + 1)
        );
        
        board[i][j] = tmp; // Restore the cell
        
        return found;
    }
    
    // Start the search from each cell
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dfs(i, j, 0)) {
                return true; // Word found
            }
        }
    }
    
    return false; // Word not found
};
