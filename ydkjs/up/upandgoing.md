# YDKJS

## Up and Going

### Chapter 1

- Javascript is a compiled language - not interpreted.
- implicit vs explicit coercion
- JS will occasionally implicitly coerce values
- JS is dynamic/weak typed. It is not static typed
- Dynamic typing means that variables can hold values of any type without any type enforcement
- Blocks are groups of statements, typically with a control statement like a conditional
- Lexical scope. In JS, each function gets its own lexical scope
- scope is basically a collection of variables as well as the rules for how those variables are accessed by name
- a variable name has to be unique within the same scope

### Chapter 2: into JS

built in types:
- string
- number
- boolean
- null
- undefined
- object
- symbol

use `typeof` to examine a value and get the type
`typeof null` is object. this is a known bug
this isn't asking for the type of the variable, but the type of the value currently in the variable
only values have types, not variables 

objects are a compound variable with named locations called properties
use dot or bracket notation to access

array is an object that holds values of any type in numerically indexed positions

function is another `object` subtype that youll use a lot. actually typeof function returns 'function'

the built-in types and subtypes have behaviors exposed as properties and methods that are powerful and useful. 

when you use a primative value like "hello" as a object by reference a method like .toUpperCase(), JS automatically boxes the value to its object wrapper behind the scenes. You dont need to manually wrap it in an object

Coercion
explicit and implicit
implicit is a side effect of some other operation

Truthy and Falsy
Falsy
- "" (empty string)
- 0, -0, NaN
- null, undefined
- false

any value that is not falsy is truthy
truthy includes
- "hello"
- 42
- true
- [], [12,3]
- {}
- function foo() {}

remember that non-boolean values only follows this "truthy/falsy" coercion if its actually coercied to a boolean. its easy to beconfused here.

Equality operators
`==` checks for value equality with coercion allowed
`===` checks for value equality without allowing coercion, aka strict equality

rules for safety
- if either side could be the true or false, use ===
- if either could have 0, "", [], use ===
- other wise you can use ==

when comparing non-primative values, like objects (including function and array), these values are actually held by reference, so == and === just check if the references match, not anything about the underlying values

arrays are by default coerced to strings by joining all the values with commas. two arrays with same contents are not, because its checking the reference, not the implictly coerced string

#### inequality
- most often with numbers
- but strings can be comparsed alphabeticalls
- there are no strict inequality operators
- NaN is neither great-than nor less-than any other value

#### hoisting

- whenever a `var` appears in a scope, that declaration is taken to belong to the entire scope and accessible everywhere throughout. This is called hoisting, when a var declaration is conceptually moved to the top of its enclosing scope. this also happens with function declarations
- if you try to access a variables value in a scope where its not availab, you will get a ReferenceError

#### strict mode
- came in es5, tightens the rules for certain behaviors
- "use strict"
- opt into entire function or file, dependening on where you put the strict mode pragma
- one key improvement is disallowing the implicit auto-global variable declaration from omitting a `var`

#### functions as values
- functions itself are values, just like a number or or a string.
- a function itself can be a value assigned to variables, and passed to or returned from other functions
- functions are expressions, just like other expressions or values

```
var foo = function() {}
var x = function bar() {}
```
the first function assigned to the `foo` variable is anonymoust
the second function is named bar, even tho as a refeerence it is also assigned to the `x` variable.

#### IIFEs (immediately invokved function expressions)
```
(function IIFE(){
	console.log("hello");
})();
// "hello!"
```
- becuase IIFE is just a function, and functions create lexical scope for variables, using an IFFEE is often used to declare variables that wont affect the surrounding code outside the IIFE
- IIFEs can also have return values
```
var x = (function IFFE() {
	return 42;
})();
x; // 42;
```

#### Closure
-closure is a way to remember and continue to access a functions scope (aka variables) even after the function has finished running.

```
function makeAdder(x) {
	function add(y) {
		return y + x;
	}
	return add;
}

```

#### Modules
- most common usage of closure in JS is the module pattern
- modules let you define private implementation details (variables, fns) that are hidden from the outside world

#### this
- this in JS is not about object oriented pattersn
- if a function has a `this` reference in it, that `this` reference usually points to an `object`, but which `object` depends on how the function was called
- `this` does not refer to the function itself


#### prototypes
- when you reference a property on an object, if that property doesnt exist, JS will automatically use that objects inernal prototype reference to find another object to look for the property on. its almost like a fall bacl
- this linkage happens when the object is created

```
var foo = {
	a: 42
}
var bar = Object.create(foo);

bar.b = "hello world"
bar.b;
bar.a;
```
- this is often abused to created a fake "class" mechanism
- this is better used for pattern called behavior delegation

#### polyfills
- some cool things might not be available yet
- like `Number.isNan`


#### Non JAvascript
- you should learn the DOM API
```
var el = document.getElementById("foo");
```
- document is a global variable when your code is running in a browser. its not provided by JS.
- it is a special object called a host object
