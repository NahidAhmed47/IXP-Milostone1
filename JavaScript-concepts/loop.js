// method 1 for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// method 3 for loop
const numbers1 = [1, 2, 3];
numbers1.forEach(num => console.log(num));

// method 4 for loop
const numbers2 = [1, 2, 3];
for (let num of numbers2) {
    console.log(num);
}

// method 5 for loop
const numbers3 = [1, 2, 3];
for (let i in numbers3) {
    console.log(i);
}
