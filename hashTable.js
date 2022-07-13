var hash = (string, max) => {
    var hash = 0;
    for(var i = 0;i<string.length;i++) {
        hash += string.charCodeAt(i)
    }
    return hash%max
}

let HashTable = function() {
    let storage = [];
    const storageLimit = 4

    this.print= function(){
        console.log(storage)
    }

    this.add = function(key,value){
        var index = hash(key, storageLimit);
        if(storage[index] === undefined) {
            storage[index] = [[key,value]]
        } else {
            var inserted=false;
            for (var i=0;i<storage[index].length; i++){
                if(storage[index][i][0] === key) {
                    storage[index][i][0] = value;
                    inserted=true;
                }
            }
            if(inserted === false){
                storage[index].push([key,value])
            }
        }
    }

    
}

const _ = require('lodash');

// Store tiles in hashmap
// loop thru word
// if letter not in hashmap check if underscore exist
// store the point else return 0
// if letter in hashmap, hm[letter] -= 1

const points = {
  a: 1,
  b: 3,
  c: 3,
  d: 2,
  e: 1,
  f: 4,
  g: 2,
  h:4,
  i: 1,
  j: 8,
  k: 5,
  l: 1,
  m: 3,
  n: 1,
  o: 1,
  p: 3,
  q: 10,
  r: 1,
  s: 1,
  t: 1,
  u: 1,
  v:4 ,
  w: 4,
  x: 8,
  y: 4,
  z: 10
}

const word = 'cat'

const tiles = 'tmoa_'

let hash = {}



const wordPoints = (word, tiles) => {
  let total = 0
  for (let i = 0; i< tiles.length; i++) {
    if (hash[tiles[i]]) {hash[tiles[i]] += 1}
    else hash[tiles[i]] = 1
  }
  
  for (let i = 0; i<word.length;i++) {
    if (hash[word[i]] > 0) {
      total += points[word[i]]
      hash[word[i]] -= 1
    } else if (hash['_'] > 0) {
      total += points[word[i]]
      hash['_'] -= 1
    } else {
      return (0)
    }
  }

  return (total)
}

console.log(wordPoints('catq', 'tmoac_'))
console.log(wordPoints('catt', 'tmoact'))
console.log(wordPoints('caat', 'tmoac'))
console.log(wordPoints('cat', 'tmo__'))