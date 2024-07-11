//! One more important feature of type :-

type themeMode = "light" | "dark";

const errorHandler3 = (): never =>{
    throw new Error();
}

const mode:themeMode = "dark"