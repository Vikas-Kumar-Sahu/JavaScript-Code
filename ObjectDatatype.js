// Object Data Types

// Object
const person = {
    name: 'John',
    age: 30,
    isStudent: false,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

// Function
function multiply(a, b) {
    return a * b;
}

// Array
const fruits = ['apple', 'banana', 'orange'];

// Date
const currentDate = new Date();

// RegExp
const pattern = /example/g;

// Map
const userRoles = new Map();
userRoles.set('john', 'admin');
userRoles.set('alice', 'user');

// Set
const uniqueNumbers = new Set([1, 2, 3, 4, 4, 5, 5]);

// WeakMap
const weakMap = new WeakMap();
const keyObject = { key: 'value' };
weakMap.set(keyObject, 'WeakMap Value');

// WeakSet
const weakSet = new WeakSet();
const weakSetObject = { data: 'WeakSet Object' };
weakSet.add(weakSetObject);

// Logging Object Variables
console.log('Object Variable (Person):', person);
console.log('Function Variable (Multiply):', multiply);
console.log('Array Variable (Fruits):', fruits);
console.log('Date Variable (Current Date):', currentDate);
console.log('RegExp Variable (Pattern):', pattern);
console.log('Map Variable (User Roles):', userRoles);
console.log('Set Variable (Unique Numbers):', uniqueNumbers);
console.log('WeakMap Variable:', weakMap.get(keyObject));
console.log('WeakSet Variable (Contains Object):', weakSet.has(weakSetObject));

// This code provides examples of various object types in JavaScript, including regular objects, functions, arrays, dates, regular expressions, Map, Set, WeakMap, and WeakSet. Each object is declared and then logged to the console for demonstration purposes.