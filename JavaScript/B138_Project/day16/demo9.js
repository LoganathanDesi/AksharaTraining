class Account
{
    #balance;

    constructor(amount)
    {
        if(amount>0)
        {
            this.#balance=amount;
        }
        else
        {
            console.log('invalid amount');
            this.#balance=0;

        }
    }


    deposit(amount)
    {
         if(amount>0)
        {
            this.#balance=this.#balance+amount;
        }
        else
        {
            console.log('invalid amount');
        }
    }

    check_balance()
    {
        console.log('Your balance is',this.#balance);
    }
}


let bhanuAccount=new Account(1000);
bhanuAccount.check_balance();//1000
bhanuAccount.deposit(500);
bhanuAccount.check_balance();//1500
bhanuAccount.deposit(0);//invlaid amount
bhanuAccount.check_balance();//1500