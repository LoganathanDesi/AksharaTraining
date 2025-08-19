let a=[1,2,3];
let b=a.reduce((p,c)=>{
    console.log(p,c);
    return 0;
});

console.log(b);