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


--- 8 --- XOR ^ operation ---
// given hash array of integers
// decode integer into ASCII char code
// get character using the decoded ascii 
// return
function savePepe(hash) {
  // accumulating all integer to be decoded
  return hash.reduce((acc, curr, idx) => {
    const decoded = ((129 *  hash[idx]) ^ (idx === 0 ? 0 : 129 * acc.charCodeAt(idx - 1))) % 256;
    return acc += String.fromCharCode(decoded);
  }, "" )
}

--- 9 --- stuck ---

function getOrder(input) {
  
  let lookup = ["Burger", "Fries", "Chicken", "Pizza", "Sandwich", 
                "Onionrings", "Milkshake", "Coke"]
  const capitalize = word => word.slice(0,1) + word.slice(1);
  const comparator = (a, b) => menu.indexOf(a) - menu.indexOf(b);

  return input.match(new RegExp(menu.join('|'), "ig")).map(capitalize).sort(comparator).join(' ');
  console.log(input)
  
  // look up input, split to each food item
  // sort the food item based on lookup order
  // return each string with Uppercase first letter, and add space in between
  
  // loop thru input, store each letter in temp array until find a match
  // once complete an item, push it into menu 
  
  for (let el of input) {
    console.log(el)
    let word = []
    let temp = []
    let menu = []
    if (word.match(lookup)) {
      word.push(temp)
    } else {
      el.push(word)
    }
    
    console.log(word)
  } 
  
  return "";
}

--- 10 --- So Gewd ---
decodeMorse = function(morseCode){
  //your code here
  let result = ''
  console.log(morseCode)
  let words = morseCode.split('   ')
//   let letters = words.split(' ')
  console.log("words: " + words)
 let letters = words.map( e=> e.split(' '))
//   let translate = letters.map(e => e.replace(e, MORSE_CODE[e])
  for(let i = 0; i<letters.length; i++) {
 
    let ascii = letters[i].map(e=> MORSE_CODE[e]).join('')
       console.log("looping the letters :" + ascii)
//     result.push(ascii)
  }
  console.log(result)
  return result
//   console.log(translate)
}

decodeMorse = function(morseCode){
  
  let clean = morseCode.replace(/^[ ]$/, '')
  console.log(clean)
  return(clean.split('   ')
              .map( e=> e.split(' ').map( e=> 
                                        MORSE_CODE[e]).join('')).join(' ')
             )
}

function leaderboardSort(leaderboard, changes) {
  console.log('leaderboard  :   ' + leaderboard)
  console.log('changes      :   ' + changes)
  
  let findIndex = leaderboard.map((e, i) => i)
  console.log(findIndex)
  
  // find index by name
  console.log(leaderboard.findIndex(e=> e === "Dave"))
  
  for (let i = 0; i < changes.length; i++) {
    let change = changes[i].split(' ');
    let name = change[0]
    let point = change[1]
    
    let start = leaderboard.findIndex((e)=> e === name)
    let end = start-point
    console.log(leaderboard[3])
    
    console.log(name, point, start, end)
//     leaderboard[index] = leaderboard[index-point]
//     leaderboard[index-point] = name;
    
    // if going down 
//     if (point < 0) {
//       leaderboard[i] = leaderboard[i+1]
//       leaderboard[i+1] = name
//     } else {
//       leaderboard[i] = leaderboard[i-1]
//       leaderboard[i-1] = name
//     }
    
    // if start index > end index, rest of items index + 1  (moved up)
    // if start index < end index, start index +, end index - 1 (moved down)
  }
  console.log(leaderboard)
}

--- 12 ---

function solve(arr){
  var r={}
  for(var n of arr) r[n]=r[n]+1||1
  return arr.slice().sort((a,b)=>r[b]-r[a]||a-b)
}


--- 13 --- 
function addArrays(array1, array2) {
  //   let arrayToNumber1 = parseInt(array1.join(''));
  //   let arrayToNumber2 = parseInt(array2.join(''));
    
  //   console.log(array1, array2)
  //   let result = arrayToNumber1 + arrayToNumber2;
  //   console.log(typeof result)
  //  
  //   return array1.length > 0 && array2.length > 0 ? String(result).split('').map(e=> Number(e)) : 
    
       console.log(array1, array2)
      let arr1 = array1.length > 0 ? parseInt(array1.join('')) : 0;
      let arr2 = array2.length > 0 ? parseInt(array2.join('')) : 0;
     console.log(arr1, arr2) 
      let result = arr1 + arr2;
    
      console.log(result)
     console.log(String(result).split(/[\D]*/g).map(e=>Number(e)))
      return (array1.length === 0 && array2.length === 0 ) ? [] : String(result).split('').map(e=> Number(e))
  }



