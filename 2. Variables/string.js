
let s="hello world"

console.log(s.length)
console.log(s.indexOf('o'))
console.log(s.lastIndexOf('o'))


console.log(s.toUpperCase())

//SLICE & SUBSTRING
console.log(s.substring(0,7)) // hello w
console.log(s.substring(2,7))  // llo w

console.log(s.slice(2,7)) // llo w

console.log(s.substr(2,7)) // start from index 2 upto 7 length ( deprecated)

console.log(s.substring(2,7).toUpperCase())

//REPLACE
let str="welcome home"
console.log(str.replace("welcome","exit"))


//SPLIT
console.log(s.split())  // [ 'hello world' ]

console.log(s.split(''))
/* [
  'h', 'e', 'l', 'l',
  'o', ' ', 'w', 'o',
  'r', 'l', 'd'
]
*/
console.log(s.split(' ')) // [ 'hello', 'world' ]





let s2="javascript"

for(let char of s2)
{
  console.log(char)
}