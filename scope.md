### Scope in JavaScript

In JavaScript, **scope** determines where variables and functions are accessible in the code. Each scope has boundaries, which define the lifetime and visibility of variables. JavaScript scope is tightly related to **execution contexts**, **lexical environments**, **hoisting**, and the **scope chain**.

#### Types of Scope

1. **Global Scope**: Variables declared outside any function or block are in the global scope and can be accessed from anywhere in the code.
2. **Function Scope**: Variables declared inside a function are only accessible within that function.
3. **Block Scope**: Variables declared with `let` or `const` within a block (e.g., `{ }`) are limited to that block, even within a function.

### Execution Context and Lexical Environment

When JavaScript runs, it creates an **execution context** that contains:
- A **variable environment** (memory component), storing variables and functions in key-value pairs.
- A **thread of execution** (code component) where code runs line by line.
- A **lexical environment**: a structure that includes the local memory and a reference to the parent lexical environment.

JavaScript is a **single-threaded** language, meaning it processes commands one at a time. The **scope** and **lexical environment** help manage the accessibility of these commands across different functions and blocks.

### Lexical Scope

**Lexical scope** means that JavaScript determines the scope of a variable based on where it is physically written in the code. Nested functions can access variables from their parent functions because of **lexical environments** and **scope chains**.

Whenever a new execution context is created (like when a function is invoked), a new **lexical environment** is also created, which includes:
   - The **local memory** (where variables and function definitions are stored).
   - A **reference to the parent lexical environment**.

#### Example
```javascript
let globalVar = "I am global";

function outerFunction() {
    let outerVar = "I am in outerFunction";

    function innerFunction() {
        let innerVar = "I am in innerFunction";
        console.log(globalVar); // Accesses global scope
        console.log(outerVar);  // Accesses outer function's scope
        console.log(innerVar);  // Accesses inner function's own scope
    }

    innerFunction();
}

outerFunction();
```

Here:
- **`innerFunction`** can access `outerVar` from `outerFunction` and `globalVar` because of **lexical scope**.
- When `innerFunction` needs a variable, it searches its own scope first, then goes up the **scope chain** to check `outerFunction`, and finally reaches the **global scope** if necessary.

### Scope Chain

The **scope chain** is the series of **lexical environments** that JavaScript creates, connecting each scope to its parent scope up to the global scope. This chain is how JavaScript looks up variables:
1. JavaScript starts searching in the **current scope**.
2. If the variable isn’t found, it moves to the **parent lexical environment**.
3. This continues up the **scope chain** until the global scope.
4. If the variable is still not found, JavaScript throws a `ReferenceError`.

#### Example
```javascript
let globalVar = "global";

function firstFunction() {
    let firstVar = "first";

    function secondFunction() {
        let secondVar = "second";

        console.log(globalVar); // "global" (found in global scope)
        console.log(firstVar);  // "first" (found in firstFunction's scope)
        console.log(secondVar); // "second" (found in secondFunction's own scope)
    }

    secondFunction();
}

firstFunction();
```

In this example:
- `secondFunction` forms a **scope chain** with `firstFunction` and the global scope.
- JavaScript uses the scope chain to resolve `globalVar`, `firstVar`, and `secondVar`.

### Hoisting and Variable Resolution

**Hoisting** is JavaScript’s behavior of moving variable and function declarations to the top of their scope during the creation phase of an execution context:
- **Function declarations** are fully hoisted with their body, allowing you to call them before they appear in the code.
- **Variable declarations** are also hoisted but without initialization. This means variables declared with `var` will be initialized to `undefined`, while variables with `let` and `const` will remain in the **Temporal Dead Zone (TDZ)** until they are initialized.

#### Example of Hoisting
```javascript
console.log(hoistedVar); // undefined
var hoistedVar = "I'm hoisted!";

console.log(hoistedLet); // ReferenceError: Cannot access 'hoistedLet' before initialization
let hoistedLet = "I'm not accessible until initialized";
```

Here:
- `hoistedVar` is hoisted and initialized as `undefined`.
- `hoistedLet` is hoisted but in the **TDZ**, leading to a `ReferenceError`.

### What Happens if a Variable Is Not Found?

If JavaScript cannot find a variable in any accessible scope, it throws a `ReferenceError`, not `null`. This error occurs when a variable is neither in the current scope nor anywhere in the **scope chain**.

```javascript
function testFunction() {
    console.log(myVar); // ReferenceError: myVar is not defined
}

testFunction();
```

Here:
- Since `myVar` is not found in `testFunction`'s scope or the global scope, JavaScript throws a `ReferenceError`.
- `null` would appear only if a variable exists and is explicitly assigned `null`.

### Block Scope

With `let` and `const`, JavaScript introduced **block scope**, meaning that any variable declared within `{ }` is only accessible within that block, even if within a function.

#### Example
```javascript
if (true) {
    let blockScopedVar = "I am block scoped";
    console.log(blockScopedVar); // Works fine
}
console.log(blockScopedVar); // ReferenceError: blockScopedVar is not defined
```

---

### Key Points Recap

1. **Lexical Scope**: Defines where variables are accessible based on physical placement in the code.
2. **Lexical Environment**: Consists of local memory and a reference to the parent scope, forming a hierarchical chain.
3. **Scope Chain**: Allows JavaScript to search for variables up the chain from the current scope to the global scope.
4. **Hoisting**: JavaScript moves variable and function declarations to the top of their scope; `var` is hoisted as `undefined`, while `let` and `const` remain in the **Temporal Dead Zone** until initialized.
5. **Undefined Variables**: If a variable isn’t found in the scope chain, JavaScript throws a `ReferenceError`.
6. **Block Scope**: Variables declared with `let` and `const` are restricted to their block, whereas `var` is function-scoped and accessible outside blocks.

This comprehensive understanding of scope, lexical environments, scope chain, hoisting, and variable resolution is crucial for writing predictable and bug-free JavaScript code. 