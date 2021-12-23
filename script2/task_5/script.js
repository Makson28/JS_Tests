'use srtict';
const negate = (x) => -x;
const halve = (x) =>  x / 2;
const square = (x) => x * x;
const double = (x) =>  2 * x;

const comp = (g, f) => x => g(f(x));
const identity = (x) => x;

const combineFunctions = (...all) => all.reduce(comp, identity)

const res = combineFunctions(negate, halve, square);
console.log(res(5));