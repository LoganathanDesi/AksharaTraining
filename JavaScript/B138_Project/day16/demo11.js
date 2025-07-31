//create ATM class with only withdraw and check balance feature
class ATM
{
    #balance;
    #pin;
    #pinattemptcount=1;

    constructor(amount,pin)
    {
        this.#balance=amount;
        this.#pin=pin;
    }

    check_balance(){
        console.log('Your balance is',this.#balance);
    }

    withdraw(amount,pin){
        
        if(this.#pinattemptcount<=3)
        {
            if (amount>0)
            {
                if(this.#pin==pin)
                {
                    if(amount<=this.#balance)
                    {
                        this.#balance=this.#balance-amount;
                        console.log('trrrrr: please collect',amount);
                    }
                    else
                    {
                        console.log("low balance");
                    }
                }
                else
                {
                    console.log('invalid pin and attempt',this.#pinattemptcount);
                    this.#pinattemptcount++;
                }
            }
            else
            {
                console.log('invalid amount');
            }
        }
        else
        {
            console.log('Account is blocked');
        }
    }
}

let a1=new ATM(10000,123);

console.log('-----------');
a1.check_balance();
a1.withdraw(500,123);

console.log('-----------');
a1.check_balance();
a1.withdraw(500,456); //invalid pin attempt 1

console.log('-----------');
a1.check_balance();
a1.withdraw(50000,123);

console.log('-----------');
a1.withdraw(-500,123);
a1.check_balance();

console.log('-----------');
a1.check_balance();
a1.withdraw(500,456); //invalid pin attempt 2

console.log('-----------');
a1.check_balance();
a1.withdraw(500,456); //invalid pin attempt 3

console.log('-----------');
a1.check_balance();
a1.withdraw(500,456); //invalid pin attempt 4

console.log('-----------');
a1.check_balance();
a1.withdraw(500,456); //invalid pin attempt 5

console.log('-----------');
a1.check_balance();
a1.withdraw(50000,123); //once account is blocked even the valid pin will not work