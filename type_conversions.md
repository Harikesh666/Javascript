### 1. **String Conversion**
String conversion occurs when JavaScript needs a value to be represented as a string, or when explicitly using `String(value)`.

- **Automatic Conversion**: Functions like `alert()` automatically convert values to strings to display them.
- **Explicit Conversion**: `String(value)` can be used to convert any type to a string.

#### Examples
```javascript
let value = true;
console.log(typeof value); // boolean

value = String(value); // Explicit conversion to string
console.log(typeof value); // string, value is now "true"
```

- Special Cases:
   - `null` becomes `"null"`
   - `undefined` becomes `"undefined"`

### 2. **Numeric Conversion**
Numeric conversion happens automatically in mathematical contexts or can be explicitly done using `Number(value)`. 

- **Automatic Conversion**: Operators like `+`, `-`, `*`, and `/` will coerce strings into numbers if possible.
   ```javascript
   console.log("6" / "2"); // 3
   ```
  
- **Explicit Conversion**: Using `Number(value)` will attempt to convert the value to a number.
   ```javascript
   let str = "123";
   console.log(Number(str)); // 123
   ```

   If the conversion fails, the result is `NaN` (Not a Number).

#### Conversion Rules for Common Types
| Value       | Becomes     |
|-------------|-------------|
| `undefined` | `NaN`       |
| `null`      | `0`         |
| `true`      | `1`         |
| `false`     | `0`         |
| `" "`       | `0` (if the string is empty or whitespace-only) |
| `"123abc"`  | `NaN`       |

#### Examples
```javascript
console.log(Number("   123   ")); // 123
console.log(Number("123z")); // NaN, as "z" is invalid in a number
console.log(Number(true)); // 1
console.log(Number(false)); // 0
```

- **Note**: `null` converts to `0`, while `undefined` converts to `NaN`, as `null` represents the intentional absence of a value, whereas `undefined` suggests a lack of initialization.

### 3. **Boolean Conversion**
Boolean conversion is the simplest. It turns values into `true` or `false`, typically used in logical contexts, and can be explicitly done using `Boolean(value)`.

- **Automatic Conversion**: Happens in conditional checks (`if`, `while`, `&&`, `||`, etc.).
- **Explicit Conversion**: `Boolean(value)` forces a value to `true` or `false`.

#### Conversion Rules
- Falsy values (convert to `false`):
   - `0`, `""` (empty string), `null`, `undefined`, `NaN`
  
- Truthy values (convert to `true`):
   - Any other value, including `"0"`, `" "` (string with spaces), arrays, and objects.

#### Examples
```javascript
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false
console.log(Boolean("0")); // true, because "0" is a non-empty string
console.log(Boolean(" ")); // true, spaces also make it non-empty
```

### Important Notes:
1. **Non-empty Strings**: In JavaScript, any non-empty string (including `"0"` or `" "`) is considered `true`.
2. **`NaN`**: Represents an invalid number and is falsy in Boolean contexts.
3. **Consistency**: Understanding conversions makes it easier to avoid bugs, especially with conditionals or math operations involving mixed types.

These conversion rules are fundamental for predictable and bug-free code, especially when handling user input, conditional checks, and mathematical operations. 