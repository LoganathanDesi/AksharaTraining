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
let p=await deposit(100);//wait till the completion and then go to next step
console.log(p);
console.log(typeof p);
console.log('End');

