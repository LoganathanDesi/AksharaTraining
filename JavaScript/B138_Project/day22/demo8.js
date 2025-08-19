let a=[10,2,13,45,1];
//find the smallest number in array
let small=a[0];
for(let n of a)
{
    if(n<small){
        small=n;
    }
}

console.log(small);

//--------------------------------------------
small=a.reduce((f,s)=>{
    if(f<s)
    {
        return f;
    }
    else{
        return s;
    }
})

console.log(small);
//---------------------------------------------------
small=a.reduce((f,s)=>f<s?f:s);
console.log(small);