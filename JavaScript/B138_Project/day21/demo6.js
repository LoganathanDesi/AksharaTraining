let fruits=['grapes','apple','orange'];
console.log(fruits);

for(let f of fruits){
    console.log(f);
}

for(let i in fruits){
    console.log(i,fruits[i]);
}

function print(v,i,a)
{
    console.log(v,i,a);
}
//forEach is callback function , it takes another function as argument and calls it
fruits.forEach(print);

fruits.forEach((v,i,a)=>{console.log(v,i,a);});

fruits.forEach((v)=>{console.log(v);});