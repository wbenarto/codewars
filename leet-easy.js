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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
 var isSubtree = function(root, subRoot) {
    if (!root) return false

    function isSametree(a, b) {
        if (!a && !b) return true
        if (!a || !b || a.val !== b.val) return false
        return isSametree(a.left, b.left) && isSametree(a.right, b.right)
    }

    if (isSametree(root, subRoot)) return true
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
 var isSubtree = function(root, subRoot) {
    if (!root) return false

    function isSametree(a, b) {
        if (!a && !b) return true
        if (!a || !b || a.val !== b.val) return false
        return isSametree(a.left, b.left) && isSametree(a.right, b.right)
    }

    if (isSametree(root, subRoot)) return true
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if (!root) return []
    let q = [ ]
    q.push(root)
    let res = []
    console.log(q)

    while (q.length> 0) {
        let size = q.length
        let level = []
        for (let i=0;i<size; i++) {
            let cur = q.shift()
      
            if (cur) {
                level.push(cur.val)
                if (cur.left)q.push(cur.left)
                if (cur.right)q.push(cur.right)
            }
        }
        console.log(level)
        if (level) {
                res.push(level)
        }
    } 
    console.log('result ', res)
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
 var rightSideView = function(root) {

    if (!root) return []
    let res = []
    let q = [root]

    while (q.length >0) {
 
        let size = q.length

        for (let i =0; i<size;i++) {
            let cur = q.shift()
            if (cur.left) q.push(cur.left)
            if (cur.right) q.push(cur.right)
            
            if (i==size-1) {res.push(cur.val)}
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
 * @return {boolean}
 */
var evaluateTree = function(root) {
    // check rootleft and rootright, apply the conditions

    if (!root) return
    if (root.val == 0 || root.val == 1) {
        return root.val
    }
    if (root.val == 2 ) {
        return evaluateTree(root.left) || evaluateTree(root.right)
    } else if (root.val == 3) {
        return evaluateTree(root.left) && evaluateTree(root.right)
    }
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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    let newTree = new TreeNode()
    let dummy = newTree
   
    function dfs(root) {
        if (!root) return

        dfs(root.left)
        dummy.right = root
        dummy = dummy.right
        dummy.left = null
        dfs(root.right)
       
    }
    dfs(root)
    return(newTree.right)

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
 var checkTree = function(root) {
    return root.val == root.left.val + root.right.val
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
 var mergeTrees = function(root1, root2) {

    if (!root1) {
        return root2
    }
    if (!root2) {
        return root1
    } 
    root1.val += root2.val
    root1.left = mergeTrees(root1.left , root2.left)
    root1.right = mergeTrees(root1.right, root2.right)
    return root1
  
};

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var postorder = function(root) {
    if (!root) return []

    let res = []
    let stack = [root]

    while (stack.length > 0) {
        if (!root) return
        let cur = stack.pop()
        res.push(cur.val)
        stack.push(...cur.children)
    }

    return res.reverse()
};

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var preorder = function(root) {
    if (!root) return []
    let res = []
    dfs(root)

    function dfs(root) {
        if (!root) return
        res.push(root.val)
        for (let i =0;i<root.children.length;i++) {
            dfs(root.children[i])
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
 * @return {TreeNode}
 */
 var invertTree = function(root) {
    if (!root) return null


    let temp = root.left
    root.left = root.right
    root.right = temp

    invertTree(root.left)
    invertTree(root.right)
    return root
    
};

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
 var maxDepth = function(root) {
    if (!root) return 0
    let q = [root]
    let depth = 0

    while (q.length > 0) {
        let size = q.length
        

        for (let i=0;i<size;i++) {
            let cur = q.shift()
            q.push(...cur.children)
        }
        depth += 1

    }
    return depth
};

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
 var maxDepth = function(root) {
    if (!root) return 0
    let depth = 0

    for (let each of root.children) {
        depth = Math.max(depth, maxDepth(each))
    }
    return depth + 1
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
 var maxDepth = function(root) {
    if (!root) return 0
    let depth = 0

    depth = Math.max(depth, maxDepth(root.left), maxDepth(root.right))

    return depth + 1
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
 var maxDepth = function(root) {
    if (!root) return 0
    let depth = 0
    let q = [root]

    while (q.length > 0) {
        let size = q.length
        for (let i=0;i<size;i++) {
            let cur = q.shift()
            if (cur.left) q.push(cur.left)
            if (cur.right) q.push(cur.right)
        }
        depth+=1
    }
    return depth
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
 var isUnivalTree = function(root) {
    if (!root) return false
    let val = root.val
    let res = true

    dfs(root) 

    function dfs(root) {
        console.log(val, root.val)
        if (!root) return
      
        if (root.val != val) {
            console.log('return false')
            res = false
        } 
        if (root.left) dfs(root.left)
        if (root.right) dfs(root.right)
           
 
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
 * @return {boolean}
 */
 var isUnivalTree = function(root, value=root.val) {
    if (!root) return true

    return root.val == value && isUnivalTree(root.left, value) && isUnivalTree(root.right, value)
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
 var getDecimalValue = function(head) {
    let num = ''
    
    while (head) {
        num += String(head.val)
        head = head.next
    }
    return(parseInt(num, 2))
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
    let slow = fast = head

    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }

    return slow
    
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
    let slow = fast = head

    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }

    return slow
    
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
    let cur = head

    while (cur) {
        if (cur.next != null && cur.val == cur.next.val) {
            cur.next = cur.next.next
        } else {
            cur = cur.next
        }
    }

    return head
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    let cur = ''
    let reverse = ''

    while (head) {
        cur += head.val
        reverse = head.val + reverse
        head = head.next
    }

    return cur == reverse
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head) return false

    let hare = head
    let turtoise = head

    while (hare) {
        if (!hare.next) return false 
        else {
            hare = hare.next.next
            turtoise = turtoise.next
        }
       
        if (hare == turtoise) return true
    }

    return false
    
};

/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let total = 0
    for (let i of operations) {
        let ops = i[1]

        if (ops == '-') {
            total--
        } else {
            total ++
        }
    }
    return total
};
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let mid = nums.length/2
    let arr1 = nums.slice(0,mid)
    let arr2 = nums.slice(mid)
    console.log(arr1,arr2)
    let res = []

    for (let i=0;i<arr1.length;i++) {
        res.push(arr1[i])
        res.push(arr2[i])
    }

    return (res)
};
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
 var shuffle = function(nums, n) {
    let mid = nums.length/2
    let res = []

    for (let i=0;i<mid;i++) {
        res.push(nums[i])
        res.push(nums[i+n])
    }

    return (res)
};

/**
 * @param {number[]} nums
 * @return {number}
 */
 var numIdenticalPairs = function(nums) {
    let pairs=0
    for (let i=0;i<nums.length;i++) {
        let cur = nums[i]
  
        for (let j=i+1;j<nums.length;j++) {
            let cur2 = nums[j]
            if (cur == cur2) pairs++
        }
    }  
    return pairs
  };

  /**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let res = 0
    accounts.forEach(e=> {
        let cur = e.reduce((a,b)=>a+b, 0)
        res = Math.max(res, cur)

        })
    return (res)

};
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
 var kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies)
    let res = []

    for (let i of candies) {
        if (i+extraCandies >= max) {
            res.push(true)
        } else res.push(false)
    }
    return res
};

/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
 var countPoints = function(points, queries) {
    let res = []
    for (let i = 0;i<queries.length;i++) {


       
        let temp = 0
        for (let j=0;j<points.length;j++) {
            let x = points[j][0]
            let y = points[j][1]
            let distX = Math.pow(x - queries[i][0],2)
            let distY = Math.pow(y -queries[i][1],2)
            let rad = Math.pow(queries[i][2], 2)
            if ( distX + distY <= rad ) temp++
            
        }
        res.push(temp)
    }

    return res
};

/**
 * @param {number[][]} edges
 * @return {number}
 */
 var findCenter = function(edges) {
    let dict = {}

    for (let i of edges) {
        if (i[0] in dict) {
            dict[i[0]]++
        } else {
            dict[i[0]] = 1
        }

        if (i[1] in dict) {
            dict[i[1]]++
        } else {
            dict[i[1]] = 1
        }
    }

    console.log(dict)
    console.log(Object.keys(dict).reduce((a,b)=>dict[a]>dict[b] ? a : b))
    return Object.keys(dict).reduce((a,b)=>dict[a]>dict[b] ? a : b)
};
const findCenter = (edges) => {
    const [[a, b], [c, d]] = edges;
    return a === c || b === c ? c : d;
  };
  /**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let res = []
    for (let i of nums) {
        let count = nums.filter(e=> i >e)
        res.push(count.length)
    }
    return res
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var smallerNumbersThanCurrent = function(nums) {
    let sorted = nums.slice().sort((a,b) => a - b)
    let hash = new Map()
    sorted.forEach((e,i) => hash.has(e) ? null : hash.set(e, i))
    return nums.map(e=> hash.get(e))

};

/**
 * @param {number} n
 */
 var OrderedStream = function(n) {
    this.list = []
    this.pointer = 0
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    let chunk = []

    this.list[idKey-1] = value
    while (this.list[this.pointer]) {
        chunk.push(this.list[this.pointer])
        this.pointer++
    }
    return chunk
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */

/**
 * @param {string} sentence
 * @return {boolean}
 */
 var checkIfPangram = function(sentence) {
    let res = new Set(sentence)

    return res.size == 26
};
/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
 var sortPeople = function(names, heights) {
    let hash = new Map()
    for (let i=0; i<names.length;i++) {
        hash.set(heights[i], names[i])
    }

    return(heights.sort((a,b)=>b-a).map((e)=>hash.get(e)))
};

/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
 var arithmeticTriplets = function(nums, diff) {
    let res = 0
    for (let i=0;i<nums.length-1;i++) {
        let temp = [nums[i]]
        for (let j=0;j<nums.length;j++) {
            if (Math.abs(nums[i]-nums[j]) == diff) temp.push(nums[j])
        }
        if (temp.length == 3) res++
    }

    return res
};

/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
 var arithmeticTriplets = function(nums, diff) {
    let res = 0
    for (let i=0;i<nums.length-1;i++) {
        let temp = 1
        for (let j=0;j<nums.length;j++) {
            if (Math.abs(nums[i]-nums[j]) == diff) temp++
        }
        if (temp == 3) res++
    }

    return res
};

/**
 * @param {string[][]} paths
 * @return {string}
 */
 var destCity = function(paths) {

    let dep = []
    let arv = []
    for (let i of paths) {
        dep.push(i[0])
        arv.push(i[1])
    }
 
    for (let i of arv) {
        if (dep.indexOf(i) < 0) return i
    }

};

/**
 * @param {number[]} nums
 * @return {number}
 */
 var repeatedNTimes = function(nums) {
    let n = nums.length /2
    let hash = new Map()
    for (let i of nums) {
        hash.has(i) ? hash.set(i, hash.get(i) + 1)  : hash.set(i, 1)
    }
    console.log([...hash].find(([key, val])=>val==n)[0])
    return [...hash].find(([key, val])=>val==n)[0]
};

/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
    let dp = Array(n+1).fill(0)
    let offset = 1
    console.log(dp)

    for (let i=1;i<=n;i++) {
        if (offset * 2 == i) offset *= 2
        dp[i] = 1 + dp[i-offset]
    }
    console.log(dp)
    return dp
    
};

/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    let res = [[1]]

    for (let i=1;i<numRows;i++) {
        let temp = [0, ...res[res.length-1], 0]
        let row = []

        for (let j=0;j<res.at(-1).length+1; j++) {
            row.push(temp[j] + temp[j+1])
        }
        res.push(row)
    }

    return res
};

/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n, res=[0,1] ) {
    if (n== 0) return 0
    if (n==1) return 1
    return fib(n-1) + fib(n-2)


};
/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n, res=[0,1] ) {
    if (n== 0) return 0
    if (n==1) return 1

    let a = 0
    let b = 1
    let sum = a + b

    while (n>1) {
        sum = a + b
        a = b
        b= sum
        n--
    }
    return sum


};

/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n, memo ) {
    memo = memo || {}
 
     if (n<2) return n
     if (memo[n]) return memo[n]
 
    return memo[n] = fib(n-1, memo) + fib(n-2,memo)
 
 };
 /**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if (n<2) return n
    if (n==2) return 1
    
    let a = 0
    let b = 1
    let c = 1
    let sum = a + b + c

    while (n>=3) {
        sum = a + b + c
        a=b
        b=c
        c=sum
        n--
    }

    return sum
};

/**
 * @param {number} n
 * @return {number}
 */
 var tribonacci = function(n, memo) {
    memo = memo || {}
    if (n<2) return n
    if (n==2) return 1
    if (memo[n]) return memo[n]
    
    return memo[n] = tribonacci(n-1, memo) + tribonacci(n-2,memo) + tribonacci(n-3, memo)
};

/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
  
    if (n<2) return 1
    let a = 1
    let b =1
    let sum = a+ b
    while (n>1) {
        sum = a + b
        a =b
        b= sum
        n--
    }

    return sum

};

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 var getRow = function(rowIndex) {

    let res = [[1]]

    for (let i=0;i<rowIndex;i++){
        let temp = [0, ...res[res.length-1], 0]
        let row = []
        for (let j=0;j<temp.length-1;j++) {

            row.push(temp[j] + temp[j+1])
        }
        res.push(row)
    }

    return res[res.length-1]

};

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let stack = []
    let map = {
        '{' : '}',
        '[' : ']',
        '(' : ')'
    }
 
     for (let i=0; i<s.length;i++) {
         if (s[i] == '(' || s[i] == '[' || s[i] == '{' ) {
             stack.push(s[i])
         } else if (map[stack.pop()] !== s[i]) {
             return false
         }
     }
 
     return stack.length ? 0 : 1
  
    
 };

 /**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let stack = ['']

    for (let i=0;i<s.length;i++) {
        let top = stack[stack.length-1] 

        if (top.toLowerCase() == s[i].toLowerCase() && top !== s[i]) stack.pop()
        else stack.push(s[i])
    }

    return stack.join('')
};

var MyQueue = function() {
    this.stack = []
   
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.stack.shift()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.stack[0]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack.length == 0 ? 1 : 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

 /**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let open = 0
  
    let res = ''

    for (let i=0;i<s.length;i++) {
        if (s[i] == '(') {
            if (open > 0) {
                res += '('
            }
            open++
        } else if (s[i]==')') {
            if (open > 1) {
                res += ')'
            }
            open--
        }
    }

    return res
};

/**
 * @param {number[]} prices
 * @return {number[]}
 */
 var finalPrices = function(prices) {
    let diff = 0
    let answer = [...prices]

    for (let i = 0;i<prices.length;i++) {
        let cur = prices[i]
        for (let j=i+1;j<prices.length;j++){
            let peek = prices[j]
            if (cur >= peek) {
                diff = cur - peek
                answer[i] = diff
                break
            }
        }
    }

    return (answer)


};

/**
 * @param {number[]} prices
 * @return {number[]}
 */
 var finalPrices = function(prices) {
    let res = []
    let stack = []

    for (let i=prices.length-1;i>=0;i--) {
        while(stack.length > 0 && stack[stack.length-1] > prices[i]) stack.pop()

        res[i] = stack.length == 0 ? prices[i] : prices[i] - stack[stack.length-1]
        stack.push(prices[i])
    }

    return res
};

/**
 * @param {string[]} operations
 * @return {number}
 */
 var calPoints = function(operations) {
    let record = []
    for (let i=0;i<operations.length;i++) {
        if (operations[i] == '+') {
            let temp = record[record.length-1] + record[record.length-2]
            record.push(temp)
        }
        else if (operations[i] == 'C') {
            record.pop()
        }
        else if (operations[i] == 'D') {
            let lastRec = record[record.length-1] * 2
            record.push(lastRec)
        } else {
            record.push(Number(operations[i]))
        }
   
    }

    console.log(record.reduce((a,b)=>a+b, 0))
    return record.reduce((a,b)=>a+b, 0)
};

/**
 * @param {string[]} operations
 * @return {number}
 */
 var calPoints = function(operations) {

    let stack = []
    for (let i=0;i<operations.length;i++) {
        if (operations[i] == '+') {
            stack.push((stack[stack.length-1] || 0) + (stack[stack.length-2] || 0))
        }
        else if (operations[i] == 'C') {
            stack.pop()
        }
        else if (operations[i] == 'D') {
            stack.push((stack[stack.length-1] || 0) * 2)
        } else {
            stack.push(Number(operations[i]))
        }

    }
    return stack.reduce((a,b)=>a+b, 0)
};

/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
 var countStudents = function(students, sandwiches) {
    while (students.length > 0 && students.indexOf(sandwiches[0]) != -1) {
        if (students[0] == sandwiches[0]) {
            students.shift()
            sandwiches.shift()
        }
        else students.push(students.shift())
    }
    return students.length
};

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    // buy low and sell high
    let profit = 0
    let curMin = prices[0]
    let curMax = prices[0]
    for (let i=0;i<prices.length;i++) {
        if (prices[i] < curMin) {
            curMin = prices[i]
            curMax = prices[i]
        } else if (prices[i] > curMax) {
            curMax = prices[i]
        }

        profit = Math.max(curMax-curMin, profit)


    }
    return profit
};

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    // buy low and sell high
    let profit = 0
    let curMin = prices[0]
   
    for (let i=0;i<prices.length;i++) {
        curMin = Math.min(prices[i], curMin)

        if (prices[i] - curMin > profit) {
            profit = prices[i] - curMin
        }
    }

    return profit
};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let i = 0, j = s.length - 1;
  while (i < j) {
    // ES6 destructuring assignment
    [s[i], s[j]] = [s[j], s[i]];
    i++;
    j--;
  }
};

/**
 * @param {number} n
 * @return {string[]}
 */
 var fizzBuzz = function(n) {
    let res = []

    for (let i=1; i<=n;i++) {
        if (i <= 2 ) res.push(String(i))
        else if (i % 3 == 0 && i % 5 == 0) res.push('FizzBuzz')
        else if (i % 3 == 0) res.push('Fizz')
        else if (i % 5 == 0) res.push('Buzz')
        else res.push(String(i))
    }

    return res
};

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
    return( n.toString(2).split('').filter(e=>e=='1').length)
};

/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
   
    let temp = s.replaceAll(/[^a-zA-Z0-9]/g, '').toLowerCase()
    let l = 0
    let r = temp.length-1

    while (l<r) {

        if(temp[l] == temp[r]) {
            
            l++
            r--
        } else return false
    }

    return true
};

