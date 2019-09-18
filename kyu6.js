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



function numericals(input) {
    let obj = {};
    let result = "";
    for (let i = 0; i < input.length; i += 1) {
        let current = input[i];
        if (obj[current]) {
            obj[current] += 1;
        } else {
            obj[current] = 1;
        }

        result += obj[current];
    }

    return result;
}

const numericals = (str, seen = {}) =>
  str.replace(/./g, char => 
    seen[char] = (seen[char] || 0) + 1)