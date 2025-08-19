//array destructuring
let numbers=[10,20,30];
let a=numbers[0];
let b=numbers[1];
let c=numbers[2];
console.log(a,b,c);

let [x,y,z]=numbers;
console.log(x,y,z);


let [p,,r]=numbers;
console.log(p,r);