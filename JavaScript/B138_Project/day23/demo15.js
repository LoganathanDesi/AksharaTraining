
console.log('Start');

try
{       console.log('hi');
        console.log(b);//risky code
        console.log('bye');
}
catch(err)
{
    console.log(err.name);
    console.log(err.message);
}
console.log('End');