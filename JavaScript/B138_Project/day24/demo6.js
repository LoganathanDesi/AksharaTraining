//how to wait till the promise is completed
function deposit(amount)
{
    let p=new Promise((resolve,reject)=>{

    if(amount>0)
    {
       resolve(`Depositing the amount:${amount}`);
    }
    else
    {
        reject(`invalid amount:${amount}`);
    }

    });
    

    return p;
}

console.log('Start');
try
{
    let p=await deposit(0);
}
catch(err)
{
    console.log(err);
}
console.log('End');

