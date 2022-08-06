const numIslands = function(grid) {
    const visited = new Set()
    let total = 0

    for (let i=0; i< grid.length; i++) {
        // console.log(i)
        for (let j=0; j< grid[i].length; j++) {

            if (explore(grid, i, j , visited) == true) {total += 1}
            console.log(grid[i][j])
            console.log(visited)
            console.log('total' , total)
        }
    
    
    }
    console.log(total)
};


const explore = (grid, r, c , visited) => {
    console.log('explore', r ,c )
    console.log('row length' , grid.length)
    console.log('col length' , grid.length)
    const rowBounds = 0 <= r && r < grid.length
    const colBounds = 0 <= c && c < grid[0].length
    console.log(rowBounds, colBounds)
    if (!colBounds || !rowBounds) return false
    console.log(r, c)
    if (grid[r][c] === '0') return false

    const pos = r + "," + c
    console.log('pos ', pos)
    if (visited.has(pos)) return false;
    visited.add(pos)

    explore(grid, r - 1, c ,visited)
    explore(grid, r + 1, c ,visited)
    explore(grid, r, c - 1 ,visited)
    explore(grid, r, c + 1 ,visited)

    return true
}

const grid1 = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
]

const grid2 = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","1"],
    ["0","1","0","1","0"]
]
const grid3 = [
    ["1","1","0","1","0"],
    ["0","0","0","0","0"],
    ["1","0","0","0","0"],
    ["0","0","1","0","0"]
]
const grid4 = 
[["1","0","1","1","0","1","1"]]
// numIslands(grid1)
// numIslands(grid2)
// numIslands(grid3)
numIslands(grid4)