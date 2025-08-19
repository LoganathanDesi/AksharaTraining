//remove the duplicate 
let a=[10,20,30,10,10];
let s=new Set();
for(let v of a){
    s.add(v);
}
console.log(a);
console.log(s);

a=[10,20,30,10,10];
s=new Set(a);
console.log(a);
console.log(s);
let b=[]
for(let i of s){
    b.push(i);
}
console.log(b);