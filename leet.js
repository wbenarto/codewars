// class TreeNode {
//   constructor(val = 0, left = null, right = null) {
//     this.val = val;
//     this.left = left;
//     this.right = right;
//   }
// }

// let preorder = [3, 9, 20, 15, 7];
// let inorder = [9, 3, 15, 20, 7];

// function buildTree(preorder, inorder) {
//   if (preorder.length == 0 && inorder.length == 0) {
//     return null;
//   }

//   let tree = new TreeNode(preorder[0]);

//   let midIdx = inorder.indexOf(tree.val);
//   let leftSub = inorder.slice(0, midIdx);
//   let rightSub = inorder.slice(midIdx + 1);

//   let leftPre = preorder.filter((val) => leftSub.includes(val));
//   let rightPre = preorder.filter((val) => rightSub.includes(val));
//   tree.left = buildTree(leftPre, leftSub);
//   tree.right = buildTree(rightPre, rightSub);
//   //   tree.left = preorder[1];
//   //   tree.right = preorder[2];
//   console.log(tree);
//   return tree;
// }

// console.log(buildTree(preorder, inorder));

// class TreeNode {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// let a = new TreeNode("a");
// let b = new TreeNode("b");
// let c = new TreeNode("c");
// let d = new TreeNode("d");
// let e = new TreeNode("e");
// let f = new TreeNode("f");

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// function depthFirst(root) {
//   let stack = [root];
//   console.log(root);

//   while (stack.length) {
//     node = stack.pop();
//     console.log(node.val);
//     if (node.right) {
//       stack.push(node.right);
//     }
//     if (node.left) {
//       stack.push(node.left);
//     }
//   }
// }

// function breadthFirst(root) {
//   if (!root) return;
//   let queue = [root];

//   while (queue.length) {
//     node = queue.shift();
//     console.log(node.val);

//     if (node.left) queue.push(node.left);
//     if (node.right) queue.push(node.right);
//   }
// }
// // depthFirst(a);
// breadthFirst(a);

function depthFirstSearch(root, targetVal) {
  let stack = [root];

  while (stack.length) {
    let node = stack.pop();
    console.log(node);
    if (node.val === targetVal) {
      return node;
    }

    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }

  return null;
}

function breadthFirstSearch(root) {
  let queue = [root];
  let result = [];

  while (queue.length) {
    let node = queue.shift();
    result.push(node.val);

    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return result;
}
