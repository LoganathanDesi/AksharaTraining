let a=[10,20,30,40,50,60,70,80];
//read and print array element from first to last
for(let i=0;i<a.length;i++)
{
    console.log(a[i]);
}
//read and print array element from last to first
console.log('----');
for(let i=6;i>=0;i--)
{
    console.log(a[i]);
}
console.log('----');
for(let i=a.length-1;i>=0;i--)
{
    console.log(a[i]);
}

//read and print all alternative array elements  (skip the array element)
console.log('----');
for(let i=0;i<a.length;i=i+2)
{
    console.log(a[i]);
}