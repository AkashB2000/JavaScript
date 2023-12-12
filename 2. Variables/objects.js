const person={
    firstName:'john',
    lastName:'Doe',
    age:30,
    hobbies:['music','art','dance'],
    address: {
        street: '50 Street',
        city: 'Boston',
        state: 'MA'
    }
}


console.log(typeof(person))

console.log(person)

console.log(person.age , person.hobbies[1])

console.log(person.address.street)

let keys=Object.keys(person)
console.log(keys)

let values=Object.values(person)
console.log(values)

let entries=Object.entries(person)
console.log(entries)

console.log(person.hasOwnProperty('address'))  // true
console.log(person.hasOwnProperty('country'))

//Destrcuturing

const { firstName , lastName , address: {city}}=person;
console.log(firstName , lastName ,city)

person.email='abc@gmail.com' // adding key :value to object


console.log(person)


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

console.log(todos[1].text)

