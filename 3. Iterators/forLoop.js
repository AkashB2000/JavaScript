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

for(let i=0;i<todos.length;i++)
{
    console.log(todos[i].text)
}

for(let todo of todos)
{
    console.log(todo.text)

}