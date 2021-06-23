let p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let isClean = false
        if (isClean)
            resolve({data: "tons of data"})
        else
            reject("hey failed")
    },2000)
})


console.log(p)
p.then((data)=>{
    const requiredData = data
    console.log('requiredData', requiredData)
    console.log(p)
}).catch((msg)=>{
    console.log(msg)
    console.log(p)
})


