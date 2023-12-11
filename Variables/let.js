let age;

console.log(age) // undefined

age=10
console.log(age)

let age=50 // We cannot declare a variable more than once if we defined that previously in the same scope.
// Cannot redeclare block-scoped variable 'age'


////////


let x=0;

for(i=0;i<=5;i++)
{   
    let x=10  // block level scope
    //console.log(i)
}

console.log(x)  // x=0


let y=0;

for(i=0;i<=5;i++)
{   
    y=10  
    //console.log(i)
}

console.log(y)  // x=10
