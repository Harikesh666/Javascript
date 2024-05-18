/* 

Primitive type 
call by values i.e, if you copy them from somewhere then the reference of the memory of the original data is not given to you, instead a copy of the value/data is given to you and the changes that we make is only limited to the copy 
Stack Memory

7 Types : Number, String, Boolean, Null, Undefined, BigInt, Symbol

Number => number
    String  => string
    Boolean  => boolean
    null  => object
    undefined  =>  undefined
    Symbol  =>  symbol
    BigInt  =>  bigint
*/

let string = "string" // string

const score = 100 // number
const scoreValue = 100.3 // number

const isLoggedIn = false // boolean
const outsideTemp = null // null
let userEmail; // undefined

const id = Symbol('123') // symbol
const anotherId = Symbol('123')

console.log(id === anotherId); 

const bigNumber = 497447747545753734n
console.log(typeof bigNumber) // BigInt

/*

Reference Type (Non-primitive)
Their reference can be directly allocated to you in the memory
Heap Memory

Types : Array, Objects, Functions

Non-primitive Datatypes
    Arrays  =>  object
    Function  =>  function
    Object  =>  object

*/

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);