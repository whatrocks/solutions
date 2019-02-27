// function foo() {
//     console.log( this.a );
// }

// var obj = {
//     a: 2
// }

// foo.call(obj)
// // explict binding forcing `this` to be `obj`

// foo();

// var bar = function() {
//     foo.call(obj)
// }

// bar();


// function foo(something) {
//     console.log(this.a, something)
//     return this.a + something;
// }

// var obj = {
//     a: 2
// }

// function bind(fn, obj) {
//     return function() {
//         return fn.apply(obj, arguments)
//     }
// }

// // var bar = function() {
// //     return foo.apply(obj, arguments)
// // }


// var bar = bind(foo, obj)
// var b = bar(3)
// console.log(b)

// var baz = foo.bind(obj)
// var c = baz(3)
// console.log(c)


// function foo(a) {
//     this.a = a;
// }

// var bar = new foo(2);
// console.log(bar.a)

// function foo(p1, p2) {
//     this.val = p1 + p2
// }

// var bar = foo.bind(null, "p1")

// var baz = new bar("p2")

// console.log(bar.val)
// console.log(baz.val);



function foo(a, b) {
    console.log("a: ", a, ", b: ", b);
}

// spread out array as params
foo.apply(null, [2, 3])

// currying with bind
var bar = foo.bind(null, 22, 23);
bar(3)