let s=new Set();
s.add(10);
s.add(20);
s.add(-2);
s.add(10);

for(let v of s.values())
{
    console.log(v);
}

for(let v of s)
{
    console.log(v);
}

//let a = new Set();
let b = [1,1,2,3,4];
let a = new Set(b);


console.log(a);
