import { gzip } from "zlib";

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

// --- 9 --- 
// function solve(s){
//     //split, loop thru s and look for consecutive vowels
//    return Math.max(s.split(/'aeiou'/).length)
   
//   }


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

// --- Math.pow(number, pow) ---
// const sumCubes = (n, total = 0, i = 1) => i > n ? total : sumCubes(n, total += Math.pow(i, 3), ++i)

// sumCubes=n=>n<2?1:n**3+sumCubes(n-1)

// --- 11 --- Password Validation ---
// --- Needs to be > 8 ChannelSplitterNode, min 1 low case, min 1 up case, 1 num ---
// function password(str) {
//     return str.length >= 8 &&
//            /[a-z]/.test(str) &&
//            /[A-Z]/.test(str) &&
//            /\d/.test(str);
// }

// --- 12 --- Find Max Gap in sorted array ---
// --- First attempt ---
// function maxGap (numbers){
//     //your code here
//     return Math.max(numbers.sort((a, b) => b - a).reduce((a,b) => b - a))
//   }

// --- Solution ---
//   function maxGap(numbers) {
//     return numbers
//       .sort((a, b) => a - b)
//       .reduce((max, n, i) => {
//         let gap = numbers[i + 1] - n
//         if (max < gap) {
//           max = gap
//         }
//         return max
//       }, 0);
//   }

//   function maxGap (numbers){
//     const sorted = numbers.sort((a, b) => a - b)
//     return sorted.reduce((t, x, i) => sorted[i + 1] - x > t ? sorted[i + 1] - x : t, 0)
//   }

// --- 13 --- Find largest common divisor from 2 nums ---
//   function mygcd(x,y){
//     //your code here
//     // find divisor x and y put in array, test them return largest from result
//     let arrX = [];
//     let arrY = [];
//     for (var i=1; i<x; i++){
//         arrX.push(x%i==0)
//     }
    
//     for (var i=1;y=1; i<y; i++){
//         arrY.push(y%i==0)
//     }
    
//     return Math.max(arrX === arrY)
//   }
// function mygcd(x,y){
//     //your code here
//     // find divisor x and y put in array, test them return largest from result
//     return (y==0)? x : mygcd(y, x%y)
//     // (9, 15)
//     // mygcd(15, 9)1
//     // mygcd(9, 6)2
//     // mygcd(6, 3)3
//     // mygcd(3,0)
//     // return x = 3
//   }

//   function mygcd(x,y){
//     const min = Math.min(x,y);
//     const max = Math.max(x,y);
//     let num = min;
//     while(num<=min){
//       if(max%num===0&&min%num===0){
//         return num;
//       }
//       num--;
//     }
//   }


// --- 14 --- Check ending of array ---
// function solution(str, ending){
//   // TODO: complete
//   return (str.endsWith(ending))
// }

// --- 15 --- find 2 nums from sum and diff ---
// function getAges(sum,difference){
//   // sum = a + b
//   // diff = a - b
//   // (24, 4) [14, 10]
//   // a = 24 - b
//   // 4 = (24 - b) - b
//   // 4 = 24 - 2b
//   // 2b = 20
//   // b = 10
//   // a = 24 - 10 
  
//   let b = (sum - difference)/2
//   let a = sum - b
  
//   return ((sum<0||difference<0||a&&b<0))?null :[a, b];  
// };

// function getAges(sum,difference){

//   let average = 0;
//   if (sum < 0 || difference < 0 || sum - difference < 0) return null;
//   else average = (sum - difference) /2;
  
//   return [average+difference, average];
// };

// --- 16 --- 
// function spacify(str) {
//   // return 
//   return str.split('').join(' ')
// }

// --- 17 --- take out nums repeated odd amount of times ---
// function oddOnesOut(nums) {

//   const results = {};
//   nums.forEach(num => {
//     if (results[num]) {
//       results[num]++
//     } else {
//       results[num] = 1
//     }
//   });

//   return nums.filter(el => results[el] % 2 === 0)
// }

// --- 18 --- Fix the parentheses ---
// const fixParentheses = (str) => {
//     let opening = 0;
//     let closing = 0;
    
