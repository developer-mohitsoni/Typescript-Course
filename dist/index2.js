"use strict";
const arr = [234.4, 343, 34];
const arr2 = ["Mohit", "Soni", "memohitsoni"];
arr2.forEach((i) => {
    i.toLocaleLowerCase();
    console.log(i);
});
//! Tuple:-
const tuple = [10, "hello"];
console.log(tuple[0]); // Output: 10
console.log(tuple[1]); // Output: hello
const obj = {
    gender: "Male",
    height: 180,
    weight: 70,
};
console.log(obj.height); // Output: 180
const obj2 = {
    gender: "Female",
    height: 165,
    weight: 60,
};
console.log(obj2.weight); // Output: 60
const obj3 = {
    height: 170,
    weight: 75,
};
console.log(obj3.gender); // Output: undefined
const user = {
    name: "John Doe",
    age: 30,
    gender: "Male",
};
console.log(user.name); // Output: John Doe
const newUser = {
    name: "John Doe",
    age: 30,
    gender: "Male",
    scolar: true
    // func: ()=> console.log("Hello World")  // optional function, it's not required to implement in class
};
console.log(newUser.scolar); // Output: true
