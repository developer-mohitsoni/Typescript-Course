//! Type Assertion

const btn = document.getElementById("btn") as HTMLElement;

// OR

//* const btn = <HTMLElement>document.getElementById("btn");

// OR

// const btn = document.getElementById(#btn")!;

// btn.onclick;

//! Another Example:-

const img = document.getElementById("myImg") as HTMLImageElement;
// img.src;

//! Another Example:-

const form = document.getElementById("myForm") as HTMLFormElement;

const myInput = document.querySelector("form > input") as HTMLInputElement;

form.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();
  const value = Number(myInput.value);
  console.log(value);
  console.log(typeof value);

  const h2 = document.createElement("h2");
  h2.textContent = String(value + 20);
  const body = document.querySelector("body")!;
  body.appendChild(h2); // Optional Chaining
};

//! Another Example:-

interface Person3 {
  //* Dynamic Key-Value pair include
  [key: string]: string;
}
const myObj: Person3 = {
  name: "Mohit",
  email: "ms7085422@gmail.com",
};

const getName = (): string => {
  // return myObj.name
  return myObj["name"];
};
const getEmail = (): string => {
  // return myObj.email
  return myObj["email"];
};
// const getData2 = (key: "name" | "email"): string => {
const getData2 = (key: keyof Person3): string => {
  return myObj[key];
};

getData2("name");
// console.log(myObj.name);
