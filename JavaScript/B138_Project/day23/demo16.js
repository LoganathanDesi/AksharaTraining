console.log('Start');
let num=10;
try
{
    console.log(num);
    num();
    
}
catch(err)
{
    if(err instanceof ReferenceError)
    {
        console.log("please declare a variable")
    }
    else if(err instanceof TypeError)
    {
         console.log("please declare a function")
    }
}
console.log('End');