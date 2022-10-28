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

/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
    let right = nums.reduce((a,b) => a+b,0)
    let left = 0
    
    for (let i=0; i<nums.length;i++) {
        if (i==0) {
            left = 0
        } else {
            left += nums[i-1]
        }
        right -= nums[i]
        if (right == left) {
            return i
        }
        
    }
    
    
    
    return -1
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    if (s === t) {
        return true;
    }
    let sH = {}
    let tH = {}
    
    for (let i=0; i<s.length;i++) {
        if (!sH[s[i]]) sH[s[i]] = t[i]
        if (!tH[t[i]]) tH[t[i]] = s[i]
         
        if (sH[s[i]] !== t[i] || tH[t[i]] !== s[i]) return false
    }

    return true
    
};

// 392 
// is subsequence
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sPointer = 0
    let tPointer = 0
    if (s.length == 0 && t.length == 0) return true
    while (tPointer < t.length) {
        if (t[tPointer] == s[sPointer]) {
            sPointer++
        }
        
        if (sPointer == s.length) {
            return true
        }
        tPointer++
    }
    
    return false
};