//     str.split('').forEach(x=>{
//     if(x === "(") {closing++} 
//     if(x === ")")
//       if (closing>0) {
//       closing = closing === 0 ? 0 : closing - 1 }
//       else {opening++}
      
//     })
//     return `${'('.repeat(opening)}${str}${')'.repeat(closing)}`;
//   };
// // Add the needed left parentheses
// function addLeftParentheses(str) {
//     let addLeft = '';
//     let openingReserve = 0;
//     let index = 0;
//     while (index < str.length) {
//       let thisChar = str[index];
//       if (thisChar === '(') {
//         openingReserve += 1;
//       } else {
//         if (openingReserve > 0) {
//           openingReserve -= 1;
//         } else {
//           addLeft += '(';
//         }
//       }
//       index += 1;
//     }
//     return addLeft;
//   }
  
//   // Add the needed right parentheses
//   function addRightParentheses(str) {
//     let addRight = '';
//     let closingReserve = 0;
//     let index = str.length - 1;
//     while (index >= 0) {
//       let thisChar = str[index];
//       if (thisChar === ')') {
//         closingReserve += 1;
//       } else {
//         if (closingReserve > 0) {
//           closingReserve -= 1;
//         } else {
//           addRight += ')';
//         }
//       }
//       index -= 1;
//     }
//     return addRight;
//   }
  
//   /*
//     Append parentheses to the beginning and/or end of the string
//     to create matching pairs of opening and closing parentheses.
//   */
//   const fixParentheses = (str) => {
//     let addLeft = addLeftParentheses(str);
//     let addRight = addRightParentheses(str);
//     return addLeft + str + addRight;
//   };


// function fixParentheses(s){
//     let [pref,suff] = [0,0];
//     [...s].forEach(e => {
//       if (e === ')'){suff < 1 ? pref++ : suff--} else {suff++}});
//     return '('.repeat(pref) + s + ')'.repeat(suff);
//   }

//   const fixParentheses = str => {
//     let openingNeeded = 0
//     let openingLeft = 0
    
//     str.split('').forEach(x => {
//       if (x === '(') openingLeft++
//       if (x === ')') {
//         if(openingLeft > 0) {
//           openingLeft = openingLeft === 0 ? 0 : openingLeft - 1
//         } else {
//           openingNeeded++
//         }
//       }
//     })
  
//     return `${'('.repeat(openingNeeded)}${str}${')'.repeat(openingLeft)}`;
//   };

//   const reg = /(?:\(\))/;

// const fixParentheses = (str, original = str) => {
//   const res = str.split(reg).join('');
//   return res.match(reg) ?
//     fixParentheses(res, original) :
//     res.split('').reduce((final, char) =>
//         `${char === ')' ? '(' : ''}${final}${char === '(' ? ')' : ''}`, original)
// };

// --- 19 --- Given 12 days of Christmas return the days sorted --- 
// --- sort the array or compare the two object using indexOf 
// var comparator = function(a,b) {
//     const pos = ['On', '12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', 'a'];
//     return pos.indexOf(a.split(' ')[0]) - pos.indexOf(b.split(' ')[0]);
//   }

// --- 20 ---
// function aaPercentage (protein,input) {
//     // Have fun!
//     // set AILMNFWYV
//     // amount match divided by input.length *100
//     let test = ['A', 'I', 'L', 'M', 'F', 'W', 'Y', 'V']
//     return Math.floor((input.split('').filter(e => e == test).length)/input.length)*100
//   }

//   function aaPercentage (seq , arr = ["A", "I", "L", "M", "F", "W", "Y", "V"] ) {
    // if arr exists return percentage taken from seq that has protein divide by whole seq otherwise returns 0
//     return arr ?  Math.round(seq.split('').filter(a=>arr.includes(a)).length / seq.length * 100 )  : 0;
//  }

