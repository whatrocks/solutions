var a = 2;

(function foo() {
	var a = 3;
	console.log(a);
})();
console.log(a);

/*
setTimeout(function timeoutHandler() {
	console.log("I waited a sec");
}, 1000);
*/

var foo =  true;

if (foo) {
	let bar = foo * 2;
	console.log(bar);
}

//console.log(bar);

{

	let j;
	for (j=0; j < 10; j++) {
		let i = j;
		console.log(i);			
	}	

}

const bb= 3;
bb = 3;
console.log(bb)
