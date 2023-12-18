// Objects

// Regular Object
const person = {
    name: 'John',
    age: 30,
    isStudent: false,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

// Function Object
function multiply(a, b) {
    return a * b;
}

// Array Object
const fruits = ['apple', 'banana', 'orange'];

// Date Object
const currentDate = new Date();

// RegExp Object
const pattern = /example/g;

// Map Object
const userRoles = new Map();
userRoles.set('john', 'admin');
userRoles.set('alice', 'user');

// Set Object
const uniqueNumbers = new Set([1, 2, 3, 4, 4, 5, 5]);

// WeakMap Object
const weakMap = new WeakMap();
const keyObject = { key: 'value' };
weakMap.set(keyObject, 'WeakMap Value');

// WeakSet Object
const weakSet = new WeakSet();
const weakSetObject = { data: 'WeakSet Object' };
weakSet.add(weakSetObject);

// Logging Objects
console.log('Regular Object (Person):', person);
console.log('Function Object (Multiply):', multiply);
console.log('Array Object (Fruits):', fruits);
console.log('Date Object (Current Date):', currentDate);
console.log('RegExp Object (Pattern):', pattern);
console.log('Map Object (User Roles):', userRoles);
console.log('Set Object (Unique Numbers):', uniqueNumbers);
console.log('WeakMap Object:', weakMap.get(keyObject));
console.log('WeakSet Object (Contains Object):', weakSet.has(weakSetObject));

// This code provides examples of various object types in JavaScript, including regular objects, function objects, array objects, date objects, RegExp objects, Map, Set, WeakMap, and WeakSet. Each object is declared and then logged to the console for demonstration purposes.