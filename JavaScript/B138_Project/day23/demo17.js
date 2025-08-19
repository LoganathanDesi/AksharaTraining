let a=[10];
let n=-1;

console.log(a);
try
{
    a.length=n;
}
catch(err)
{

    if(err instanceof RangeError){
        console.log('Length cant be -ve value');
    }
    else if(err instanceof ReferenceError)
    {
         console.log('Please define the n');
    }
}
console.log(a);