// --- 21 --- Recreate poem --- 
// function tenGreenBottles(n) {
//     // Your code here
//   //   n green bottle hanging on the wall,
//   //   n green bottle hanging on the wall,
//   //   If that n green bottle should accidentally fall,
//   //   There'll be n - 1 green bottles hanging on the wall.
//   let line=''
//   var arr = ["no", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"]; 
//   if (n>0) {
//   for (var i=n; i>0; i--){
//     line += 
//     `${arr[i]} green bottle${i === 1? '':'s'} hanging on the wall,
//     ${arr[i]} green bottle${i === 1? '':'s'} hanging on the wall,
//     ${i === 1 ? 'If that' : 'And if'} one green bottle should accidentally fall,
//     There'll be ${arr[i - 1].toLowerCase()} green bottle${i - 1 === 1? '':'s'} hanging on the wall.${i === 1 ? '' : '\n'}`
    
//   }} 
// //   else {line += "There'll be no green bottles hanging on the wall"}
  
  
//     return line;
//   }  

//   function tenGreenBottles(n) {
//     let result = '';
//     const numWords = ['no', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];
//       for (let i = n; i > 0; i--) {
//         result += `${numWords[i]} green bottle${i === 1 ? '' : 's'} hanging on the wall,
//     ${numWords[i]} green bottle${i === 1 ? '' : 's'} hanging on the wall,
//     ${i === 1 ? 'If that' : 'And if'} one green bottle should accidentally fall,
//     There'll be ${numWords[i - 1].toLowerCase()} green bottle${i - 1 === 1 ? '' : 's'} hanging on the wall.${i === 1 ? '' : '\n'}
//     `
//       }
//       return result;
//     }  

--- 22 --- return sorted nums from array without duplicates ---
function minValue(values){
    const n = values
    // e = current value 
      .filter((e, i, arr) => arr.indexOf(e) === i)
      .sort()
      .join('');
    return Number(n);
  }

  function minValue(values){
    let arr = Array.from(new Set(values))
    return parseInt(arr.sort().join(''))
  }



// --- 23 --- Find next distinct digits --- 
// function nextHappyYear(year){
//     //your code here
//   //   return year.split('').map(e=> (year.includes(e)) ? e + 1 : e)
//     let result = []
//     for (var i=0; i<year;i++){
//      if (year.includes(i)) {
//        i++;
//        result.push(i)
//      } else result.push(i)
//     }
//     return Number(result)
// //     }
// --- While Loop ---
// function nextHappyYear(year){
//     do year+=1
//     while ((/([0-9]).*?\1/).test(year));
//     return year
//     }

// --- 24 --- 
// --- How I'd do it.... ---
// function squareDigits(num){
//     //may the code be with you
//     return num.split('').forEach(e => e**2).join('')
//   }
// --- Solution ---
// function squareDigits(num){
// //may the code be with you
//   return parseInt(num.toString().split('').map(e => e**2).join('')    
//   }

// --- 25 --- Jar and friends ---
// const friends = n => n < 2 ? 0 : Math.max(0, Math.floor(Math.log(n - 1) / Math.log(2)));

// --- 26 --- Max of 3 numbers ---
// --- How I'd do it --- 
// function maxTriSum(numbers){
//   //your code here
//   // loop thru nums filter no duplicates then take sum
//   return numbers.filter((e,i,arr)=> arr.indexOf(e) === i)
//     .sort((a,b) => a < b)
//     .slice(0,3)
//     .reduce((a,b) => a + b)
// }

// --- solution ---
// const maxTriSum = numbers => {
//   const [a,b,c,...rest] = [...new Set([...numbers])].sort((a,b)=>b-a)
//   return a+b+c
  
// }

// --- solution ---
// const maxTriSum (numbers) {
//   return numbers.sort((a,b)=> a-b)
//     .filter((e,i,arr)=> arr.indexOf(e)===i)
//     .slice(-3)
//     .reduce((a,b)=>a+b)
// }

// --- 27 --- Check if women more than men ---
// function inviteMoreWomen(L) {
//   //coding and coding..
//   return L.reduce((a,b)=>a+b) > 0 ? true : false
// }

// --- 28 --- pendulum nums --- 
// function pendulum(values) {

