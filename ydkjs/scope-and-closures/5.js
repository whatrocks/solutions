// function wait(message) {
//     setTimeout( function timer() {
//         console.log(message)
//     }, 1000);
// }

// wait("Hello, clousre!")


// for (var i = 1; i <= 5; i++) {
//     (function(j) { setTimeout(function timer() {
//         console.log(j);
//     }, i * 1000)
//     })(i);
// }

function CoolModule() {
    var something = "cool"
    var another = [1,2,3]

    function doSomething() {
        console.log(something)
    }

    function doAnother() {
        console.log(another.join("!"))
    }

    // return {
    //     doSomething: doSomething,
    //     doAnother: doAnother
    // }
}

var foo = CoolModule();
// console.log(foo)
foo.doAnother()