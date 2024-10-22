"use strict"; // treats all the JS codes as newer version / works based on the latest standards

//alert(3 + 3) works only in the browser not in nodejs

console.log(3 
    + 3);// avoid using as the code readability has to be high

console.log('Harikesh'); // more readable and better way of writing code

let name = "harikesh" //string
let age = 21 //number
let isLoggedIn = false //boolean
let state; //undefined

/*
// Primitive data type = > call by values i.e, if you copy them from somewhere then the reference of the memory of the original data is not given to you, instead a copy of the value/data is given to you and the changes that we make is only limited to the copy

number => 2 to power 53
In JavaScript, the “number” type cannot safely represent integer values larger than (253-1) (that’s 9007199254740991), or less than -(253-1) for negatives.
To be really precise, the “number” type can store larger integers (up to 1.7976931348623157 * 10308), but outside of the safe integer range ±(253-1) there’ll be a precision error, because not all digits fit into the fixed 64-bit storage. So an “approximate” value may be stored.

bigint => for large numbers for example facebook or reddit / trading and banking applications
A BigInt value is created by appending n to the end of an integer:
// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

string => ""

boolean => true/false or either 1/0

null => standalone value type => object, in JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.
It’s just a special value which represents “nothing”, “empty” or “value unknown”.
The result of typeof null is "object". That’s an officially recognized error in typeof, coming from very early days of JavaScript and kept for compatibility. Definitely, null is not an object. It is a special value with a separate type of its own. The behavior of typeof is wrong here.

undefined => placeholder for the value which is not defined yet type => undefined
The meaning of undefined is “value is not assigned”.
If a variable is declared, but not assigned, then its value is undefined:

symbol => unique


A value in JS is always of a certain type for example, a string or a number.
There are eight basic data types in JavaScript. Here, we’ll cover them in general and in the next chapters we’ll talk about each of them in detail.

We can put any type in a variable. For example, a variable can at one moment be a string and then store a number:

let message = "hello";
message = 123456;

Programming languages that allow such things, such as JavaScript, are called “dynamically typed”, meaning that there exist data types, but variables are not bound to any of them.


There are 8 basic data types in JavaScript.

Seven primitive data types:
number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
bigint for integer numbers of arbitrary length.
string for strings. A string may have zero or more characters, there’s no separate single-character type.
boolean for true/false.
null for unknown values – a standalone type that has a single value null.
undefined for unassigned values – a standalone type that has a single value undefined.
symbol for unique identifiers.

And one non-primitive data type:
object for more complex data structures.

The typeof operator allows us to see which type is stored in a variable.

Usually used as typeof x, but typeof(x) is also possible.
Returns a string with the name of the type, like "string".
For null returns "object" – this is an error in the language, it’s not actually an object.



*/

// object is a non-primitive data type

console.log(typeof undefined); // undefined
console.log(typeof null); // object

typeof alert() //Function

/*The result of typeof alert is "function", because alert is a function. We’ll study functions in the next chapters where we’ll also see that there’s no special “function” type in JavaScript. Functions belong to the object type. But typeof treats them differently, returning "function". That also comes from the early days of JavaScript. Technically, such behavior isn’t correct, but can be convenient in practice.*/