// ascending sort [1,2,3,4,5]
//   let sort = values.slice().sort((a, b) => a - b)
//   ,  parts = { left: [], right: [] };
  
//   for (let i = 0; i < sort.length; i++) 
//     parts[i % 2 ? 'right' : 'left'].push(sort[i]);

//   return parts.left.reverse().concat(parts.right)
// }


// --- 29 --- Chess board color --- Broken kata ---
// function mineColor(line, number) {
//   // insert code
//   return line[0]%2 === line[1]%2 ? "black" : "white"; 
// }

// --- 30 --- find index of odd num or -1 ---
// --- first attempt ---
// function oddOne(arr) {
//   // Code here
//   // find odd numbers = arr[i]%2===1
//   let result = 0;
//   for (var i=0;i<arr.length;i++){
    
//     (Math.abs(arr[i]%2)===1) ? result = arr[i] : -1
//   }
  
//   return arr.indexOf(result) 
// }

// const oddOne = arr => arr.findIndex(x => x & 1)

// --- 31 --- find length of owning pets ---
// var ownedCatAndDog = function(catYears, dogYears) {
//   // Your code here!
//   return [
//     (catYears<24)?catYears/15:(catYears-16)/4,
//     (dogYears<24)?dogYears/15:(dogYears-14)/5
//   ].map(Math.floor)
// }

// --- 32 --- Find balanced array ---
// function balancedNum(number) {
//   //split the nums
//   // find middle num
//  for(var i = 0; i<number.length;i++){
//     let leftArr = 0
//     let rightArr = 0
    
//     if (number.length%2===1) {
//      let midNum = number.length/2
//      for (var i = 0; i<midNum;i++){
//        leftArr+=i;
//        }
//       for(var i=midNum; i<number.length;i++){
//         rightArr+=i
//       }
      
//     }
//     return (leftArr === rightArr) ? "Balanced" : "Not Balanced";
    
//  } 

//  function balancedNum(number) {
//   let numstr = number.toString();
//   let leftside = "";
//   let rightside = "";
//   if (numstr.length/2 < 1 || numstr.length === 2) { 
//     return "Balanced";
//   }
//   if (numstr.length % 2 === 0) {
//     leftside = numstr.slice(0,numstr.length/2-1);
//   } else {
//     leftside = numstr.slice(0,numstr.length/2);
//   }
//   rightside = numstr.slice(numstr.length/2+1);
  
//   let lefttotal = leftside.split("").reduce((a,b)=>parseInt(a)+parseInt(b));
//   let righttotal = rightside.split("").reduce((a,b)=>parseInt(a)+parseInt(b));
//   return (lefttotal === righttotal) ? "Balanced" : "Not Balanced";
// }

// function balancedNum(number) {

//   let str = `${number}`
//   ,   len = (str.length - (str.length % 2 ? -1 : -2)) / 2
//   ,   sum = digits => [ ...digits ].reduce((a, b) => a + +b, 0);

//   return sum(str.slice(0, len)) === sum(str.slice(-len)) 
//   ? 'Balanced' 
//   : 'Not Balanced';

// }

// --- 33 --- find sqrt num ---
// var isSquare = function(n){
  
//   return (Math.sqrt(n)%2 - Math.floor(Math.sqrt(n)%2) === 0) ? true : false; // fix me
// }

// function isSquare(n) {
//   return Math.sqrt(n) % 1 === 0;
// }
// return ['white','black'][('abcdefgh'.indexOf(line) + number) % 2];

// --- 34 --- Sum of triangular numbers ---
// --- failed attempt --- 
// function sumTriangularNumbers(n) {
//   // set triangular numbers in array
//   // starts with 1 + 2 ; 3 + 3; 6 + 4 
//   // n = 2 => 1 + (3) = 4
//   // use n to find value in index
//   let triangularNums = [1,3,6,10,15]
// //   for (var i = 1; i > 0; i++) {
    
// //   }
  
//   return (n>0) ? triangularNums.reduce((a,b)=> a+b);
// }
// function sumTriangularNumbers(n) {
//   var sum = 0;  
//   for(var i = 1; i <= n; i++)
//   {
//   sum += (i*(i+1))/2;
//   }
//   return sum;
//   }
// function sumTriangularNumbers(n) {
//   return n < 0 ? 0 : n * (n + 1) * (n + 2) / 6;
// }


