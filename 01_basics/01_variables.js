/* JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

int x = 10; // x is a variable of type int
String name = "John"; // name is a variable of type String
JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness. 
*/


// const does not allow any future changes/modifications, it is block scoped The value of a constant can't be changed through reassignment using the assignment operator, but if a constant is an object, its properties can be added, updated, or removed.

const accountId = 144553 

// accountId = 56 not allowed as it cannot be reassigned

let accountEmail = "harikesh@google.com" // let can be modified, The let declaration declares re-assignable, block-scoped local variables, optionally initializing each to a value.

var accountPassword = "12345" // same as let but has issues related to scope, The var statement declares function-scoped or globally-scoped variables, optionally initializing each to a value.

accountCity = "Pratapgarh" // shows the poor behavior of JS , never use this type of assignment

let accountState; // will show undefined

let symb = Symbol() ;

const alsoHuge = 9007199254740991n;

accountEmail = "hm@hm.com"
accountPassword = "21212121"
accountCity = "mumbai"



console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState, symb, alsoHuge])