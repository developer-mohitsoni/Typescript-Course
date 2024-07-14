"use strict";
//! Partial<Type>
// Above properties of optional bna dega
const user4 = {
    name: "mohit",
    email: "mohit@example.com",
};
// All properties ko required kar dega
const user5 = {
    name: "mohit",
    email: "mohit@example.com",
};
// All properties ko readonly kar dega mtlb values of update nai kar skte
const user6 = {
    name: "mohit",
    email: "ms785422@gmail.com",
};
const users = {
    john: { age: 30 },
    andrew: { age: 28 },
    elon: { age: 46 },
    jack: { age: 35 },
};
//! ConstructorParameters<Type>
class SampleClass {
    constructor(s, t) {
        this.s = s;
        this.t = t;
    }
}
//! InstanceType<Type>
const myFunc = (a, b) => {
    return a + b;
};