// --- 34 --- Find all non-consecutive nums ---
// --- failed attempt ---
// function allNonConsecutive (arr) {
  // loop thru arr
  // check if each iteration +1 matches with number
  // if not, return the index and the num
  // keep the loop running till end of arr
  // if arr is consecutive then return empty arr
 //  for (var i=0; i<arr.length;i++){
    
 //  }
 
//    return arr.reduce((a,b)=> a-b) === 1 ? [] : return 
//  }
//  function allNonConsecutive (arr){
//   var res = [];
//   for(let i=1; i<arr.length; i++) {
//     if(arr[i]-arr[i-1]!==1) res.push({i:i, n:arr[i]});
//   }
//   return res;
// }
// function allNonConsecutive (arr) {
//   let result = [];
//   arr.forEach((val, index) => {
//       if (val !== arr[index - 1] + 1 && index) {
//           result.push({i: index, n: val});
//       }
//   });
//   return result;
// }
// function allNonConsecutive(arr) {
//   return arr.reduce((xs, n, i) => i > 0 && n - 1 !== arr[i - 1] ? [...xs, {i, n}] : xs, [])
// }


// --- 35 --- Removing duplicates in array, concating arrays, sorting it ---
// function testit(a,b){
//   return [...new Set(a.concat(b).sort())];
// }

// function testit(a,b){
//   //   return [...new Set(a.concat(b).sort())];
//     return a.length<b.length ?  (a.concat(b).sort()) : (a.concat(b).sort()).filter((item, index)=> (a.concat(b).sort()).indexOf(item)===index) 
//   }

// ---solution---
//   function testit(a,b){
//     //   return [...new Set(a.concat(b).sort())];
//       let arr1 = [...new Set(a)]
//       let arr2 = [...new Set(b)]
//       return arr1.concat(arr2).sort((c,d)=> c-d)
//     //   return a.length>=b.length ?  (a.concat(b).sort()) : (a.concat(b).sort()).filter((item, index)=> (a.concat(b).sort()).indexOf(item)===index) 
//     }


// --- 36 --- alphabet to numbers then sum it up ---
function wordsToMarks(string){
  //your code here
  
//   var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  
//   return string.split('').map(e=>e.indexOf(alphabet)).reduce((a,b)=> a+b)

  return string.split('').map(e=>e.charCodeAt(0)-96).reduce((a,b)=>a+b)
}

// --- 37 --- Ternary ---
// function breakChocolate(n,m) {
//   return (n&&m)== 0 ? 0 : (n*m)-1;
// }

// --- 38 --- typeof : to check with type of object 'number' ---
// function divCon(x){
//   return x.reduce((a,b)=> typeof b === 'number'? a + b : a - Number(b),0)
// }
// function divCon(x) {
//   return x.reduce((a,b) => typeof b === 'string' ? a - Number(b) : a + b,0)
// }


// --- 39 --- 
// function sumDigits(number) {
//   return Number(Math.abs(number).toString().split('').reduce((a,b) => Math.abs(Number(a)) + Math.abs(Number(b))))
//   }
  
// --- 40 --- reverse alphabet ---
// function switcher(x){
//   const alpha = ' zyxwvutsrqponmlkjihgfedcba!? '
//   return x.map( e=>alpha[e]).join('')
// }

// --- 41 --- Factorial function ---
// function factorial(n){
//   //your code here
//   // n = 3
//   // 3! = 3 x (3-1) x (3-2) x (3-3) 
//   // loop thru n, every i 
//   var total = 0
//   for (let i=1; i<=n ; i++) {
//     total += total * i
//   }
//   return total
// }

// --- solution ---
// function factorial(n){
//   let answer = 1;
  
//   while (n > 0) {
//     answer *= n;
//     n--;
//   }
  
//   return answer;
// }

// function factorial(n){
//   return n ? n * factorial(n-1) : 1;
// }

