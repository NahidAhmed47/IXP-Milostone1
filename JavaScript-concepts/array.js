// array simple 
const colors = ['red', 'green', 'blue'];
console.log(colors[0]); // Output: 'red'

// array methods
// push() - add an element to the end of an array
const animals = ['pigs', 'goats', 'sheep'];
animals.push('cows');
console.log(animals); // Output: ['pigs', 'goats', 'sheep', 'cows']

// pop() - remove the last element of an array
const colors1 = ['red', 'green', 'blue'];
const removedColor = colors1.pop();
console.log(removedColor); // Output: 'blue'
console.log(colors1); // Output: ['red', 'green']

// unshift() - add an element to the beginning of an array
const animals1 = ['lion', 'tiger', 'bear'];
animals1.unshift('elephant', 'giraffe');
console.log(animals1); // Output: ['elephant', 'giraffe', 'lion', 'tiger', 'bear']

// shift() - remove the first element of an array
const colors2 = ['red', 'green', 'blue'];
const removedColor1 = colors2.shift();
console.log(removedColor1); // Output: 'red'
console.log(colors2); // Output: ['green', 'blue']

// concat() - merge two or more arrays
const myArray = ['a', 'b', 'c'];
const yourArray = ['d', 'e', 'f'];
const ourArray = myArray.concat(yourArray);
console.log(ourArray); // Output: ['a', 'b', 'c', 'd', 'e', 'f']

// slice() - extract a section of an array and return a new array
const animals2 = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals2.slice(2)); // Output: ['camel', 'duck', 'elephant']
console.log(animals2.slice(2, 4)); // Output: ['camel', 'duck']
console.log(animals2.slice(1, 5)); // Output: ['bison', 'camel', 'duck', 'elephant']

// splice() - add/remove elements in an array
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months); // Output: ['Jan', 'Feb', 'March', 'April', 'June']
months.splice(4, 1, 'May');
console.log(months); // Output: ['Jan', 'Feb', 'March', 'April', 'May']

// indexOf() - find the index of an item in the array
const animals3 = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(animals3.indexOf('bison')); // Output: 1
console.log(animals3.indexOf('giraffe')); // Output: -1

// find() - find the first item that matches from an array
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found); // Output: 12

// findIndex() - find the index of the first item that matches
const array2 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array2.findIndex(isLargeNumber)); // Output: 3

// forEach() - execute a function for each array element
const array3 = ['a', 'b', 'c'];
array3.forEach(element => console.log(element)); // Output: 'a' 'b' 'c'

// map() - create a new array from the results of a function
const array4 = [1, 4, 9, 16];
const map1 = array4.map(x => x * 2);
console.log(map1); // Output: [2, 8, 18, 32]

// filter() - create a new array from elements that return true in a function
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result); // Output: ['exuberant', 'destruction', 'present']

// reduce() - reduce the values of an array to a single value (going left-to-right)
const array5 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(array5.reduce(reducer)); // Output: 10
console.log(array5.reduce(reducer, 5)); // Output: 15

// reduceRight() - reduce the values of an array to a single value (going right-to-left)
const array6 = [[0, 1], [2, 3], [4, 5]].reduceRight(
    (accumulator, currentValue) => accumulator.concat(currentValue)
);
console.log(array6); // Output: [4, 5, 2, 3, 0, 1]

// every() - check if all elements in an array pass a test
const isBelowThreshold = (currentValue) => currentValue < 40;
const array7 = [1, 30, 39, 29, 10, 13];
console.log(array7.every(isBelowThreshold)); // Output: true

// some() - check if some elements in an array pass a test
const array8 = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
console.log(array8.some(even)); // Output: true

// includes() - check if an array contains a specified element
const array9 = [1, 2, 3];
console.log(array9.includes(2)); // Output: true
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat')); // Output: true
console.log(pets.includes('at')); // Output: false

// Array.from() - create an array from an object
const myArr = Array.from('foo');
console.log(myArr); // Output: ['f', 'o', 'o']

// Array.isArray() - check if an object is an array
console.log(Array.isArray([1, 2, 3])); // Output: true
console.log(Array.isArray({ foo: 123 })); // Output: false
console.log(Array.isArray('foobar')); // Output: false
console.log(Array.isArray(undefined)); // Output: false

// Array.of() - create an array from arguments
console.log(Array.of(7)); // Output: [7]
console.log(Array.of(1, 2, 3)); // Output: [1, 2, 3]
console.log(Array(7)); // Output: [ , , , , , , ]
console.log(Array(1, 2, 3)); // Output: [1, 2, 3]

