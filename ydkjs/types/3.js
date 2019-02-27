console.log(Object.prototype.toString.call("hi"))

var a = "abc"

var b = new String(a)

console.log(b instanceof String)

const arr = Array.from(Array(10)).map(a => 1)

console.log(arr)

console.log(Date.now())