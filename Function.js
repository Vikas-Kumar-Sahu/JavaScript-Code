// Function Types

// Function Declaration
function add(a, b) {
    return a + b;
}

// Function Expression
const subtract = function(x, y) {
    return x - y;
};

// Arrow Function
const multiply = (a, b) => a * b;

// IIFE (Immediately Invoked Function Expression)
(function() {
    console.log('I am an IIFE!');
})();

// Function with Default Parameters
function greet(name = 'Guest') {
    console.log(`Hello, ${name}!`);
}

// Function with Rest Parameter
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// Higher-Order Function
function multiplyBy(factor) {
    return function (number) {
        return number * factor;
    };
}

// Recursive Function
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Callback Function
function fetchData(callback) {
    // Simulating asynchronous data fetching
    setTimeout(() => {
        const data = 'Fetched Data';
        callback(data);
    }, 1000);
}

// Promise-based Function
function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        // Simulating asynchronous data fetching
        setTimeout(() => {
            const data = 'Fetched Data';
            resolve(data);
            // Uncomment the line below to simulate a rejection
            // reject('Error fetching data');
        }, 1000);
    });
}

// Async Function
async function fetchDataAsync() {
    try {
        const data = await fetchDataPromise();
        console.log('Async Data:', data);
    } catch (error) {
        console.error('Async Error:', error);
    }
}

// Logging Function Results
console.log('Add Result:', add(3, 5));
console.log('Subtract Result:', subtract(8, 3));
console.log('Multiply Result:', multiply(4, 6));
greet('John');
console.log('Sum Result:', sum(1, 2, 3, 4, 5));
const double = multiplyBy(2);
console.log('Multiply by 2 Result:', double(7));
console.log('Factorial of 5:', factorial(5));

// Callback Example
fetchData(result => {
    console.log('Callback Data:', result);
});

// Promise Example
fetchDataPromise()
    .then(result => console.log('Promise Data:', result))
    .catch(error => console.error('Promise Error:', error));

// Async Function Example
fetchDataAsync();

// This code provides examples of various function types, including function declaration, function expression, arrow function, IIFE, functions with default parameters, rest parameters, higher-order functions, recursive functions, callback functions, promise-based functions, and async functions. Each function type is demonstrated with practical examples.