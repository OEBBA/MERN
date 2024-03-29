
//Q1
//Javascript has several different types
var str = "Hello"; // string
var num = 42; // number
var bool = true; // boolean
var obj = { name: "Otoi", age: 27 }; // object
var arr = [1, 2, 3]; // array
var func = function () { console.log("Function!"); }; // function
var undef = undefined; // undefined
var nul = null; // null
// JavaScript is case-sensitive, therefore the following two are different variables
var myName = "Otoi";
var MyName = "Ebba";
// Strict equality checks both data values and types
var a = 1;
var b = '1';

if (a === b) {
    console.log("Values and types are equal");
} else if (a == b) { // Loose equality checks only data values
    console.log("Values are equal, but types are different");
}
//I'm not sure what else to put, I have previous knowledge of Javascript so this is what I feel is basic

//Q2
let value = "Robert ";

console.log(`Value: ${value}, Type: ${typeof value}`);

value = .0266;

console.log(`Value: ${value}, Type: ${typeof value}`);

value = false;
console.log(`Value: ${value}, Type: ${typeof value}`);

value = { myname: "Test Me" };
console.log(`Value: ${JSON.stringify(value)}, Type: ${typeof value}`);

value = 25166665;
console.log(`Value: ${value}, Type: ${typeof value}`);

value = undefined;
console.log(`Value: ${value}, Type: ${typeof value}`);

value = true;
console.log(`Value: ${value}, Type: ${typeof value}`);

value = "Robert Jr.";
console.log(`Value: ${value}, Type: ${typeof value}`);

value = null;
console.log(`Value: ${value}, Type: ${typeof value}`);

value = {};
console.log(`Value: ${JSON.stringify(value)}, Type: ${typeof value}`);

value = -32767;
console.log(`Value: ${value}, Type: ${typeof value}`);

//Q3
function showUserInfo(firstName, lastName, age) {
    console.log(`Name: ${firstName} ${lastName}, Age: ${age}`);
}

//Q4
function doAddition(a, b, c) {
    console.log(b);
    return a + b + c;
}


showUserInfo('Otoi', 'Ebba', 10);
console.log(doAddition(2, 3, 4)); //Adds correctly
console.log(doAddition(2)); //Does not have 3 parameters, so its adding undefined for the last two parameters
console.log(doAddition(2.3, 3)); //This function does not add float variables
console.log(doAddition("first", 2, "three")); //Concatenates the strings to the number

//Q5
//Object
var person = {
    firstName: "Otoi",
    lastName: "Ebba",
    age: 28,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

//Prototype
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.fullName = function () {
    return this.firstName + " " + this.lastName;
};

var person1 = new Person("Otoi", "Ebba");
console.log(person1.fullName());

//Closure
function outerFunction() {
    var outer = 'Hello';

    function innerFunction() {
        console.log(outer);
    }

    return innerFunction;
}

var closure = outerFunction();
closure();

//Hoisting
console.log(x);
var x = 5;

//Optional
//The output of the function is a list of elements that are undefined because setTimeout is
// asynchronous, therefore it is printing the elements before the callback is executed
