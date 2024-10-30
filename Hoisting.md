### 1. **Hoisting in JavaScript**

Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their scope during the *creation phase* of the execution context. This process happens *before the code is executed*, allowing functions and variables to be referenced before their line of declaration.

- **Variable Hoisting**: 
   - Variables declared with `var`, `let`, and `const` are hoisted, but only their *declarations*, not initializations.
   - `var` variables are initialized to `undefined`, so accessing a `var` variable before its declaration does not throw an error but returns `undefined`.
   - `let` and `const` are placed in the **Temporal Dead Zone (TDZ)** until the line of declaration and throw a *ReferenceError* if accessed before being initialized.

#### Example
```javascript
console.log(varVariable); // undefined (due to hoisting)
console.log(letVariable); // ReferenceError: Cannot access 'letVariable' before initialization
console.log(constVariable); // ReferenceError: Cannot access 'constVariable' before initialization

var varVariable = "I am var";
let letVariable = "I am let";
const constVariable = "I am const";
```

- **Function Hoisting**:
   - **Function Declarations** are fully hoisted, meaning you can call them even before their declaration in the code.
   - **Function Expressions** and **Arrow Functions** are only partially hoisted since they are stored in variables. The variable declaration is hoisted, but the function definition is not, resulting in `undefined` if called before initialization.

#### Example
```javascript
hoistedFunction(); // Works! Output: "I am a hoisted function"

function hoistedFunction() {
    console.log("I am a hoisted function");
}

notHoistedFunction(); // TypeError: notHoistedFunction is not a function

var notHoistedFunction = function() {
    console.log("I am not hoisted");
};
```

### 2. **Execution Context Phases**

The **execution context** is created in two main phases:

1. **Creation Phase**:
   - JavaScript scans for variable and function declarations.
   - Memory is allocated for all declarations. Variables (`var`, `let`, `const`) are created in memory, but only `var` is initialized with `undefined`, while `let` and `const` remain in the TDZ.
   - Function declarations are fully hoisted, meaning both the function name and body are stored in memory.

2. **Execution Phase**:
   - Code executes line by line.
   - Variables are assigned their values as per their initializations in the code.
   - Functions are called as per their order in the code.

### 3. **Order of Hoisting**
   - **Functions** are hoisted before **variables**. If there’s a naming conflict between a variable and a function, the function will take precedence due to its higher priority in the hoisting process.
   
#### Example
```javascript
var greeting = "Hello";

function greeting() {
    console.log("Function greeting");
}

console.log(greeting); // Output: "Hello", because variables assigned after function declarations retain the assigned value.
```

### 4. **Temporal Dead Zone (TDZ)**

**TDZ** refers to the period between entering a scope and declaring a `let` or `const` variable within that scope. While in the TDZ, any access to the variable will result in a `ReferenceError`.

- TDZ encourages the practice of declaring variables before using them, making code more predictable and reducing the likelihood of using uninitialized variables.

#### Example
```javascript
{
    console.log(name); // ReferenceError: Cannot access 'name' before initialization
    let name = "John"; // TDZ ends here
    console.log(name); // Output: "John"
}
```

### 5. **Common Errors Explained**

   - **ReferenceError**: Occurs when trying to access a `let` or `const` variable in its TDZ, or a variable that is not defined at all.
   - **TypeError**: When you try to use a `var` variable assigned to a function expression before it’s initialized, as only the variable is hoisted, not the function.

### Key Takeaways

- **Hoisting** allows functions and variables to be available before their declaration, but understanding *what* is hoisted and *how* prevents unexpected errors.
- **TDZ** ensures that variables with `let` and `const` are used after declaration, enforcing better coding practices.
  
Understanding these behaviors is crucial for controlling variable scope and function calls, which in turn makes code more predictable and free from common pitfalls in JavaScript. 