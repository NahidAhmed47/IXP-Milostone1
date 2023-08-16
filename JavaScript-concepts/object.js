// object simple
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};
console.log(person.firstName); // Output: 'John'

// object nested
const person2 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    address: {
        street: '50 Main St',
        city: 'Boston',
        state: 'MA'
    }
};
console.log(person2.address.city); // Output: 'Boston'

// object array
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];

// object methods for operations

// Object.keys(obj)
const person1 = { name: 'John', age: 30 };
const keys = Object.keys(person);
console.log(keys); // Output: ['name', 'age']

// Object.values(obj)
const person3 = { name: 'John', age: 30 };
const values = Object.values(person);
console.log(values); // Output: ['John', 30]

// Object.entries(obj)
const person4 = { name: 'John', age: 30 };
const entries = Object.entries(person);
console.log(entries); // Output: [['name', 'John'], ['age', 30]]

// Object.assign(target, source)
const person5 = { name: 'John', age: 30 };
const person6 = { name: 'Jane', age: 25 };
const person7 = Object.assign({}, person5, person6);
console.log(person7); // Output: { name: 'Jane', age: 25 }

// Object.freeze(obj)
const person8 = { name: 'John', age: 30 };
const person9 = Object.freeze(person);
person9.age = 40;
console.log(person9); // Output: { name: 'John', age: 30 }

// Object.seal(obj)
const person10 = { name: 'John', age: 30 };
const person11 = Object.seal(person);
person11.age = 40;
console.log(person11); // Output: { name: 'John', age: 40 }

// Object.getPrototypeOf(obj)
const person12 = { name: 'John', age: 30 };
const prototype = Object.getPrototypeOf(person);
console.log(prototype); // Output: {}

// Object.hasOwnProperty(prop)
const person13 = { name: 'John', age: 30 };
const hasName = person.hasOwnProperty('name');
console.log(hasName); // Output: true

// Object.isFrozen(obj)
const person14 = { name: 'John', age: 30 };
const isFrozen = Object.isFrozen(person);
console.log(isFrozen); // Output: false

// Object.isSealed(obj)
const person15 = { name: 'John', age: 30 };
const isSealed = Object.isSealed(person);
console.log(isSealed); // Output: false

// Object.isExtensible(obj)
const person16 = { name: 'John', age: 30 };
const isExtensible = Object.isExtensible(person);
console.log(isExtensible); // Output: true

// Object.is(obj1, obj2)
const person17 = { name: 'John', age: 30 };
const person18 = { name: 'John', age: 30 };
const isSame = Object.is(person17, person18);
console.log(isSame); // Output: false

// Object.fromEntries(iterable)
const entries2 = [['name', 'John'], ['age', 30]];
const person19 = Object.fromEntries(entries2);
console.log(person19); // Output: { name: 'John', age: 30 }

// Object.create(proto, [propertiesObject])
const person20 = {
    isHuman: false,
    printIntroduction: function() {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};
const me = Object.create(person20);
me.name = 'Matthew';
me.isHuman = true;



