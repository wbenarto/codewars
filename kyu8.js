
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
// parseInt() function parse---s a string argument and returns an integer of the specified 
// Math.floor() function returns the largest integer less than or equal to a given number.
// Math.max() returns the highest number in the group. 