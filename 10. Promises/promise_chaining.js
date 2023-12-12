function getWeather()
{
    return new Promise(function(resolve,reject)
    {
        setTimeout(()=>{
            resolve('Sunny')
        },1000)
    })
}

function getAction(weather)
{
    return new Promise(function(resolve,reject)
    {
        setTimeout(()=>{
            switch(weather){
                case 'Sunny':
                    resolve('Enjoy the sun')
                    break
                case 'Rainy':
                    resolve('Carry the umbrella')
                    break
                default:
                    reject('No action')

            }
        },1000)
    })
}

function onResolve(data)
{
    console.log(`Resolved ${data}`)
}

function onReject(data)
{
    console.log(`Rejected ${data}`)
}

function onFinally(data)
{
    console.log("Finally !!!")
}
getWeather() 
    .then(getAction) // no need to give argument. Data is sent through chaining( one function to next)
    .then(onResolve)
    .catch(onReject) // one catch can handle rejections from all async functions in the chain
    //  If any function reject, control goes to this catch
    //Eg: if getWeather() rejects , control jumps to catch
    .finally(onFinally)




