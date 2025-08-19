let myMap=new Map();
myMap.set('apple',3);
myMap.set('mango',5);
myMap.set('orange',7);

let allValues=myMap.values();
console.log(allValues);

for(let value of allValues)
{
    console.log(value);
}