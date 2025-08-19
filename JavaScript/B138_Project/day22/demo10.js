//find the sum of +ve numbers
// let a=[1,-2,3,4,-1];
// let sum=0;
// for(let n of a)
// {
//     if(n>0)
//     {
//         sum+=n;
//     }
// }
// console.log(sum);
//filter map reduce

// let a=[1,-2,3,4,-1];
// let p=a.filter(n=>n>0);
// let sum=p.reduce((f,s)=>f+s);
// console.log(sum);
let a=[1,-2,3,4,-1];
let sum=a.filter(n=>n>0).reduce((f,s)=>f+s);
console.log(sum);
