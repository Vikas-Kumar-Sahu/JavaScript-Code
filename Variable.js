// Certainly! Below is an example JavaScript code that demonstrates various use cases of variables, including primitive types, objects, functions, arrays, and the use of Map:

// Variables --
// var , let , const

// Primitive Types
const strVariable = 'Hello, World!'; // String
const numVariable = 42; // Number
const boolVariable = true; // Boolean
const nullVariable = null; // Null
const undefinedVariable = undefined; // Undefined

// Objects
const objVariable = { key: 'value' }; // Object
const arrVariable = [1, 2, 3, 4]; // Array

// Functions
function greet(name) {
    console.log(`Hello, ${name}!`);
}

// Function Invocation
greet('John');

// Arrow Function
const multiply = (a, b) => a * b;

// Function Expression
const add = function(x, y) {
    return x + y;
};

// Arrays
const fruits = ['apple', 'banana', 'orange'];

// Iterating Over an Array
fruits.forEach(fruit => {
    console.log(fruit);
});

// Map
const userRoles = new Map();
userRoles.set('john', 'admin');
userRoles.set('alice', 'user');

// Iterating Over a Map
userRoles.forEach((role, user) => {
    console.log(`${user}: ${role}`);
});

// Logging Variables
console.log('String Variable:', strVariable);
console.log('Number Variable:', numVariable);
console.log('Boolean Variable:', boolVariable);
console.log('Null Variable:', nullVariable);
console.log('Undefined Variable:', undefinedVariable);

console.log('Object Variable:', objVariable);
console.log('Array Variable:', arrVariable);

// Invoking Functions
console.log('Multiply Result:', multiply(3, 4));
console.log('Add Result:', add(5, 6));

// This code covers a range of variable types, including primitive types (string, number, boolean, null, undefined), objects (object, array), functions (function declaration, arrow function, function expression), arrays, and the use of Map. It also demonstrates how to log and use these variables in various contexts.