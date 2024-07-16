//! Generics in Typescript

const func4 = (n: number): number => {
  return n;
};

const ans = func4(20);

// Abb is above function ko hum kisis mai bhi bna denge jo ki kisi mai bhi dal jaayega easily using Generics.

// Above function with the help of Generics:-

// const func5 = <CustomType>(n: CustomType): CustomType => {
//   let text: CustomType;

//   return n;
// };

// above function ko hum kuch alag tarikhe se bhi likk sakte hai

const func5 = <T>(n: T): T => {
  let text: T;

  return n;
};

const ans2 = func5(20);
const ans3 = func5("20");
const ans4 = func5(true);

// Actually mai jo ye above function hai parameter ke according dal jaayeag jo humne parameter mai paas kar rahe hai

// func5(20)

// so above function like
/*
const func5 = <number>(n: number): number =>{
    let text: number;

    return n;
}
*/

// func("20")
/*
const func5 = <string>(n: string): string =>{
    let text: string;
    return n;
}
*/

//! Another Example

type Person4 = {
  name: string;
  age: number;
};

const func6 = <T>(n: T): T => {
  return n;
};

const mohit: Person4 = {
  name: "Mohit",
  age: 22,
};

// const ans5 = func6(mohit)

// Isse ye clearity hogi ki hum argument kiss type ka paas kar rahe hai
const ans5 = func6<Person4>(mohit);

//! Generics in Array

const arr3: number[] = [];
const arr4: Array<number> = []; // Generics Syntax in Array

//! Another Example of Generics

const func7 = <T, U>(n: T, o: U): { n: T; o: U } => {
  return { n, o };
};

const ans6 = func7<number, string>(20, "LOL");

//! Another example of Generics using extends keyword

type Person5 = {
  name: string;
  age: number;
};
type Person6 = {
  name: string;
  age: number;
  email: string;
};

const user2: Person5 = {
  name: "mohi",
  age: 22,
};

const user3: Person6 = {
  name: "mohi",
  age: 23,
  email: "dedsdsdsd@gmail.com",
};

const func8 = <T, U extends T>(n: T, o: U): { n: T; o: U } => {
  return { n, o };
};

const ans7 = func8<Person5, Person6>(user2, user3);

//! Another most important example of Generics:-

type Person7 = {
    name: string,
    age: number
}

const users2: Person7[] = [
  {
    name: "mohit",
    age: 22,
  },
  {
    name: "Nahar",
    age: 26,
  },
  {
    name: "Levi",
    age: 52,
  },
  {
    name: "Random",
    age: 2,
  },
];

/*
const filteredByPeoples = (arr: [], property: any, value: any) =>{
    arr.filter(item =>item[property] === value)
};
*/
// Convert above function into Generics:

const filteredByPeoples = <T, Key extends keyof T>(arr: T[], property: Key, value: T[Key]): T[] =>{
    return arr.filter(item =>item[property] === value)
};


const filteredPeopleByName = filteredByPeoples(users2, "name", "Nahar")
const filteredPeopleByAge = filteredByPeoples(users2, "age", 22)

console.log(filteredPeopleByName);
console.log(filteredPeopleByAge);
