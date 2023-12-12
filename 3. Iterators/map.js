// map = used to call opration on all elements of an array 
// return an array unlike forEach that doesn't reurns an array

const todos =[
    {
        id:1,
        text:'brush',
        isCompleted:true,
    },
    {
        id:2,
        text:'study',
        isCompleted:false,
    },
    {
        id:3,
        text:'sleep',
        isCompleted:false,
    }
]

const arr1=todos.map(function(todo){  // returns an array
    return todo.text;
})

console.log(arr1)


function length(str)
{
    return str.length
}

let arr=["abc","apple","zebra","swefwggdg"]

const arr2=arr.map(length)

console.log(arr2)
