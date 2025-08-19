let arr1=['ravi','','abhi','pavi',''];
let arr2=[];
//arr2 without empty names
for(let name of arr1){
    if(name.length>0){
        arr2.push(name);
    }
}
console.log(arr2);

arr2=arr1.filter(n=>n.length>0);
console.log(arr2);