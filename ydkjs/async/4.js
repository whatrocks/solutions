// function *foo(x,y) {
//     return x * y;
// } 

// var it = foo(6, 7);
// console.log(it)

// var res = it.next()

// // console.log(it.next())


// console.log(res);
// console.log(res.value)

// function *foo() {
//     var x = yield 2;
//     z++;
//     var y = yield (x * z)
//     console.log(x, y, z)
// }

// var z = 1;

// var it1 = foo();
// var it2 = foo();

// var val1 = it1.next().value;
// var val2 = it2.next().value;

// val1 = it1.next(val2 * 10).value
// val2 = it2.next(val1 * 5).value

// it1.next(val2 / 2)
// it2.next(val1 / 4)



// console.log(it1.next(2).value)

function *fibo() {
    let a = 0
    let b = 1
    let c;
    while (true) {
        yield a
        c = a + b
        a = b
        b = c
    }
 
}

let it = fibo();
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
