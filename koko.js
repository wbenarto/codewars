const piles = [3,6,7,11]
const piles2 = [30,11,23,4,20]
const piles3 = [30,70 ,11,23,4,20]
const piles4 = []
var minEatingSpeed = function(piles, h) {
    let maxNum = Math.max(...piles)
    console.log(maxNum)
    let result = maxNum
    let left = 0
    let right = Math.max(...piles)

    while( left <= right ) {
        let k = Math.floor((left+right)/2)
        let hours = 0

        for (let each of piles) {
            hours += Math.ceil(each/k)
        }
   

        if (hours <= h) {
            result = Math.min(result,k)
            right = k - 1
        } else {
            left = k + 1
        }
        // console.log(result, hours, k)
    }
    console.log(result)
    return result
};

// minEatingSpeed(piles, 3)
// console.log(piles.reduce((a,b) => a + b) / 8)
// console.log(piles2.reduce((a,b) => a + b) / 5)
console.log(minEatingSpeed(piles, 8))