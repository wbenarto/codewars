import { lookup } from "dns";
import { exists } from "fs";
import { setupMaster } from "cluster";

// --- #1 --- Grade Book ---
// --- If Statement ---
// function getGrade (s1, s2, s3) {
//     // Code here
//     const average = (s1 + s2 + s3)/3;
//     if (average < 60 ){
//     return 'F'} 
//     else if (average >= 60 && average < 70) {
//     return 'D'}
//     else if (average >= 70 && average < 80) {
//     return 'C'} 
//     else if (average >=80 && average < 90) {
//     return 'B'}
//     else if (average >= 90 && average <= 100) {
//     return 'A'}
//   }

// --- If Statement using Ternary Operator ? : ; ---
// function getGrade (s1, s2, s3) {
//     var s = (s1 + s2 + s3) / 3
//     return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
//   }

// --- Switch Case ---
// function getGrade (s1, s2, s3) {
//     var avg = (s1 + s2 + s3)/3;
//     switch(true) {
//       case (avg >= 90):
//         return 'A';
//       case ( avg >= 80):
//         return 'B';
//       case ( avg >= 70):
//         return 'C';
//       case ( avg >= 60):
//         return 'D'; 
//       default:
//         return 'F';   
//     }
//    }


// --- #2 --- Fake Binary ---
// If num < 5 return 0, else return 1. Return the fake binary
// function fakeBin(x){
//     let result = '';
//     for(let i = 0; i < x.length; i++){
//       x[i] < 5 ? result += 0 : result += 1;
//     }
//     return result;
//   }

// --- Splitting the argument and checking every n, return value and joining ---
// function fakeBin(x) {
//     return x.split('').map(n => n < 5 ? 0 : 1).join('');
// }


// --- #3 --- Return Vowel --- 
// If array consists of vowel return the vowels, else return arr
// function isVow(a){
//     for (var i=0; l=a.length; i<l; ++i)
//     {
//       var char = String.fromCharCode(a[i])
//       if ('aeiou'.indexOf(char) !== -1)
//       a[i] = char;
//     }
    
//     return a;
//   }

// Using .map to go thru each iteration
// const isVow = a => a.map(x=>'aeiou'.includes(y=String.fromCharCode(x)) ? y : x)


// --- #4 --- Invert the array ---
// Given a set of numbers, return the additive inverse of each. 
// function invert(array) {
//     let arr = []
//     for (var i =0;i <array.length;i++) {
//     arr.push(array[i]*-1)
//     }
//     return arr
//  }

// Using .map to loop and use ternary operator to return inverted numbers
//  function invert(array) {
//     return array.map( n => (n===0) ? n : -n);
//  };

// function invert(array) {
//     return array.map(i => 0 - i);
//  }



// --- #5 --- Check for Factor ---
// function checkForFactor (base, factor) {
//     // code here
//     // divide base to factor see if return 0 is true
//     return (base%factor === 0) 
//   }
// const checkForFactor = (base, factor) => !(base % factor);

// --- #6 --- Find nTh even number ---
// function nthEven(n){
//     your code here
//     given n, find the nth even number
//     n = 4

//     return n * 2 - 2
//   }

// --- #7 --- return personalized message ---
// function greet (name, owner) {
//     // Add code here
//     return (name === owner) ? "Hello boss" : "Hello guest"; 
//   }

// --- #8 --- return a string to number ---
// function numberToString(num) {
//     // Return a string of the number here!
//     return String(num)
//   }

// --- #9 --- return odd number
// const oddCount = n => Math.floor(n/2) ;

// --- #10 --- 
// function reverseWords(str){
//   return str.split(' ').reverse().join(' '); // reverse those words
// }

// --- 11 --- Turn binary into decimals ---
// function binToDec(bin){
//     let arr = bin.split('').reverse();
//      let num = 0;    
 
//      for (let i = 0; i<arr.length; i++){
//          if(arr[i]==='1' || arr[i]==='0'){
//              num+=arr[i]*Math.pow(2,i);
//          }else{
//              throw 'Not bin num'
//          }
//      }
//      return num;
//  }

// --- Using parseInt ---
// function binToDec(bin){
//     return parseInt(bin,2);
//   }

// --- 12 --- Turn decimals to binary ---
// toBinary = (n) => parseInt(n.toString(2));
// let toBinary = n => +n.toString(2)
// const toBinary = n => Number(n.toString(2)) ;

  // 1001001 split int oeach and reverse 
  // loop thru bin and find 1 & 0, add all values of each iteration and sum it up in num
// --- vanilla js ---
// function toBinary(n){
//     var binary = ""
//     var i = 2
    
//     if (n==0){
//     binary = 0
//     }
    
//     while(n > 0){
//       if(n % i == 0){
//         binary = "0" + binary 
//       }
//       else{
//         binary = "1" + binary 
//         n = n - (i/2)
//       }
//       i = i * 2
//     }
//     return parseInt(binary);
//   }


// --- 13 --- Fix the function
// function add(a, b){
// 	// code here
//   if (a == b){ return true } else return false
// }

// return (a == b ) ? true : false
// function add(a, b){
//     return a == b 
//   }


// -- 14 --- take out first and last element from an array ---
// function array(arr){
//     //Good luck
//     // separate by commas
//     // take out first and last of array
//     // if arr is empty || arr.length <= 2 return null
    
//     return arr.split(",").slice(1, -1).join(' ') || null;
//     }
    
// --- 15 --- Find point per actual 48 minutes ---
// function pointsPer48(ppg, mpg) {
//     // point per minute
//     return (Math.round(ppg/mpg * 48 *10)/10) || 0
//     }

// --- 16 --- filter out "good" and return based on the quantity ---
// function well(x){
        // Filter the array x and take only 'good' find out how many of them
//     const good = x.filter( x => x == 'good').length;
//     return good < 1 ? "Fail!" : good < 3 ? "Publish!" : "I smell a series!"
//    }

