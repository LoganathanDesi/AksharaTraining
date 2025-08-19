//a function which can run in background is called as asynchronus function
//to create it , the function must return Promise object
//resolve--> succeful execution
//reject--> failed 
function deposit(amount)
{
    let p=new Promise((resolve,reject)=>{

    if(amount>0)
    {
       resolve(`Depositing the amount:${amount}`);
    }
    else
    {
        reject('invalid amount:${amount}');
    }

    });
    

    return p;
}

console.log('Start');
let p=deposit(100);
p.then(m=>console.log(m));
console.log('End');

