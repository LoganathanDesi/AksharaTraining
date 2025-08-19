let msg="the quick brown fox jumps over the lazy dog and the dog does nothing";

console.log(msg.indexOf('the'));
console.log(msg.lastIndexOf('the'));

let first=msg.indexOf('the');
let second=msg.indexOf('the',first+1);
console.log(second);

let third=msg.indexOf('the',second+1);
console.log(third);