// --- 17 --- find the index of something from an array
// function findNeedle(haystack) {
//     // your code here
//     const word ='needle'
//     return "found the needle at position " + haystack.indexOf(word)
//   }

// --- 18 --- Check for Palindrome ---
// function isPalindrome(line) {
//     var re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;
      
//       var arr = line.toString().toLowerCase().replace(re, '')
//       const enil = arr.split('').reverse().join('')
      
//       return (enil === arr);
//     }

// --- 19 --- Century ---
// function century(year) {
//     // Finish this :)
//     // 1 century = 100
//     // year/century 1000/100=10
//     // round to the nearest top number
//     return Math.ceil(year/100);
//   }

// --- 20 --- Find the maximum number ---
// function expressionMatter(a, b, c) {
//     // all possible calculation
//     // find the maximum number
//     const one = a * (b + c)
//     const two = a * b * c
//     const three = a + b * c
//     const four = (a + b) * c
//     const five = a + b + c 
  
//     return parseInt(Math.max(one, two, three, four, five))// highest achievable result
//   }

// --- 21 --- remove 1st and last character ---
// function removeChar(str){
//     //You got this!
//     return str.split('').slice(1,-1).join('')
//    };

// --- 22 --- Make negative ---
// function makeNegative(num) {
//     // Code?
//     return (num > 0) ? (-1 * num) : num
//   }

// --- 23 --- Find smallest value in an array ---
// class SmallestIntegerFinder {
//     findSmallestInt(args) {
    
//       return Math.min( ...args)
//     }
//   }

// --- 24 --- Find the amount of true from an array ---
// function countSheeps(arrayOfSheep) {
//     // TODO May the force be with you
//     return arrayOfSheep.filter(Boolean).length;
//   }

// --- 25 --- Basic operations ---
// function basicOp(operation, value1, value2)
// {
//   // Code
//   switch (operation) {
//     case "+":
//     return value1 + value2;
//     break;
//     case "-":
//     return value1 - value2;
//     break;
//     case "*":
//     return value1 * value2;
//     break;
//     case "/":
//     return value1 / value2;
//     break;
//     }

// --- 26 --- Turn boolean into a string ---
// function boolToWord( bool ){
//     //...
//     return (bool) ? "Yes" : "No"
//   }

// --- 27 --- count positives and sum up the negatives ---
// function countPositivesSumNegatives(input) {
//     const positive=input.filter(i=>i>0).length;
//     const negative=input.filter(i=>i<0).reduce((a,b)=> a + b,0)
//     return [positive, negative];
// }

// --- 28 --- Count positives ---
// function countPositivesSumNegatives(input) {
//     let result=[]
//     if (input == null || input.length == null) 
//     return result;
    
//     let positive = 0;
//     let negative = 0;
//     positive=input.filter(i=>i>0).length;
//     negative=input.filter(i=>i<0).reduce((a,b)=> a + b,0)
  
//     return  [positive, negative]
// }

// --- 29 --- Splitting interger and reversing it into array of numbers ---
// function digitize(n) {
//     //code here
//     return String(n).split('').map(Number).reverse();
//   }

// --- 30 --- Find average of the array ---
// function find_average(array) {
//     // your code here
//     return array.reduce((a,b)=> a+b)/array.length;
//   }

// --- 31 --- using dot replace to correct 3 numbers to letters ---
// correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')

// const corrections = {
//   '5': 'S',
//   '0': 'O',
//   '1': 'I',
// };

// const correct = string => (
//   string.replace(/[501]/g, character => corrections[character])
// );

// // --- 32 --- 
// const move = (position, roll) => position + roll * 2

// --- 33 --- find area and volume of box ---
// function getSize(width, height, depth) {
 
//   let area = 2*(width*height)+2*(width*depth)+2*(height*depth);
//   let volume = width * height * depth;
//    let arr = [area , volume]
  
//   return arr;

// }

// const getSize = (w, h, d) => [
//   (w * h + w * d + h * d) * 2,
//   w * h * d
// ];

// --- 34 --- volume differences a and b ---
// function findDifference(a, b) {
//   //loading...
//   // volume = a * b * c 
//   let volA = a[0] * a[1] * a[2];
//   let volB = b[0] * b[1] * b[2];
  
//   return Math.abs(volA-volB)
// }
// --- es6 --- 
// --- .reduce loop through the number 
// function find_difference(a, b) {
//   return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
// }

// --- 35 --- sum
// function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
//   // code goes here
// //   return laLigaGoals.reduce((a, b) => a + b) + copaDelReyGoals.reduce((a, b) => a + b) + championsLeagueGoals.reduce((a, b) => a + b);
// // 
//   return laLigaGoals + copaDelReyGoals + championsLeagueGoals
// }

// --- 36 --- 
// function move (position, roll) {
//   // return the new position
//   return position + 2*roll
// }

// --- 37 --- 
// function howManyLightsabersDoYouOwn(name) {
//   return (name == 'Zach') ? 18 : 0;
// }

// --- 38 ---
// function sumOfDifferences(arr) {
//   return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
// }

// --- 39 --- theater count ---
// function seatsInTheater(nCols, nRows, col, row) {
//   //coding and coding..
//   let length = Math.abs(nCols-(col-1))
//   let width = Math.abs(nRows-row)
  
//   return length*width
// }
// return Math.abs((nRows-row)*(nCols-(col-1)))

// --- 40 --- combat health ---
// function combat(health, damage) {
//   // Write your code here
//   return (health < 0) ? "Health cannot go below 0": (health - damage < 0) ? 0 : health-damage ;
// // }

// --- 41 --- Get ASCII code from a character ---
// function getASCII(c){
//   // ...
//   return c.charCodeAt(0)
// // }
// It is a code for representing 128 English characters as numbers, 
// with each letter assigned a number from 0 to 127. For example,
// the ASCII code for uppercase M is 77. Most computers use ASCII codes to represent text,
// which makes it possible to transfer data from one computer to another.

