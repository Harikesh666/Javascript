
## **Understanding `map`, `filter`, and `reduce` in JavaScript**

In JavaScript, `map`, `filter`, and `reduce` are **higher-order functions** that operate on arrays. These functions allow concise and expressive transformations, filtering, and aggregations on data. Let’s explore each function in-depth with examples and explanations.

---

### **1. `map` Function**

The `map` function creates a new array by applying a provided callback function to each element of the original array. It's typically used for **element-wise transformations**.

#### **Key Characteristics**
- Returns a new array with the same length as the original array.
- Does not modify the original array.
- Useful for **transforming data**.

---

#### **Example: Transforming an Array**

```javascript
const arr = [5, 1, 3, 2, 6];

function double(x) {
    return x * 2;
}

function triple(x) {
    return x * 3;
}

function binary(x) {
    return x.toString(2); // Converts number to binary
}

console.log(arr.map(double)); // [10, 2, 6, 4, 12]
console.log(arr.map(triple)); // [15, 3, 9, 6, 18]
console.log(arr.map(binary)); // ["101", "1", "11", "10", "110"]
```

**Explanation:**
1. The `map` function applies the provided callback (`double`, `triple`, or `binary`) to every element in the array.
2. Each transformation results in a new array:
   - Doubling each element gives `[10, 2, 6, 4, 12]`.
   - Tripling each element gives `[15, 3, 9, 6, 18]`.
   - Converting elements to binary gives `["101", "1", "11", "10", "110"]`.

---

#### **Alternate Syntax**

You can use **anonymous functions** or **arrow functions** to simplify the code:

```javascript
const output = arr.map(function (x) {
    return x.toString(2); // Anonymous function
});

const output = arr.map((x) => {
    return x.toString(2); // Arrow function with braces
});

const output = arr.map((x) => x.toString(2)); // Concise arrow function
```

**Explanation:**
- Anonymous and arrow functions eliminate the need for named functions like `binary`.
- If the function has a single return statement, the `return` keyword and braces `{}` can be omitted.

---

#### **How `map` Works Internally**
- It iterates through each element in the array.
- Applies the provided callback function to the current element.
- Pushes the transformed element into a new array.

---

---

### **2. `filter` Function**

The `filter` function creates a new array containing elements that satisfy a given condition. The condition is defined by the callback function, which returns `true` or `false`.

#### **Key Characteristics**
- Returns a new array, potentially smaller than the original.
- Does not modify the original array.
- Used for **selecting subsets of data**.

---

#### **Example 1: Filtering Odd Numbers**

```javascript
const arr = [5, 1, 3, 2, 6];

function isOdd(x) {
    return x % 2; // Returns true for odd numbers
}

const output = arr.filter(isOdd);

console.log(output); // [5, 1, 3]
```

---

#### **Example 2: Filtering Even Numbers**

```javascript
const arr = [5, 1, 3, 2, 6];

function isEven(x) {
    return x % 2 === 0; // Returns true for even numbers
}

const output = arr.filter(isEven);

console.log(output); // [2, 6]
```

---

#### **Example 3: Filtering Numbers Greater Than 4**

```javascript
const arr = [5, 1, 3, 2, 6];

function greaterThan4(x) {
    return x > 4; // Returns true if greater than 4
}

const output = arr.filter(greaterThan4);

console.log(output); // [5, 6]
```

---

#### **How `filter` Works Internally**
- Iterates through each element of the array.
- Applies the callback function to each element.
- Includes the element in the new array only if the callback returns `true`.

---

---

### **3. `reduce` Function**

The `reduce` function combines all elements of an array into a single value. It achieves this by applying a callback function that operates on an accumulator and the current value.

#### **Key Characteristics**
- Returns a single aggregated value.
- Takes an **initial value** for the accumulator as its second argument.
- Useful for **aggregating data**.

---

#### **Example 1: Sum of Array Elements (Non-Functional Way)**

```javascript
const arr = [5, 1, 3, 2, 6];

function findSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(findSum(arr)); // 17
```

---

#### **Example 2: Sum of Array Elements (Using `reduce`)**

```javascript
const arr = [5, 1, 3, 2, 6];

const output = arr.reduce(function (acc, curr) {
    acc = acc + curr; // Add current value to accumulator
    return acc;
}, 0); // Initial value of accumulator is 0

console.log(output); // 17
```

---

#### **Example 3: Finding Maximum Value**

```javascript
const arr = [5, 1, 3, 2, 6];

function findMax(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax(arr)); // 6
```

Using `reduce`:

```javascript
const arr = [5, 1, 3, 2, 6];

const output = arr.reduce(function (max, curr) {
    if (curr > max) {
        max = curr; // Update max if current is greater
    }
    return max;
}, 0); // Initial value of max is 0

console.log(output); // 6
```

---

---

### **Chaining `map`, `filter`, and `reduce`**

By combining these functions, you can perform complex operations in a concise and readable manner.

---

#### **Example 1: Extract Full Names from Objects**

```javascript
const users = [
    { firstName: "akshay", lastName: "saini", age: 26 },
    { firstName: "donald", lastName: "trump", age: 75 },
    { firstName: "elon", lastName: "musk", age: 50 },
    { firstName: "deepika", lastName: "padukone", age: 26 }
];

const output = users.map((user) => user.firstName + " " + user.lastName);

console.log(output); 
// ["akshay saini", "donald trump", "elon musk", "deepika padukone"]
```

---

#### **Example 2: Group Users by Age**

```javascript
const users = [
    { firstName: "akshay", lastName: "saini", age: 26 },
    { firstName: "donald", lastName: "trump", age: 75 },
    { firstName: "elon", lastName: "musk", age: 50 },
    { firstName: "deepika", lastName: "padukone", age: 26 }
];

const output = users.reduce(function (acc, curr) {
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age];
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {});

console.log(output);
// { 26: 2, 75: 1, 50: 1 }
```

---

#### **Example 3: Filter and Map Combined**

```javascript
const users = [
    { firstName: "akshay", lastName: "saini", age: 26 },
    { firstName: "donald", lastName: "trump", age: 75 },
    { firstName: "elon", lastName: "musk", age: 50 },
    { firstName: "deepika", lastName: "padukone", age: 26 }
];

const output = users.filter((user) => user.age < 30).map((user) => user.firstName);

console.log(output);
// ["akshay", "deepika"]
```

---

### **Conclusion**

By mastering `map`, `filter`, and `reduce`, you can simplify complex operations, make your code more concise, and unlock the full potential of functional programming in JavaScript. Practice chaining these functions to handle real-world data manipulation scenarios efficiently.