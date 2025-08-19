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

function myscript1(a){
    console.log('Start');
    let p= deposit(a);
    p.then(m=>console.log(m)).catch(m=>console.log(m));
    console.log('End');
}

myscript1(100);
myscript1(0);