// --- 42 --- Get Char from ASCII code --- 
// function getChar(c){
//   // ...
//   return String.fromCharCode(c)
// }

// --- 43 --- Get Average ---
// function getAverage(marks){
//   //TODO : calculate the downwar rounded average of the marks array
//   return Math.floor(marks.reduce((a,b) => a+b)/marks.length)
// }

// --- 44 --- find numbers squared --- 
// function squareSum(numbers){
//   return numbers.reduce((total,b) => total + Math.pow(b, 2) , 0)
// }


// --- 45 --- 
// function maps(x){
//   // loop numbers and times 2
//   return x.map(e => e * 2 )
// }

// --- 46 --- return nums in n ---
// function monkeyCount(n) {
//   // your code here
//   let arr = []
//   for (var i=1; i<n+1;i++){
//     arr.push(i)
//   }
//   return arr
//   }

// --- 47 --- Find differences of volumes ---
// function findDifference(a, b) {
//   //   //loading...
//     return Math.abs(a.reduce((a,b)=>a*b) - b.reduce((a,b)=>a*b))
//   }

// --- 48 --- set alarm ---
// function setAlarm(employed, vacation){
//   return (employed == true && vacation == false) ? true : false
//   }
// const setAlarm = (employed, vacation) => employed && !vacation;

// --- 49 --- find volume of cube in bottle ---
// function iceBrickVolume(radius, bottleLength, rimLength) {
//   // Your code should be here ;)
// //   return (3.14*radius**2*bottleLength) - (3.14*radius**2*rimLength)
//   return Math.round(((2*radius)/(Math.sqrt(2)))**2 * (bottleLength-rimLength))
// // }
// const iceBrickVolume = (r, x, y) => 2 * r * r * (x - y);

// --- 50 --- Find sum of differences ---
// function sumOfDifferences(arr) {
//   arr.sort((a,b) => b-a)
//   let result = 0
//   for(var i=1;i<arr.length;i++){
    
//     if (arr.length == 0) return 0
//     else {
//       result += (arr[i-1] - arr[i])
//     }
//   }    
//     return result
// }

// --- es6 ---
// return (arr.length > 1) ? Math.max(...arr) - Math.min(...arr) : 0

// --- 51 --- Shortest code line ---
// function describeAge(age) {
//   return "You're a(n) " + (age < 13 ? "kid" : age < 18 ? "teenager" : age < 65 ? "adult" : "elderly")
// }

// --- 52 --- Pyramid balls find height ---
// function stackHeight3d(layers) {
//   // Your code here!
  
//   return (Math.sqrt((3*layers)**2 - (1.5*layers)**2)).toFixed(2)
// }

// function stackHeight3d(layers) {
//   return layers ? 1 + (layers - 1) * Math.sqrt(6) / 3 : 0
// }

// --- 53 --- print lines ---
// function HQ9(code) {
// return (code === "H") ? "Hello World!" 
//     : (code === "Q") ? "wrong"
//     : (code = 9) ? "99 bottles of beer on the wall, 99 bottles of beer."+\n+
// "Take one down and pass it around, 98 bottles of beer on the wall."+\n+
// "98 bottles of beer on the wall, 98 bottles of beer."+\n+
// "Take one down and pass it around, 97 bottles of beer on the wall."+\n+
// "97 bottles of beer on the wall, 97 bottles of beer."+\n+
// "Take one down and pass it around, 96 bottles of beer on the wall.";
// }

// // function HQ9(code) {
// //   switch (code) {
// //     case 'H': return 'Hello World!';
// //     case 'Q': return code;
// //     case '9': return beer(99);
// //     default: return undefined;
// //   }
// // }

// // function beer(count) {
// //   if (count === 2) {
// //     return '2 bottles of beer on the wall, 2 bottles of beer.\n' +
// //         'Take one down and pass it around, 1 bottle of beer on the wall.\n' +
// //         '1 bottle of beer on the wall, 1 bottle of beer.\n' +
// //         'Take one down and pass it around, no more bottles of beer on the wall.\n' +
// //         'No more bottles of beer on the wall, no more bottles of beer.\n' +
// //         'Go to the store and buy some more, 99 bottles of beer on the wall.';
// //   } else {
// //     return `${count} bottles of beer on the wall, ${count} bottles of beer.\n` +
// //         `Take one down and pass it around, ${count - 1} bottles of beer on the wall.\n` +
// //         beer(count - 1);
// //   }
// // }

// --- 54 --- EZ ---
// function orderOperations () {
//   return (2 + 2) * (2 + 2) * 2
// }

// --- 55 --- Dates ---
// function periodIsLate(last, today, cycleLength)
// {
//   // today plus cycleLength > last returns true
// //   var result = new Date();
// //   result.setDate(today.getDate() + cycleLength );
// //   return (result/ (1000*3600*24) > last) ? true : false ;

//   return (today-last)/(1000*3600*24) > cycleLength
// }


// --- 56 --- operator Switch Case ---
// function calculator(a,b,sign){
//   switch (sign) {
//     case '+' : return a + b;
//       break;
//     case '-' : return a - b;
//       break;
//     case '*' : return a * b;
//       break;
//     case '/' : return a / b;
//       break;
//     default: return "unknown value"
//   }
//   }

// --- 57 --- Alternate case ---
// String.prototype.toAlternatingCase = function () {
//   // Define your method here :)
//   return this.split('').map(e=> e === e.toUpperCase() ? e.toLowerCase(): e.toUpperCase()).join('')
// }

// --- 58 --- Sort and Star ---
// function sortStar(s) {
//   return s.sort()[0].split('').join('***')
// }

