const globalVar = 'This is a global scope variable';

function myFunction() {
    const localVar = 'This is a local scope variable';
    console.log(globalVar); // this variable value is accessible
}

console.log(localVar); // Error, localVar is not accessible here
