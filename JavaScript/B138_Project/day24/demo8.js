
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
//how to wait till the promise is completed
async function myscript1(a){
    console.log('Start');
    let msg= await deposit(a);
    console.log(msg);
    console.log('End');
}

myscript1(100);