// --- 59 --- draw stairs ---
// function drawStairs(n) {
//   let step = 'I';
//   for (let i=i;i<n;i++){
//     step += '\n'+ ''.repeat(i) + 'I'
//   }
//   return step;
// }

// const drawStairs = n => [...Array(n)].map((_, i) => ' '.repeat(i) + 'I').join('\n');

// --- 60 --- for loop --- 
// function generateRange(min, max, step){
//   let arr = [];
//   for (let i=min; i<=max; i += step) {
//     arr.push(i);
//   }
//   return arr;
// }

// --- 61 --- Ternary operator, Math.pow(x, 2) ---
// function apple(x){
//   return x*x > 1000 ? "It's hotter than the sun!!" : "Help yourself to a honeycomb Yorkie for the glovebox.";
//   }

// Math.pow(x,2) > 1000

// --- 62 --- return five ---
// function unusualFive() {
//   return 'DaniQ'.length
// }

// --- 63 --- Boolean, function ---
// function _if(bool, func1, func2) {
//   // ...
//   return bool ? func1() : func2()
// }

// --- 64 --- parseInt, String, sum ---
// function sumStr(a,b) {
//   String(Number(a) + Number(b))
// }

// --- 65 --- Change case random test , ternary operator ---
// function mouthSize(animal) {
//   // code here
//   return (animal.toLowerCase() == "alligator") ? "small" : "wide"
// }

// --- 66 --- reverse string ---
// function solution(str){
//   return str.split('').reverse().join('')
// }

// --- 67 --- Multiple if statements ---
// function bmi(weight, height) {
//   let bmiC = weight/Math.pow(height,2);
//  //  return bmiC <= 18.5 ? "Underweight" : 
//  //    bmiC >18.5 && bmiC <= 25 ? "Normal" :
//  //    bmiC >25 && bmiC <= 30 ? "Overweight" :
//  //     "Obese"
 
//  if(bmiC <= 18.5) {return "Underweight"}
//  else if (bmiC >18.5 && bmiC <= 25) {return "Normal"}
//  else if (bmiC >25 && bmiC <=30) {return "Overweight"}
//  else return "Obese"
//  }
//  function bmi(weight, height) {
//   var result = weight/Math.pow(height,2) 
  
//   if (result <= 18.5) {
//     return "Underweight";
//   } else if (result <= 25) {
//     return "Normal";
//   } else if (result <= 30) {
//     return "Overweight";
//   } else {
//     return "Obese";
//   }
  
// }

// --- 62 --- Square area from arc ---
// function squareArea(A){
//   // A = 1/4 of circumference of a circle
//   // circumference = 4*A
//   // c = 2 Pi r
//   // r = c/6.28
//   // square area = (4*a/2*3.14)^2
//   let area = Math.pow((4*A)/(Math.PI*2),2)
//   return Math.round(area*100)/100
//   }

// --- 63 --- REgex ---
// function validateUsr(username) {
//   res =  /^[a-z0-9_]{4,16}$/.test(username) 
//   return res
// }

// --- 64 --- indexOf --- 
// function warnTheSheep(queue) {
//   return queue.indexOf("wolf")+1 == queue.length ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${queue.length - (queue.indexOf("wolf")+1)}! You are about to be eaten by a wolf!`;
//   }

// --- 65 --- numbers --- 
// function sum (numbers) {
//   "use strict";
//   return numbers[0] == null ? 0 : numbers.reduce((a,b)=>a+b) 
// };

// --- 66 --- average ---
// function betterThanAverage(classPoints, yourPoints) {
//   // Your code here
// let avg = classPoints.reduce((a,b)=>a+b)/classPoints.length
// return (yourPoints>avg)
// }

// --- 67 --- and or xor ---
// --- solution ---
// var ops = {
//   'AND': (a, b) => a && b,
//   'OR': (a, b) =>  a || b,
//   'XOR': (a, b) => a !== b
// }


// function logicalCalc(array, op){
//   return array.reduce(ops[op]);
// }
// function logicalCalc(array, op){
//   //your code here
  
//   switch(op){
//     case "AND":
//     return (array[array.length-1] && array[array.length]) ? true : false 
//     break;
//     case "OR":
//     return (array[array.length-1] || array[array.length]) === 1 ? true : 
//      (array[array.length-1] || array[array.length]) === -1 ? true : false
//     break;
//     case "XOR":
//     return (array[array.length-1] && array[array.length]) === 1 ? false :
//      (array[array.length-1] && array[array.length]) === -1 ? false : true
//     break;
//   }
// }

// --- 68 --- 
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   // TODO
//   return (distanceToPump <= mpg*fuelLeft) ? 1 : 0
// };

--- 69 --- Switch Case ---
function getPlanetName(id){
  let name;
  switch(id){
    case 1:
      return name = 'Mercury';
      break;
    case 2:
      return name = 'Venus';
      break;
    case 3:
      return name = 'Earth';
      break;
    case 4:
      return name = 'Mars';
      break;
    case 5:
      return name = 'Jupiter';
      break;
    case 6:
      return name = 'Saturn';
      break;
    case 7:
      return name = 'Uranus';
      break;
    case 8:
      return name = 'Neptune';
      break;
    default:
      console.log('nothing');
      
  }
}

// --- 70 --- indexOf
// function check(a, x) {
//   // your code here
//   return a.indexOf(x) > -1
// // }
// const check = (a,x) => a.includes(x);

// --- 71 --- this refers to the string being tested ---
// String.prototype.isUpperCase = function() {
//   // your code here
//   console.log(this)
//   return this==this.toUpperCase()
// }

// --- 72 --- reduce have initial value should be specified after function , 0 ---
// function arrayMadness(a, b) {
//   // Ready, get set, GO!!!
//   let squareA = a.reduce((tot,b)=> tot + b**2,0)
//   let cubesB = b.reduce((tot,b)=>tot + b**3,0)
//   console.log(a, squareA)
//   console.log(b, cubesB)
  
