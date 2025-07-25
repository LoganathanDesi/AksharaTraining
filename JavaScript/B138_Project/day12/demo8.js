function add(a,b)
{
    console.log(a+b);
}

add(10,20);

//we can assign function to a variable , the variable also becomes


let plus=add;

plus(10,20);

console.log(typeof add);
console.log(typeof plus);