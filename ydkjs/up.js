function foo() {
	console.log(this.bar);
}
var bar = "global";
var obj1 = {
	bar: 'obj1',
	foo: foo
}

var obj2 = {
	bar: "obj2"
}

console.log("this: ", this.bar)
foo();
obj1.foo();
foo.call(obj2);
new foo();
