const numbers= new Array(1,2,3,4,5)  // using constructor

console.log(numbers)


const ages=[10,34,23,67,54,"hello"]
console.log(ages)

console.log(ages[3])

//Adding elemnts to array
ages.push(99)  // add to end
console.log(ages)

ages.unshift(100) // add to start
console.log(ages)

ages.pop() //remove last
console.log();

//concat arrays
let arr1=[10,20,30,40]
let arr2=[1,2,3,4]
let arr3=arr1.concat(arr2)
console.log(arr3)

console.log(Array.isArray(ages))  // check if array


function length(str)
{
    console.log(str.length)
}

let arr=["abc","apple","zebra","swefwggdg"]

arr.forEach(length) // call a function for each element of array