/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function(n) {
    while (n > 0 ) {

        n = n/3
        if (n==1) return true
    }
    return false

};

/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function(n) {
    if (n==1) return true
    while (n > 0 ) {

        n = n/3
        if (n==1) return true
    }
    return false

};

/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function(n) {
    
    while (n > 1 ) {

        n /=  3
      
    }
    return n===1

};

/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    let dict = {}
    for (let i=0;i<nums.length;i++) {
        if (dict[nums[i]]) {
            dict[nums[i]]++
        } else {
            dict[nums[i]] = 1
        }
    }

    let value = Object.values(dict).sort((a,b)=>b-a)

    return Object.keys(dict).find(e=>dict[e] === value)
};

/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    let map = new Map()
    let max = null
    for (let i of nums) {
        let cur = map.get(i)

        if (cur) {
            cur.count++
            map.set(i, cur)
            if (max == null || max.count < cur.count) {
                max=cur
            }
        } else {
            map.set(i, {value: i, count:1})
            if (!max) max= {value: i, count:1}
        }
    }

    return max ? max.value : -1 
};

var moveZeroes = function(nums) {
    let j = 0  // nonzero count
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        // swap elements
        [nums[j], nums[i]] = [nums[i], nums[j]]
        j++
      }
    }
  };

  /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null
    let curA = headA
    let curB = headB

    while (curA != curB) {
        curA = curA == null ? headB : curA.next
        curB = curB == null ? headA : curB.next
    }
    return curA


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
 var isSymmetric = function(root) {
    if (root == null) return true;
    function checkTree (left, right) {
        if (left == null && right == null) return true
        if (left == null || right == null) return false
        if (left.val !== right.val) return false

        return checkTree(left.left, right.right) && checkTree(left.right, right.left)
    }    
    return checkTree(root.left, root.right)
};

