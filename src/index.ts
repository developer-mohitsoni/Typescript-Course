//* To rectify the problem we use typescript datatypes:-

//! Number:-
let a: number = 10;
let b: number = 20;
let c: number = 30;

let sum = a + b + c;
console.log(sum);

//! String:-

let firstName: string = 'John';
let lastName: string = 'Doe';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

//! Boolean:-

let isStudent: boolean = true;
let isEmployed: boolean = false;

console.log(isStudent);
console.log(isEmployed);

//! Array:-

let numbers: number[] = [1, 2, 3, 4, 5];
let strings: string[] = ['apple', 'banana', 'cherry'];

console.log(numbers);
console.log(strings);

//! Tuple:-

let student: [string, number, boolean] = ['John Doe', 20, true];

console.log(student);

//! Enum:-

enum Color {
  Red,
  Green,
  Blue,
}

console.log(Color.Red);

console.log(Color[Color.Red]);

//! Any:-

let anyValue: any = 10;
anyValue = 'hello';
anyValue = true;

console.log(anyValue);

//! Void:-

function sayHello(): void {
  console.log('Hello!');
}

sayHello();

//! Null and Undefined:-

let nullValue: null = null;
let undefinedValue: undefined = undefined;

console.log(nullValue);
console.log(undefinedValue);

//! Union Type:-

let mixed: (string | number) = 'hello';
mixed = 10;

console.log(mixed);

//! Object:-

let person: { name: string; age: number } = { name: 'John Doe', age: 25 };

console.log(person);

//! Function with parameters:-

function sumNumbers(...numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}

console.log(sumNumbers(1, 2, 3, 4, 5));

//! Literal:-

let personObject: { name: string; age: number } = { name: 'John Doe', age: 25 };

console.log(personObject.name);
console.log(personObject.age);

let personLiteral: { name: 'John Doe', age: 25 } = { name: 'John Doe', age: 25 };

console.log(personLiteral.name);

console.log(personLiteral.age);

//! Function with optional parameters:-

function greet(name?: string, age?: number): void {
  if (name && age) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
  } else if (name) {
    console.log(`Hello, ${name}!`);
  } else if (age) {
    console.log(`You are ${age} years old.`);
  } else {
    console.log('Hello!');
  }
}

greet('John Doe', 25);

greet('Jane');

greet(undefined, 30);

greet();

//! Function with default parameters:-

function greetDefault(name: string = 'Guest', age: number = 0): void {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}

greetDefault('John Doe', 25);

greetDefault('Jane');

greetDefault(undefined, 30);

greetDefault();

//! Function with rest parameters:-

function greetRest(...names: string[]): void {
  console.log('Hello,', names.join(' '));
}

greetRest('John Doe', 'Jane', 'Mike');

greetRest('Alice');

greetRest();

//! Interface:-

interface Person {
  name: string;
  age: number;
  city: string
}

let john: Person = { name: 'John Doe', age: 25, city: "MATHURA" };

console.log(john);

//! Class:-

class Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

let cat: Animal = new Animal('Tom', 5);

cat.greet();

//! Access Modifiers:-

class AnimalAccess {
  public name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public greet(): void {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }

  public getAge(): number {
    return this.age;
  }
}

let dog: AnimalAccess = new AnimalAccess('Buddy', 7);

dog.greet();

console.log(dog.getAge());

//? dog.age = 8; // This will not compile 

//! Encapsulation:-

class AnimalEncapsulation {
    private _name: string;
    private _age: number;
    
    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }
    
    public get name(): string {
        return this._name;
    }
    
    public set name(value: string) {
        this._name = value;
    }
    
    public get age(): number {
        return this._age;
    }
    
    public set age(value: number) {
        if (value >= 0) {
            this._age = value;
        } else {
            throw new Error('Age must be a non-negative number.');
        }
    }
    
    public greet(): void {
        console.log(`Hello, my name is ${this._name} and I am ${this._age} years old.`);
    }
}

let catEncapsulation: AnimalEncapsulation = new AnimalEncapsulation('Tom', 5);

catEncapsulation.greet();

catEncapsulation.name = 'Buddy';

console.log(catEncapsulation.name);

catEncapsulation.age = 8;

console.log(catEncapsulation.age);

//? catEncapsulation.age = -8; // This will throw an error because the age must be a non-negative number.

//! Abstraction:-

abstract class AnimalAbstract {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  abstract greet(): void;
}

class Cat extends AnimalAbstract {
    constructor(name: string, age: number) {
    super(name, age);
  }
  
  greet(): void {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I am a cat.`);
  }
  
  getAge(): number {
    return this.age;
  }
  
  setAge(value: number): void {
    this.age = value;
  } 
}

let catAbstract: AnimalAbstract = new Cat('Tom', 5,);

catAbstract.greet();


//! Inheritance:-

class Dog extends Animal {
  breed: string;

  constructor(name: string, age: number, breed: string) {
    super(name, age);
    this.breed = breed;
  }

  greet(): void {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I am a ${this.breed}.`);
  }
}

let poodle: Dog = new Dog('Rex', 5, 'Poodle');

poodle.greet();

//! Polymorphism:-

class AnimalSound {
  makeSound(): void {
    console.log('Animal makes a sound.');
  }
}

class CatSound extends AnimalSound {
  makeSound(): void {
    console.log('Meow!');
  }
  
  playWithToy(): void {
    console.log('Playing with toy.');
  }
  
  playWithFood(): void {
    console.log('Playing with food.');
  }
  
  sleep(): void {
    console.log('Zzz...');
  }
}

let catSound: AnimalSound = new CatSound();

catSound.makeSound();

(catSound as CatSound).playWithToy();
(catSound as CatSound).playWithFood();

(catSound as CatSound).sleep();

//! Generics:-

function createArray<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

let number: number[] = createArray(5, 10);

let string: string[] = createArray(3, 'Hello');

console.log(number);

console.log(string);

//! Type Aliases:-

type PersonType = {
  name: string;
  age: number;
};

let personType: PersonType = { name: 'John Doe', age: 25 };

console.log(personType);

//! Type Assertions:-

let someValue: any = 'Hello, World!';

let strLength: number = (someValue as string).length;

console.log(strLength);

//! Union Types:-

function greetUnion(name: string | number): void {
  if (typeof name ==='string') {
    console.log(`Hello, my name is ${name}`);
  } else {
    console.log(`Hello, I am ${name} years old.`);
  }
}

greetUnion('John Doe');

greetUnion(25);

