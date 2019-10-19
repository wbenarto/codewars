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

