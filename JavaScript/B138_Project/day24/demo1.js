//how to create our own exception --UD exception 
//define our own error type 
class DepositError extends Error
{
    constructor()
    {
        super("Err in depoiste");
        this.name="DepositError";
    }
}


function depoist(amount)
{
    if(amount>0)
    {
        console.log("Depositing the amount:",amount);
    }
    else
    {
        throw new DepositError();// generate the error
    }
}
//--------------------using----------------------
console.log("Start");
try
{
    depoist(0);
}
catch(err)
{
    console.log(err.name,err.message);
}
console.log("End");