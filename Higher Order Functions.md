One of the most amazing part of javascript is functional programming, and functional programming is not possible without higher order functions. 

---

### What is higher order function ?
A function which takes another function as an argument or returns a function from it is known as a higher order function. 

```js
function x() {
    console.log("Namaste");
}

function y() {
    x();
}
```

```
Namaste
```


So suppose if you have a function x() that does a console logs "Namaste" and we also have a function y() which takes x as an argument and calls x(). So in this case the function y() which takes another function x as an argument is the higher order function. Then what is x ? x is the callback function.

---

```js 
const radius = [3, 1, 2, 4];

const calculateArea = function (radius) {
    const output = [];

    for (let i = 0; i < radius.length; i++) {
        output.push(Math.PI * radius[i] ** 2);
    }

    return output;
}

console.log(calculateArea(radius));


const calculateCircumference = function (radius) {
    const output = [];

    for (let i = 0; i < radius.length; i++) {
        output.push(2 * Math.PI * radius[i]);
    }

    return output;
}

console.log(calculateCircumference(radius));


const calculateDiameter = function (radius) {
    const output = [];

    for (let i = 0; i < radius.length; i++) {
        output.push(2 * radius[i]);
    }

    return output;
}

console.log(calculateDiameter(radius));
```

