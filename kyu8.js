
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

