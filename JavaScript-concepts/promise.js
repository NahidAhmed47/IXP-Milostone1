// What is a promise?
// Promises are used to handle asynchronous operations. They represent a value that might be available now, or in the future, or never.

// Example 
const fetchData = new Promise((resolve, reject) => {
    // Simulate fetching data
    setTimeout(() => {
        const data = { name: 'John' };
        resolve(data); // Data fetched successfully
    }, 2000);
});

fetchData.then(data => {
    console.log(data);
});

// Output: { name: 'John' }