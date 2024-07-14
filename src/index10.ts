//! Partial<Type>

type User2 = {
  name: string;
  email: string;
};

// Above properties of optional bna dega
const user4: Partial<User2> = {
  name: "mohit",
  email: "mohit@example.com",
};

//! Required<Type> - opposite partial

type User3 = {
  name?: string;
  email: string;
};

// All properties ko required kar dega
const user5: Required<User3> = {
  name: "mohit",
  email: "mohit@example.com",
};

//! Readonly<Type>

type User4 = {
  name: string;
  email: string;
};

// All properties ko readonly kar dega mtlb values of update nai kar skte

const user6: Readonly<User4> = {
  name: "mohit",
  email: "ms785422@gmail.com",
};

//! Record<Type>

type User5 = {
  name: string;
  email: string;
};

// User5 ko type of object banayega
type User6 = Record<"name" | "email" | "gender", string>;

//* Exmaple:-

interface UserInfo {
  age: number;
}

type UserName = "john" | "andrew" | "elon" | "jack";

const users: Record<UserName, UserInfo> = {
  john: { age: 30 },
  andrew: { age: 28 },
  elon: { age: 46 },
  jack: { age: 35 },
};

//! Pick<Type, Keys>

/*
interface OrderInfo {
  readonly id: string;
  user: string;
  city: string;
  state: string;
  country: string;
  status: string;
}

type ShippingInfo = Pick<OrderInfo, "city" | "state" | "country">;
*/

//! Omit<Type, Keys>

interface ShippingInfo {
  city: string;
  state: string;
  country: string;
}

type Random = Omit<ShippingInfo, "country">



//! Exclude<Type, ExcludedUnion>
type MyUnion = string | number | boolean
type Random2 = Exclude<MyUnion, number>


//! Extract<Type,Union>

type MyUnion2 = string | number | boolean
type Random3 = Extract<MyUnion2, string>


//! NonNullable<Type>

type MyUnion3 = string | null | undefined

// null, undefined ko uda dega ye or remaining ko le lega
type Random4 = NonNullable<MyUnion3>


//! Parameters<Type>

type MyFunction = (a: string, b: number) => void;

type MyFunctionParams = Parameters<MyFunction>; // [string, number]

//! ReturnType<Type>

type MyFunction2 = () => string;

type MyFunctionReturnType = ReturnType<MyFunction2>; // string

//! ConstructorParameters<Type>

class SampleClass {
  constructor(public s: string, public t: string) {}
}

type RandomParams = ConstructorParameters<typeof SampleClass>; // [string]

//! InstanceType<Type>

const myFunc = (a: number, b:string): string =>{
    return a+b;
    
}
type FuncType5 = ReturnType<typeof myFunc> 
