// 1. How to preserve the immutability on my heroes list? Solve below problems using the same
// a. Get heroes who are not evils
// b. Print Unique family names
// c. Print Hero Names from given objects, and append sir in each of them before printing
// d. Do we have any hero in Marvel Family who is not evil

console.log('\nQuestion 1:');
const heroes = [
    { name: 'Wolverine', family: 'Marvel', isEvil: false },
    { name: 'Deadpool', family: 'Marvel', isEvil: false },
    { name: 'Magneto', family: 'Marvel', isEvil: true },
    { name: 'Charles Xavier', family: 'Marvel', isEvil: false },
    { name: 'Batman', family: 'DC Comics', isEvil: false },
    { name: 'Harley Quinn', family: 'DC Comics', isEvil: true },
    { name: 'Legolas', family: 'Tolkien', isEvil: false },
    { name: 'Gandalf', family: 'Tolkien', isEvil: false },
    { name: 'Saruman', family: 'Tolkien', isEvil: true }
]

// A
const goodHeroes = heroes.filter(hero => !hero.isEvil);

// B
const uniqueNames = [];
heroes.forEach(hero => {
    if (!uniqueNames.includes(hero.family)) {
        uniqueNames.push(hero.family);
    }
});

// C
heroes.forEach(hero => console.log(`sir ${hero.name}`));
// D
const goodCharacters = heroes.some(hero => hero.family === 'Marvel' && !hero.isEvil);

console.log(goodHeroes);
console.log(uniqueNames);
console.log(goodCharacters);


console.log('\nQuestion 2:');
//2. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)

function multiplyAndPrint(...numbers) {
    const result = numbers.reduce((acc, num) => acc * num, 1);
    console.log(`Result of multiplication: ${result}`);
}

const students = ['Alice', 'Bob', 'Charlie'];

multiplyAndPrint(...[1, 2, 3, 4]); // Result of multiplication: 24
console.log(students);

console.log('\nQuestion 3:');
//3. Print the last name through destructuring and add a contact number:9119119110 as well

const person = {
    userDetails: {
        first: "Otoi",
        last: "Ebba"
    }
}

const { userDetails: { last }, ...contactInfo } = person;
const personWithContact = { userDetails: { last }, ...contactInfo, contactNumber: '9119119110' };

console.log(personWithContact);

console.log('\nQuestion 4:');
// 4. Give me an example of const data manipulation
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);


console.log('\nQuestion 5:');
// 5. What is the difference between for-of and for-in show with examples
/*
- for-in iterates over the properties of an object
- for-of iterates over the values of an iterable object
*/
const obj = { age: "27", name: "Otoi", location: "USA" };

for (const key in obj) {
    console.log(key);
}

for (const value of Object.values(obj)) {
    console.log(value);
}


//6. Give me an example of bind and write its usage, comparison with arrow function
const number = {
    value: 42
};

function getValue() {
    return this.value;
}

const boundGetValue = getValue.bind(number);
console.log(boundGetValue());


const arrowPrintFullName = () => {
    return `${person.firstName} ${person.lastName}`;
};
console.log(arrowPrintFullName());

// 7. Create an example showing usage of event loop in concurrent execution cycle
setTimeout(() => {
    console.log('Inside setTimeout');
}, 1000);

function delayedLog() {
    console.log('Inside delayedLog');
}

setTimeout(delayedLog, 500);

console.log('\nQuestion 8:');
// 8. create an example showing usage of short hand and default param.
const make = 'VW';
const model = 'Jetta';
const year = 2020;

const vehicle = { make, model, year };
console.log(vehicle);

function honk(sound = 'Beep') {
    console.log(`${sound}!`);
}

honk();
honk('Honk');

console.log('\nQuestion 9:');
// 9. Create two objects with some properties and merge them using Object method and ES6 way
const car1 = { make: 'Toyota', model: 'Corolla', year: 2018 };
const car2 = { make: 'Honda', model: 'Civic', color: 'blue' };

const mergedCar1 = Object.assign({}, car1, car2);

const mergedCar2 = { ...car1, ...car2 };

console.log(mergedCar1);
console.log(mergedCar2);

console.log('\nQuestion 10:');
// 10. Give me an example of call and apply each with it's usage
const product = {
    details: function (price, quantity) {
        return `This ${this.name} costs $${price} and there are ${quantity} in stock`;
    }
};

const laptop = {
    name: 'Laptop'
};

const phone = {
    name: 'Phone'
};

console.log(product.details.call(laptop, 1000, 5));
console.log(product.details.apply(phone, [800, 10]));

console.log('\nQuestion 7:');
