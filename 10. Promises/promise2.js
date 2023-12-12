function getWeather() // Promise maker
{
    return new Promise(function(resolve, reject) // returns a promise object of data instead of data
    {
        //async logic
        setTimeout(()=>reject('Sunny'),2000)
    })
}

function onResolve(data)
{
    console.log(`Success ${data}`)
}

function onReject(error)
{
    console.log(`Error ${error}`)
}

getWeather().then(onResolve,onReject) // if resolved , it will call onResolve function else onReject function
//getWeather().then(onResolve).catch(onReject) // alternate
console.log('hello')

//
function getData()
{
    return new Promise(resolve=>{
        setTimeout(()=>{
           resolve('Windy')
        },500)
    })
}

getData().then((data)=>console.log(data))


