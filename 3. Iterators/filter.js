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
];

const completed=todos.filter(function(todo){  // returns an array that matches filter condition
    return todo.isCompleted === true;
})

console.log(completed);

const completed1=todos.filter(function(todo){  // returns an array that matches filter condition
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})

console.log(completed1)