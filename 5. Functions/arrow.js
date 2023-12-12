const sum1=(num1,num2) =>{
    return num1+num2
}

console.log(sum1(5,6))

const sum2=(num1,num2) =>num1+num2

//const sum2=(num1,num2) =>return num1+num2 // error. return not needed

console.log(sum2(5,6))

setTimeout(()=>console.log(`hello world`)) // async 



const todos =[
    {
        id:1,
        text:'brush',
        isCompleted:'true',
    },
    {
        id:2,
        text:'study',
        isCompleted:'false',
    },
    {
        id:3,
        text:'sleep',
        isCompleted:'false',
    }
]

todos.forEach((todo) => console.log(todo.text));





