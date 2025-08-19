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

//await can be used only while calling function which returns Promise object
//to use await inside a funciton, the function must be declared using async keyword
//to use await inside arrow function , we must use async keyowrd for the arrow function 

test("Verify Login Page",async()=>{
    console.log("open the browser");
    console.log("enter the url");
    let msg=await deposit(100);
    console.log(msg);
    console.log("verify login page is displayed");
});


test("Verify Home Page",async()=>{
    console.log("go to login page");
    console.log("enter valid un & pw, click login");
    let msg=await deposit(0);
    console.log(msg);
    console.log("verify home page is displayed");
});