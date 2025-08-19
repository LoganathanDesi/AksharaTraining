let myMap=new Map();
myMap.set('apple',3);
myMap.set('mango',5);
myMap.set('orange',7);

let allKeys=myMap.keys();
console.log(allKeys);

for(let key of allKeys)
{
    console.log(key);
}