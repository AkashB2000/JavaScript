function sum(num1,num2, func1){

    let result = num1 + num2
    func1(result) // callbacks dislay()
}

function display(result)
{
    console.log(result)
}

sum(10,15,display) //passing function as an argument

function calculate(num1, num2 , func)
{
    console.log(func(num1,num2))
}

function add(num1, num2)
{
    return num1+num2
}

function sub(num1, num2)
{
    return num1 - num2
}

calculate(50,40,sub)
