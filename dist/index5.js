"use strict";
//! Never Type:-
const errorHandler = () => {
    // NOTE:- throw karte waqkt ye "never" return karta hai
    throw new Error();
};
const errorHandler2 = () => {
    // NOTE:- return karte waqkt ye "error" return karta hai
    return new Error();
};