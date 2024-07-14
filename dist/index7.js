"use strict";
//! Classes in Typescript:-
class Player {
    constructor(height, weight) {
        this.myHeight = () => {
            return this.height;
        };
        this.height = height;
        this.weight = weight;
    }
}
// You can als done above as:-
/*
class Player2 {

  constructor(private height: number, public weight: number) {}
}
*/
const obj4 = new Player(100, 150);
console.log(obj4.weight);
//! Another example:-
class Player3 {
    constructor(height, weight, power /**? means optional */) {
        this.height = height;
        this.weight = weight;
        this.power = power;
        this.getMyHeight = () => this.height;
        this.id = String(Math.random() * 100);
    }
}
//! Inheritance
class Player4 extends Player3 {
    constructor(height, weight, power, special) {
        super(height, weight, power);
        this.getMyPower = () => {
            this.power = this.power;
        };
        this.special = special;
    }
}
const gta = new Player4(100, 50, 23, true);
console.log("Weight", gta.weight);
console.log("Height", gta.getMyHeight());
console.log("Power", gta.getMyPower());
console.log("Id", gta.id);
//! Another example:-
class Player5 {
    constructor(height, weight, power /**? means optional */) {
        this.height = height;
        this.weight = weight;
        this.power = power;
        this.id = String(Math.random() * 100);
    }
    get getMyHeight() {
        return this.height;
    }
    set changeHeigth(val) {
        this.height = val;
    }
}
const gta5 = new Player5(100, 50, 23);
console.log("Height", gta5.getMyHeight);
gta5.changeHeigth = 500;
console.log("Height", gta5.getMyHeight);
class Product2 {
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.id2 = String(Math.random() * 1000);
        this.getId = () => this.id2;
    }
}
const product1 = new Product2("Macbook", 2000, 20);
