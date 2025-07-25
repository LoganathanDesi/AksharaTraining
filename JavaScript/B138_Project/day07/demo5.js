
console.log('2'+'5'); //concatination
console.log(2+5);//add
console.log(2+'5');//concatination

let b=Number('5');
console.log(2+b);

let c=Number('five')
console.log(c);//NaN -->Not a Number

console.log(0/0);

if(NaN) //in js NaN is false
{
    console.log("condition is true1");
}
else
{
  console.log("condition is false1");
}

if(NaN==NaN) //in js one NaN is never same as other NaN
{
    console.log("condition is true2");
}
else
{
  console.log("condition is false2");
}

if(NaN===NaN) //in js one NaN is never same as other NaN
{
    console.log("condition is true3");
}
else
{
  console.log("condition is false3");
}