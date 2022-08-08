/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    // locate which row is the target in
    // binary search on the row
    
    //optimize binary search on rows
//     let row = 0
//     let endFirst = matrix[0][matrix[0].length-1]
//     let endLast = matrix[matrix.length-1][matrix[0.length-1]]
    
    
//     while (endFirst <= endLast) {
        
//     }
    for (let r=0; r<matrix.length; r++) {
 
        const endRow = matrix[r][matrix[0].length-1]

        if (target <= endRow) {

            let left = 0
            let right = matrix[0].length - 1

            while (left <= right) {
                let mid = Math.floor((left+right) / 2)
                console.log(mid)
           
                if (matrix[r][mid] == target) {
                    return true
                } else if (matrix[r][mid] < target) {
                    left = mid + 1
                } else if (matrix[r][mid] > target) {
                    right = mid - 1
                }
             
            }
        }
        
    }
    return false
};