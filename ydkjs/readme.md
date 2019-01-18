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

