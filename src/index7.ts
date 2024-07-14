//! Classes in Typescript:-

class Player {
  private height;
  weight;

  constructor(height: number, weight: number) {
    this.height = height;
    this.weight = weight;
  }
  myHeight = () => {
    return this.height;
  };
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
  readonly id: string;
  constructor(
    private height: number,
    public weight: number,
    protected power?: number /**? means optional */
  ) {
    this.id = String(Math.random() * 100);
  }

  getMyHeight = () => this.height;
}

//! Inheritance
class Player4 extends Player3 {
  public special: boolean;

  constructor(height: number, weight: number, power: number, special: boolean) {
    super(height, weight, power);
    this.special = special;
  }

  getMyPower = () => {
    this.power = this.power;
  };
}

const gta = new Player4(100, 50, 23, true);
console.log("Weight", gta.weight);
console.log("Height", gta.getMyHeight());
console.log("Power", gta.getMyPower());
console.log("Id", gta.id);

//! Another example:-

class Player5 {
  readonly id: string;
  constructor(
    private height: number,
    public weight: number,
    protected power?: number /**? means optional */
  ) {
    this.id = String(Math.random() * 100);
  }

  get getMyHeight(): number {
    return this.height;
  }

  set changeHeigth(val: number) {
    this.height = val;
  }
}
const gta5 = new Player5(100, 50, 23);
console.log("Height", gta5.getMyHeight);
gta5.changeHeigth = 500;
console.log("Height", gta5.getMyHeight);

//! Another Example:-

interface ProductType {
  name: string;
  price: number;
  stock: number;
  getId: () => string;
  offer?: boolean;
}

class Product2 implements ProductType {
  private id2: string = String(Math.random() * 1000);

  constructor(
    public name: string,
    public price: number,
    public stock: number
  ) {}

  getId = () => this.id2;
}

const product1 = new Product2("Macbook", 2000, 20);
