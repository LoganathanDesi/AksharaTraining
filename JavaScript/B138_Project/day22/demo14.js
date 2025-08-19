let myMap=new Map();
console.log(typeof myMap,myMap instanceof Map);
console.log(myMap);
console.log(myMap.size);
myMap.set('apple',3);
myMap.set('mango',5);
myMap.set('orange',7);
console.log(myMap);
console.log(myMap.size);

console.log(myMap.get('orange'));
console.log(myMap.get('grapes'));