//   return   squareA > cubesB
// }

--- 73 --- find and replace polish chars ---
set object key value pair for each polish chars
replace that matching with the key
function correctPolishLetters (string) {
  // your code
  // specify polish translation to alphabeth
  // loop thru string, if match with polish, replace with alphabeth
  
  let polish = [
  'ą', 'ć', 'ę', 'ł', 'ń', 'ó', 'ś', 'ź', 'ż'
  ]
  let arr = [];
  for (var i=0; i<string.length;i++){
//     if (string[i].match(string[i])) console.log(string[i])
    
    if(string[i].indexOf(polish) > -1) {arr.push(string[i])} 
      
    
  }
  
console.log(arr)
//   return string
  
//   return string.map(e=> {
//     if (e.match(polish)) {e.replace(polish, 'ą, ć, ę, ł, ń, ó, ś, ź, ż')}
//   })
  
//   console.log(string.replace(polish))
}

--- solution --- 
function correctPolishLetter (str) {
  let dict = { 'ą': 'a' , 'ć': 'c', 'ę':'e', 'ł':'l', 'ń':'n', 'ó':'o', 'ś':'s', 'ź':'z', 'ż':'z'}
  return str.replace(/[ąćęłńóśźż]/g, match = dict(match))
}
var polishLetters = {
  "ą": "a",
  "ć": "c",
  "ę": "e",
  "ł": "l",
  "ń": "n",
  "ó": "o",
  "ś": "s",
  "ź": "z",
  "ż": "z",
};

function correctPolishLetters (string) {
return string.split('').map((c) => polishLetters[c] || c).join("");
}

--- 74 --- modulus ---
function testEven(n) {
  //Your awesome code here!
  return n%2==0
}


--- 75 --- find min and max values ---
function differenceInAges(ages){
  let sort = ages.sort((a,b) =>a-b)
  let diff = Math.max(...sort) - Math.min(...sort);
  return [Math.min(...sort), Math.max(...sort), diff]
}

--- 76 --- first non consecutive ---
function firstNonConsecutive (arr) {
  // loop thru arr, check if arr[i] == 
    for (var i=0; i<arr.length -1 ;i++){
      if ((arr[i]+1) !== arr[i+1]) 
      return arr[i+1]
    }
    return null 
  }

  --- 77 --- to String ---
  var a = String(123);

--- 78 --- Switch Case --- 
function getDrinkByProfession(param){

  let editedParam = param.toLowerCase()
  switch (editedParam) {
  case 'jabroni':
    return 'Patron Tequila';
    break;
  case 'school counselor' :
    return 'Anything with Alcohol';
    break;
  case 'programmer':
    return'Hipster Craft Beer';
    break;
  case 'bike gang member':
    return 'Moonshine';
    break;
  case 'politician':
    return 'Your tax dollars';
    break;
  case 'rapper':
    return 'Cristal';
    break;
  default: return 'Beer'
  }
  }

--- 79 --- 
function past(h, m, s){
  //#Happy Coding! ^_^
  // 1 hour is 60 mins
  // 1 min is 60 secs
  // 1 sec is 1000 milliseconds
  return h*60*60*1000 + m*60*1000 + s*1000
  
}

--- 80 --- my way is way harder ---
function strCount(str, letter){  
  //code here
  let result = []
  console.log(str.split('').map(e=> e.match(letter)))
  for (var i=0; i<str.length; i++) {
    if (str[i] == letter) {
      result.push(str[i]) 
    } 
  }
  return str.match(letter) ? result.length : 0
}

--- solution --- 
function strCount(str, letter){  
  return str.split(letter).length-1
}

--- 81 ---
function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  // Your code here.
  // probability of blue is blueLeft/totalLeft
  return (blueStart-bluePulled)/((blueStart-bluePulled)+(redStart-redPulled))
}

--- 82 --- power to the nth ---
function index(array, n){
  //your code here
//find value of the index in array
//power it to 2
//if value of index n isn't in array return -1
console.log(array, n)
console.log(array.indexOf(n))
console.log(array[n])
console.log(Math.pow(array[n], 2))
return n > array.length-1 ? - 1 : Math.pow(array[n], n)
}


--- 83 --- Remove 0s from end of a num --- STUCK 
** Mistake was made in first condition in for lookup, needing to -1 from num.length. 
** I was seeing this from perspective of arrays, 
** but this couldve easily been done by operation / math calculation
** I need to use curly braces from else {break}
** replace
function noBoringZeros(n) {
  // your code
  // loop thru array n from the back, 
  // for as long as n[i] is 0, delete, then return
  console.log(typeof n)
  let num = String(n).split('');
  for (var i=num.length;i>=0;i--) {
    console.log(num[i])
    if (num[i] === '0') {num.pop()};
//     return num
  console.log(num)
  }
  return Number(num.join(''))
}

*** Solution *** Using replace 
function noBoringZeros(n) {
  // your code
  console.log(n)
  let strN = String(n)
  console.log(typeof strN)
  return Number(strN.replace(/0*$/g,''))
  
}

--- 84 --- exclusive or , xor ---
*** conditions are : 
false xor false == false // since both are false
true xor false == true // exactly one of the two expressions are true
false xor true == true // exactly one of the two expressions are true
true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.

*** solution ***
function xor(a, b) {
  // TODO: Program Me
  return (a == b) ? false : true
}


--- 85 --- Return an array consisting nums from 0 to N-1 ---
** function that returns an array []
** Mistake was, I was pushing an object from array that did not exists. 
** should just push the index into newArray

const arr = N => {
  let result = []
  let numEnds = `${N-1}`
//   console.log(numEnds)
console.log(numEnds)
  for (var i=0;i<numEnds;i++){
     result.push(numEnds[i])
     
  }
  return N ? result : []

}

