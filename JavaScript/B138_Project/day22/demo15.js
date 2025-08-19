let myMap=new Map();
myMap.set('apple',3);
myMap.set('mango',5);
myMap.set('orange',7);

//check key is present in map or not
console.log(myMap.has('apple'));//true

console.log(myMap.has('banana'));//false

console.log(myMap);
myMap.delete('apple');
console.log(myMap);

myMap.delete('apple');
console.log(myMap);