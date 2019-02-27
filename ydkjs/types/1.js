console.log(typeof undefined === "undefined")
console.log(typeof true === "boolean")
console.log(typeof 42 === "number")
console.log(typeof "42" === "string")
console.log(typeof { life: 42 } === "object")
console.log(typeof Symbol() === "symbol")
// watch out!
console.log(typeof null === "object")

console.log(typeof [] === "object")

console.log(typeof function() {} === "function")