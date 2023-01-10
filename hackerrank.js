'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'sortIntersect' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY volcanic
 *  2. INTEGER_ARRAY nonVolcanic
 */

function sortIntersect(volcanic, nonVolcanic) {
    // Write your code here
    let res = []
    let tempArr = [...new Set(volcanic)]
    for (let i=0; i<tempArr.length; i++) {

        if (nonVolcanic.indexOf(tempArr[i]) > -1) {
            res.push(tempArr[i])
        }
    }
  
    return (res.sort((a,b)=>b-a))
   

}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const volcanicCount = parseInt(readLine().trim(), 10);

    let volcanic = [];

    for (let i = 0; i < volcanicCount; i++) {
        const volcanicItem = parseInt(readLine().trim(), 10);
        volcanic.push(volcanicItem);
    }

    const nonVolcanicCount = parseInt(readLine().trim(), 10);

    let nonVolcanic = [];

    for (let i = 0; i < nonVolcanicCount; i++) {
        const nonVolcanicItem = parseInt(readLine().trim(), 10);
        nonVolcanic.push(nonVolcanicItem);
    }

    const result = sortIntersect(volcanic, nonVolcanic);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
