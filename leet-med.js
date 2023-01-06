/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
 var findAndReplacePattern = function(words, pattern) {
    let pdict = {}
    let pmap = ''
    
    for (let i=0;i<pattern.length; i++) {
        const c=pattern[i]
        if (pdict[c] === undefined) {
            pdict[c] = i
        }
        pmap = pmap + pdict[c]
    }

    console.log(pmap, pdict)
    let res = []
    for (let i=0;i<words.length;i++) {
        let wdict = {}, w=words[i], wmap = ''
        for (let j=0; j<w.length;j++) {
            const c = w[j]
            if (wdict[c] === undefined) {
                wdict[c] = j
            }
            wmap = wmap + wdict[c]
        }
        if (wmap == pmap){
            res.push(w)
        }
    }
    return res
};


function ArrayChallenge(arr) { 

    let res = []
    let seats = arr[0]
    let seated = arr.slice(1)
    let trackRes = {}
    let chart = []
    let cols = 2
    let rows = seats/2
  
    for (let i=0; i<seats;i+=2) {
      chart.push([i+1, i+2])
    }
   
    for (let row=0; row<rows; row++) {
      for (let col=0; col<cols; col++) {
  
        let cur = chart[row][col]
     
        if (seated.indexOf(cur) >= 0) {
          continue
        }
  
        // no top
        if (row == 0) {
          // if left : check right bottom
          if (cur%2!=0) {
            checkSeated(cur, chart[row][col+1])
            checkSeated(cur, chart[row+1][col])
          }
          // if right: check left bottom
          else {
            checkSeated(cur, chart[row][col-1])
            checkSeated(cur, chart[row+1][col])
          }
        }
        //no bottom
        else if (row == rows -1 ) {
          // if left: check top right
           if (cur%2!=0) {
            checkSeated(cur, chart[row][col+1])
            checkSeated(cur, chart[row-1][col])
          }
          // if right: check top left
          if (cur%2==0) {
            checkSeated(cur,chart[row][col-1])
            checkSeated(cur, chart[row-1][col])
          }
        }
        // middle nodes
        else {
           if (cur%2!=0) {
              checkSeated(cur, chart[row-1][col])
              checkSeated(cur, chart[row][col+1])
              checkSeated(cur, chart[row+1][col])
  
           } else if (cur%2==0) {
              checkSeated(cur, chart[row-1][col])
              checkSeated(cur, chart[row+1][col])
              checkSeated(cur, chart[row][col-1])
           }
        }
      }
    }
  
    function checkSeated (cur, adj) {
      if (seated.indexOf(adj) < 0 && trackRes[cur] != adj && trackRes[adj] !=cur) {
        trackRes[cur] = adj
        trackRes[adj] = cur
        res.push([cur, adj])
      }
    }
  
    // code goes here  
    return res.length; 
  
  }
  
  function ArrayChallenge(arr) { 
    let maxArea = 0, l=0, r=arr.length-1
    console.log(maxArea, l , r)
  
    while (l <= r) {
      console.log(arr.slice(l, r+1))
      let tempArr = arr.slice(l, r+1)
      let minHeight = Math.min(...tempArr)
      let width = r - l 
      let mid = tempArr.indexOf(minHeight)
      console.log(minHeight)
     
      maxArea = Math.max(minHeight * width, maxArea)
  
      let leftArea = tempArr.slice(l, mid+1).length * Math.min(...tempArr.slice(l, mid+1))
      let rightArea = tempArr.slice(mid+1).length * Math.min(...tempArr.slice(mid))
      console.log('test right', tempArr.slice(mid).length)
      if (leftArea < rightArea) {
        l = mid
        maxArea = Math.max(rightArea,maxArea)
      } else {
        r = mid
        maxArea= Math.max(leftArea, maxArea)
      }
    }
    
    console.log('maxArea' , maxArea)
    // code goes here  
    return arr; 
  
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (preorder.length == 0 || inorder.length == 0) return null

  return build(preorder, inorder)

  function build(preorder, inorder ){
       if (preorder.length == 0 || inorder.length == 0) return null
      const res = new TreeNode(preorder[0])
      const midIdx = inorder.indexOf(preorder[0])
      res.left = build(preorder.slice(1,midIdx+1), inorder.slice(0, midIdx))
      res.right = build(preorder.slice(midIdx+1), inorder.slice(midIdx+1))        

      return res
  }
  


  
};
var buildTree = function(preorder, inorder) {
  let splitTree = function(p, i, pIndex, iLeft, iRight) {
    let rootVal = p[pIndex];
    let root = new TreeNode(rootVal);
    let imid = i.indexOf(rootVal);
        
    if (imid > iLeft) {
      root.left = splitTree(p, i, pIndex + 1, iLeft, imid - 1);
     }
    if (imid < iRight) {
       root.right = splitTree(p, i, pIndex + 1 + (imid - iLeft), imid + 1, iRight);
     }
     return root;
    }
  return splitTree(preorder, inorder, 0, 0, preorder.length-1);
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
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(root, k) {
  // inorder traversal return kth arr res
  let res = []
  function dfs(root) {
      if (!root) return null
      else {
          dfs(root.left)
          res.push(root.val)
          dfs(root.right)
      }
  }
  dfs(root)
  return res[k-1]
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
 * @param {number} n
 * @return {TreeNode[]}
 */
 var allPossibleFBT = function(n) {
  memo = {0:[], 1: [new TreeNode()]}

  function backtrack(n){
      if (memo[n]) return memo[n]

      let res = []
      for (let i=0; i<n;i++) {

          let r = n-1-i

          let leftTrees = backtrack(i)
          let rightTrees = backtrack(r)
  
          for (let t1 of leftTrees) {

              for (let t2 of rightTrees)
                  res.push(new TreeNode(0, t1, t2))
          }

          
      }
      memo[n] = res
      return res
  } 

  return backtrack(n)
  
};

/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
 var getKth = function(lo, hi, k) {
  let hash = new Map()

  function helper (n, count = 0) {
      if (n%2==0) {
          n = n / 2
          count++
      } else if (n%2==1) {
          n = 3*n+1
          count++
      }
      if (n == 1) {
    
          return count
      }
      return helper(n, count)
  }

  for (let i=lo; i<=hi;i++) {
      hash.set(i, helper(i))
  }
  let temp = [...hash.entries()].sort((a,b)=>{
      return a[1]-b[1]
  })
  return temp[k-1][0]
};

/**
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function(tokens) {
  // loop from last 
  // take the 

  let stack = []

  for (let i=0;i<tokens.length;i++) {

      if (tokens[i] == '+') {
          let cur2 = Number(stack.pop())
          let cur1 = Number(stack.pop())
          let temp = cur2 + cur1
          stack.push(temp)
      } else if (tokens[i] == '-') {
          let cur2 = Number(stack.pop())
          let cur1 = Number(stack.pop())
          let temp = cur1 - cur2
          stack.push(temp)
      } else if (tokens[i] == '/') {
          let cur2 = Number(stack.pop())
          let cur1 = Number(stack.pop())
          let temp = cur1/cur2>=0 ? Math.floor(cur1/cur2) : Math.ceil(cur1/cur2)
          stack.push(temp)
      } else if (tokens[i] == '*') {
          let cur2 = Number(stack.pop())
          let cur1 = Number(stack.pop())
          let temp = cur1 * cur2
          stack.push(temp)
      } else { 
          stack.push(Number(tokens[i]))
      }
  }    
  return stack.pop()
};

/**
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function(tokens) {
  let stack = []
  let ops = {
      '+' : (a,b) => a+b,
      '-' : (a,b) => a-b,
      '*' : (a,b) => a*b,
      '/' : (a,b) => a/b>=0 ? Math.floor(a/b) : Math.ceil(a/b)
  }

  for (let i of tokens) {
      if (ops[i]) {
          let b = stack.pop()
          let a = stack.pop()
          stack.push(ops[i](a,b))
      }
      else stack.push(Number(i))
  }
  return stack.pop()
};

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let stack = []
    let res = []

    function bt(open, close) {
        if (open == n && close == n) {
            res.push(stack.join(''))
            return
        }

        if (open < n) {
            stack.push('(')
            bt(open+1, close)
            stack.pop()
        }

        if (close < open) {
            stack.push(')')
            bt(open, close + 1)
            stack.pop()
        }
    }

    bt(0,0)
    return res
};

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 var dailyTemperatures = function(temperatures) {
  let res = Array(temperatures.length).fill(0)
  console.log(res)
  stack = []
  for (let i=0;i<temperatures.length;i++) {
      while(stack.length>0 && temperatures[stack[stack.length-1]]<temperatures[i]) {
          let j = stack.pop()
          res[j] = i-j
      }
      stack.push(i)
  }

  return res
};

/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
 var maxIceCream = function(costs, coins) {
  let sorted = costs.sort((a,b) => a-b)
  let res = 0
  
  for (let i =0;i<costs.length;i++) {
      if (coins <= 0) {
          return res
      } else if (coins >= 0 && coins >= sorted[i]) {
          coins -= sorted[i]
          res++
      }
  }
  return res
};