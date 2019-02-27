// mixin
function mixin( sourceObj, targetObj ) {
    for (var key in sourceObj) {
        // only copy if not presen
        if (!key in targetObj) {
            targetObj[key] = sourceObj[key]
        }
    }
    return targetObj
}


var Vehicle = {
    engines: 1,

    ignition: function() {
        console.log("turning on my engine.")
    },

    drive: function() {
        Vehicle.ignition();
        console.log("steering and moving forward.")
    }
}

var Car = mixin(Vehicle, {
    wheels: 4,
    drive: function() {
        Vehicle.drive.call(this);
        console.log("rolling on all " + this.wheels + " wheels!")
    }
})

Car.drive();

console.log("-----------------")

// function Foo(name) {
//     this.name = name;
// }

// Foo.prototype.myName = function() {
//     return this.name;
// }

// var a = new Foo("a")
// console.log(Foo)
// console.log(a)
// console.log(a.myName());

console.log("-----------------")

function Foo(name) {
    this.name = name;
}

Foo.prototype.myName = function() {
    return this.name;
}

function Bar(name, label) {
    Foo.call(this, name);
    this.label = label;
}

// console.log("foo: ", f.prototype
console.log("foo.prototype: ", Foo.prototype)
console.log("foo.__proto__: ", Foo.__proto__)

Bar.prototype = Object.create(Foo.prototype)
console.log("bar.prototype: ", Bar.__proto__.__proto__)

Bar.prototype.myLabel = function() {
    return this.label;
}

var a = new Bar("a", "obj a")
console.log(a.myName());
console.log(a.myLabel());

var b = new Foo("b")
console.log(b.myName())
console.log(b.__proto__)
// console.log(b.myLabel())