** Solution ** 
const arr = N => {
  let result = []

  for (var i=0;i<N;i++){
     result.push(i)    
  }
  return result 
}

--- 86 --- return the longest word ---
function findLongest(str) {

  console.log(str.split(' ').map(e=>(e.length)).sort((a,b)=>b-a))
  return str.split(' ').map(e=>(e.length)).sort((a,b)=>b-a)[0]
  
  //   console.log(str)
  //   var spl = str.split(" ");
  //   var longest = 0
  //   console.log(spl)
  //   for (var i = 0; i > spl.length; i++) {
  //     console.log(spl[i])
  //     if (spl(i).length > longest) {
  //       longest = spl[i].length
  //     }}
  //     return longest
  }

  --- 87 --- conditional and formulas ---
  function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    // speed = distance / time
    // time = distance / speed
    let myTime = pontoonDistance/youSpeed ;
    let sharkTime =sharkDistance/ sharkSpeed ;
    let alive = myTime < sharkTime
    console.log(myTime, sharkTime)
    
    if (dolphin) {
      sharkTime = sharkTime * 2;
      console.log(sharkTime)
      if(myTime < sharkTime) {
      return "Alive!"} else {
      return "Shark Bait!"
      }
    } else if (myTime < sharkTime) {
      return "Alive!"} else {
      return "Shark Bait!"
      }
    }

** Cleaner solution **
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  if(dolphin){
    sharkSpeed /= 2;
  }
  return pontoonDistance/youSpeed < sharkDistance/sharkSpeed ? "Alive!" : "Shark Bait!";
}

--- 88 --- forward ticks ---
function derive(coefficient,exponent) {
  let prod = coefficient * exponent
  let sec = exponent - 1
  
  return `${prod}x^${sec}`
  
}

--- 89 --- STUCK ---
** given 3 strings, combine it into one concat string **
** tried using for loop into arr **
** first split the string to get access into each **
function tripleTrouble(one, two, three){
  
  let ones=one.split('')
  let twos=two.split('')
  let threes=three.split('')
  let arr = [ones, twos, threes]
  let res = []
  
  console.log(arr, res)
}

** Solution ** 
** loop through args one and concat each string **
** use arr.charAt(i) to get value in array **
** we knew we should concat patterned by their index number **
function tripleTrouble(one, two, three) {
  var result = "";
  for (let i = 0; i < one.length; i++) {
    result += one.charAt(i) + two.charAt(i) + three.charAt(i);
  }
  return result;
}


--- 90 --- exclusive Or --- 
** one liner solution **
function xor(a, b) {
  return (a==true && b==true) || (a==false && b==false) ? false : true;
  }

** even shorter solution **
** return me true if either a or b is not the same **
function xor(a, b) {
  return a != b;
}

--- 91 --- missing 1st and 13th. return floor number ---
** ternary operator ** 
function getRealFloor(n) {
  // missing numbers are 1. 1st floor is 0
  // 13th floor is missing
  return (n<0) ? n : 
  (n==0 || n==1) ? 0 :
  (n>1 && n<13) ? n-1 :
  (n>=13) ? n-2 : 0
  }

** better solution **
  function getRealFloor(n) {
    return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
  }


--- 92 --- km/h to cm/sec ---
function cockroachSpeed(s) {
  //Good Luck!
  // km/h to cm/sec
  //1000/3600
  let diff = 100000/3600
  console.log(s)
  return Math.floor(s*diff)
}

--- 93 --- STUCK ---
** There are 4 conditions that needs to be satisfied ** 
** confused on how to set these conditions along with each other from an array **

function isValid(formula){
  //coding and coding..
  // nums are 1 to 8
  // index are 0 to 7
  // loop through formula check each element NOT
  // arr[i] NOT 
  // THERE IS NO NEED TO LOOP, USE INCLUDES
  
  console.log(formula.includes(7 || 8)) 
  console.log()
  
  for (var i=0;i<formula.length;i++){
    if (formula.includes(7 || 8) && formula[i])
  }
  
  console.log(formula)
}

** Solution **
isValid = a => !(a.includes(1) && a.includes(2)) &&
!(a.includes(3) && a.includes(4)) &&
a.includes(5) === a.includes(6) &&
(a.includes(7) || a.includes(8));
  // 1 & 2 cant be together
  // 3 & 4 cant be together using ! ( && )
  // 5 & 6 must be together using ===
  // 7 & 8 must be selected at least one or both

--- 94 --- sort num largest in front ---
function superSize(num){
  return Number(`${num}`.split('').sort((a,b)=>b-a).join(''))
  }

--- 95 --- Reverse sequence ---
const reverseSeq = n => {
  console.log(n)
    let res = [];
    for (let i=n; i>0; i--) {
      res.push(i)
    }
    return res;
  };

--- 96 --- num is divisible ---
function isDivisible(n, x, y) {
  return (n%x==0 && n%y==0)
  }

--- 97 --- iterate in between ---
function between(a, b) {
  // your code here
  let res = []
  for (let i=a; i<=b; i++) {
    res.push(i)
  } return res
}

--- 98 --- Switch case based on rating to adjust tip --- 
** Using Math.ceil(tip) to round up dollar amount **
function calculateTip(amount, rating) {
  console.log(amount, rating)
  let test = rating.toLowerCase()
  let tip = 0;
  
  switch (test) {
  case 'terrible':
    tip = amount * 0;
    break;
  case 'poor':
    tip = amount *0.05;
    break;
  case 'good':
    tip =amount*0.1;
    break;
  case 'great':
    tip=amount*0.15;
    break;
  case 'excellent':
    tip=amount*0.20;
    break;
  default:
    return 'Rating not recognised'
    }
    
    return Math.ceil(tip)
  }

