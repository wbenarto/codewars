// Duplicate in array O(n)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    let dict = {}
    
    for (let i of nums) {
        if (i in dict) {
            return true
        } else {
            dict[i] = 1
        }
    }
    return false
    
};