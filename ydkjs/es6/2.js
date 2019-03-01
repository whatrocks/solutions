var a  = 2;

{
     let a = 3;
     console.log(a)
}

console.log(a)

var arr = [1,2,3]

var [ f,g,h] = arr
console.log(h)

var obj = {
    q: 10, 
    w: 11,
    e: 12
}

var {q, w, e} = obj
console.log(e)


var sym = Symbol("some optional description")
var sym2 = Symbol("some optional description")
// console.log(sym2)
console.log(typeof sym)
console.log(sym.toString())
console.log(sym.valueOf())