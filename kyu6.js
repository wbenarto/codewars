// --- 1 --- return Primorial of number --- 
// function isPrime(num) {
//   for (var i =2; i<num; i++) {
//     if(num%i===0){
//       return false
//     }
//   }
//   return true
// }

import { DH_UNABLE_TO_CHECK_GENERATOR } from "constants"

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

--- 4 --- Find a slice of prime number ---
// prime num is not declared in arguments, so we need to create a function to check
// function is prime takes a num check if prime
function isPrime(num) {
  for(let i = 2; i <= Math.floor(num/2);i++){
    if (num % i === 0) { return false }
  }
  return true
}

// set result to empty string, num start at two
// a is index when it starts, b is how many. declaring the max of result
// while result.length < a + b
// if num which starts at two, is prime, if it is, push it into result as a string, 
// if not, do nothing, keep checking the number by ++ until met with while condition
// return the result slicing(from index a, to index a+b)
function solve(a,b){
  let result = '';
  let num = 2;
  while (result.length < a+b){
    if(isPrime(num)) {result += num.toString();}
    num++;
  }
  return result.slice(a,a+b);
}


--- 5 --- STUCK ---
// approached the problem with recursive function in mind. 
// issue is to move operand to calculate the second operand argument

function calculate(expression) {

  // recursive function
  // find the operand, calculate two nums
  // if next is an operand, calculate two nums
  console.log(expression)
  let result = 0
  console.log(expression.split(' '))
  let arr = expression.split(' ')
  for (var i=0; i<arr.length; i++) {
    
     if (arr[i] && arr[i+1] !== Number) {
     let currentIndex = arr[i+1]
     }
    
    let recursive = (operand) => {
       switch (operand) {
         case "+":
          return Number(arr[currentIndex]) + Number(arr[currentIndex+1]);
          break;
        case "-":
          return Number(arr[currentIndex]) - Number(arr[currentIndex+1]);
          break;
        case "/":
          return Number(arr[currentIndex]) / Number(arr[currentIndex+1]);
          break;
        case "*":
          return Number(arr[currentIndex]) * Number(arr[currentIndex+1]);
          break;
        default: return Number(arr[currentIndex])
       }
    }
  
    console.log(recursive(arr[i]))
  
    if (arr[i] && arr[i+1] !== Number) {
      
      let first = recursive(arr[i+1])
      console.log('first: ' + first)
      return recursive(arr[i])
    } else return arr[i]
  }
//   return Number(expression);
}

// solution 
function calculate ( expression ) {
  const stack = [];
  const operations = {
      '+': () => (stack.push(stack.pop() + stack.pop())),
      '-': () => (stack.push(stack.pop() - stack.pop())),
      '*': () => (stack.push(stack.pop() * stack.pop())),
      '/': () => (stack.push(stack.pop() / stack.pop()))
  };
  
  for ( let token of expression.split(' ').reverse() )
      operations[token] ? operations[token]() : stack.push(+token);
  
  return stack[0];
}

('+', '2', '1')
// expression split and reversed
// ('1', '2', '+')
// if token is operations, run operations[token]()
// operations[token]()
// 

--- 6 --- 
-- convert num to bits then find out how many bits for each n ---
var countBits = function(n) {
  // Program Me
  console.log(n)
//   return n.toString(2).split('').reduce((a,b)=> parseInt(a) + parseInt(b), 0)
// toString will get n to bits
console.log(n.toString(2).split(''))
console.log(n.toString(2).split('').reduce((a,b) => parseInt(a) + parseInt(b), 0))
};

--- 7 --- STUCK
function maxBall(v0) {
  // your code
  // h = velocity * t - 0.5 * 9.81 * t * t
  // h = t(v-0.5*9.81*t)
  // t = h/(v - 0.5 * 9.81 * t)
  
  
  // looking for time of maximum height recorded
  console.log(v0)
  let g = 9.81*0.5
  let vMeter = v0 * (1000/3600)
  let h = vMeter * t - g * t * t 
  
  // find max height 
  for (var t = 0, h = []; t < 100; t++ ) {
    
  }
  
}
--- solution ---
// adjust time to seconds to tenths, v to mpks and divide by g
function maxBall(v0) {
  const g = 9.81, mpsToKph = 3.6, secondsToTenths = 10;
  return Math.round(secondsToTenths * v0 / mpsToKph / g);
}