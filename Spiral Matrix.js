Given an m x n matrix, return all elements of the matrix in spiral order.
  var spiralOrder = function(matrix) {
     if (matrix.length === 0) {
        return [];
    }

    const result = [];
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        // Traverse right
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;

        // Traverse down
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;

        // Check if there are more rows to traverse down
        if (top <= bottom) {
            // Traverse left
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }

        // Check if there are more columns to traverse left
        if (left <= right) {
            // Traverse up
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }

    return result;
};