--- 99 --- return unusual 5 ---
** should not use any banned characters ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/") **

  function unusualFive() {
    let arr = ['a', 'b' , 'c', 'd' ,'e', 'f', 'g']
    
    return arr.indexOf('f')
  }

--- 100 --- returns only num multiple of index ---
function multipleOfIndex(array) {
  // good luck
  console.log(array)
  return array.filter((e,i)=> e%i===0)
}

--- 101 --- 
function greet(name){
  //your code here
  console.log(name)
  return `Hello, ${name} how are you doing today?`;
}


--- 102 --- 
function sakuraFall(v) {
  // your code here
  // speed 5 cm/s => s = d/t
  // time 80 s
  // find distance 
  let d = 5 * 80
  // t = d / v
  
  console.log(typeof v, v, d)
  return v <= 0 ? 0 :  d / v
}


--- 103 ---
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  console.log('pontoonDistance : '  + pontoonDistance )
  console.log('sharkDistance   : ' + sharkDistance)
  console.log('youSpeed        : ' + youSpeed)
  console.log('sharkSpeed      : ' + sharkSpeed)
  console.log('dolphin         : ' + dolphin)
  let distance = 1;
  let sharkTime = sharkDistance / sharkSpeed;
  let myTime = pontoonDistance / youSpeed;
  
  let alive = myTime < sharkTime
  console.log(alive)
  
  if (dolphin) {
    sharkSpeed = sharkSpeed/2;
    console.log('dolphin is True, so sharkSpeed / 2 : ' + sharkSpeed)
    sharkTime = sharkDistance/ sharkSpeed
    console.log(myTime, sharkTime)
    return myTime < sharkTime ? "Alive!" : "Shark Bait!"
  }

  console.log(alive)
  
  
  return myTime < sharkTime ? "Alive!" : "Shark Bait!"
}

--- 104 ---
function checkAlive(health) {
  return health > 0;
}

--- 105 --- 
function nextId(ids){
  //this will be awesome!
  console.log(ids)
  let sorted = ids.sort((a,b) => a-b)
  console.log(sorted)
  if (sorted[0] !== 0) {
    return 0
  }
  for (let i = 0; i < ids.length ; i++){
    if (ids[i+1] !== ids[i]+1 && ids[i+1] !== ids[i]) {
      return ids[i]+1
    }
  }
  return 0;
}


--- 106 --- 
const flip=(d, a)=>{
  //TODO
  console.log(d, a)
  return d === "R" ? a.sort((a,b) => a- b) 
                  : d === "L" ? a.sort((a,b) => b - a)
                   : null
}


--- 107 ---
function hello(name) {
  let final = name ? name[0].toUpperCase().concat(name.toLowerCase().split('').splice(1).join('')) : "World"
  console.log(final)
  return `Hello, ${final}!`;
}

--- 108 ---
const quarterOf = (month) => {
  // Your code here
  
  console.log(month)
  // num / 12 = 
  // 3/12 8/12 11/12
  // returns num (1-4)
  
  if (month <= 3) {
    return 1
  } else if (month > 3 && month <= 6) {
    return 2
  } else if (month > 6 && month <= 9) {
    return 3
  } else if (month > 9 && month <= 12) {
    return 4
  }


}

const quarterOf = (month, quarter = 4) => {
  switch (month) {
    case 1:
    case 2:
    case 3:
      quarter = 1;
      break;
    case 4:
    case 5:
    case 6:
      quarter = 2;
      break;
    case 7:
    case 8:
    case 9:
      quarter = 3;
      break;
  }
  return quarter;
};


--- 109 ---
function multiTable(number) {
  // good luck
  console.log(number)
  let result = 1
  let arr = []
  for (let i=1; i<=10; i++) {
    result = number * i
    arr.push(`${i} * ${number} = ${result}`)
  }
  
  console.log(arr.join('\n'))
  return arr.join('\n')
}

function multiTable(number) {
  console.log(number)
  
  let arr = []
  let n = 1
  
  while (n<=10) {
    arr.push(`${n} * ${number} = ${n*number}`);
    n++;
  }
  
  return arr.join('\n')
}

--- 110 ---
function switchItUp(number){
  //Write your own Code!
    console.log(number)
    let numberOb = {
      1 : 'One',
      2 : 'Two',
      3 : 'Three',
      4 : 'Four',
      5 : 'Five',
      6 : 'Six',
      7 : 'Seven',
      8 : 'Eight',
      9 : 'Nine',
      0 : 'Zero'
    }
    
    console.log(numberOb[number])
    return numberOb[number]
  }


  --- 111 ---
  const areaOrPerimeter = function(l , w) {
    // Return your answer
    return (l===w) ? l * w : l * 2 + w *2
  };

--- 112 ---
function weatherInfo (temp) {
  console.log(temp)
  let celcius = (temp - 32 ) * (5/9);
  console.log(celcius)
  return (celcius < 0) ? `${celcius} is freezing temperature` : `${celcius} is above freezing temperature`
}

--- 113 --- 
// Write the "square"-function here
const square = (e) => {
  console.log(e)
  return Math.pow(e, 2)
};

--- 114 --- 
function solution(a, b){
  // your code here
  console.log(a, b)
  console.log(a.split('').length, b.split('').length)
  let result = ''
  if (a.split('').length > b.split('').length) {
    return `${b}${a}${b}`
  } else return `${a}${b}${a}`
  
}


--- 115 --- 
function dBScale(intensity) {
  return 10 * Math.log10(intensity/Math.pow(10, -12))
  }


   --- 116 ---
   function rentalCarCost(d) {
    // Your solution here
    // return total amount differences
    let hour = 40
    let total1 = 6 * 40
    let total2 = 240+ (d-6) 
    
    console.log(d)
    return (d < 3) ? d * 40 : 
    (d < 7) ? (d * 40) - 20 : 
     (d * 40) - 50 
   }

   --- 116 ---
   function stringy(size) {
    // your code here   
    let res = []
    
    for (let i=1; i<=size; i++) {
      (i%2==0) ? res.push('0'):res.push('1')
    }
    console.log(res)
    return res.join('')
  }


  --- 117 ---
  function preFizz(n) {
    let res = []
    for (let i=1; i<=n ; i++) {
      res.push(i)
    }
    return res
  }

  --- 118 ---
  // Write here your multiply-function
