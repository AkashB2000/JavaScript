function getWeather()
{
    return new Promise(function()
    {
        //async logic
        setTimeout(()=>'Sunny')
    })
}


console.log(getWeather())
