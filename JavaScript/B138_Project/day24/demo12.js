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

function test(description,script)
{
    console.log("Executing:",description);
    try
    {
        script();
        console.log("PASS");
    }
    catch(err)
    {
         console.log("FAIL");
         console.error(err);
    }
}


async function script1()
{
    console.log("open the browser");
    console.log("enter the url");
    let msg=await deposit(100);
    console.log(msg);
    console.log("verify login page is displayed");
}


test("Verify Login Page",script1);