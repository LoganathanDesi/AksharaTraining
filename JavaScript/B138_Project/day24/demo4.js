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
let p=deposit(0);
p.then(m=>console.log(m)).catch(m=>console.log(m));
console.log('End');