/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    let carry = 0
    let sum = 1
    let newDigits = [...digits]
    for (let i=digits.length-1; i>=0; i--) {
    console.log(i)
        sum = sum + digits[i]

        if (sum >= 10) {
            carry = 1
            sum = sum - 10
        }
        newDigits[i] = sum
        sum = carry
        carry = 0
    }

    if ( sum > 0) {
        newDigits.unshift(1)
    }
    console.log(newDigits)
    return newDigits
};

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    let insertPos = m + n - 1
    m--
    n--
    while (n>=0) {
        nums1[insertPos--] = (nums1[m] > nums2[n]) ? nums1[m--] : nums2[n--]
    }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    for (let i=0;i<=nums.length;i++) {
        if (nums.indexOf(i) < 0) return i
    }
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var buildArray = function(nums) {
    
    let res = []

    for (let i=0;i<nums.length;i++) {
        res.push(nums[nums[i]])
    }

    return res
};

/**
 * @param {number[]} nums
 * @return {number}
 */
 var differenceOfSum = function(nums) {
    let total = nums.reduce((a,b)=>a+b,0)
    let total2 = 0
    for (let i=0; i<nums.length;i++) {
        total2 += Number(String(nums[i]).split('').reduce((a,b)=>Number(a)+Number(b)))
        
    }
    return Math.abs(total - total2)
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var sortedArrayToBST = function(nums, start = 0, end = nums.length-1) {
    if (start <= end) {
        let mid = Math.floor((start+end) / 2)

        let root = new TreeNode(nums[mid])
        root.left = sortedArrayToBST(nums, start, mid-1)
        root.right = sortedArrayToBST(nums, mid+1, end)
        return root
    }

    return null

};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    let dict = {}
 
    for (let i=0;i<s.length;i++) {
        if (dict[s[i]]) dict[s[i]]++
        else dict[s[i]] = 1
    }
 
    for (let j=0;j<t.length;j++) {
        if (dict[t[j]]) dict[t[j]]--
        else return false
    }
 
     let values = Object.values(dict)
 
     for (let i=0;i<values.length;i++) {
         if (values[i] != 0) return false
     }
 
     return true
 };

 
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    let dict = {}
    if (s.length !== t.length) return false
 
    for (let i=0;i<s.length;i++) {
        if (dict[s[i]]) dict[s[i]]++
        else dict[s[i]] = 1
    }
 
    for (let j=0;j<t.length;j++) {
        if (dict[t[j]]) dict[t[j]]--
        else return false
    }
 
     return true
 };

 /**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let maxPoint = 0
    let cur = 0
    for (let i = 0; i<gain.length; i++) {
        cur = cur + gain[i]
        maxPoint = Math.max(maxPoint, cur)
    }
    return maxPoint
};

/**
 * @param {number[][]} mat
 * @return {number}
 */
 var diagonalSum = function(mat) {
    let total = 0

    for (let i = 0;i<mat.length;i++) {
        if (i == Math.floor(mat.length/2) && mat.length%2 == 1) {
            total += mat[i][i]
        } else {
            console.log(mat[i][0+i], mat[i][mat.length-1-i])
            total += mat[i][0 + i] + mat[i][mat.length-1-i]
        }

    }

    return total
};

