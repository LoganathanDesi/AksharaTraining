//create new array with only +ve numbers from existing array
let numbers=[1,-3,8,2,-9,6,-1];
let a=[];
for(let n of numbers){
    if(n>0){
    a.push(n);
    }
}
console.log(a);

a=[];
numbers.forEach(n=>{
     if(n>0)
    {
        a.push(n);
    }
})
console.log(a);

// let b=numbers.filter(n=>true);
// console.log(b);
//for every element from array it will call the function
//if function returns true , add the element to new array
// if function returns fasle , it will not add 
let b=numbers.filter(n=>n>0);
console.log(b);