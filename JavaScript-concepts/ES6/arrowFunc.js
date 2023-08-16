// arrow function examples
const add = (a, b) => a + b;
const greet = name => `Hello, ${name}!`;
const sayHello = () => console.log('Hello');
const multiply = (a, b) => {
    const result = a * b;
    return result;
}

// default parameters
function greet(name = 'Guest') {
    console.log(`Hello, ${name}!`);
}
greet(); // Hello, Guest!