"use strict";
//! Type Assertion
const btn = document.getElementById("btn");
// OR
//* const btn = <HTMLElement>document.getElementById("btn");
// OR
// const btn = document.getElementById(#btn")!;
// btn.onclick;
//! Another Example:-
const img = document.getElementById("myImg");
// img.src;
//! Another Example:-
const form = document.getElementById("myForm");
const myInput = document.querySelector("form > input");
form.onsubmit = (e) => {
    e.preventDefault();
    const value = Number(myInput.value);
    console.log(value);
    console.log(typeof value);
    const h2 = document.createElement("h2");
    h2.textContent = String(value + 20);
    const body = document.querySelector("body");
    body.appendChild(h2); // Optional Chaining
};
const myObj = {
    name: "Mohit",
    email: "ms7085422@gmail.com",
};
const getName = () => {
    // return myObj.name
    return myObj["name"];
};
const getEmail = () => {
    // return myObj.email
    return myObj["email"];
};
// const getData2 = (key: "name" | "email"): string => {
const getData2 = (key) => {
    return myObj[key];
};
getData2("name");
// console.log(myObj.name);
