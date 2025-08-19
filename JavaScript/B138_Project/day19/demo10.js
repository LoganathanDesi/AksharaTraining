let msg="rain rain Go away";
console.log(msg.indexOf('sun'));//-1 - not present
console.log(msg.indexOf('rain'));//1st position
console.log(msg.indexOf('go'));
console.log(msg.toLowerCase().indexOf('go'));

console.log(msg.indexOf('rain',1));