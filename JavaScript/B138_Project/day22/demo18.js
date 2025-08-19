let myMap=new Map();
myMap.set('apple',3);
myMap.set('mango',5);
myMap.set('orange',7);
myMap.set('apple',4); //key cant be duplicate, it overwrites it
console.log(myMap);

let allKV=myMap.entries();
console.log(allKV);
for(let kv of allKV){
    console.log(kv);
}


for(let [k,v] of myMap.entries()){
    console.log(k,v);
}