const multiply = (a,b) => a*b

--- 119 ---
const solve = (x, y) => x / y// y

--- 120 ---
function aspectRatio(x,y){
  console.log(x,y)
return [Math.ceil(y*(16/9)), y]
}


121 
function booleanToString(b){
  //your code here
  return String(b)
}

122 
function uefaEuro2016(teams, scores){
  // your code...
  if (scores[0] == scores[1]) return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
  if (scores[0] < scores[1]) { return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`}
  else {return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`}

}

123
var a = "dev"
var b = "Lab"

var name = `${a}${b}`

124
function pipeFix(numbers){
  let first = numbers[0]
  let last = numbers[numbers.length-1]
  let res =[]
  for(let i=first; i<=last; i++) {
    res.push(i)
  }
  
  return res
}
125
var replaceDots = function(str) {
  return str.replace(/[.]/g, '-');
}

126 position in alphabet
function position(letter){
  //Write your own Code!
    return `Position of alphabet: ${letter.charCodeAt(0)-96}`
  }


127 
const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2);

128
// Smash Words
function smash (words) {
  "use strict";
  console.log(words.join(' '))
  return words.join(' ')
};

129
var cubeChecker = function(volume, side){
  console.log(volume, side)
  let res = Math.sqrt(volume/side)
  if( res == side) {
    return true
  }
  
  return false
};

130
function whoIsPaying(name){
  //your code here
  console.log(name)
  
  if(name.length <= 2) return [name]
  
  return [name, [name[0], name[1]].join('')]
}

131
function isToday(date) {
  //Code goes here.
  console.log(date.toString())
//   let newDate = date.split('T')
  let today = new Date().toString().split(' ')
console.log(today)
  today = `${today[1]} ${today[2]} ${today[3]}`
  date = date.toString().split(' ')
  date =  `${date[1]} ${date[2]} ${date[3]}`
  console.log(date)
  console.log(today)
  if (date == today) return true
  return false
  
  
}

132 
function howManydays(month){
  
  
  var days 
  console.log(month)
  switch (month) {
      case 1: 
        days = 31;
        break;
      case 2:
        days = 28;
        break;
      case 3:
        days = 31;
        break;
      case 4: 
        days = 30;
        break;
      case 5: 
        days = 31;
        break;
      case 6: 
        days = 30;
        break;
      case 7:
        days = 31;
        break;
      case 8:
        days = 31;
        break;
      case 9: 
        days = 30;
        break;
      case 10:
        days = 31;
        break;
      case 11: 
        days = 30;
        break;
      case 12: 
        days = 31;
      break  
      
  }
  console.log(days)
  return days;
}
function howManydays(month){
  switch (month){
     case 2: return 28
     case 4:
     case 6:
     case 9:
     case 11: return 30
  }
  return 31
}

function none(arr, fun){
  // ...
  let res = []
arr.map(e=>{
  console.log(fun(e))
  if (fun(e) == 1 || fun(e) == true) res.push(e)

})
  if (res.length > 0) return false
  return true
}

135
function any(arr, fun){
  // ...
  if (arr.length == 0) return false
 let res = [...arr.map(e=> fun(e) ? true : false)]
 
 console.log(res)
 
if (res.indexOf(true) > -1) return true
  return false
  
}

136
function include(arr, item){
  // ...
  return arr.includes(item)
}

137
function pillars(num_pill, dist, width) {
  // your code here
  console.log(num_pill, dist, width)
  
  if (num_pill == 1) return 0
  let diff = num_pill - 2 
  let total = 0
  dist = dist * 100
  if (diff > 1 ) {
    total = ((num_pill-1)*dist) + (diff*width)
    return total
  }  

  return dist
  
}

138
function isDivisible(wallLength, pixelSize){
  //your code here
  return (wallLength % pixelSize == 0)
}


// parseInt() function parse---s a string argument and returns an integer of the specified 
// Math.floor() function returns the largest integer less than or equal to a given number.
// Math.max() returns the highest number in the group. 
// Math.round() returns to nearest integer
// Math.ceil() returns to highest integer
// return numbers.reduce((total,b) => total + Math.pow(b, 2) , 0) <-------- the ', 0' is saying 'else, give me 0' 

// Arrays:
// .slice(index to start, and ending index excluding itself) = Takes in 2 parameters 
// str.replace(what, waht)
// arr.includes(valueToFind[fromindex]) = returns true or false
// array.filter(function(currentValue, index, arr), thisValue)
// ---const names = ['John', 'Paul', 'George', 'Ringo', 'John'];

// ---let x = (names) => names.filter((v,i) => names.indexOf(v) === i)
// ---x(names); // 'John', 'Paul', 'George', 'Ringo'
// array.match(/[a-z]/)
// arr.indexOf(searchElement[, fromIndex]) --- 
// ---The indexOf() method returns the first index at which a given element 
// ---can be found in the array, or -1 if it is not present.
// array.reverse()
//
// Array.push() --- Place data onto the stack
// Array.pop() --- removing last element 
// // Array.shift() --- takes out first element in array
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)


// Ascending order sort
// ---1,5,10,25,40,100
// ---arr.sort(function(a, b){return a-b})
// Descending order sort
// ---100,40,25,10,5,1
// ---arr.sort(function(a, b){return b-a})

// First recipe app
// https://obscure-brushlands-62038.herokuapp.com/showrecipe


var sentence = 'The quick brown fox jumps over the lazy dog.';
var index = 4;
sentence.charCodeAt(index)

