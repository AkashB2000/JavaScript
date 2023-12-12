function getData(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(55)
        },100)
    })
}
/*
const result = getData()
console.log(result)
*/

/*
const result = await getData()  // await needs to be inside async
console.log(result)
*/
async function start(){
    const result =await getData() // returns data insted of promise
    console.log(result)
}

async function start2(){
    getData()               // ugly way
        .then(result=>{
    console.log(result)
        })
    }

start()
start2()