### Higher-Order Functions in JavaScript: `map`, `filter`, and `reduce`

Higher-order functions like `map`, `filter`, and `reduce` are powerful tools in JavaScript for working with arrays. While many developers understand how these functions work, their practical applications and underlying mechanisms are often overlooked. This document explains each function in detail, includes examples, and retains the original explanations while adding additional insights and theoretical depth.

---

### The `map` Function

The `map` function is used to transform an array by applying a function to each element and returning a new array with the transformed values.

#### Example Code:

```javascript
const arr = [5, 1, 3, 2, 6];

function double(x) {
    return x * 2;
}

function triple(x) {
    return x * 3;
}

function binary(x) {
    return x.toString(2);
}

console.log(arr.map(double)); // [10, 2, 6, 4, 12]
console.log(arr.map(triple)); // [15, 3, 9, 6, 18]
console.log(arr.map(binary)); // ["101", "1", "11", "10", "110"]
```

#### Explanation:

- The `map` function iterates through each element in the array and applies the provided callback function (e.g., `double`, `triple`, or `binary`).
- A new array is created with the transformed values, leaving the original array unchanged.

#### How `map` Works Internally:

1. The `map` function creates a new empty array internally.
2. It loops over the original array, passing each element and its index to the provided callback function.
3. The return value of the callback function is pushed into the new array.
4. Once all elements are processed, the new array is returned.

Performance Considerations:
- **Time Complexity**: O(n), where n is the length of the array, as it processes each element exactly once.
- **Space Complexity**: O(n), as it creates a new array with the same length as the original.

#### Alternative Syntax:

```javascript
const output = arr.map(function (x) {
    return x.toString(2);
});

const output = arr.map((x) => {
    return x.toString(2);
});

const output = arr.map((x) => x.toString(2));
```

- The last version uses an arrow function with an implicit return for brevity.
- This is an anonymous function passed directly to `map`.
- Anonymous and arrow functions eliminate the need for named functions like binary.
- If the function has a single return statement, the return keyword and braces {} can be omitted.

---

### The `filter` Function

The `filter` function is used to create a new array with elements that pass a specific condition defined in the callback function.

#### Example Code 1: Filtering Odd Values

```javascript
const arr = [5, 1, 3, 2, 6];

function isOdd(x) {
    return x % 2;
}

const output = arr.filter(isOdd);

console.log(output); // [5, 1, 3]
```

#### Example Code 2: Filtering Even Values

```javascript
const arr = [5, 1, 3, 2, 6];

function isEven(x) {
    return x % 2 === 0;
}

const output = arr.filter(isEven);

console.log(output); // [2, 6]
```

#### Example Code 3: Filtering Values Greater Than 4

```javascript
const arr = [5, 1, 3, 2, 6];

function greaterThan4(x) {
    return x > 4;
}

const output = arr.filter(greaterThan4);

console.log(output); // [5, 6]
```

#### Explanation:

- The `filter` function tests each element against the condition in the callback function.
- Only elements that satisfy the condition are included in the new array.
- Like `map`, `filter` does not modify the original array.

#### How `filter` Works Internally:

1. The `filter` function creates a new empty array.
2. It iterates through each element in the original array, applying the callback function to determine if the element satisfies the condition.
3. If the callback returns `true`, the element is added to the new array.
4. Once all elements are processed, the new array is returned.

Performance Considerations:
- **Time Complexity**: O(n), as it evaluates the callback function for each element.
- **Space Complexity**: O(k), where k is the number of elements that satisfy the condition (k ≤ n).

---

### The `reduce` Function

The `reduce` function is used to combine all elements of an array into a single value by applying a callback function. It is particularly useful for scenarios like summing values, finding maximum/minimum, or creating aggregated results.

#### Example Code 1: Sum of All Elements (Non-functional Approach)

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

#### Example Code 2: Sum of All Elements Using `reduce`

```javascript
const arr = [5, 1, 3, 2, 6];

const output = arr.reduce(function(acc, curr) {
    acc = acc + curr;
    return acc;
}, 0);

console.log(output); // 17
```

#### Explanation:

- `reduce` takes two arguments:
  1. A callback function that processes each element.
  2. An initial value for the accumulator (e.g., `0`).
- The callback function has two parameters:
  1. `acc`: The accumulator that holds the running result.
  2. `curr`: The current element being processed.
- Each iteration updates `acc` based on the logic provided, and the final value of `acc` is returned.

#### How `reduce` Works Internally:

1. The `reduce` function initializes the accumulator (`acc`) with the provided initial value or the first element of the array if no initial value is provided.
2. It iterates through each element of the array, applying the callback function.
3. The result of the callback function is assigned to the accumulator.
4. After processing all elements, the final value of the accumulator is returned.

Performance Considerations:
- **Time Complexity**: O(n), as it processes each element once.
- **Space Complexity**: O(1), since it does not create any new arrays.

### Example Code 3: Maximum Value

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

#### Maximum Value Using `reduce`

```javascript
const arr = [5, 1, 3, 2, 6];

const output = arr.reduce(function(max, curr) {
    if(curr > max) {
        max = curr;
    }
    return max;
}, 0);

console.log(output); // 6
```

---

### Combining `map`, `filter`, and `reduce`

#### Example 1: List of Full Names

```javascript
const users = [
    { firstName: "akshay", lastName: "saini", age: 26},
    { firstName: "donald", lastName: "trump", age: 75},
    { firstName: "elon", lastName: "musk", age: 50},
    { firstName: "deepika", lastName: "padukone", age: 26}
];

const output = users.map((x) => x.firstName + " " + x.lastName);

console.log(output); // ["akshay saini", "donald trump", "elon musk", "deepika padukone"]
```

#### Example 2: Grouping by Age Using `reduce`

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

console.log(output); // { 26: 2, 75: 1, 50: 1 }
```

### Example 3: Filter and Map Combined

```javascript
const users = [
    { firstName: "akshay", lastName: "saini", age: 26 },
    { firstName: "donald", lastName: "trump", age: 75 },
    { firstName: "elon", lastName: "musk", age: 50 },
    { firstName: "deepika", lastName: "padukone", age: 26 }
];

const output = users.filter((user) => user.age < 30).map((user) => user.firstName);

console.log(output); // ["akshay", "deepika"]
```

### Example 4: Using reduce to Create a Filtered Array

```javascript
const users = [
    { firstName: "akshay", lastName: "saini", age: 26},
    { firstName: "donald", lastName: "trump", age: 75},
    { firstName: "elon", lastName: "musk", age: 50},
    { firstName: "deepika", lastName: "padukone", age: 26}
];

const output = users.reduce((acc, curr) => {
    if(curr.age < 30) {
        acc.push(curr.firstName);
    }
    return acc;
}, []);

console.log(output); // ["akshay", "deepika"]
```

---

### Summary

- `map`: Use it to transform each element in an array into a new value.

  - Example: Convert numbers to their binary representation.

- `filter`: Use it to select elements from an array that meet a certain condition.

    - Example: Filter out odd numbers.

- `reduce`: Use it to aggregate all elements of an array into a single value.

    - Example: Calculate the sum of an array or find the maximum value.

When combined, these higher-order functions allow you to write expressive, clean, and efficient code. By mastering these functions, you