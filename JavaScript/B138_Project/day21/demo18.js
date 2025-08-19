let arr1=['ravi','akash','abhi','pavi','asha'];
let arr2=[];
//add only name start with a to arr2;
for(let name of arr1)
{
    if(name.startsWith('a')){
        arr2.push(name);
    }
}

console.log(arr2);

arr2=arr1.filter(name=>name.startsWith('a'));
console.log(arr2);