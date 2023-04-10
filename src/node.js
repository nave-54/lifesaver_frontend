const fs = require("fs")
fs.readFile(__filename,()=>{
    console.log("io 1");
})
process.nextTick(()=>{
    console.log("tick 1")
})
process.nextTick(()=>{
    console.log("tick 2")
    Promise.resolve().then(()=>{
        console.log("Promise 1")
    })
})
Promise.resolve().then(()=>{
    console.log("Promise 2");
})