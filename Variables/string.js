let s="hello"

console.log(s.length)

s="hello world"

console.log(s.length)

console.log(s.toUpperCase())

console.log(s.substring(0,7).toUpperCase())


console.log(s.split())  // [ 'hello world' ]

console.log(s.split(''))
/* [
  'h', 'e', 'l', 'l',
  'o', ' ', 'w', 'o',
  'r', 'l', 'd'
]
*/
console.log(s.split(' '))
