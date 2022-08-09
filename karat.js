"use strict";

/**
 * You are reading a Build Your Own Story book. It is like a normal book except that choices on some pages affect the story, sending you to one of two options for your next page.

These choices are really stressing you out, so you decide that you'll either always pick the first option, or always pick the second option.

You start reading at page 1 and read forward one page at a time unless you reach a choice or an ending.

The choices are provided in a list, sorted by the page containing the choice, and each choice has two options of pages to go to next. In this example, you are on page 3, where there is a choice. Option 1 goes to page 14 and Option 2 goes to page 2.

choices1 = [[3, 14, 2]] => [current_page, option_1, option_2]
The ending pages are also given in a sorted list:

endings = [6, 15, 21, 30]

Given a list of endings, a list of choices with their options, and the choice you will always take (Option 1 or Option 2), return the ending you will reach. If you get stuck in a loop, return -1.

Example:
find_ending(endings, choices1, 1) (always Option 1)
  Start: 1 -> 2 -> 3(choice) -> 14 -> 15(end) => Return 15

find_ending(endings, choices1, 2) (always Option 2)
  Start: 1 -> 2 -> 3(choice) -> 2 -> 3(choice) -> 2... => Return -1

Additional inputs:
choices2 = [[5, 11, 28], [9, 19, 29], [14, 16, 20], [18, 7, 22], [25, 6, 30]]
choices3 = []
choices4 = [[2, 10, 15], [3, 4, 10], [4, 3, 15], [10, 3, 15]]

Complexity Variable:
n = number of pages
(endings and choices are bound by the number of pages)

All Test Cases - camelCase:
findEnding(endings, choices1, 1) => 15
findEnding(endings, choices1, 2) => -1
findEnding(endings, choices2, 1) => 21
// 1 -> 2, 3,4, 5 = 11 
// 11, 12, 13, 14, = 16
// 16 , 17, 18 = 7
// 7 , 8, 9 = 19
// 19 , 20 , 21

findEnding(endings, choices2, 2) => 30
findEnding(endings, choices3, 1) => 6
findEnding(endings, choices3, 2) => 6
findEnding(endings, choices4, 1) => -1
findEnding(endings, choices4, 2) => 15
 */

const endings = [6, 15, 21, 30];
const choices1 = [[3, 14, 2]];
const choices2 = [[5, 11, 28], [9, 19, 29], [14, 16, 20], [18, 7, 22], [25, 6, 30]];
const choices3 = [];
const choices4 = [[2, 10, 15], [3, 4, 10], [4, 3, 15], [10, 3, 15]];

// findEnding(endings, choices2, 1) => 21
// const choices2 = [[5, 11, 28], [9, 19, 29], [14, 16, 20], [18, 7, 22], [25, 6, 30]];

// loop each page 
// check if curpage is current page in any choicees
// change curpage option 1
// continue loop, check if curpage is in ending, curpage in choices
// if in ending return num
// return -1

function findEnding(endings, choices, num) { 
  let visited = new Set()
  const lastPage = endings[endings.length-1]

  for (let i=1; i<=lastPage; i++) {


    if (visited.has(i)) return -1
    visited.add(i)

    for (let j=0; j<choices.length;j++) {

      if (endings.indexOf(i) >= 0) {
        return endings[endings.indexOf(i)]
      }

      if (i == choices[j][0]) {
        i = choices[j][num]
        continue
      }
    }

    if (endings.indexOf(i) >= 0) {
      return endings[endings.indexOf(i)]
    }
  }
  return -1
}
console.log(findEnding([9, 15, 21, 30], [[3, 14, 2]], 1))
// findEnding([6, 15, 21, 30], [[3, 14, 2]], 1)
// findEnding([6, 15, 21, 30], choices2, 2)
console.log(findEnding([6, 15, 21, 30], choices2, 2))
console.log(findEnding(endings, choices4, 1))
console.log(findEnding(endings, choices3, 2))
findEnding(endings, choices2, 2)
console.log(findEnding(endings, choices3, 1))