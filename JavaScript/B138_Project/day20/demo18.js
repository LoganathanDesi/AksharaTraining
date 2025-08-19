let animals=['cow','cat','dog','tiger','lion'];
console.log(animals);//['cow','cat','dog','tiger','lion']

animals.pop();//delete last element
console.log(animals);//['cow','cat','dog','tiger']

animals.shift();//delete 1st element
console.log(animals);//['cat','dog','tiger']

animals.splice(1,1);//delete from given index
console.log(animals);//['cat','tiger']