/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
 var prefixCount = function(words, pref) {
    let total = 0

    for (let i=0;i<words.length;i++) {
        
        let word = words[i].slice(0, pref.length)
        if (word == pref) total+=1
    }

    return total
};

/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
 var prefixCount = function(words, pref) {
    let total = 0

    for (let i=0;i<words.length;i++) {
        if (words[i].startsWith(pref)) total+=1
    }

    return total
};

/**
 * @param {number} n
 * @return {number[]}
 */
 var sumZero = function(n) {
    let mid = Math.floor(n/2)
    let res = []
    for (let i=1;i<=mid;i++) {
        res.push(i, -i)
    }

    if (n%2==1) {
        res.push(0)
    }

    return res
};

/**
 * @param {string[]} words
 * @return {string}
 */
 var firstPalindrome = function(words) {
    
    for (let i=0;i<words.length;i++) {
        if (checkPal(words[i])) return words[i]
    }
    return ''

    function checkPal (word) {
        let mid = Math.floor(word.length/2)

        if (word.length % 2 == 0) {
            let first = word.slice(0, mid)
            let sec = word.slice(mid).split('').reverse().join('')
    
            if (first == sec) return true
            else return false
        } else {
            let first = word.slice(0,mid)
            let sec = word.slice(mid+1).split('').reverse().join('')
            if (first == sec) return true
            else return false    
        }
    }
};

