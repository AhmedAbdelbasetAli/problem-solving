There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.

 var pacificAtlantic = function(heights) {
    if (!heights || heights.length === 0 || heights[0].length === 0) {
        return [];
    }
    
    const rows = heights.length;
    const cols = heights[0].length;
    const result = [];
    
    const canReachPacific = Array.from({ length: rows }, () => new Array(cols).fill(false));
    const canReachAtlantic = Array.from({ length: rows }, () => new Array(cols).fill(false));
    
    const dfs = (row, col, ocean) => {
        ocean[row][col] = true;
        
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        for (const [dx, dy] of directions) {
            const newRow = row + dx;
            const newCol = col + dy;
            
            if (
                newRow >= 0 && newRow < rows &&
                newCol >= 0 && newCol < cols &&
                !ocean[newRow][newCol] &&
                heights[newRow][newCol] >= heights[row][col]
            ) {
                dfs(newRow, newCol, ocean);
            }
        }
    };
    
    // DFS for Pacific Ocean (left and top edges)
    for (let row = 0; row < rows; row++) {
        dfs(row, 0, canReachPacific);
    }
    for (let col = 0; col < cols; col++) {
        dfs(0, col, canReachPacific);
    }
    
    // DFS for Atlantic Ocean (right and bottom edges)
    for (let row = 0; row < rows; row++) {
        dfs(row, cols - 1, canReachAtlantic);
    }
    for (let col = 0; col < cols; col++) {
        dfs(rows - 1, col, canReachAtlantic);
    }
    
    // Combine results
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (canReachPacific[row][col] && canReachAtlantic[row][col]) {
                result.push([row, col]);
            }
        }
    }
    
    return result;
};
