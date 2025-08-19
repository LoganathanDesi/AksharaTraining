let a=[10];
let n=-1;
let p=-1;
console.log('Start');
try
{
    a.length=n;//risky code
    console.log('No Error');
}
catch(err)
{
    a.length=p;
    console.log('Error Handled');//recovery code
}
finally
{
     console.log('always');//clean up code
}
console.log('End');