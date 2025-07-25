function add(a,b)
{
    return a+b;
}

let res=add(10,20);
console.log(res);

//-----------we can return value from arrow function---------------------
let plus=(a,b)=>{return a+b};
let sum=plus(10,20);
console.log(sum);