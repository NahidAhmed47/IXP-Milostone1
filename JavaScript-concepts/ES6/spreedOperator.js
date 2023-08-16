// The spread operator ... allows you to expand elements in arrays or object properties.
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5];

const obj1 = { x: 1, y: 2 };
const obj2 = { ...obj1, z: 3 };

// rest parameters
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3)); // Output: 6