// function factorial(n) {
//   for (var acc = 1; n > 0; acc *= n, n--);
//   return acc
// }

// --- correction ---
// function factorial(n){
//   //your code here
//   // n = 3
//   // 3! = 3 x (3-1) x (3-2) x (3-3) 
//   // loop thru n, every i 
// let total = 1
//   for (let i=1; n>0 ; n--) {
//     total *= n
//   }
//   return total
// }

// --- 42 --- slice ---
// function houseNumbersSum(inputArray) {
//   //coding and coding..
//   // loop thru until find 0
//   // sum all before that
//   let total = []
//   for (var i=0;i<inputArray.length;i++){
//   if(inputArray[i] == 0){return 0}
//   else if (inputArray[i] !== 0) {inputArray[i].push(total)}
// //   (inputArray[i] !== 0) ? total += inputArray[i] : total
// //     return inputArray.reduce((a,b)=>a+b)
//   } 
//   return total.reduce((a,b)=>a+b)
// }

// --- solution --- 
// function houseNumbersSum(inputArray) {
//   //coding and coding..
//   // loop thru until find 0
// //   return inputArray.slice(0, inputArray[i] === 0).reduce((a,b)=>a+b,0)
//   for (let sum=0, i=0;; i++){
//   if (inputArray[i]===0) {return sum}
//   else sum += inputArray[i]
//   }
// }

// return inputArray.slice(0, inputArray.indexOf(0)).reduce((a,b)=>a+b,0)

// --- 43 --- 
// const absentVowel = x => {
//   for(var v in 'aeiou')
//     if(x.indexOf('aeiou'[v])==-1)
//       return +v
// }

// --- 44 ---
// function descendingOrder(n){
//   //...
//   return Number(n.toString().split('').sort((a,b)=>b-a).join(''))
// }

// --- 45 --- Arithmatic Progression --- find sum of the numbers in between a & b ===
// function getSum( a,b )
// {
//    //Good luck!
//    let max = Math.max(a,b)
//    let min = Math.min(a,b)
  
//    return (max - min + 1) * (max + min)/2
// }

// function getSum( a,b )
// {
//    //Good luck!
//    let smaller = (a < b) ? a : b,
//    bigger = (a < b) ? b : a;
//    let result = 0;
//    for (let i=smaller; i<=bigger; i++) {result += i}
   
//    return result
// }

// function getSum(a,b) {
//   return (Math.abs(a-b) + 1) * (a+b)/2
// }

// --- 46 --- count the string ---
// example: "4minus2plus1"
// result = '3'

// function sumStr(str) {
//   return eval(str.replace(/plus/gi, '+').replace(/minus/gi, '-')).toString()
// }

// eval() perform arithmatic calculation inside of a string object


// --- 47 --- sum the letters and return the letter result ---
// function addLetters(...letters) {
//   // your code here
//   let alp = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//   return ...letters.map(e=> e.replace(...letters, alp.indexOf(e))).reduce((a,b)=>a+b)
//   }

// function addLetters(...letters) {
//   const alp = ('zabcdefghijklmnopqrstuvwxy')

//   const sum = letters.reduce((sum, letter)=>sum + alp.indexOf(letter), 0)%26

//   return alp[sum]
// }


// --- 48 --- tail swap array ---
// function tailSwap(arr) {
//   // ["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
//   // [arr[0],arr[1]]
//   // split arr[0](':')
//   // [[arr[0][0], arr[0][1]] [arr[1][0],arr[1][1]]
//   // [[newArr[0][0],newArr[1][1]], [newArr[1][0],newArr[0][1]]
  
//   const newArr = arr.map(e=>e.split(':'))
//   console.log(newArr)
//   console.log([([newArr[0][0],newArr[1][1]]), ([newArr[1][0],newArr[0][1])])

//   return [] ;
// }

// --- 49 --- Multiple ternary conditions 
// function getMiddle(s)
// {
//   //Code goes here!
// //  return (s.length%2==0) ? s.slice((s.length/2-1),s.length/2+1) : s.slice(Math.abs(s.length%2),Math.abs(s.length%2)+1)
// return (s.length%2 == 1) ? s.slice(Math.floor(s.length%2-1),Math.floor(s.length%2)) : (s.length%2 == 0) ? s.slice((s.length/2-1),s.length/2+1):s.slice(0)

