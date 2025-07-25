let a;
console.log(typeof a); // undefined

let b=100;
console.log(typeof b); // number

b=null;
console.log(typeof b); // object (this is a known JavaScript quirk)

let c = Symbol('id');
console.log(c);
console.log(typeof c); // symbol