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

// Merge 2 linked list
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let head = new ListNode()
    let cur = head
    
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            cur.next = list1
            list1 = list1.next
        } else {
            cur.next = list2
            list2 = list2.next
        }
        
        cur = cur.next
        
    }
    
    if (list1) cur.next = list1
    else if (list2) cur.next = list2
    
    return head.next
};

// Reverse linked list
var reverseList = function(head) {
    if(head === null) return head;
    let arr = [];
    while (head) {
        arr.push(head)
        head = head.next;
    }    
    arr[0].next = null;
    for (let i = 1; i < arr.length; i++) {
        arr[i].next = arr[i-1]
    }
    return arr[arr.length-1];
};

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let strX = String(x)
    let l = 0
    let r = (strX).length -1
    while (l < r) {
        if (strX[l] !== strX[r]) return false
        l += 1
        r -= 1 
    }
    return true
};

/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let stack = []
    let total = 0
    
    for (let i=0; i<s.length; i++) {
        if (s[i] == 'I') {
            if (s[i+1] == 'V') {
                total += 4
                i += 1
            } else if (s[i+1] == 'X') {
                total += 9
                i += 1
            } 
            else total += 1
        }
        else if (s[i] == 'V') total += 5
        else if (s[i] == 'X') {
            if (s[i+1] == 'L') {
                total += 40
                i += 1
            } else if (s[i+1] == 'C') {
                total += 90
                i += 1
            } else total += 10
        }
        else if (s[i] == 'L') total += 50
        else if (s[i] == 'C') {
            if (s[i+1]== 'D') {
                total += 400
                i+= 1
            } else if (s[i+1] == 'M') {
                total += 900
                i += 1
            } else total += 100
        }
        else if (s[i] == 'D') total += 500
        else if (s[i] == 'M') total += 1000
        
    }

    return total
    
};

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let res = ''
    
    for (let i=0;i<strs[0].length;i++) {
        let cur = strs[0][i]
        for (let j=0; j<strs.length; j++) {
            if (i == strs[j].length || strs[j][i] !== strs[0][i]) {
                return res
            }
        }
        res += strs[0][i]
    }
    
    return res
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    let dic =  {}
    
    for (let i of nums) {
        if (dic[i]) return true
        else dic[i] = 1
    }
    return false
};

/**
 * @param {number} celsius
 * @return {number[]}
 */
 var convertTemperature = function(celsius) {
    return [celsius+273.15, celsius*1.80 + 32]
};

/**
 * @param {number[][]} image
 * @return {number[][]}
 */
 var flipAndInvertImage = function(image) {
    let res = []
    for (let i=0;i<image.length;i++) {
        
        image[i]
        let temp = []
        for (let j=image[i].length-1; j>=0; j--) {
            temp.push(image[i][j] == 0 ? 1 : 0)
        }
        res.push(temp)
        
    }
    
    return res
};
/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
 var isRectangleOverlap = function(rec1, rec2) {

    if (((rec1[0] > rec2[0] && rec1[0] < rec2[2]) 
        || (rec1[2] > rec2[0] && rec1[2] < rec2[2]) 
        || (rec2[0] > rec1[0] && rec2[0] < rec1[2]) 
        || (rec2[2] > rec1[0] && rec2[2] < rec1[2]))  
        && ((rec1[1] > rec2[1] && rec1[1] < rec2[3]) 
        || (rec1[3] > rec2[1] && rec1[3] < rec2[3]) 
        || (rec2[1] > rec1[1] && rec2[3] < rec1[3]) 
        || (rec2[3] > rec1[1] && rec2[3] < rec1[3]))) return true
    
    return false
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    let cur = new ListNode()
    let tail = cur
    
    while (list1 && list2) {
        if (list1.val < list2.val) {
            tail.next = list1
            list1 = list1.next
        } else {
            tail.next = list2
            list2 = list2.next
        } 
        
        tail = tail.next
    }
    
    if (list1) tail.next=list1
    else if (list2) tail.next = list2
    
    return cur.next
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let j=0
    for (let i=1; i<nums.length;i++) {
        if (nums[i] == nums[j]) {
            nums.splice(i , 1) 
            i--
        }
        else {j++}
    }

};

var removeDuplicates = function(nums) {
    if(nums.length === 0) {
        return 0
    }
    let result = 1, i = 0, j = 1;
    
    while(i < nums.length && j < nums.length) {
        if(nums[j] === nums[i]) {
            j++;
        } else {
            result += 1;
            i++;
            nums[i] = nums[j];
            j++;
        }
    }
    
    return result;
};