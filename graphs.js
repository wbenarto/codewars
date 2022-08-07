/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
 var cloneGraph = function(node) {
    console.log(node)
    let visited = {}
    
    const dfs = (node) => {
        if (!node) return node
        if (node.val in visited) return visited[node.val]
        let copy = new Node(node.val)
        visited[node.val] = copy
        for (let each of node.neighbors) {
            copy.neighbors.push(dfs(each))
        }
        
        return copy
        
    }
    console.log(dfs(node))
    
    return dfs(node)

        

};