// }

// function getMiddle(s)
// {
//   return s.slice((s.length-1)/2, s.length/2+1);
// }

// --- 50 --- remove vowels ---
// var removeVowels = function(str){
//   //code here
//    let vowels = 'aeiou'
//    return str.replace(/[aeiou]/gi, '')
  
//   }

// --- 51 --- Filter out numbers and put them together as string --- 
// function lottery(str){
//   res = str.replace(/[a-zA-Z]/g,'')
//     .split('')
//     .filter((x,n,s) => s.indexOf(x) == n)
//     .join('');
//   return res ? res : 'One more run!'
// }

// function lottery(str) {
//   // res = take out strings and leave out integer
//   // 
//   res = str.replace(/[a-zA-Z]/g, '')
//     .split('')
//     .filter((cur,i,arr) => arr.indexOf(cur) == i)
//     .join('')
//     return res ? res : "One more run!"
// }

// Using collection 
// const lottery = str => [...new Set(str.match(/\d/g)).values()].join('') || 'One more run!';

// --- 52 --- get divisor count ---
// function getDivisorsCnt(n){
//   // todo
//   // return all digits modulus 0 until hit its own number
//   let array = []
//   for (var i = 1; i <= n; i++){
//     if (n%i == 0) {
//     array.push(i);
//     }
//   } 
//   return array.length
// }

// --- 53 --- Vertical and Horizontal Mirroring of array made of strings ---
// function vertMirror(strng) {
//   // Your code
//   // [lVHt, nJVhv, nCSbg\nyeCt]
//   return strng.split("\n").map(e=>e.split('').reverse().join('')).join("\n")
// }
// function horMirror(strng) {
//   // Your code
//   return strng.split("\n").reverse().join("\n")
// }
// function oper(fct, s) {
//   // Your code
//   return fct(s)
// }

// --- 54 --- Comnbination possibility --- 
// function horses(n) {
//   if (Number.isInteger(n)) return n<3 ? n : n*(n-1)*(n-2);
// }


// --- 55 --- Tokyo Fare ---
// function londonCityHacker(journey) {
//   let sum = 0;
  
//   for (let i = 0; i < journey.length; i++) {
//     if (typeof journey[i] === "string") sum += 2.40;
//     else {
//       sum += 1.50;
//       if (typeof journey[i + 1] === "number") i++;
//     }  
//   }
  
//   return `£${sum.toFixed(2)}`;
// }

// --- 56 --- parity and bin. odd and even switch case testing ---
// function checkParity(parity, bin){
//   //Have fun!
//   // calculate the 1s 
//   // see if it's even or odd
//   // 0 or 1
//   let array = []
   
//   let ones = bin.split('') 
  
//   for (var i = 0; i< ones.length; i++) {
//     if (ones[i] =='1') array.push(ones[i])
    
//   }
//   console.log(ones)
//   console.log(array)
//   console.log(parity)
  
//   switch (parity) {
//   case "even":
//   return (array.length%2===0)? 0 : 1;
//   break;
//   case "odd" :
//   return (array.length%2===0) ? 1 : 0
//   break;
  
//   }
// }

// --- 57 --- no odds ---
// function noOdds( values ){
//   // Return all non-odd values
//   let arr = []
  
//   for(var i=0;i<values.length;i++){
//     if (values[i]%2==0) {
//       arr.push(values[i])
//     }
//   }
//   return arr
// // }
// return values.filter(e=> e%2==0)
// function disariumNumber(n){
//   let number = n.toString();
//   let sum = 0;
  
//   for (let i=0; i<number.length; i++){
//     sum += Math.pow(number[i], i+1);
//   }
  
//   return n === sum ? "Disarium !!" : "Not !!";
// }

// --- 58 --- 
// String.prototype.vowel = function() {
//   return /^[aeiou]$/i.test(this)
// }

