### **JavaScript as a Synchronous, Single-Threaded Language**  

JavaScript is a synchronous, single-threaded language, which means it has **one call stack** and can execute **only one thing at a time**. The **call stack** is like the central hub where JavaScript code runs, and everything in JavaScript happens inside the **JavaScript engine**.  

When we run a JavaScript program, the engine creates something called a **Global Execution Context (GEC)** and pushes it onto the **call stack**. All code executes in this context.  

The **call stack's job is simple**: execute whatever comes into it and move on. It doesn’t wait for anything. This behavior is why we say, *“time, tide, and JavaScript wait for none.”*  

But then comes the question: *What if we need to wait for something?*  
For instance, what if we need to delay some code for 5 seconds? The **call stack** itself can’t do this. It doesn’t have a timer. To achieve this, we need **external superpowers**, and this is where the **browser** and its **Web APIs** come into play.

---

### **The Browser: A Superhero for JavaScript**  

The browser is a truly **remarkable invention**. It not only houses the JavaScript engine but also provides a host of additional tools that JavaScript can use. These tools, collectively called **Web APIs**, are like superpowers for JavaScript.  

#### **Web APIs Provided by the Browser:**  
1. **setTimeout():** Allows us to delay code execution using a timer.  
2. **DOM APIs:** Let us interact with the **DOM tree** to manipulate HTML and CSS dynamically.  
3. **fetch():** Helps us make network requests to servers (like fetching data from an external API).  
4. **localStorage:** Provides a way to store data persistently in the browser.  
5. **console:** Gives us access to debugging tools and logging mechanisms.  
6. **location:** Allows us to interact with the URL and browser location.  

None of these are **native JavaScript features**. They are all provided by the **browser** itself. JavaScript uses these superpowers through something called the **global object**, which is `window` in browsers.  

---

### **The Global Object (`window`)**  

The `window` object acts as a bridge between JavaScript and the browser’s Web APIs. Whenever you use something like `setTimeout`, you’re actually calling `window.setTimeout`. The browser automatically provides access to `window` in the **global scope**, which is why you can simply write `setTimeout` instead of `window.setTimeout`. Both are equivalent because of this default global scope.  

---

### **How `setTimeout` Works Behind the Scenes**  

Let’s take a simple example to see how `setTimeout` works:  

```javascript
console.log("Start");

setTimeout(function cb() {
    console.log("Callback");
}, 5000);

console.log("End");
```  

When you execute this code, here’s what happens step-by-step:  

1. The **Global Execution Context (GEC)** is created and pushed onto the **call stack**.  
2. The code begins execution **line by line**:  
   - Line 1: `console.log("Start")` is executed. It calls the **console Web API**, which logs "Start" in the console.  
   - Line 2: `setTimeout` is encountered. This is a **Web API**, so the **timer** is started in the browser environment. The `cb` function is registered with the Web API, and the code moves on immediately without waiting for the timer.  
   - Line 3: `console.log("End")` is executed, logging "End" in the console.  

3. At this point, the **call stack is empty**, and the **GEC** is popped off. However, the **timer** is still counting in the browser’s Web API environment.  

4. After 5000ms, the `cb` function is moved to the **callback queue**, waiting for the **call stack** to become empty.  

5. The **event loop**, acting as a gatekeeper, checks if the **call stack** is empty. If it is, it pushes the `cb` function from the **callback queue** into the call stack.  

6. Once inside the **call stack**, the `cb` function is executed line by line. In this case, `console.log("Callback")` is called, which logs "Callback" to the console.  

**Output:**
```
Start
End
Callback
```

---

### **What is the Callback Queue?**  

The **callback queue** is where functions from asynchronous operations (like `setTimeout`, `setInterval`, or event listeners) wait to be executed. These functions are added to the queue once their respective operations (like a timer or an event) are completed.  

The **callback queue operates on a FIFO basis** (First In, First Out). Functions are moved to the **call stack** by the **event loop** only when the **call stack** is empty.  

---

### **What is the Event Loop?**  

The **event loop** is the unsung hero of JavaScript. It constantly monitors the **call stack** and **callback queue** to ensure tasks are executed in the correct order.  

