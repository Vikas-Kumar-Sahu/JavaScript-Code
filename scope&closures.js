// Global Scope
let globalVar = 'I am global';

function globalFunction() {
    console.log('Inside globalFunction:', globalVar);
}

globalFunction();
console.log('Outside globalFunction:', globalVar);

// Function Scope
function outerFunction() {
    let outerVar = 'I am outer';

    function innerFunction() {
        let innerVar = 'I am inner';
        console.log('Inside innerFunction:', outerVar, innerVar);
    }

    innerFunction();
    // console.log('Outside innerFunction:', innerVar); // Uncommenting this line would result in an error
}

outerFunction();
// console.log('Outside outerFunction:', outerVar); // Uncommenting this line would result in an error

// Block Scope (introduced in ES6 with let and const)
if (true) {
    let blockVar = 'I am block-scoped';
    console.log('Inside Block:', blockVar);
}

// console.log('Outside Block:', blockVar); // Uncommenting this line would result in an error

// Closures
function outerClosure() {
    let outerVar = 'I am outer';

    function innerClosure() {
        let innerVar = 'I am inner';
        console.log('Inside innerClosure:', outerVar, innerVar);
    }

    return innerClosure;
}

const closureFunction = outerClosure();
closureFunction();

// Accessing outerVar directly would result in an error
// console.log('Outside outerClosure:', outerVar);

// Modifying outerVar using closure
function counter() {
    let count = 0;

    return function() {
        count++;
        console.log('Count:', count);
    };
}

const incrementCounter = counter();
incrementCounter();
incrementCounter();
incrementCounter();
