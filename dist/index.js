"use strict";
//* To rectify the problem we use typescript datatypes:-
//! Number:-
let a = 10;
let b = 20;
let c = 30;
let sum = a + b + c;
console.log(sum);
//! String:-
let firstName = 'John';
let lastName = 'Doe';
let fullName = firstName + ' ' + lastName;
console.log(fullName);
//! Boolean:-
let isStudent = true;
let isEmployed = false;
console.log(isStudent);
console.log(isEmployed);
//! Array:-
let numbers = [1, 2, 3, 4, 5];
let strings = ['apple', 'banana', 'cherry'];
console.log(numbers);
console.log(strings);
//! Tuple:-
let student = ['John Doe', 20, true];
console.log(student);
//! Enum:-
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
console.log(Color.Red);
console.log(Color[Color.Red]);
//! Any:-
let anyValue = 10;
anyValue = 'hello';
anyValue = true;
console.log(anyValue);
//! Void:-
function sayHello() {
    console.log('Hello!');
}
sayHello();
//! Null and Undefined:-
let nullValue = null;
let undefinedValue = undefined;
console.log(nullValue);
console.log(undefinedValue);
//! Union Type:-
let mixed = 'hello';
mixed = 10;
console.log(mixed);
//! Object:-
let person = { name: 'John Doe', age: 25 };
console.log(person);
//! Function with parameters:-
function sumNumbers(...numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
}
console.log(sumNumbers(1, 2, 3, 4, 5));
//! Literal:-
let personObject = { name: 'John Doe', age: 25 };
console.log(personObject.name);
console.log(personObject.age);
let personLiteral = { name: 'John Doe', age: 25 };
console.log(personLiteral.name);
console.log(personLiteral.age);
//! Function with optional parameters:-
function greet(name, age) {
    if (name && age) {
        console.log(`Hello, ${name}! You are ${age} years old.`);
    }
    else if (name) {
        console.log(`Hello, ${name}!`);
    }
    else if (age) {
        console.log(`You are ${age} years old.`);
    }
    else {
        console.log('Hello!');
    }
}
greet('John Doe', 25);
greet('Jane');
greet(undefined, 30);
greet();
//! Function with default parameters:-
function greetDefault(name = 'Guest', age = 0) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
}
greetDefault('John Doe', 25);
greetDefault('Jane');
greetDefault(undefined, 30);
greetDefault();
//! Function with rest parameters:-
function greetRest(...names) {
    console.log('Hello,', names.join(' '));
}
greetRest('John Doe', 'Jane', 'Mike');
greetRest('Alice');
greetRest();
let john = { name: 'John Doe', age: 25, city: "MATHURA" };
console.log(john);
//! Class:-
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
let cat = new Animal('Tom', 5);
cat.greet();
//! Access Modifiers:-
class AnimalAccess {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
    getAge() {
        return this.age;
    }
}
let dog = new AnimalAccess('Buddy', 7);
dog.greet();
console.log(dog.getAge());
//? dog.age = 8; // This will not compile 
//! Encapsulation:-
class AnimalEncapsulation {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value >= 0) {
            this._age = value;
        }
        else {
            throw new Error('Age must be a non-negative number.');
        }
    }
    greet() {
        console.log(`Hello, my name is ${this._name} and I am ${this._age} years old.`);
    }
}
let catEncapsulation = new AnimalEncapsulation('Tom', 5);
catEncapsulation.greet();
catEncapsulation.name = 'Buddy';
console.log(catEncapsulation.name);
catEncapsulation.age = 8;
console.log(catEncapsulation.age);
//? catEncapsulation.age = -8; // This will throw an error because the age must be a non-negative number.
//! Abstraction:-
class AnimalAbstract {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Cat extends AnimalAbstract {
    constructor(name, age) {
        super(name, age);
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I am a cat.`);
    }
    getAge() {
        return this.age;
    }
    setAge(value) {
        this.age = value;
    }
}
let catAbstract = new Cat('Tom', 5);
catAbstract.greet();
//! Inheritance:-
class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I am a ${this.breed}.`);
    }
}
let poodle = new Dog('Rex', 5, 'Poodle');
poodle.greet();
//! Polymorphism:-
class AnimalSound {
    makeSound() {
        console.log('Animal makes a sound.');
    }
}
class CatSound extends AnimalSound {
    makeSound() {
        console.log('Meow!');
    }
    playWithToy() {
        console.log('Playing with toy.');
    }
    playWithFood() {
        console.log('Playing with food.');
    }
    sleep() {
        console.log('Zzz...');
    }
}
let catSound = new CatSound();
catSound.makeSound();
catSound.playWithToy();
catSound.playWithFood();
catSound.sleep();
//! Generics:-
function createArray(length, value) {
    let result = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
let number = createArray(5, 10);
let string = createArray(3, 'Hello');
console.log(number);
console.log(string);
let personType = { name: 'John Doe', age: 25 };
console.log(personType);
//! Type Assertions:-
let someValue = 'Hello, World!';
let strLength = someValue.length;
console.log(strLength);
//! Union Types:-
function greetUnion(name) {
    if (typeof name === 'string') {
        console.log(`Hello, my name is ${name}`);
    }
    else {
        console.log(`Hello, I am ${name} years old.`);
    }
}
greetUnion('John Doe');
greetUnion(25);