// --- 59 --- Free urinals problem ---
// function getFreeUrinals(urinals) {
//   if ( urinals.includes("11") )
//     return -1;
//   else
//     return ( urinals.match( /(^|0)0(?!1)/g ) || [] ).length;
// }

// --- 60 --- 
function infected(s){
  let arr = s.split('X'), 
    infected = 0,
    totalPopulation;
  // Check if arr is infected '1'
  console.log('arr1 :'+arr)
  arr = arr.map(c=>{
  
   if (c.indexOf('1')>-1) {
   console.log(c.indexOf(1))
     infected+=c.length;
     return '1'.repeat(c.length)
   } else return c; 
  })
  console.log('arr2 :'+arr)
  
  totalPopulation = arr.join('').length
  console.log('total :'+totalPopulation)
  
  return (totalPopulation)? 100*infected/totalPopulation : 0;
}
// function infected(s) {
//   let arr = s.split("X"), // separates the continents
//       infected = 0,
//       totalPopulation;
//   arr = arr.map(c => {
//     if (c.indexOf("1") > -1) { // there is at least an infected person in this continent
//       infected += c.length; // adds to the total infected count
//       return "1".repeat(c.length); // spreads the infection
//     } else return c; // all were non infected in this continent
//   }); 
//   totalPopulation = arr.join("").length; // gets the total population of the world
//   return totalPopulation ? 100 * infected / totalPopulation : 0; // returns the percentage of population infected
// }
// function infected(s) {

//   if(!(s.includes('0') && s.includes('1'))) return 0;
  
//   let str = s.split('X').map(el => el.includes('1') ? el.replace(/0/g, '1') : el).join('');
  
//   let total = str.length;
//   let infect = str.match(/1/g).length;
  
//   return 100 * infect / total;
// }

// function removeDuplicateWords (s) {
//   // your perfect code...
//   let arr =s.split(' ')
  
//   let result = [...new Set(arr)]
//   console.log(result)
  
//   return result.join(' ')
// }

// --- 61 --- sum of array 
// function oddOrEven(array) {
//   //enter code here
//   if (array.length == 0) return 'even'
  
//   return (array.length == 0) ? 0 : (array.reduce((a,b)=>a+b)%2===0) ? 'even' : 'odd'
// }

// --- 62 --- count letters and numbers ---
// function countLettersAndDigits(input) {
//   let arr = input.match(/[a-zA-Z0-9]/g)
//   console.log(arr)
//   return arr ? arr.length : 0
// }

// --- 63 --- Polygon angle --- 
// function angle(n) {
//   //code here
//   return 180*(n-2)
// }

// --- 64 --- new average --- 
// function newAvg(arr, newavg) {
//   // your code 
//   let sum = (arr.length == 0) ? 0 : arr.reduce((a,b)=>a+b)
//   console.log(sum)
  
//   let lastDonation = Math.ceil((newavg*(arr.length+1))-sum)
  
//   console.log(lastDonation)
//   return lastDonation > 0 ? lastDonation : ERROR
// }

// --- 65 --- Add up 2 rows --- 
// function rowWeights(array){
//   //your code here
//   let first = []
//   let total = array.reduce((a,b)=>a+b)
//   for (var i=0; i<array.length; i+=2) {
//     first.push(array[i])
//   }
  
//   let firstTotal = first.reduce((a,b) => a+b)
//   let secondTotal = total - firstTotal
  
//   return [firstTotal, secondTotal]
// }

// --- 66 --- re sort array from odd and even descending ascending ---
// function menFromBoys(arr){
//   //your code here
//   let result = []
//  let even = arr.filter((e)=>e%2==0).sort((a,b)=>a-b)
//  let odd = arr.filter((e)=>e%2==1).sort((a,b)=>b-a)
//  let negOdd = arr.filter((e)=>e%2==-1).sort((a,b)=>b-a)
//  negOdd = [...new Set(odd)].concat([...new Set(negOdd)])
//  result = [...new Set(even)].concat([...new Set(negOdd)])
//  console.log(even)
//  console.log(odd)
//  console.log(result)
//  return result
// }