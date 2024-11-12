### 1. **Function Statement (Function Declaration)**

A **Function Statement** (or **Function Declaration**) is a function created using the `function` keyword followed by a name. 

**Example:**
```javascript
function a() {
    console.log("a called");
}
a();
```
**Output:**
```
a called
```

**Explanation:** Here, `a` is a function declared and then called with `a()`. Function declarations are **hoisted** in JavaScript, meaning they can be called even before the actual function definition.

---

### 2. **Function Expression**

In a **Function Expression**, a function is assigned to a variable. This allows the function to be treated as a value that can be passed around or assigned to other variables.

**Example:**
```javascript
var b = function() {
    console.log("b called");
}
b();
```
**Output:**
```
b called
```

**Explanation:** This anonymous function is assigned to the variable `b`, and calling `b()` prints `"b called"`. Function expressions are **not hoisted**. Calling `b()` before this assignment would throw a `ReferenceError` because `b` is initially assigned `undefined`.

---

### 3. **Differences Between Function Statements and Function Expressions**

The primary difference between function statements and function expressions in JavaScript is **hoisting**.

**Example:**
```javascript
a(); // Works, no error
b(); // Throws ReferenceError

function a() {
    console.log("a called");
}

var b = function() {
    console.log("b called");
}
```
**Output:**
```
a called
Uncaught ReferenceError: b is not defined
```

**Explanation:**
- The function statement `a` is hoisted, so `a()` can be called before the function declaration.
- The function expression `b`, however, is treated like any other variable. It is initially assigned `undefined`, so calling `b()` before it is defined results in a `ReferenceError`.

---

### 4. **Anonymous Functions**

An **Anonymous Function** is a function without a name. These functions are commonly used as values, for example, in function expressions or as arguments to other functions.

**Example of Invalid Anonymous Function Declaration:**
```javascript
function () {
    console.log("Anonymous function");
}
```
**Output:**
```
SyntaxError: Function statements require a name
```

**Explanation:** Anonymous functions cannot stand alone as function declarations because, per the ECMAScript specification, a function statement must have a name.

**Example of Valid Anonymous Function in a Function Expression:**
```javascript
var anonFunc = function() {
    console.log("Anonymous function called");
}
anonFunc();
```
**Output:**
```
Anonymous function called
```

**Explanation:** The anonymous function here is assigned to `anonFunc`, and calling `anonFunc()` works because it has a reference.

---

### 5. **Named Function Expression**

A **Named Function Expression** is similar to a regular function expression, but it includes a name within the function, which is only accessible within the function's own scope. 

**Example:**
```javascript
var c = function y() {
    console.log("y function called");
}
c(); // Works
y(); // Throws ReferenceError
```
**Output:**
```
y function called
Uncaught ReferenceError: y is not defined
```

**Explanation:** Here, `y` is a local name within the function expression assigned to `c`. You can call `c()` to execute the function, but `y()` will throw a `ReferenceError` because `y` is not available in the outer scope.

---

### 6. **Parameters vs. Arguments**

Parameters and arguments are often confused but serve different purposes:
- **Parameters** are variables in a function’s definition.
- **Arguments** are the actual values passed to a function when it is called.

**Example:**
```javascript
var d = function (param1) {
    console.log(param1);
}

d("argument value");
```
**Output:**
```
argument value
```

**Explanation:** Here, `param1` is a **parameter** in the function definition, and `"argument value"` is an **argument** passed when calling `d`.

**Example of Passing a Function as an Argument:**
```javascript
d(function () {
    console.log("Function passed as an argument");
});
```
**Output:**
```
Function passed as an argument
```

**Explanation:** An anonymous function is passed as an argument to `d`, which logs the function definition.

**Example of Passing a Named Function as an Argument:**
```javascript
function xyz() {
    console.log("xyz function called");
}

d(xyz);
```
**Output:**
```
[Function: xyz]
```

**Explanation:** Here, `xyz` is passed as an argument to `d`. The function `xyz` itself is logged.

---

### 7. **Returning Functions from Functions**

In JavaScript, you can return a function from another function, allowing complex interactions where functions can serve as both input and output.

**Example of Returning an Anonymous Function:**
```javascript
var d = function (param1) {
    return function () {
        console.log("Returned function called");
    }
}

console.log(d());
```
**Output:**
```
[Function (anonymous)]
```

**Explanation:** `d` returns an anonymous function, and `console.log(d())` outputs the function definition.

**Calling the Returned Function:**
```javascript
var returnedFunc = d();
returnedFunc();
```
**Output:**
```
Returned function called
```

**Explanation:** `d()` returns an anonymous function that `returnedFunc` can then call.

---

### 8. **First-Class Functions**

JavaScript functions are **first-class citizens**, meaning they can be used as values:
- They can be assigned to variables.
- Passed as arguments.
- Returned from other functions.

**Examples:**

1. **Passing a Function as an Argument:**
   ```javascript
   function example(func) {
       func();
   }

   example(function () {
       console.log("Function passed as an argument and called");
   });
   ```
   **Output:**
   ```
   Function passed as an argument and called
   ```

2. **Returning a Function from Another Function:**
   ```javascript
   function outer() {
       return function inner() {
           console.log("Inner function called");
       }
   }

   var innerFunc = outer();
   innerFunc();
   ```
   **Output:**
   ```
   Inner function called
   ```

**Explanation:** JavaScript’s first-class functions allow functions to be flexible. They can be passed as values, returned, and assigned to variables.

---

### 9. **Arrow Functions**

Arrow functions were introduced in **ES6**. They provide a shorter syntax and use **lexical scoping** for `this`, meaning they inherit the `this` value from the enclosing scope.

**Example of Arrow Function:**
```javascript
const arrowFunc = () => {
    console.log("Arrow function called");
}
arrowFunc();
```
**Output:**
```
Arrow function called
```

**Example of Lexical `this` Binding in Arrow Functions:**
```javascript
function Person() {
    this.age = 0;
    setInterval(() => {
        this.age++;
        console.log(this.age);
    }, 1000);
}

var person = new Person();
```
**Output (increments every second):**
```
1
2
3
...
```

**Explanation:** Arrow functions do not have their own `this` binding. Here, `this` in the arrow function refers to the `Person` object, making `this.age` increment every second.

---

This thorough explanation includes all topics, code examples, and detailed outputs as specified.