var firstPalindrome = function(words) {
    for (const currentWord of words){
      if (isPalindrome(currentWord)){
        return currentWord;
      }
    }
    return '';
  };
  
  function isPalindrome(string){
      let left = 0;
      let right = string.length - 1;
  
      while(left < right){
        if (string[left] !== string[right]){
          return false;
        }
        left++;
        right--;
      }
      return true;
    }

/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
 var minMovesToSeat = function(seats, students) {
    let res = 0
    seats.sort((a,b)=> a-b)
    students.sort((a,b)=> a-b)
    for (let i=0;i<seats.length;i++) {
        res += Math.abs(seats[i] - students[i]) 
    }

    return res
};

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var truncateSentence = function(s, k) {
    return s.split(' ').slice(0, k).join(' ')
};
var truncateSentence = function(s, k) {
    let newStr = "";
    for (let i = 0; i < s.length; i++) {
        if (k === 0) return newStr;
        else {
            if (s[i] === " ") {
                k--;
                if (k === 0) return newStr;
                else newStr += s[i];
            } else {
                newStr += s[i];
            }
        }
    }
    return newStr;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
    let one = 0
    let two = 0

    for (let i = 0; i<nums.length; i++) {
        if (nums[i] > one) {
            two = one
            one = nums[i]
        } else if (nums[i] > two ) {
            two = nums[i]
        }
    }

    return (one-1) * (two-1)
};