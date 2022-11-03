// 1. Duplicate in array O(n)
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

// 2. Anagram O(n)
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    let dict = {}
    for (let i of s) {
          if (i in dict) {
              dict[i]++
          } else {
              dict[i] = 1
          }
    }
    for (let i of t) {
        if (!dict[i]) return false
        dict[i]--
    }
    return true
};

// 3. 2sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let dict = {}
    
    for (let i=0;i<nums.length;i++) {
        let diff = target - nums[i]
        if (diff in dict) {
            return [i, dict[diff]]
        } else {
            dict[nums[i]] = i
        }
    }
};


// 4. Group anagram
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    let dict = {}
    
    strs.forEach((str)=>{
        let sortedStr = str.split('').sort().join('')
        
        if (dict[sortedStr]) {
            dict[sortedStr].push(str)
        } else {
            dict[sortedStr] = [str]
        }
    })
    
    return Object.values(dict)
};

// 5. Top K frequent Element O(n) 
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    let dict = {}
    let count = []
    let res = []
    for (let i of nums) {
        if (dict[i]) dict[i]++
        else dict[i] = 1
    }
    
    Object.entries(dict).forEach((e,i)=> {
        if (count[e[1]]) count[e[1]].push(e[0])
        else count[e[1]] = [e[0]]
    })
    for (let i=count.length-1; i>0;i--) {
        for (let j in count[i]) {
            res.push(count[i][j])
            if (res.length == k) return res
        }  
    }
};