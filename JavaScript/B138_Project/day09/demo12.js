let my_set = new Set(['Mango','Apple','Banana','Apple']); //doesn't allow duplicates

console.log(my_set);
console.log('------');
for (let element of my_set){
    console.log(element);
}

console.log('------');
//Do not use for in for set --> as it doesn't have any index
for (let index in my_set){
    console.log(index);
}
