//SYNCHRONOUS BEHAVIOUR

function syncFunc(){
    let a=0
    for(let i=0;i<=9999999999;i++)
        a=a+1
    console.log(a)
}
syncFunc()
console.log("something") // wait for syncFunc() to complete execution, then exectes this line

// ASYNC BEHAVIOUR
let food
function orderPizza()
{
    console.log("pizaa ordered")
    food='pizza'
}

setTimeout(orderPizza,3000)// setTimeout is an async function. waits for 5 sec and then executes orderPiza

console.log(`eat ${food}`)// doesn't wait for timeout(async code) to finish, executes this line immediately
//async is non blocking
