let n="ab";
let s=n.padStart(3,'*');//make total length of the string as 3
console.log(s);

s=n.padStart(5,'*');//make total length of the string as 5 char by filling * req number times
console.log(s);

s=n.padEnd(5,'-');
console.log(s);

let msg="My Name is";
n="bhanu prakash";
console.log(msg);
console.log(n.padStart(n.length+3," "));