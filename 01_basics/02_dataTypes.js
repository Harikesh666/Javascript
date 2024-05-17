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
    Primitive data type
 number => 2 to power 53
 bigint => for large numbers for example facebook or reddit / trading and banking applications
 string => ""
 boolean => true/false or either 1/0
 null => standalone value type => object
 undefined => placeholder for the value which is not defined yet type => undefined
 symbol => unique

*/

// object is a non-primitive data type

console.log(typeof undefined); // undefined
console.log(typeof null); // object