/* 

Hoisting is a phenomena in JavaScript by which you can access the variables and functions even before you have initialized it or you have put some value in it. You can access it without any error 

hoisting refers to the behavior where variable and function declarations are moved (or "hoisted") to the top of their containing scope during the compilation phase, before the code is executed. However, only the declarations (not the initializations) are hoisted. This can sometimes cause confusion if you're not aware of how it works. This happens internally in the Javascript engine

Variable hoisting : variables declared with var, let and const are hoisted but their initializations are not
Function Hoisting : Function declarations are hoisted completely including their body which allows you to call(invoke) them even before they appear in the code. Please note that only the standard functions are hoisted completely and not the Function expressions because they are stored inside a variable for example an arrow function and will give undefined if we call(invoke) them because only the variable decalaration is hoited not the function itself

How hoisting works : there are two main phases
Creation Phase (memory allocation): In this phase javascript scans the code for variable and function declaration, all declarations are stored in memory. this is where the concept of hoisting comes into play. the code doesn't run it is being prepared for execution

Execution phase: The code is executed line by line after the declarations are hoisted

Hoisting Oder: Although hoisting applies to both variable declarations and function declaration, the function declaration are hoisted before the variable declarations. So if there is a naming conflict between a function and a variable the function will take precedence while hoisting

variables declared with var will give undefined when hoisted, but let and const will throw a refernce error as they're place in TDZ (Temporal Dead Zone)  

Understanding hoisting is crucial for writing predictable and bug-free JavaScript, as it affects the execution order of your code.

Remember that when we run a program an execution context is created and it is created in two phases the first one is the memory creation phase and this whole concept lies there, so even before the code starts executing the memory is allocated to  each and every variable and functions

Temporal Dead Zone (TDZ):
TDZ is a concept in JS which refers to the period from the start of a block until the variable is declared and initialized. During this phase any attempt to access the variable will result in a Reference Error

Variables declared with let and const have TDZ, while variables declared with var does not as it is initialized as undefind when hoisted
The TDZ applies to the block scope of let and const, meaning the variable is not accessible until the declaration is within that scope

Understanding the TDZ is crucial for writing bug-free code in JavaScript, especially as it helps prevent unintentional accesses to variables that have not been initialized yet. It promotes a better coding practice of declaring variables before using them, leading to cleaner and more predictable code.

Not defined = not present in the memory, not initialized in the program and we are trying to access it


*/