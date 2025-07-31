class FD
{
    #amount=0;
    constructor(amount)
    {
        this.#amount=amount;
    }

    check_balance()
    {
        console.log('Your FD Balance is',this.#amount);
    }

}
//encapuslation --> hiding data & providing only req access
let bhanuFD=new FD(10000);

bhanuFD.check_balance();