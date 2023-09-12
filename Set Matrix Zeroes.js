Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.

 var setZeroes = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const zeroRows = new Array(m).fill(false);
    const zeroCols = new Array(n).fill(false);

    // Mark rows and columns to be zeroed.
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                zeroRows[i] = true;
                zeroCols[j] = true;
            }
        }
    }

    // Set elements in zeroed rows and columns to 0.
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (zeroRows[i] || zeroCols[j]) {
                matrix[i][j] = 0;
            }
        }
    }
};
