// var p = Promise.resolve(21);
// var p2 = p.then(function(v) {
//     console.log(v);
//     return v * 2
// })
// // console.log(typeof p2)
// p2.then(function(v) {
//     console.log(v)
// })
// console.log(p)


var p = Promise.resolve(21);

p.then(function(v) {
    console.log(v);

    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(v* 2)
        }, 1000)
    })
}).then( function(v) {
    console.log(v)
})