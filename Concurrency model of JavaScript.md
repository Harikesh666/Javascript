### What is concurrency ?
Concurrency refers to the ability of a system to handle multiple tasks at the same time or to manage multiple tasks in such a way that it gives the illusion of simultaneous execution. It allows a system to start working on a task, pause it, switch to another task, and then come back to the first task later.

In simpler terms, concurrent execution means a system can make progress on more than one task without necessarily finishing one before starting another.

---

### **Concurrency Model in JavaScript**

JavaScript is a **single-threaded** language, which means it can only execute **one operation at a time** on the main thread. However, JavaScript needs to handle tasks like user input, animations, fetching data, and running background computations without freezing the user interface (UI). To achieve this, JavaScript relies on its **Concurrency Model**, which allows asynchronous execution despite being single-threaded.

Let’s break it down into key concepts:

---

### **1. The Call Stack**  
- The **call stack** is a data structure that keeps track of function calls in JavaScript.  
- Each time a function is called, a new frame is pushed onto the stack. When a function finishes executing, its frame is popped off the stack.
- **Synchronous code** executes in the **call stack** one after the other, blocking further execution until the current function finishes.

**Example**:
```javascript
function first() {
  console.log("First");
}

function second() {
  console.log("Second");
}

first();
second();
```
Here, `first()` executes and completes before `second()` is called.

---

### **2. Web APIs (Browser Environment)**  
- JavaScript has access to **Web APIs** provided by the browser (like `setTimeout`, `fetch`, and event listeners).
- Web APIs allow JavaScript to handle asynchronous tasks by running in the background, outside the call stack.
- **`setTimeout`**, for example, starts a timer in the Web APIs and doesn’t block the call stack. Once the timer completes, the callback is added to the **callback queue**.

---

### **3. Callback Queue**  
- The **callback queue** (also called the **message queue**) holds asynchronous tasks, such as callback functions from `setTimeout`, event handlers, or completed HTTP requests.
- When a task finishes executing (e.g., after a timeout or when a user clicks a button), its corresponding callback is moved to the callback queue.
- The **event loop** monitors the call stack and callback queue to ensure that tasks from the callback queue are only executed when the call stack is empty.

---

### **4. Event Loop**  
- The **event loop** is the mechanism that enables JavaScript to handle asynchronous operations. It constantly checks if the **call stack** is empty and, if so, moves tasks from the **callback queue** into the **call stack**.
- It ensures that tasks (like callbacks) are executed as soon as the call stack is available.

**How It Works**:
1. The event loop waits for the **call stack** to be empty.
2. When the call stack is empty, it takes the next task from the **callback queue** and pushes it onto the call stack.
3. The callback function is then executed.

This mechanism allows JavaScript to perform non-blocking asynchronous operations even though it is single-threaded.

---

### **5. Task Queues: Macro vs Micro Tasks**  
In addition to the callback queue, there are **two types** of task queues in JavaScript: **macro tasks** and **micro tasks**.

- **Macro Tasks**: Tasks like `setTimeout`, `setInterval`, and `I/O operations` that are placed in the **callback queue**.
- **Micro Tasks**: Tasks like `Promise` callbacks (e.g., `.then()`, `.catch()`) are placed in the **microtask queue**.  
  Micro tasks have **higher priority** than macro tasks, meaning the event loop will execute them first, before moving on to macro tasks.

---

### **6. Putting It All Together**  

To better understand how these components work together, let’s look at an example:

```javascript
console.log("Start");

setTimeout(function () {
    console.log("Timeout Callback");
}, 0);

Promise.resolve().then(function () {
    console.log("Promise Callback");
});

console.log("End");
```

#### **Execution Flow**:

1. **Synchronous Code**:
   - `"Start"` is logged first because it’s a synchronous task.
2. **`setTimeout(0)`**:
   - The `setTimeout` function is called, and its callback (`console.log("Timeout Callback")`) is added to the **callback queue**.
3. **Promise**:
   - The promise resolves immediately and its callback (`console.log("Promise Callback")`) is added to the **microtask queue**.
4. **`console.log("End")`**:
   - `"End"` is logged next since it’s synchronous.
5. **Microtask Queue**:
   - After the call stack is empty, the event loop first picks the promise callback from the **microtask queue** and logs `"Promise Callback"`.
6. **Callback Queue**:
   - After all the microtasks are executed, the event loop then picks the `setTimeout` callback from the **callback queue** and logs `"Timeout Callback"`.

#### **Final Output**:
```
Start
End
Promise Callback
Timeout Callback
```

### **Why This Happens**:
- The **event loop** checks the **call stack** and sees that it's empty after `"End"`. 
- It then prioritizes **microtasks** (i.e., the promise callback), which are executed before **macrotasks** (i.e., the `setTimeout` callback).
- Thus, **`setTimeout(0)`** doesn’t execute immediately, even though its delay is zero milliseconds. This is because it still needs to wait until the **microtask queue** is empty first.

---

### **Key Takeaways:**
1. **JavaScript is Single-Threaded**:  
   - It runs one task at a time on the main thread. However, it can perform asynchronous operations using Web APIs, the callback queue, and the event loop.
   
2. **Call Stack**:  
   - Holds **synchronous** function calls.
   
3. **Web APIs**:  
   - Handle **asynchronous tasks** like timers, HTTP requests, etc., outside the main thread.
   
4. **Callback Queue**:  
   - Holds callbacks from asynchronous operations, which will be executed once the call stack is empty.
   
5. **Event Loop**:  
   - Moves tasks from the callback queue to the call stack when it’s empty.
   
6. **Macro and Micro Tasks**:  
   - Microtasks (like promise callbacks) have higher priority than macrotasks (like `setTimeout`).

7. **Asynchronous Execution in a Single-Threaded Language**:  
   - JavaScript uses its concurrency model to handle tasks asynchronously without freezing the UI, despite being single-threaded.

---

