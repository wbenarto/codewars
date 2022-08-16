/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    let dict = {}
    for (let word of strs) {
        
        let array = Array(26).fill(0)
        for (let i=0;i<word.length;i++) {
            let ascii = word.charCodeAt(i)
            array[ascii-97] += 1
        }
        
        const key = array.join('-')
        
        if (dict[key]) {
            dict[key].push(word)
        } else {
            dict[key] = [word]
        }
    }
    console.log(dict)
    return Object.values(dict)
};

// O(n m) 