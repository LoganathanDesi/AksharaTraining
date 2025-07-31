class Account
{
    balance;

    constructor(amount)
    {
        if(amount>0)
        {
            this.balance=amount;
        }
        else
        {
            console.log('invalid amount');
            this.balance=0;

        }
    }


    deposit(amount)
    {
         if(amount>0)
        {
            this.balance=this.balance+amount;
        }
        else
        {
            console.log('invalid amount');
        }
    }

    check_balance()
    {
        console.log('Your balance is',this.balance);
    }
}


let bhanuAccount=new Account(1000);
bhanuAccount.balance=50000;
bhanuAccount.check_balance();//50000