--- 14 ---
function theJanitor(word) {
  //   //coding and coding..
  //   console.log(word)
    
  //   // returns an array with 26 elements, consisting the width of each letter . 
  //   // [(word.indexOf(2nda)- word.indexOf(1sta)), ()]
    
  //   let a = word.split('').filter(e => e==='a')
    
  //   let arr = [];
   
  //   // first letter, match with the LAST occurance of the letter
  //   // calculate width 
  //   // input in array  
    
  //   console.log(word.indexOf(word[0]))
  //   console.log(word.lastIndexOf(word[0])+ 1)
    
  //   for (let i=0; i<word.length; i++) {
  //     console.log(word[i])
      
  //     let first = word.indexOf(word[i])
  //     let last = word.lastIndexOf(word[i]) + 1
      
  //     let result = last - first
  //     console.log("first = " + first + "last = " + last)
  //     console.log("result : " + (last - first))
      
  //     arr.push(result)
  //   }
    
    
  //   console.log(arr)
    
    let arr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    
    for (let i=0; i<word.length; i++) {
  //     console.log(word[i])
      
      let letterIndex = word.charCodeAt(i) - 96;
      
      // gives me index in the alphabet
      console.log("letter = " + letterIndex)
      
    // first letter, match with the LAST occurance of the letter
    // calculate width 
    // input in array  
      let first = word.indexOf(word[i])
      let last = word.lastIndexOf(word[i]) + 1
      
      let result = last - first
      console.log("first = " + first + "last = " + last)
      console.log("result : " + (last - first))
      
      
      arr[letterIndex] = result
      
      if (!arr[letterIndex]) {
        arr.push(0)
      }
      
      for (let i=0; i<arr.length; i++){
        if (!arr[letterIndex]) {
        arr[i] = 0
      }
      }
      // push 0 to empty letters
      
    }
    
      
    
    console.log(arr)
    
    return arr.splice(1)
    
    
  }


  function theJanitor(word) {
    return [...'abcdefghijklmnopqrstuvwxyz'].map(l=>{
      let a = word.indexOf(l), b = word.lastIndexOf(l);
      return a === -1 ? 0 : b - a + 1;
    });
  }

--- 15 ---
function code(strng) {
  // your code
 

  let result = ''
  strng.split('').map((e , i)=> {
    console.log('element =' + e);
    let zeros = ((e>>>0).toString(2)).length - 1;
    let zero = '0'
    
    let first = zero.repeat(zeros).concat('1')
    console.log(first );
    console.log("ungsigned right shift =" + first.concat((e >>> 0).toString(2)))
     result += first.concat((e >>> 0).toString(2))
})

console.log("result" + result)
return result
}

const decode = (str) => {
// a string with (000x bits.length) + 1 + bit(str)
// return decimal
// calculate how many zero + 1 = e.length
// take out 1 

console.log(str.split('0'))
console.log(parseInt(101, 2))

}


--- 16 --- Failed
function convergence(n){
  let base = 1
  
  let res = []
  
 
  
//   console.log(calcNum(n))
  console.log(calcNum(base))
}

const calcNum = (base) => {
  
  let temp = base
  let res = [temp]
  console.log()
  while (res.length<10) {
       if (temp< 10) {
    temp += temp
    res.push(temp)
    console.log(temp)
  } else if ( temp.length >= 10) {
    temp = temp + temp.split('').reduce((a,b) => a * b)
    res.push(temp)
    console.log(temp)
  } 
  }

  return res
}

--- 17 ---
function order(words){
  // ...

//   console.log(split.sort((a,b)=>{
//   a.match(/[1-9]/g) - b.match(/1-9/g)

//   }))
  return words.split(' ').sort((a,b) => a.match(/[0-9]/) - b.match(/[0-9]/) ).join(' ')
//   split.map(e=>{
//   console.log(e)
//   console.log(e.match(/[0-9]/g))
    
  
//   })
}

