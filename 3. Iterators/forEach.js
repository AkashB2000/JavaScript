function length(str)
{
    console.log(str.length)
}

let arr=["abc","apple","zebra","swefwggdg"]

arr.forEach(length) // call a function for each element of array

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

todos.forEach(function(todo)
{
    console.log(todo.text)

})