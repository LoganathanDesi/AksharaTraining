class Bank
{
    deposit(amount)
    {
        console.log("visit the Bank");
        console.log("fill the form");
        console.log("give the form and ",amount," over the counter");
        console.log("verify and ..");
        console.log("collect the receipt");
    }

    withdraw(amount)
    {
         console.log("visit the Bank");
         console.log("fill the form & cheque");
         console.log("give the form and cheque over the counter");
         console.log("verify and ..");
         console.log("collect the amount");
    }
}


class ATM extends Bank{

     withdraw(amount)
    {
         console.log("visit the ATM");
         console.log("insert card and enter pin amt...");
         console.log("verify and ..");
         console.log("collect the amount");
    }

}


let a=new ATM();
a.withdraw(1000);
a.deposit();