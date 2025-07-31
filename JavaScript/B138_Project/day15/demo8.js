class Bank
{
    static name='SBI';

   static print()
    {
        console.log(this.name);
        console.log(Bank.name);
    }
}


Bank.print();