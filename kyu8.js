
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


// const isVow = a => a.map(x=>'aeiou'.includes(y=String.fromCharCode(x)) ? y : x)