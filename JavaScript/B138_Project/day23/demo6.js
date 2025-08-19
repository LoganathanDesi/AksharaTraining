let a=[10,20,30,10,10];
let s=new Set(a);
let b=Array.from(s);
console.log(b);

let c=[...s];
console.log(c);