--- 18 ---
function gcdi(x,y) {
  // your code
return  y ? gcdi(y, x%y) : Math.abs(x) 
}
function lcmu(a, b) {
  // your code
return Math.abs(a*b)/ gcdi(a,b)
                    

}
function som(a, b) {
  // your code
return a + b
}
function maxi(a, b) {
  // your code
return Math.max(a, b)
}
function mini(a, b) {
  // your code
return Math.min(a, b)
}



function operArray(fct, arr, init) {
  // your code
return arr.map(e=> {
init = fct(init, e)
  return init
})

}

 --- 19 ---
 function isSumOfCubes(s){
  // ...
  console.log(s)
  let split = s.split(' ') 
  
  let sumNum = 0;
  let resArr = [];
  let res = []
    
  for (let i = 0; i<split.length; i++ ) {
    console.log('split[i] = ' + split[i])
    let num = split[i].match(/\d{1,3}/g)
    console.log('num in for loop = ' + num)
    if (num) resArr.push(...num)
  }
  console.log("res array, consisting 3 nums = " + resArr)
  
  resArr.map(e=>{
  if (checkNum(e)) {
    
    if (e == 000) {e = 0}
      res.push(e);
      sumNum += Number(e)
  }
  })


  let resString = res.join(' ')
  
  let template = `${resString} ${sumNum} Lucky`
  console.log('resString   = ' + resString)
  console.log('sumNum   = ' + sumNum)
  console.log('template = ' + template)
  return (resString.length > 0) ? template : "Unlucky"
  
  
}
  




const checkNum = (threeNum) => {
  let sum = 0;
  for (let i=0;i <threeNum.length; i++) {
    sum += Math.pow(Number(threeNum[i]), 3)
  }
  
  return threeNum == sum
}

--- 20 ---
function zipWith(fn,a0,a1) {
  console.log( a0[0], a1[0], fn)
    
    // find out shorter arr
    // loop thru each with the other one
    let res = []
    let short = a0.length < a1.length ? a0 : a1
    let long = short==a0 ? a1 : a0
    
    console.log(short, long)
    if (short.length < 1) res = []
    for (let i=0; i< short.length; i++) {
      res.push(fn(a0[i], a1[i]))
    }
    console.log('res = '  + res)
    return res
  }

  --- 21 ---
  function partsSums(ls) {
    // your code
  let res = []
  console.log('ls = ' + ls)
  // loop thru ls, each el 
  
 let temp = ls
 let sum = countSum(ls)
 
 for (let i=0; i<ls.length;i++) {
   res.push(sum)
   sum -= ls[i]
   
 }
  console.log('result = ' + res)
  return res? [...res,0] : [0]
}



const countSum = (arr) => {
 
//   console.log('countSum ' + arr.reduce((a,b)=>a+b))
  return arr.length < 1 ? arr.reduce((a,b)=>a+b, 0) : arr.reduce((a,b)=>a+b) 
}


--- solution ---
function partsSums(ls) {
  ls.unshift(0);
  let sum = ls.reduce((p, c) => p + c, 0);
  return ls.map(v => sum = sum - v);
}


--- 22 ---
function solution(string) {
  string = string.split('').map(function (el) {
    if (el === el.toUpperCase()) {
      el = ' ' + el
    }
    return el
  })
  return string.join('')
}

function solution(string) {
  return string.replace(/([a-z])([A-Z])/g, "$1 $2");
}

--- 23 ---


function solve(arr){
  //..
  let res = 0
  
  for (let i=0; i<arr.length; i++) {
    for (let j=i+1; j<arr.length; j++) {
      
      console.log('arr[i]' + arr[i] + "    arr[j]   " +arr[j])
      console.log(res)
      
      console.log('calculation index = ' +(2*arr[j]-arr[i]) )
      if (arr.indexOf(2*arr[j]-arr[i])>0) res++
    }
    
  }
  return res
}

*** Find 3 nums that has same differences *** 
- find the difference, look for the next num
- check next num if exist in arr 

--- 24 ---
const revNum = (num) => {
  const fake = String(num).split('')
  console.log(fake.reverse())
  
  let first = []
  let secondRev = []
  
  if fake.length < 2 return 
  
  if (fake.length %2==0) {
    first = Number(fake.slice(0, fake.length/2).join(''))
    console.log('first = ' + first)
    
    secondRev = Number(fake.slice(fake.length/2).reverse().join(''))
    console.log('second = ' + secondRev)
    
    if (first == secondRev) {return true} 
    else return false
//   for (let i=0; i < fake.length/2 ; i++) {
//   console.log(fake[i])
//     first.push(fake[i]) 
//   }  
  } else {
    first = Number(fake.slice(0, fake.length/2))
    secondRev = Number(fake.slice(fake.length/2+1).reverse().join(''))
    
    console.log("Odd case first = " + first)
    
    console.log('Odd case second = ' + secondRev)
    if (first == secondRev) return true
    else return false
    
  }
}

