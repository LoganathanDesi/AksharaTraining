//create arr2 from arr1 where arr2 contains double the value of arr1
let arr1=[1,2,3];
let arr2=[];
for(let e of arr1){
    arr2.push(e+e);
}

console.log(arr2);
//---------------------------
arr2=[];
function double(n){
    return n+n;
}
arr2=arr1.map(double);
console.log(arr2);
//---------------------------
arr2=arr1.map(n=>n+n);
console.log(arr2);