// binary search tree

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
    this.count = 0;
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
  //   add(data) {
  //     const node = this.root;
  //     if (node === null) {
  //       this.root = new Node(data);
  //       return;
  //     } else {
  //       const searchTree = function (node) {
  //         if (data < node.data) {
  //           if (node.left === null) {
  //             node.left = new Node(data);
  //             return;
  //           } else if (node.left !== null) {
  //             return searchTree(node.left);
  //           }
  //         } else if (data > node.data) {
  //           if (node.right === null) {
  //             node.right = new Node(data);
  //             return;
  //           } else if (node.right !== null) {
  //             return searchTree(node.right);
  //           }
  //         } else {
  //           return null;
  //         }
  //       };
  //       return searchTree(node);
  //     }
  //   }
  //   findMin() {
  //     let current = this.root;
  //     while (current.left !== null) {
  //       current = current.left;
  //     }
  //     return current.data;
  //   }
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

    while (cur.value !== value) {
      if (value < cur.value) {
        cur = cur.left;
      } else {
        cur = cur.right;
      }
      if (cur == null) {
        return null;
      }
    }
    return cur;
  }

  dfsInOrder() {
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

  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  remove(data) {
    const removeNode = function (node, data) {
      if (node === null) {
        return null;
      }
      if (data == node.data) {
        if (node.left == null && node.right == null) {
          return null;
        }
        if (node.left == null) {
          return node.right;
        }
        if (node.right == null) {
          return node.left;
        }
        // node has two children
        var tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }
}

const newTree = new BST(4);
console.log(newTree);
newTree.insert(2);
console.log(newTree);
newTree.insert(7);
console.log(newTree);
newTree.insert(6);
console.log(newTree);

console.log(newTree.findMin());
console.log(newTree.findMax());

console.log(newTree.search(7));
console.log(newTree.search(2));
console.log(newTree.search(24));
console.log(newTree.search(4));

console.log(newTree.dfsInOrder());
console.log(newTree.dfsPreOrder());
console.log(newTree.dfsPostOrder());

console.log(newTree.bfs());

// Max Depth on BST using DFS
var maxDepth = function (root) {
  if (!root) return 0;

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

// Max Depth using BFS
var maxDepth = function (root) {
  if (!root) return 0;
  let level = 0;
  let q = [];

  q.push(root);

  while (q.length) {
    for (let i of q) {
      let cur = q.shift();

      if (cur.left != null) {
        q.push(cur.left);
      }
      if (cur.right != null) {
        q.push(cur.right);
      }
    }
    level += 1;
  }

  return level;
};
