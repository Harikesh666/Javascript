### JavaScript Blocks, Scope, and Shadowing Explained

1. **Understanding Blocks in JavaScript**
   - A **block** in JavaScript is defined by curly braces `{}` and is used to group multiple statements together. It’s sometimes called a **compound statement** because it allows multiple statements to be treated as a single unit. Block is used to combine multiple javascript statements into one group
   - **Purpose of Blocks**: Blocks help control how and where code executes, especially in conditional statements, loops, and functions, where you want multiple actions to be treated as one.
   - **Example**:
     ```javascript
     {
         var a = 10;
         console.log(a);
     }
     ```
   - Here, both `var a = 10;` and `console.log(a);` are combined in a block. Grouping code into blocks also introduces the concept of **scope**.

2. **Block Scope**
   - **Block scope** defines the area within which a variable can be accessed. Variables declared with `let` and `const` within a block `{}` are confined to that block. This contrasts with `var`, which has function or global scope.
   - When variables are declared in a block with `let` or `const`, they are stored in a separate memory space reserved specifically for that block. This memory space only exists for as long as the block is executing.
   - **Example**:
     ```javascript
     {
         var a = 10;     // Global or function scope
         let b = 20;     // Block scope
         const c = 30;   // Block scope
     }
     ```
   - In this example:
     - `a` is accessible outside the block, as it’s declared with `var`, which does not respect block boundaries in global contexts.
     - `b` and `c`, however, are block-scoped, meaning they are accessible only within this specific block and cannot be accessed outside of it.

3. **Temporal Dead Zone (TDZ) and Scope**
   - Variables declared with `let` and `const` are hoisted but remain uninitialized until they are assigned a value. This period between the start of the block and the initialization of the variable is known as the **Temporal Dead Zone (TDZ)**.
   - Accessing `let` or `const` variables within their TDZ (before they are initialized) results in a `ReferenceError`. The TDZ helps prevent using variables before they are properly set up.
   - **Example**:
     ```javascript
     {
         console.log(b); // ReferenceError: b is not defined
         let b = 10;
     }
     ```

4. **Shadowing in JavaScript**
   - **Shadowing** is when a variable declared within a certain scope (e.g., a block) has the same name as a variable in an outer scope. In this case, the inner variable "shadows" or overrides the outer variable within the specific scope.
   - Shadowing can work differently depending on whether the variables are declared with `var`, `let`, or `const`:
   
   - **Example with `var`**:
     ```javascript
     var a = 100;
     {
         var a = 10;
         console.log(a); // Outputs 10
     }
     console.log(a); // Outputs 10, since `var` variables point to the same memory location
     ```
   - In this example, both `a` variables refer to the same memory location because `var` is function-scoped. Any changes to `a` in the block affect the global `a`.

5. **Shadowing with `let` and `const`**
   - **Shadowing with `let` and `const`** works differently from `var`. Each instance of `let` or `const` creates a new, block-scoped variable in its own memory space.
   - **Example**:
     ```javascript
     let b = 100;
     const c = 100;
     {
         let b = 20;
         const c = 30;
         console.log(b); // Outputs 20 (block-scoped `b`)
         console.log(c); // Outputs 30 (block-scoped `c`)
     }
     console.log(b); // Outputs 100 (outer `b`)
     console.log(c); // Outputs 100 (outer `c`)
     ```
   - Inside the block, the inner `b` and `c` shadow the outer ones only within the block. Outside the block, the original `b` and `c` are still accessible. Shadowing with `let` and `const` allows for cleaner, more modular code without unintended variable conflicts.

6. **Illegal Shadowing**
   - **Illegal shadowing** occurs when trying to shadow a `let` or `const` variable using `var`. This results in a `SyntaxError`, as it violates JavaScript's block-scoping rules.
   - **Example of Illegal Shadowing**:
     ```javascript
     let a = 20;
     {
         var a = 20; // SyntaxError: Identifier 'a' has already been declared
     }
     ```
   - Conversely, shadowing a `var` with `let` or `const` inside a block or function is allowed, as long as they don’t cross the scope boundary:
     ```javascript
     var a = 20;
     function x() {
         let a = 10;
         console.log(a); // Outputs 10
     }
     x();
     console.log(a); // Outputs 20
     ```

7. **Scopes Created During Shadowing with `let` and `const`**:
   - When `let` and `const` variables shadow others in different scopes, JavaScript creates separate memory spaces:
     - **Global Scope**: For global variables, including `var`.
     - **Script Scope**: For variables declared in the top level of a script.
     - **Block Scope**: For each instance of a `let` or `const` within a block.
   - **Example**:
     ```javascript
     let b = 100;
     {
         var a = 10;
         let b = 20;
         const c = 30;
         console.log(b); // Outputs 20
     }
     console.log(b); // Outputs 100
     ```
   - Here, the first `b` is in the script scope, the `a` is in the global scope, and the second `b` and `c` are in block scope. This separation helps prevent unintended overwrites.

8. **Lexical Scoping and Scope Chain**
   - **Lexical scoping** means that JavaScript resolves variable scope based on the physical position of code. Blocks or functions can access variables defined in outer scopes, creating a **scope chain** where each block or function can “look outward” to find variables but not inward.
   - **Example with Nested Blocks**:
     ```javascript
     const a = 20; // scope = script
     {
         const a = 100; // scope = block
         {
             const a = 200; // scope = nested block
             console.log(a); // Outputs 200
         }
     }
     ```

---

This explanation now includes each of your original points, adding extra details on concepts like the Temporal Dead Zone, scope chains, and types of memory scopes created with different declarations. 