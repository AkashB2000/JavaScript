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

console.log(Array.isArray(ages))

