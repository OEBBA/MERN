// Question 6
const myMap = new Map();
myMap.set('1', 'a');
myMap.set('2', 'b');

console.log("Key 1:", myMap.get('1'));
console.log("Key 2:", myMap.get('2'));

const mySet = new Set();
mySet.add('one');
mySet.add('two');
mySet.add('three');

console.log(mySet.size);
console.log(mySet.has('one'));
console.log(mySet.has('four'));

// Question 7
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Resolved after 2 seconds');
    }, 2000);
});

myPromise.then((result) => {
    console.log(result);
});

// Question 8
const multiply = (...numbers) => {
    return numbers.reduce((acc, val) => acc * val, 1);
};

console.log(multiply(1, 2, 3, 4, 5));

// Question 9
const asyncFunction = async () => {
    try {
        const result = await myPromise;
        console.log(result);
    } catch (error) {
        console.error(error.message);
    }
};

asyncFunction();

// Question 10: Example of a generator function
