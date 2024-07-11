"use strict";
const func = (n, m, l) => {
    if (typeof l === "undefined")
        return n * m;
    return n * m * l;
};
func(25, 23);
const func2 = (n, m, l = 20) => {
    if (typeof l === "undefined")
        return n * m;
    return n * m * l;
};
func2(25, 23);
const func3 = (...m) => {
    return m;
};
func3(25, 23, 52, 5, 22, 115);
