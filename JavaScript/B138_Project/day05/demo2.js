let i;
let j;

console.log('------------------');
i=10;
j=i++; //++ is on the right side, it is post increment after assignment

console.log(j); // Output: 10
console.log(i); // Output: 11

console.log('------------------');
i=10;
j=++i; //++ is on the left side, it is pre increment before assignment

console.log(j); // Output: 11
console.log(i); // Output: 11

console.log('------------------');

i=10;
j=i--; //-- is on the right side, it is post decrement after assignment

console.log(j); // Output: 10
console.log(i); // Output: 9

console.log('------------------');

i=10;
j=--i; //-- is on the left side, it is pre decrement before assignment

console.log(j); // Output: 9
console.log(i); // Output: 9    