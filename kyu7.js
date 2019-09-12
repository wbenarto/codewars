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

// --- 6 --- Find Max Multiple --- 
// --- first attempt ---
// function maxMultiple(divisor, bound){
//     //your code here
//     // return the largest interger N that are divisible by divisor 
//     // N is less than equal to bound and greater than 0
//     // loop thru bound, find that are divisible to divisor, stop and return N
//     // N % divisor is 0
//     let result = [];
//     for (var i = 0; i < bound; i++) {
//       result.push(i%divisor == 0)
//     }
//     return result[result.length-1];
    
//   }

// --- similar solution ---
// function maxMultiple(divisor, bound){
//     for(let N=bound; N>0; N--)
//       if( (N%divisor) == 0 && N<=bound && N > 0)
//         return N;
//     return 0;
//   }

// --- Best solution ---
// return bound - bound%divisor

// --- 7 --- Make class ---
// function makeClass(...properties) {
//     return class {
//       constructor(...props) {
//         properties.forEach((prop, index) => {
//           this[prop] = props[index]
//         })
//       }
//     }
//   }
// function makeClass(...properties) {
//     return class {
//         constructor(...props){
//             properties.forEach(prop, index){
//                 this[prop] = props[index]
//             }
//         }
//     }
// }

// --- 8 --- sum up alphabeth in array ---
// var alphabet = 'abcdefghijklmnopqrstuvwxyz';
// function addLetters(...letters) {
//   var sum = 25;
//   for (var letter of letters)
//     sum += alphabet.indexOf(letter) + 1;
//   return alphabet[sum % 26];  
// }

// function addLetters(...letters) {
//     return String.fromCharCode((x)%26+97)
//     return String.fromCharCode(letters.reduce(x)%26+97)
//     return String.fromCharCode(letters.reduce()%26+97)
//     return String.fromCharCode((letters.reduce( (a,b) => a+b.charCodeAt(0)-96, 0)+25)%26+97);
// }

--- 9 --- 
function solve(s){
    //split, loop thru s and look for consecutive vowels
   return Math.max(s.split(/'aeiou'/).length)
   
  }


//   --- 10 --- Sum of Cubes ---
//   --- first Attempt ---
//   function sumCubes(n){
//     // ...
//     // loop one thru n, cubed, and sum
//     let sum = 0;
//     for (var i = 1; i < n+1; i++) {
//       sum+=(i*i*i)
//     }
//     return sum
//   }