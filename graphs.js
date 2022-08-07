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


/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxAreaOfIsland = function(grid) {
    // maxArea
    // loop thru the grid, find island
    // once island found, run recursive to eplore
    // once island done, keep the max value
    // return
    
    let maxArea = 0
    const visited = new Set()  
    
    for (let r=0; r<grid.length;r++) {
        for (let c=0;c<grid[0].length; c++) {
        
            maxArea = Math.max(maxArea, explore(grid, r ,c ,visited, maxArea))

            
        }
    }
    return maxArea
};

const explore = (grid, r , c, visited, maxArea) => {
    const rowInbounds = 0 <= r && r < grid.length;
    const colInbounds = 0 <= c && c < grid[0].length;
    if (!rowInbounds || !colInbounds) return 0
    
    if (grid[r][c] == 0) return 0
    
    const pos = r +',' + c
    if (visited.has(pos)) return 0
    visited.add(pos)
    maxArea += 1
    
    return 1 + explore(grid, r - 1, c , visited, maxArea) +             explore(grid, r + 1, c , visited, maxArea) +
    explore(grid, r, c - 1 , visited, maxArea)+
    explore(grid, r, c + 1 , visited, maxArea)
    
   
}