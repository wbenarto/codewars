// --- 1 --- Return accum("abcd") -> "A-Bb-Ccc-Dddd" ---
// function accum(s) {
//     return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
//   }

// --- 2 --- Circle of numbers ---
// function circleOfNumbers(n, firstNumber) {
//     //coding and coding..
    
//     return (firstNumber + n/2) % n
//   }

// --- 3 --- Calculate year until hit target population ---
// function nbYear(p0, percent, aug, p) {
//     // your code
//     // loop thru year until hit target population
//     for (var y=0; p0 < p; y++) 
//     p0 = p0 * (1 + percent/100) + aug
//     return y
// }

// --- 4 --- Find the minimum sum of an array --- .sort()
// function minSum(arr) {
//     // your code here
//     // add sums of i & -i index
//     // sort array, loop through it, and multiply it to -1 ,stop when arr.length/2
//     // last index is arr.length - 1
//     let sortedArr = arr.sort( (a, b) =>  a - b )
//     let sum = 0;
//     for (var i = 0; i < sortedArr.length/2; i++) {
//       sum += sortedArr[i] * sortedArr[sortedArr.length - (i+1)]
//     }
//     return sum
//   }

// --- 5 --- find last 2 digits divisible by 7 and find how many steps it took ---
// function seven(m) {
//     // your code
//     // m = 10x + y is divisible by 7 
//     // m = x - 2y is divisible by 7 use %7 = 0
//     // subtract 2 times the last digit
//     // for loop the steps that you take out a number
//     var steps = 0;
//       while(m.toString().length>2){
//         m=Math.floor(m/10)-(m%10)*2;
//         steps++;
//       }  
//     return [m, steps];
//     // 160 -6 = 154 => while loop 15 - 8 = 7 
// }