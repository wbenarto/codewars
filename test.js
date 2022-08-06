const prom = new Promise((res ,rej ) => {
    setTimeout(() => {
        res("prom")
    }, 1000)
    setTimeout(()=> {
        rej(new Error('!prom'))
    })
}) 

prom.then(function(arg) {
    console.log(arg)
    return new Promise((res, rej) => {
        rej(new Error("!arg"))
    }).catch((err) => {
        console.log(err.message)
    })
}).catch(err=>{
    console.log(err.message)
})