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

var removeElement = function(nums, val) {
    let j = 0
    for (let i=0; i<nums.length ;i++) {
        if (nums[i] == val) {
            console.log('splice')
            nums.splice(i, 1)
            i--
        }
    }
};
var removeElement = function(nums, val) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] !== val) {
        nums[i] = nums[j];
        i++;
      }
    }
    return i;
  }
  /**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    let arr = s.trim().split(' ')
    
    return arr[arr.length - 1].length
};

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {

    
    let sub = 1
    let sum = 0
    
    while (sub <= arr.length) {
        for (let i=0; i<=arr.length-sub;i++) {
            sum += arr.slice(i, i+sub).reduce((a,b)=>a+b, 0)
        }
        sub += 2
    } 
    
    return sum
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res = 0
    
    for (let i=0;i<nums.length;i++) {
        res = res ^ nums[i]
       
    }
    return res
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
 
    return [...nums, ...nums]
};

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 var numJewelsInStones = function(jewels, stones) {
    let res = 0
    
    for (let i of jewels) {
        
        let count  = [...stones].filter((e) => e == i).length

        res += count
    }
    
    return res
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let res = []
    let cur = 0

    for (let i of nums) {
        cur += i
        res.push(cur)
    }

    return res
};

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
 var restoreString = function(s, indices) {
    let res = []

    for (let i=0; i<s.length; i++) {
        res[indices[i]] = s[i]
    }

    return res.join('')
};
/**
 * @param {string} s
 * @return {string[]}
 */
 var cellsInRange = function(s) {
  
    let arr = s.split(':')
    let colBegin = arr[0][0]
    let colEnd = arr[1][0]
    let rowBegin = arr[0][1]
    let rowEnd = arr[1][1]
    let res = []
    for (let i=colBegin.charCodeAt(0); i<=colEnd.charCodeAt(0); i++) {
     
        let row = String.fromCharCode(i)
        for (let j=rowBegin; j<=rowEnd; j++) {
            let col = j
            res.push(row+col)
        }
    }

    /**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let sum = 0
    for (let i=0;i<sentences.length;i++) {
        sum = Math.max(sentences[i].split(' ').length, sum)
    }
    return sum
};

/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
 var arrayStringsAreEqual = function(word1, word2) {
    return word1.join('') == word2.join('')
};

/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
 var arrayStringsAreEqual = function(word1, word2) {
    return word1.reduce((a,b)=> a+b, '') == word2.reduce((a,b) => a+b, '')
};

/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
 var arrayStringsAreEqual = function(word1, word2) {
    let res1 = ''
    let res2 = ''

    for (let i of word1) {
        res1 += i
    }

    for (let i of word2) {
        res2 += i
    }

    return res1 == res2
};

/**
 * @param {string} address
 * @return {string}
 */
 var defangIPaddr = function(address) {
    return address.replaceAll('.', '[.]')
};

/**
 * @param {string} address
 * @return {string}
 */
 var defangIPaddr = function(address) {
    let res = ''
    for (let i of address) {
        console.log(i)
        if (i == '.') {
            res += '[.]'
        } else res += i

    }
    return res
};

/**
 * @param {string} address
 * @return {string}
 */
 var defangIPaddr = function(address) {
    return address.split('.').join('[.]')
};

/**
 * @param {string[]} words
 * @return {number}
 */
 var uniqueMorseRepresentations = function(words) {
    let alp = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
      let res = []
    for (let i=0; i<words.length; i++) {
  
        let temp = ''
      for (let j=0;j<words[i].length; j++) {
          
          temp += alp[words[i][j].charCodeAt(0)-97]
      } 
      res.push(temp)
    } 
  
    return new Set(res).size
  };


  /**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let cur = 0
    let max = 0

    for (let i of s) {
        if (i == '(') {
            let temp = cur + 1
            cur = temp
            max = Math.max(max , cur)

        } else if (i ==')') {
            let temp = cur - 1
            cur = temp
            max = Math.max(max, cur-1)
        }
    }

    return max
};

/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
 var reversePrefix = function(word, ch) {

    let index = word
    

     if (!cloned) return
    if (cloned.val == target.val) {
        return cloned
    }else{
        return getTargetCopy(original, cloned.left, target) || getTargetCopy(original, cloned.right, target)
    }
 }

 /**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let res = 0

    if (!root) return 0

    if (root.val > low) {
        res += rangeSumBST(root.left, low, high)
    }
    if (root.val < high) {
        res += rangeSumBST(root.right, low, high)
    }

    if (root.val <= high && root.val >= low) {
        res += root.val
    }

    return res
    
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

 var getTargetCopy = function(original, cloned, target) {
    if (!cloned) return
    if (target.val == cloned.val) return cloned
    return getTargetCopy(original, cloned.left, target) || getTargetCopy(original, cloned.right, target)
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
 var searchBST = function(root, val) {
    if (!root) return null
    
    else if (root.val == val) return root

    else if (val > root.val ) return searchBST(root.right, val)
    else if (val < root.val) return searchBST(root.left, val)

    
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
    let res = []
    dfs(root)

    function dfs(root) {
        if (root !== null) {
            dfs(root.left)
            res.push(root.val)
            dfs(root.right)
        }
    }

    return res
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
    let res = []
    dfs(root)

    function dfs(root) {
        if (root !== null) {
            dfs(root.left)
            res.push(root.val)
            dfs(root.right)
        }
    }

    return res
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var preorderTraversal = function(root) {

    let res = []
    dfs(root)
    
    function dfs(root) {
        if (root !== null) {
            res.push(root.val)
            dfs(root.left)
            dfs(root.right)
        }
    }

    return res
    
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var postorderTraversal = function(root) {
    let res = []
    dfs(root)

    function dfs(root) {
        if (root !== null) {
            dfs(root.left)
            dfs(root.right)
            res.push(root.val)
        }
    }

    return res
};


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var sumRootToLeaf = function(root) {
    let sum = 0

    function dfs(root, binary='') {
    
        if (root == null) return 0
        if (root.left == null && root.right == null) {
            sum += parseInt(binary+root.val, 2)
        }
        dfs(root.left, binary+root.val)
        dfs(root.right, binary+root.val)
    }

    dfs(root, '')
    return sum
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var diameterOfBinaryTree = function(root) {
    let path = 0

    function dfs(root) {
        if (root == null ) return 0
       
        let l = dfs(root.left)
        let r = dfs(root.right)
        path = Math.max( path, l+r+1)
        return Math.max(l, r)  + 1
    }
    dfs(root)

    return path - 1 
 
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isBalanced = function(root) {
    if (root == null) return true
    let dfs = (root) => {
        if (!root) return 0
      
        let l = dfs(root.left)
        let r = dfs(root.right)

        if (l == -1 || r == -1) return -1
        if (Math.abs(l-r) > 1 ) return -1
        return Math.max(l,r) + 1
    }

    if (dfs(root) == -1) return false
    return true 
    


};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {
    if (!p && !q) return true

    if (!p || !q || p.val !== q.val) return false

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right) 
};