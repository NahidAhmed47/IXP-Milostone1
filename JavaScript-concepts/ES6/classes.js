// ES6 introduced class syntax for creating objects with constructor functions and prototype-based inheritance.
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const john = new Person('John');
john.greet(); // Output: 'Hello, my name is John'
