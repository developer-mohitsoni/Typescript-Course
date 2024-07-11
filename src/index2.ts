const arr: number[] = [234.4, 343, 34];

const arr2: Array<string> = ["Mohit", "Soni", "memohitsoni"];

arr2.forEach((i) => {
  i.toLocaleLowerCase();

  console.log(i);
});

//! Tuple:-

const tuple: [number, string] = [10, "hello"];

console.log(tuple[0]); // Output: 10

console.log(tuple[1]); // Output: hello

//! Object:-

type Obj = {
  height: number;
  weight: number;
  gender?: string; //* Now this become optional key-value object
};

const obj: Obj = {
  gender: "Male",
  height: 180,
  weight: 70,
};

console.log(obj.height); // Output: 180

const obj2: Obj = {
  gender: "Female",
  height: 165,
  weight: 60,
};

console.log(obj2.weight); // Output: 60

const obj3: Obj = {
  height: 170,
  weight: 75,
};

console.log(obj3.gender); // Output: undefined

//! Interface:-



interface User {
  name: string;
  age: number;
  gender: string;
}

const user: User = {
  name: "John Doe",
  age: 30,
  gender: "Male",
};

console.log(user.name); // Output: John Doe


//* NOTE:- While you declare object always used to prefer with interface because:- Interface provides extends functionality like class:-

type FuncType = (n: number, m: number) => void;

interface NewUser extends User{
    scolar: boolean,
    func?: FuncType  // optional function
}

const newUser: NewUser = {
    name: "John Doe",
    age: 30,
    gender: "Male",
    scolar: true
    // func: ()=> console.log("Hello World")  // optional function, it's not required to implement in class
}

console.log(newUser.scolar); // Output: true