--- 25 ---
function comp(array1, array2){
  //your code here
  console.log(array1.sort(), array2)
  
  if (array1.length == [] || array2.length == []) return true
  if (!array1 && array2 === null) return false
  
  
  let a = array1.map(e=>Math.pow(e, 2))
  console.log('a = ' + Number(a.sort().join('')))
  console.log('b = ' + Number(array2.sort().join('')))
  
  
  return (Number(a.sort().join('')) == Number(array2.sort().join('')))
}

solutionfunction comp(array1, array2){
  //your code here

  
  if (array1 == null || array2 == null) return false

  
  let a = array1.map(e=>Math.pow(e, 2))
  console.log('a = ' + Number(a.sort().join('')))
  console.log('b = ' + Number(array2.sort().join('')))
  a.sort((a,b) =>a-b)
  
  let b =array2.sort((a,b)=>a-b)
  
  return a.every((e,i)=>e==b[i])
}

--- 26 ---
function isAValidMessage(message){
  // your code
  console.log(message)
  let regex = /\d/g
  let regexNum = /[a-zA-Z]/g
 
  
  let words =message.split(regex).map(e=>e.length).filter(e=>e>0)
  let nums = [...message.replace(regexNum, ' ').split(' ')].filter(e=>e>0)
  console.log(typeof nums, typeof words)
  
  console.log('words    =' + words)
  console.log('nums     =' + nums)
  console.log(nums.map((e,i) => console.log("nums[i] = " + e  + '  && words[i] = ' + words[i])))
  
  if (message == '') return true
  return nums.every((e,i)=>Number(e) == Number(words[i])) ? true : false
}

--- 27 ---
const diag1Sym = s => s.map((v, i) => [...v].map((_, j) => s[j][i]).join(''))
const rot90Clock = s => diag1Sym(s).map(v => [...v].reverse().join(''))
const selfieAndDiag1 = s => {
  const r = diag1Sym(s)
  return s.map((v, i) => v + '|' + r[i])
}
const oper = (fct, s) => fct(s.split('\n')).join('\n')


--- 28 ---
function spinWords(arg){
  //TODO Have fun 
  // rules: 5 or more letters:)
  // loop thru each word, check if 5, reverse letters, if no return
  console.log(arg)
  let split = arg.split(' ')
  let rev = []
  console.log('split = ' + split)
  split.map(e=>{
      if (e.length>=5) {console.log('more than 5')
                        rev.push(e.split('').reverse().join('')) 
                     
                      } else {console.log('less than 5')
                               rev.push(e)
                             
                             }
    
  })
   console.log(rev)
  return rev.join(' ')
}

--- 29 ---
function calculateWinners(snapshot, penguins) {
  // TODO: solve kata
  let split = snapshot.split('\n')
  let result = []
  console.log(split)
  console.log(split.map(e=>{
    let res = 0
    let speed = e.split(/[pP]/g)[1].replace('|', '')
    
    speed.split('').map(e=> res += replaceSpeed(e))
    result.push(res)
  }))
//   let time = penguins.map((e,i)=>{  })
  console.log(result, penguins)
  
  let sorted = [...result].sort((a,b) => a-b)
  console.log(sorted[1])
  console.log(result.indexOf(sorted[1]))
  let first = penguins[result.indexOf(sorted[0])]
  let sec = penguins[result.indexOf(sorted[1])]
  let third = penguins[result.indexOf(sorted[2])]

  return `GOLD: ${first}, SILVER: ${sec}, BRONZE: ${third}`
  };

const replaceSpeed = (input) => {
  return (input == '-') ? 1 : (input == '~') ? 2  : 0
 }

 30
 const monthFormat = Intl.DateTimeFormat('en-US', { month: 'long' });
const dayFormat = Intl.DateTimeFormat('en-US', { day: 'numeric' });

function getDay(day, isLeap){
  
  if(day > 365 + isLeap) {
    return "wrong day";
  }
  
  let date = new Date(2005 - isLeap, 0, day);    
  return `${monthFormat.format(date)}, ${dayFormat.format(date)}`;
}