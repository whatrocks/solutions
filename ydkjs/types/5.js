var a = 42;
var b = ++a;

console.log(b)



function vowels(str) {
    var matches;
    if (str) {
        matches = str.match( /[aeiou]/g );
        if (matches) {
            return matches
        }
    }
}

console.log(vowels("Hello World!"))

// console.log(a())

function foo() {
    try {
        return 42
    }
    finally {
        console.log("hi")
    }
    console.log("yo")
}

// console.log(foo())
foo()