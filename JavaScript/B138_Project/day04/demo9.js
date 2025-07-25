let a = 10;
let b = 20;
//a = a+b;
a += b; // a = a + b
console.log(a); // 30

let m = 10;
let n = 30;
m =+ n; //here I am just assigning n to m (so row 4 and 9 are different - pls pay attention)
console.log(m); // 30


// a = a + b; can be written as a+= b;
// a = b + a; can be written as a+= b;
// a = a * b; can be written as a*= b;
// a = b * a; can be written as a*= b;

// a = a - b; can be written as a-= b;
// a = b - a; can NOT be written as a-= b; because a - b is not the same as b - a

// a = a / b; can be written as a/= b;
// a = b / a; can NOT be written as a/= b; because a / b is not the same as b / a

// a = a % b; can be written as a%= b;
// a = b % a; can NOT be written as a%= b; because a % b is not the same as b % a