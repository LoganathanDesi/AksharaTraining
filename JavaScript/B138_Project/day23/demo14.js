console.log('Start1');
let a=10;
try
{
        console.log(a);//risky code
}
catch
{
    console.log('some error');//recovery code
}
console.log('End1');

console.log('Start2');

try
{
        console.log(b);//risky code
}
catch
{
    console.log('some error');//recovery code
}
console.log('End2');