Here’s how it works:  
- If the **call stack** is empty, the **event loop** picks a function from the **callback queue** and pushes it into the **call stack** for execution.  
- The **event loop prioritizes tasks in the microtask queue** (like resolved promises) over those in the callback queue.  

---

### **How Event Listeners Work in JavaScript**  

Consider this example:  

```javascript
console.log("Start");

document.getElementById("btn").addEventListener("click", function cb() {
    console.log("Callback");
});

console.log("End");
```  

Here’s what happens:  
1. The **GEC** is created, and the code executes line by line:  
   - Line 1: `console.log("Start")` logs "Start".  
   - Line 2: `addEventListener` is called. This registers the `cb` function with the **DOM Web API**, attaching it to the "click" event of the button. The code moves on immediately.  
   - Line 3: `console.log("End")` logs "End".  

2. At this point, the **GEC** is popped off the **call stack**. The `cb` function remains registered in the Web API environment, waiting for a "click" event.  

3. When the user clicks the button, the `cb` function is moved to the **callback queue**.  

4. The **event loop** sees that the **call stack** is empty and moves the `cb` function from the **callback queue** to the **call stack**.  

5. The `cb` function is executed, logging "Callback" to the console.  

**Output:**
```
Start
End
```

*(Clicking the button later will output: `Callback`.)*

---

### **Callback Queue vs. Microtask Queue**  

In addition to the callback queue, there’s also a **microtask queue**, which is given higher priority. Microtasks include:  
- Resolved promises (`.then()` callbacks).  
- MutationObserver callbacks.  

The **event loop** always processes tasks in the **microtask queue** before moving to the **callback queue**.  

---

### **Starvation of Callback Queue**  

Because of the higher priority given to the **microtask queue**, it’s possible for the **callback queue** to starve. For example, if microtasks continuously generate new microtasks, the event loop will keep processing the microtask queue, and tasks in the callback queue may never execute.  

---

### **Example: Combining `setTimeout` and `fetch`**  

```javascript
console.log("Start");

setTimeout(function cbT() {
    console.log("CB SetTimeout");
}, 5000);

fetch("https://api.example.com")
    .then(function cbF() {
        console.log("CB Fetch");
    });

console.log("End");
```  

### **Detailed Explanation of the Output:**

1. **`console.log("Start")` (Line 1):**
   - This is a synchronous operation, so it executes immediately.
   - Output so far:
     ```
     Start
     ```

2. **`setTimeout` (Line 3-5):**
   - The `setTimeout` function is called with a delay of 5000ms (5 seconds). This registers the callback function `cbT` in the **Web API environment** with a timer.
   - The **call stack** doesn’t wait for the timer; it moves on immediately.

3. **`fetch` (Line 7-9):**
   - The `fetch` function is called to make a network request. This is also an asynchronous operation. The `.then()` callback (`cbF`) is registered in the **microtask queue** to execute once the network request resolves.

4. **`console.log("End")` (Line 11):**
   - This is another synchronous operation, so it executes immediately after the previous statements.
   - Output so far:
     ```
     Start
     End
     ```

5. **Network Request Resolves (`fetch`):**
   - Once the `fetch` request completes, the `.then()` callback (`cbF`) is pushed to the **microtask queue**. Since microtasks have **higher priority** over callbacks from the **callback queue**, `cbF` executes next.
   - Inside the `cbF` function:
     ```javascript
     console.log("CB Fetch");
     ```
   - Output so far:
     ```
     Start
     End
     CB Fetch
     ```

6. **Timer Completes (5000ms):**
   - After 5 seconds, the timer for `setTimeout` expires, and the `cbT` function is pushed to the **callback queue**. Once the **call stack** is empty and all **microtasks** are processed, the event loop moves `cbT` to the **call stack** for execution.
   - Inside the `cbT` function:
     ```javascript
     console.log("CB SetTimeout");
     ```
   - Final Output:
     ```
     Start
     End
     CB Fetch
     CB SetTimeout
     ```
     
---

### **Why `setTimeout` Does Not Guarantee Exact Timing**  

- **Timers are managed by the browser’s Web API environment, not the JavaScript engine.**  
- Once the timer expires, the callback function is placed in the **callback queue**.  
- The **event loop** pushes the callback to the **call stack** only if it’s empty. If the call stack is busy with other tasks, the callback must wait.  
- Hence, the actual execution time may be delayed beyond the specified duration.