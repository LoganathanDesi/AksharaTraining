let animals=['cow','cat','dog','tiger','lion'];
console.log(animals);//['cow','cat','dog','tiger','lion']

animals.splice(2,0);//at index 2 delete 0 elements
console.log(animals);

animals.splice(2,0,'fox','elephant'); // at index 0 add two elements - fox and elephant
console.log(animals);