/* 
"Everything in JavaScript happens inside the execution context", you can assume this execution context to be a big box or a container in which whole JS code is executed.

The execution context consists of two parts(components) the Variable environment(memory component), it is a sort of environment in which all the variables and functions are stored in key:value pairs. 

The second component of the execution context is the Thread of Execution (code component), this is the place where code is executed one line at a time.

There are two phases in the execution context namely the creation phase and the execution phase.
Creation phase: JS skims through the whole program line by line
In this phase the JS engine sets up the execution context by allocating memory for variables and functions (hoisting them)
Storing initial values for variables (usually undefined)
Storing function declarations fully in memory

Code Execution: After memory allocation JS starts running the program line by line and it executes the code now
The variables are now assigned their actual values as the code executes, and functions are called.

"JavaScript is a synchronous, single-threaded language", this means that JS can only execute one command at a time and in a specific order, it can only go to the next line once the current line has been executed.

Javascript is not possible without this beautiful execution context

Call Stack: Manages the order of execution of execution contexts

I know you must have heard about AJAX where 'A' stands for asynchronous, but we will come to that later

*/