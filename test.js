// const prom = new Promise((res ,rej ) => {
//     setTimeout(() => {
//         res("prom")
//     }, 1000)
//     setTimeout(()=> {
//         rej(new Error('!prom'))
//     })
// })

// prom.then(function(arg) {
//     console.log(arg)
//     return new Promise((res, rej) => {
//         rej(new Error("!arg"))
//     }).catch((err) => {
//         console.log(err.message)
//     })
// }).catch(err=>{
//     console.log(err.message)
// })
// const name = "I am big";

// const obj = {
//   age: 10,
//   name: "billy",
//   sayName() {
//     console.log("my name is " + name);
//   },
//   sayLast: function () {
//     console.log("last name is " + this.last);
//   },
//   last: "auuuu",
// };

// console.log(obj);
// console.log(obj.name);
// console.log(obj.sayName());
// console.log(obj.sayLast());
// obj.sayName();
// console.log(obj["age"]);
// obj.newProp = "I am new";
// console.log(obj);
// obj.name = "not Billy";
// console.log(obj);

// var isPalindrome = function (x) {
//   // even 220022 mid = 2 compare mid
//   // odd 22022 mid = 2
//   let term = String(x).split("");
//   let mid = Math.floor(term.length / 2);
//   for (let i of term) {
//     let last = term.length - i - 1;
//     console.log(term[i], term[last]);
//     if (term[i] != term[last]) {
//       return false;
//     }
//   }
//   return true;
// };

// isPalindrome(-121);
// isPalindrome(2000);
// // console.log(isPalindrome(-121));
// console.log(isPalindrome("200000"));

// let str = "fl";

// let arr = ["flower", "flow", "flight"];

// console.log(/[${str}]/.test(arr[1]));
// console.log(arr[1].includes(str));
// function longestCommonPrefix(strs) {
//   if (!strs.length) return "";

//   for (let i = 0; i < strs[0].length; i++) {
//     for (let str of strs) {
//       console.log(str[i]);
//       console.log(strs[0][i]);
//       if (str[i] !== strs[0][i]) {
//         return str.slice(0, i);
//       }
//     }
//   }

//   return strs[0];
// }

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// console.log(longestCommonPrefix(["dog", "ogway", "sdfsjkljogsjkdhfsk"]));

// console.log("a".charCodeAt(0) - 97);

// const object1 = { a: 43 };
// object1.property1 = 42;

// console.log(object1.hasOwnProperty("property1"));
// expected output: true

// console.log(object1.hasOwnProperty("toString"));
// expected output: false

// console.log(object1.hasOwnProperty("hasOwnProperty"));
// expected output: false
// console.log(object1);
// console.log(object1.property1);
// console.log(object1.a);

// console.log(object1);
// console.log(-121 / 6);
// console.log(6 / -121);
// console.log(Math.floor(6 / -121));
// console.log(Math.round(6 / -121));
// console.log(Math.ceil(6 / -121));
// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 5000);
// }
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor(value) {
    this.root = new Node(value);
    this.count = 1;
  }

  size() {
    return this.count;
  }

  insert(value) {
    this.count += 1;
    let newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return;
    } else {
      const searchTree = (node) => {
        if (value < node.value) {
          if (!node.left) {
            node.left = newNode;
          } else {
            searchTree(node.left);
          }
        } else if (value > node.value) {
          if (!node.right) {
            node.right = newNode;
          } else {
            searchTree(node.right);
          }
        }
      };
      searchTree(this.root);
    }
  }

  findMin() {
    let curMin = this.root;
    while (curMin.left) {
      curMin = curMin.left;
    }
    return curMin.value;
  }

  findMax() {
    let curMax = this.root;
    while (curMax.right) {
      curMax = curMax.right;
    }
    return curMax.value;
  }

  search(value) {
    let cur = this.root;
    if (!cur) {
      return null;
    }
    while (value !== cur.value) {
      if (value < cur.value) {
        cur = cur.left;
      } else if (value > cur.value) {
        cur = cur.right;
      }
      if (cur == null) {
        return "not found";
      }
    }

    return cur.value;
  }

  dfsInOrder() {
    // left, root ,right
    let res = [];

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      res.push(node.value);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return res;
  }

  dfsPreOrder() {
    // root, left, right
    let res = [];
    const traverse = (node) => {
      res.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return res;
  }

  dfsPostOrder() {
    // left, right ,root
    let res = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      res.push(node.value);
    };
    traverse(this.root);
    return res;
  }

  bfs() {
    let res = [];
    let queue = [];

    queue.push(this.root);

    while (queue.length) {
      let curNode = queue.shift();
      res.push(curNode.value);

      if (curNode.left) queue.push(curNode.left);
      if (curNode.right) queue.push(curNode.right);
    }

    return res;
  }

  remove(value) {
    const removeNode = (node, val) => {
      if (node === null) {
        return null;
      }

      if (node.value == val) {
        if (node.left == null && node.right == null) {
          return null;
        }
        if (node.left == null) {
          return node.right;
        }
        if (node.right == null) {
          return node.left;
        }

        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.value = tempNode.value;
        node.right = removeNode(tempNode.right, tempNode.value);
      } else if (val < node.val) {
        node.left = removeNode(node.left, val);
        return node;
      } else {
        node.right = removeNode(node.right, val);
        return node;
      }
    };

    this.root = removeNode(this.root, value);
    return this.root;
  }
}

let newTree = new BST(4);
console.log(newTree);
newTree.insert(1);
newTree.insert(10);
newTree.insert(22);
newTree.insert(34);
newTree.insert(17);
newTree.insert(60);
console.log(newTree);

console.log("min is " + newTree.findMin());
console.log("max is " + newTree.findMax());
console.log("find me 22 " + newTree.search(22));
console.log("find me 10 " + newTree.search(10));
console.log("find me 2 " + newTree.search(2));
console.log(newTree.dfsInOrder());
console.log(newTree.dfsPreOrder());
console.log(newTree.dfsPostOrder());
console.log(newTree.bfs());

console.log(newTree.remove(60));
console.log(newTree.bfs());

console.log(newTree.remove(17));
console.log(newTree.bfs());

// newTree.insert(3);
// newTree.insert(2);
// newTree.insert(12);
// newTree.insert(36);
// newTree.insert(28);
// newTree.insert(39);
