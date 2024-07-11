// Parameters with Optional Value
type FuncType2 = (n: number, m: number, l?: number) => number;

const func: FuncType2 = (n, m, l) => {
  if (typeof l === "undefined") return n * m;

  return n * m * l;
};

func(25, 23);



//! Parameters with Default Value
type FuncType3 = (n: number, m: number, l?: number) => number;

const func2: FuncType3 = (n, m, l = 20) => {
  if (typeof l === "undefined") return n * m;

  return n * m * l;
};

func2(25, 23);



//! Rest Operator
type FuncType4 = (...m:number[]) => number[];

const func3: FuncType4 = (...m) => {
  return m;
};

func3(25, 23, 52, 5, 22, 115);
