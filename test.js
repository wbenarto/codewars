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

// class Trees {
//   constructor(val, left, right) {
//     this.val = val;
//     this.left = left;
//     this.right = right;
//   }
// }

// const newTree = new Trees(10, 2, 3);
// console.log(newTree);

// function TreeNode(val) {
//   this.val= val;
//   this.left = this.right = null
// }

// let lowestCommonAncestor = (root, p, q) => {

// }

class Node {
  constructor (value, left, right) {
    this.value = value
    this.left = left
    this.right = right
  }
}

class BST {
  constructor (value) {
    this.root = new Node(value)
  }

  insert(value) {
    let newNode = new Node(value)
    if (!root) {
      
    }
  }
}