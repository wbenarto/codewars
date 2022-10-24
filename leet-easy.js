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