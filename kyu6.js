// --- 1 --- return Primorial of number --- 
// function isPrime(num) {
//   for (var i =2; i<num; i++) {
//     if(num%i===0){
//       return false
//     }
//   }
//   return true
// }

// function numPrimorial(n){
//   //your code here
// //   let result = 0
// //   for (var i=2; i<n ; i+2) {
// //     result *= i
// //   }
  
// //   return result
// let arr = []
//   let i = 2
//   while(arr.length < n){
//     if(isPrime(i)){
//       arr.push(i)
//     }
//    i++
//   }
//   return arr.reduce((a,b) => a * b)
// // return n.map(e => e.reduce((a,b)=> a*b)))
// }

// --- 2 --- 
// function choose(n,k){
//     return (k === 0)? 1 : choose(n - 1,k - 1) * n/k ; 
// }    

// function numericals(input) {
//     let obj = {};
//     let result = "";
//     for (let i = 0; i < input.length; i += 1) {
//         let current = input[i];
//         if (obj[current]) {
//             obj[current] += 1;
//         } else {
//             obj[current] = 1;
//         }

//         result += obj[current];
//     }

//     return result;
// }

// const numericals = (str, seen = {}) =>
//   str.replace(/./g, char => 
//     seen[char] = (seen[char] || 0) + 1)

function hasSubpattern(string){
    for (let i = 0; i < string.length; i++) {
      const abr = string.slice(0, i)
      if (string.length % abr.length === 0 && abr.repeat(string.length / abr.length) === string) return true
    }
    return false
  }


--- 3 --- mirrors with 4 coordinates check if ray hits (0,0) or (maxX,maxY) ---
// function reflections(maxX, maxY) {
//   let curX = 0;
//   let curY = 0;
//   let dX = 1;
//   let dY = 1;
//   do {
//     curX += dX;
//     curY += dY;
//     if (curX === maxX || curX === 0) {
//       dX *= -1;
//     }
//     if (curY === maxY || curY === 0) {
//       dY *= -1;
//     }
//   } while(!((curX === 0 || curX === maxX) && (curY === 0 || curY === maxY)));
//   return (curX === 0 && curY === 0) || (curX === maxX && curY === maxY);
// }

--- 4 --- Diagonal grid ---
function getDiagonalCode(grid) {
  // write your code here
  console.log(grid)
  // pattern : 1(1) 2(2) 3(3) 4(4) last(last) 
  // pattern : 4(6) 3(7) 2(8)
  
  
}
