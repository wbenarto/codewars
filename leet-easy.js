/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    let res = []
  for (i=0; i<nums.length; i++) {
      let tempArr = nums.slice(0, i+1)
      let sum = tempArr.reduce((a,b)=> a+b)
      
      res[i] = sum
  }  
    
    return res
};

/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
    let l=0
    let r=nums.length-1
    console.log(l, r)
    let leftSum = nums[0]
    let rightSum = nums[r]
    
    while (r - l !== 2) {
        
        if (leftSum < rightSum) {
            l += 1
            leftSum += nums[l]
        } else if (leftSum > rightSum) {
            r -= 1
            rightSum += nums[r]
        }
    }
    
    console.log(leftSum, rightSum)
    if (leftSum == rightSum) return r - 1
    else return -1
};